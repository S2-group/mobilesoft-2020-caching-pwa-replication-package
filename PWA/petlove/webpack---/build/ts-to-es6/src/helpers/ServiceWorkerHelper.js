import Log from '../libraries/Log';
import { InvalidStateError, InvalidStateReason } from '../errors/InvalidStateError';
import { OneSignalUtils } from '../utils/OneSignalUtils';
export default class ServiceWorkerHelper {
    // Gets details on the service-worker (if any) that controls the current page
    static async getRegistration() {
        try {
            // location.href is used for <base> tag compatibility when it is set to a different origin
            return await navigator.serviceWorker.getRegistration(location.href);
        }
        catch (e) {
            // This could be null in an HTTP context or error if the user doesn't accept cookies
            Log.warn("[Service Worker Status] Error Checking service worker registration", location.href, e);
            return null;
        }
    }
    static getServiceWorkerHref(workerState, config) {
        let workerFullPath = "";
        // Determine which worker to install
        if (workerState === ServiceWorkerActiveState.WorkerA)
            workerFullPath = config.workerBPath.getFullPath();
        else if (workerState === ServiceWorkerActiveState.WorkerB ||
            workerState === ServiceWorkerActiveState.ThirdParty ||
            workerState === ServiceWorkerActiveState.None)
            workerFullPath = config.workerAPath.getFullPath();
        else if (workerState === ServiceWorkerActiveState.Bypassed) {
            /*
              if the page is hard refreshed bypassing the cache, no service worker
              will control the page.
      
              It doesn't matter if we try to reinstall an existing worker; still no
              service worker will control the page after installation.
             */
            throw new InvalidStateError(InvalidStateReason.UnsupportedEnvironment);
        }
        return new URL(workerFullPath, OneSignalUtils.getBaseUrl()).href;
    }
}
export var ServiceWorkerActiveState;
(function (ServiceWorkerActiveState) {
    /**
     * OneSignalSDKWorker.js, or the equivalent custom file name, is active.
     */
    ServiceWorkerActiveState["WorkerA"] = "Worker A (Main)";
    /**
     * OneSignalSDKUpdaterWorker.js, or the equivalent custom file name, is
     * active.
     *
     * We no longer need to use this filename. We can update Worker A by appending
     * a random query parameter to A.
     */
    ServiceWorkerActiveState["WorkerB"] = "Worker B (Updater)";
    /**
     * A service worker is active, but it is neither OneSignalSDKWorker.js nor
     * OneSignalSDKUpdaterWorker.js (or the equivalent custom file names as
     * provided by user config).
     */
    ServiceWorkerActiveState["ThirdParty"] = "3rd Party";
    /**
     * A service worker is currently installing and we can't determine its final state yet. Wait until
     * the service worker is finished installing by checking for a controllerchange property..
     */
    ServiceWorkerActiveState["Installing"] = "Installing";
    /**
     * No service worker is installed.
     */
    ServiceWorkerActiveState["None"] = "None";
    /**
     * A service worker is active but not controlling the page. This can occur if
     * the page is hard-refreshed bypassing the cache, which also bypasses service
     * workers.
     */
    ServiceWorkerActiveState["Bypassed"] = "Bypassed";
    /**
     * Service workers are not supported in this environment. This status is used
     * on HTTP pages where it isn't possible to know whether a service worker is
     * installed or not or in any of the other states.
     */
    ServiceWorkerActiveState["Indeterminate"] = "Indeterminate";
})(ServiceWorkerActiveState || (ServiceWorkerActiveState = {}));
//# sourceMappingURL=ServiceWorkerHelper.js.map