import TimeoutError from '../errors/TimeoutError';
export class Utils {
    /**
     * Returns true if match is in string; otherwise, returns false.
     */
    static contains(indexOfAble, match) {
        if (!indexOfAble)
            return false;
        return indexOfAble.indexOf(match) !== -1;
    }
    static getConsoleStyle(style) {
        if (style == 'code') {
            return `padding: 0 1px 1px 5px;border: 1px solid #ddd;border-radius: 3px;font-family: Monaco,"DejaVu Sans Mono","Courier New",monospace;color: #444;`;
        }
        else if (style == 'bold') {
            return `font-weight: 600;color: rgb(51, 51, 51);`;
        }
        else if (style == 'alert') {
            return `font-weight: 600;color: red;`;
        }
        else if (style == 'event') {
            return `color: green;`;
        }
        else if (style == 'postmessage') {
            return `color: orange;`;
        }
        else if (style == 'serviceworkermessage') {
            return `color: purple;`;
        }
        else {
            return '';
        }
    }
    /**
     * Returns the current object without keys that have undefined values.
     * Regardless of whether the return result is used, the passed-in object is destructively modified.
     * Only affects keys that the object directly contains (i.e. not those inherited via the object's prototype).
     * @param object
     */
    static trimUndefined(object) {
        for (var property in object) {
            if (object.hasOwnProperty(property)) {
                if (object[property] === undefined) {
                    delete object[property];
                }
            }
        }
        return object;
    }
    /**
     * Capitalizes the first letter of the string.
     * @returns {string} The string with the first letter capitalized.
     */
    static capitalize(text) {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }
    /**
     * JSON.stringify() but converts functions to "[Function]" so they aren't lost.
     * Helps when logging method calls.
     */
    static stringify(obj) {
        return JSON.stringify(obj, (_, value) => {
            if (typeof value === 'function') {
                return "[Function]";
            }
            else {
                return value;
            }
        }, 4);
    }
    static encodeHashAsUriComponent(hash) {
        let uriComponent = '';
        const keys = Object.keys(hash);
        for (var key of keys) {
            const value = hash[key];
            uriComponent += `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
        }
        return uriComponent;
    }
    static timeoutPromise(promise, milliseconds) {
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => {
                reject(new TimeoutError());
            }, milliseconds);
        });
        return Promise.race([promise, timeoutPromise]);
    }
    static getValueOrDefault(value, defaultValue) {
        if (value !== undefined && value !== null) {
            return value;
        }
        return defaultValue;
    }
    static enforceAppId(appId) {
        if (!appId) {
            throw new Error("App id cannot be empty");
        }
    }
    static enforcePlayerId(playerId) {
        if (!playerId) {
            throw new Error("Player id cannot be empty");
        }
    }
}
export default Utils;
//# sourceMappingURL=Utils.js.map