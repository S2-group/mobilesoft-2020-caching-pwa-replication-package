import { isPushNotificationsSupported } from "./BrowserSupportsPush";
import { OneSignalStubES6 } from "./OneSignalStubES6";
import { OneSignalStubES5 } from "./OneSignalStubES5";
// NOTE: Careful if adding imports, ES5 targets can't clean up functions never called.
// See sdk.ts for what entry points this handles
export class OneSignalShimLoader {
    // NOTE: scripts added won't start executing until
    static addScriptToPage(url) {
        const scriptElement = document.createElement('script');
        scriptElement.src = url;
        scriptElement.async = true;
        document.head.appendChild(scriptElement);
    }
    // Some logic from SdkEnvironment
    static getPathAndPrefix() {
        if (typeof __DEV__ !== "undefined" && __DEV__) {
            return "https://localhost:3001/sdks/Dev-";
        }
        else if (typeof __STAGING__ !== "undefined" && __STAGING__) {
            return `https://${window.location.host}/sdks/Staging-`;
        }
        return "https://cdn.onesignal.com/sdks/";
    }
    // Will only be true for browsers that accepted OneSignal permissions before we moved to importing
    //   the new OneSignalSDKWorker.js file.
    static isServiceWorkerRuntime() {
        return (typeof window === "undefined");
    }
    static serviceWorkerSupportsPush() {
        return (typeof self.registration !== "undefined");
    }
    static addOneSignalPageES6SDKStub() {
        const predefinedOneSignal = window.OneSignal;
        const oneSignalIsArray = Array.isArray(predefinedOneSignal);
        // Do NOT replace window.OneSignal if it's something else other than an Array.
        if (!!predefinedOneSignal && !oneSignalIsArray) {
            console.error(`window.OneSignal already defined as '${typeof OneSignal}'!
         Please make sure to define as 'window.OneSignal = window.OneSignal || [];'`, OneSignal);
            return;
        }
        // Stub out all OneSignal functions with an implementation that save all params.
        // OneSignalPageSDKES6.js will load soon and the function calls will be replayed from pageSdkInit.ts
        // This is done regardless if document.currentScript.async is true as window.OneSignal needs to be available
        //   for those who use script.onload = function() { } to add OneSignalSDK.js
        window.OneSignal = new OneSignalStubES6(predefinedOneSignal);
    }
    // Stub out all functions with default values.
    // OneSignalStubES5 class is bundled into the production OneSignalSDK.js so other .js files are loaded.
    static addOneSignalPageES5SDKStub() {
        console.log("OneSignal: Using fallback ES5 Stub for backwards compatibility.");
        const predefinedOneSignal = window.OneSignal;
        window.OneSignal = new OneSignalStubES5(predefinedOneSignal);
    }
    static start() {
        if (OneSignalShimLoader.isServiceWorkerRuntime()) {
            if (OneSignalShimLoader.serviceWorkerSupportsPush()) {
                self.importScripts(`${OneSignalShimLoader.getPathAndPrefix()}OneSignalSDKWorker.js?v=${OneSignalShimLoader.VERSION}`);
            }
        }
        else if (isPushNotificationsSupported()) {
            OneSignalShimLoader.addScriptToPage(`${OneSignalShimLoader.getPathAndPrefix()}OneSignalPageSDKES6.js?v=${OneSignalShimLoader.VERSION}`);
            OneSignalShimLoader.addOneSignalPageES6SDKStub();
        }
        else {
            OneSignalShimLoader.addOneSignalPageES5SDKStub();
        }
    }
}
OneSignalShimLoader.VERSION = (typeof __VERSION__) === "undefined" ? 1 : Number(__VERSION__);
//# sourceMappingURL=OneSignalShimLoader.js.map