import Emitter from "../libraries/Emitter";
import IndexedDb from "./IndexedDb";
import { AppState } from "../models/AppState";
import { ServiceWorkerState } from "../models/ServiceWorkerState";
import { Subscription } from "../models/Subscription";
import { TestEnvironmentKind } from "../models/TestEnvironmentKind";
import { WindowEnvironmentKind } from "../models/WindowEnvironmentKind";
import { EmailProfile } from "../models/EmailProfile";
import SdkEnvironment from "../managers/SdkEnvironment";
import OneSignalUtils from "../utils/OneSignalUtils";
import Utils from "../utils/Utils";
var DatabaseEventName;
(function (DatabaseEventName) {
    DatabaseEventName[DatabaseEventName["SET"] = 0] = "SET";
})(DatabaseEventName || (DatabaseEventName = {}));
export default class Database {
    constructor(databaseName) {
        this.databaseName = databaseName;
        this.emitter = new Emitter();
        this.database = new IndexedDb(this.databaseName);
    }
    static resetInstance() {
        Database.databaseInstance = null;
    }
    static get singletonInstance() {
        if (!Database.databaseInstanceName) {
            Database.databaseInstanceName = "ONE_SIGNAL_SDK_DB";
        }
        if (!Database.databaseInstance) {
            Database.databaseInstance = new Database(Database.databaseInstanceName);
        }
        return Database.databaseInstance;
    }
    static applyDbResultFilter(table, key, result) {
        switch (table) {
            case "Options":
                if (result && key)
                    return result.value;
                else if (result && !key)
                    return result;
                else
                    return null;
            case "Ids":
                if (result && key)
                    return result.id;
                else if (result && !key)
                    return result;
                else
                    return null;
            case "NotificationOpened":
                if (result && key)
                    return { data: result.data, timestamp: result.timestamp };
                else if (result && !key)
                    return result;
                else
                    return null;
            default:
                if (result)
                    return result;
                else
                    return null;
        }
    }
    /**
     * Asynchronously retrieves the value of the key at the table (if key is specified), or the entire table (if key is not specified).
     * If on an iFrame or popup environment, retrieves from the correct IndexedDB database using cross-domain messaging.
     * @param table The table to retrieve the value from.
     * @param key The key in the table to retrieve the value of. Leave blank to get the entire table.
     * @returns {Promise} Returns a promise that fulfills when the value(s) are available.
     */
    async get(table, key) {
        if (SdkEnvironment.getWindowEnv() !== WindowEnvironmentKind.ServiceWorker &&
            OneSignalUtils.isUsingSubscriptionWorkaround() &&
            SdkEnvironment.getTestEnv() === TestEnvironmentKind.None) {
            return await new Promise(async (resolve) => {
                OneSignal.proxyFrameHost.message(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_GET, [{
                        table: table,
                        key: key
                    }], (reply) => {
                    let result = reply.data[0];
                    resolve(result);
                });
            });
        }
        else {
            const result = await this.database.get(table, key);
            let cleanResult = Database.applyDbResultFilter(table, key, result);
            return cleanResult;
        }
    }
    /**
     * Asynchronously puts the specified value in the specified table.
     * @param table
     * @param keypath
     */
    async put(table, keypath) {
        await new Promise(async (resolve, reject) => {
            if (SdkEnvironment.getWindowEnv() !== WindowEnvironmentKind.ServiceWorker &&
                OneSignalUtils.isUsingSubscriptionWorkaround() &&
                SdkEnvironment.getTestEnv() === TestEnvironmentKind.None) {
                OneSignal.proxyFrameHost.message(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_PUT, [{ table: table, keypath: keypath }], (reply) => {
                    if (reply.data === OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE) {
                        resolve();
                    }
                    else {
                        reject(`(Database) Attempted remote IndexedDB put(${table}, ${keypath}), but did not get success response.`);
                    }
                });
            }
            else {
                await this.database.put(table, keypath);
                resolve();
            }
        });
        this.emitter.emit(Database.EVENTS.SET, keypath);
    }
    /**
     * Asynchronously removes the specified key from the table, or if the key is not specified, removes all keys in the table.
     * @returns {Promise} Returns a promise containing a key that is fulfilled when deletion is completed.
     */
    remove(table, keypath) {
        if (SdkEnvironment.getWindowEnv() !== WindowEnvironmentKind.ServiceWorker &&
            OneSignalUtils.isUsingSubscriptionWorkaround() &&
            SdkEnvironment.getTestEnv() === TestEnvironmentKind.None) {
            return new Promise((resolve, reject) => {
                OneSignal.proxyFrameHost.message(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_REMOVE, [{ table: table, keypath: keypath }], (reply) => {
                    if (reply.data === OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE) {
                        resolve();
                    }
                    else {
                        reject(`(Database) Attempted remote IndexedDB remove(${table}, ${keypath}), but did not get success response.`);
                    }
                });
            });
        }
        else {
            return this.database.remove(table, keypath);
        }
    }
    async getAppConfig() {
        const config = {};
        const appIdStr = await this.get("Ids", "appId");
        config.appId = appIdStr;
        config.subdomain = await this.get("Options", "subdomain");
        config.vapidPublicKey = await this.get("Options", "vapidPublicKey");
        config.emailAuthRequired = await this.get("Options", "emailAuthRequired");
        return config;
    }
    async getExternalUserId() {
        return await this.get("Ids", "externalUserId");
    }
    async setExternalUserId(externalUserId) {
        const emptyString = "";
        const externalIdToSave = Utils.getValueOrDefault(externalUserId, emptyString);
        if (externalIdToSave === emptyString) {
            await this.remove("Ids", "externalUserId");
        }
        else {
            await this.put("Ids", { type: "externalUserId", id: externalIdToSave });
        }
    }
    async setAppConfig(appConfig) {
        if (appConfig.appId)
            await this.put("Ids", { type: "appId", id: appConfig.appId });
        if (appConfig.subdomain)
            await this.put("Options", { key: "subdomain", value: appConfig.subdomain });
        if (appConfig.httpUseOneSignalCom === true)
            await this.put("Options", { key: "httpUseOneSignalCom", value: true });
        else if (appConfig.httpUseOneSignalCom === false)
            await this.put("Options", { key: "httpUseOneSignalCom", value: false });
        if (appConfig.emailAuthRequired === true)
            await this.put("Options", { key: "emailAuthRequired", value: true });
        else if (appConfig.emailAuthRequired === false)
            await this.put("Options", { key: "emailAuthRequired", value: false });
        if (appConfig.vapidPublicKey)
            await this.put("Options", { key: "vapidPublicKey", value: appConfig.vapidPublicKey });
    }
    async getAppState() {
        const state = new AppState();
        state.defaultNotificationUrl = await this.get("Options", "defaultUrl");
        state.defaultNotificationTitle = await this.get("Options", "defaultTitle");
        state.lastKnownPushEnabled = await this.get("Options", "isPushEnabled");
        state.clickedNotifications = await this.get("NotificationOpened");
        return state;
    }
    async setAppState(appState) {
        if (appState.defaultNotificationUrl)
            await this.put("Options", { key: "defaultUrl", value: appState.defaultNotificationUrl });
        if (appState.defaultNotificationTitle || appState.defaultNotificationTitle === "")
            await this.put("Options", { key: "defaultTitle", value: appState.defaultNotificationTitle });
        if (appState.lastKnownPushEnabled != null)
            await this.put("Options", { key: "isPushEnabled", value: appState.lastKnownPushEnabled });
        if (appState.clickedNotifications) {
            const clickedNotificationUrls = Object.keys(appState.clickedNotifications);
            for (let url of clickedNotificationUrls) {
                const notificationDetails = appState.clickedNotifications[url];
                if (notificationDetails) {
                    await this.put("NotificationOpened", {
                        url: url,
                        data: notificationDetails.data,
                        timestamp: notificationDetails.timestamp
                    });
                }
                else if (notificationDetails === null) {
                    // If we get an object like:
                    // { "http://site.com/page": null}
                    // It means we need to remove that entry
                    await this.remove("NotificationOpened", url);
                }
            }
        }
    }
    async getServiceWorkerState() {
        const state = new ServiceWorkerState();
        state.workerVersion = await this.get("Ids", "WORKER1_ONE_SIGNAL_SW_VERSION");
        state.updaterWorkerVersion = await this.get("Ids", "WORKER2_ONE_SIGNAL_SW_VERSION");
        state.backupNotification = await this.get("Ids", "backupNotification");
        return state;
    }
    async setServiceWorkerState(state) {
        if (state.workerVersion)
            await this.put("Ids", { type: "WORKER1_ONE_SIGNAL_SW_VERSION", id: state.workerVersion });
        if (state.updaterWorkerVersion)
            await this.put("Ids", { type: "WORKER2_ONE_SIGNAL_SW_VERSION", id: state.updaterWorkerVersion });
        if (state.backupNotification)
            await this.put("Ids", { type: "backupNotification", id: state.backupNotification });
    }
    async getSubscription() {
        const subscription = new Subscription();
        subscription.deviceId = await this.get("Ids", "userId");
        subscription.subscriptionToken = await this.get("Ids", "registrationId");
        // The preferred database key to store our subscription
        const dbOptedOut = await this.get("Options", "optedOut");
        // For backwards compatibility, we need to read from this if the above is not found
        const dbNotOptedOut = await this.get("Options", "subscription");
        const createdAt = await this.get("Options", "subscriptionCreatedAt");
        const expirationTime = await this.get("Options", "subscriptionExpirationTime");
        if (dbOptedOut != null) {
            subscription.optedOut = dbOptedOut;
        }
        else {
            if (dbNotOptedOut == null) {
                subscription.optedOut = false;
            }
            else {
                subscription.optedOut = !dbNotOptedOut;
            }
        }
        subscription.createdAt = createdAt;
        subscription.expirationTime = expirationTime;
        return subscription;
    }
    async setSubscription(subscription) {
        if (subscription.deviceId) {
            await this.put("Ids", { type: "userId", id: subscription.deviceId });
        }
        if (typeof subscription.subscriptionToken !== "undefined") {
            // Allow null subscriptions to be set
            await this.put("Ids", { type: "registrationId", id: subscription.subscriptionToken });
        }
        if (subscription.optedOut != null) { // Checks if null or undefined, allows false
            await this.put("Options", { key: "optedOut", value: subscription.optedOut });
        }
        if (subscription.createdAt != null) {
            await this.put("Options", { key: "subscriptionCreatedAt", value: subscription.createdAt });
        }
        if (subscription.expirationTime != null) {
            await this.put("Options", { key: "subscriptionExpirationTime", value: subscription.expirationTime });
        }
        else {
            await this.remove("Options", "subscriptionExpirationTime");
        }
    }
    async getEmailProfile() {
        const profileJson = await this.get("Ids", "emailProfile");
        if (profileJson) {
            return EmailProfile.deserialize(profileJson);
        }
        else {
            return new EmailProfile();
        }
    }
    async setEmailProfile(emailProfile) {
        if (emailProfile) {
            await this.put("Ids", { type: "emailProfile", id: emailProfile.serialize() });
        }
    }
    async setProvideUserConsent(consent) {
        await this.put("Options", { key: "userConsent", value: consent });
    }
    async getProvideUserConsent() {
        return await this.get("Options", "userConsent");
    }
    /**
     * Asynchronously removes the Ids, NotificationOpened, and Options tables from the database and recreates them with blank values.
     * @returns {Promise} Returns a promise that is fulfilled when rebuilding is completed, or rejects with an error.
     */
    static async rebuild() {
        return Promise.all([
            Database.singletonInstance.remove("Ids"),
            Database.singletonInstance.remove("NotificationOpened"),
            Database.singletonInstance.remove("Options"),
        ]);
    }
    // START: Static mappings to instance methods
    static async on(...args) {
        return Database.singletonInstance.emitter.on.apply(Database.singletonInstance.emitter, args);
    }
    static async setEmailProfile(emailProfile) {
        return await Database.singletonInstance.setEmailProfile(emailProfile);
    }
    static async getEmailProfile() {
        return await Database.singletonInstance.getEmailProfile();
    }
    static async setSubscription(subscription) {
        return await Database.singletonInstance.setSubscription(subscription);
    }
    static async getSubscription() {
        return await Database.singletonInstance.getSubscription();
    }
    static async setProvideUserConsent(consent) {
        return await Database.singletonInstance.setProvideUserConsent(consent);
    }
    static async getProvideUserConsent() {
        return await Database.singletonInstance.getProvideUserConsent();
    }
    static async setServiceWorkerState(workerState) {
        return await Database.singletonInstance.setServiceWorkerState(workerState);
    }
    static async getServiceWorkerState() {
        return await Database.singletonInstance.getServiceWorkerState();
    }
    static async setAppState(appState) {
        return await Database.singletonInstance.setAppState(appState);
    }
    static async getAppState() {
        return await Database.singletonInstance.getAppState();
    }
    static async setAppConfig(appConfig) {
        return await Database.singletonInstance.setAppConfig(appConfig);
    }
    static async getAppConfig() {
        return await Database.singletonInstance.getAppConfig();
    }
    static async getExternalUserId() {
        return await Database.singletonInstance.getExternalUserId();
    }
    static async setExternalUserId(externalUserId) {
        await Database.singletonInstance.setExternalUserId(externalUserId);
    }
    static async remove(table, keypath) {
        return await Database.singletonInstance.remove(table, keypath);
    }
    static async put(table, keypath) {
        return await Database.singletonInstance.put(table, keypath);
    }
    static async get(table, key) {
        return await Database.singletonInstance.get(table, key);
    }
}
/* End Temp Database Proxy */
Database.EVENTS = DatabaseEventName;
//# sourceMappingURL=Database.js.map