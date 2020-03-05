import { WorkerMessenger } from '../libraries/WorkerMessenger';
import { SessionManager } from '../managers/SessionManager';
import PermissionManager from '../managers/PermissionManager';
import ContextHelper from "../helpers/ContextHelper";
import { UpdateManager } from "../managers/UpdateManager";
export default class ContextSW {
    constructor(appConfig) {
        this.appConfig = appConfig;
        this.subscriptionManager = ContextHelper.getSubscriptionManager(this);
        this.serviceWorkerManager = ContextHelper.getServiceWorkerManager(this);
        this.sessionManager = new SessionManager();
        this.permissionManager = new PermissionManager();
        this.workerMessenger = new WorkerMessenger(this);
        this.updateManager = new UpdateManager(this);
    }
}
//# sourceMappingURL=ContextSW.js.map