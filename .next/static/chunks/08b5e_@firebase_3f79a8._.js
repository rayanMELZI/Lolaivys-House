(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/08b5e_@firebase_3f79a8._.js", {

"[project]/node_modules/@firebase/util/dist/index.esm2017.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */ __turbopack_esm__({
    "CONSTANTS": ()=>CONSTANTS,
    "DecodeBase64StringError": ()=>DecodeBase64StringError,
    "Deferred": ()=>Deferred,
    "ErrorFactory": ()=>ErrorFactory,
    "FirebaseError": ()=>FirebaseError,
    "MAX_VALUE_MILLIS": ()=>MAX_VALUE_MILLIS,
    "RANDOM_FACTOR": ()=>RANDOM_FACTOR,
    "Sha1": ()=>Sha1,
    "areCookiesEnabled": ()=>areCookiesEnabled,
    "assert": ()=>assert,
    "assertionError": ()=>assertionError,
    "async": ()=>async,
    "base64": ()=>base64,
    "base64Decode": ()=>base64Decode,
    "base64Encode": ()=>base64Encode,
    "base64urlEncodeWithoutPadding": ()=>base64urlEncodeWithoutPadding,
    "calculateBackoffMillis": ()=>calculateBackoffMillis,
    "contains": ()=>contains,
    "createMockUserToken": ()=>createMockUserToken,
    "createSubscribe": ()=>createSubscribe,
    "decode": ()=>decode,
    "deepCopy": ()=>deepCopy,
    "deepEqual": ()=>deepEqual,
    "deepExtend": ()=>deepExtend,
    "errorPrefix": ()=>errorPrefix,
    "extractQuerystring": ()=>extractQuerystring,
    "getDefaultAppConfig": ()=>getDefaultAppConfig,
    "getDefaultEmulatorHost": ()=>getDefaultEmulatorHost,
    "getDefaultEmulatorHostnameAndPort": ()=>getDefaultEmulatorHostnameAndPort,
    "getDefaults": ()=>getDefaults,
    "getExperimentalSetting": ()=>getExperimentalSetting,
    "getGlobal": ()=>getGlobal,
    "getModularInstance": ()=>getModularInstance,
    "getUA": ()=>getUA,
    "isAdmin": ()=>isAdmin,
    "isBrowser": ()=>isBrowser,
    "isBrowserExtension": ()=>isBrowserExtension,
    "isElectron": ()=>isElectron,
    "isEmpty": ()=>isEmpty,
    "isIE": ()=>isIE,
    "isIndexedDBAvailable": ()=>isIndexedDBAvailable,
    "isMobileCordova": ()=>isMobileCordova,
    "isNode": ()=>isNode,
    "isNodeSdk": ()=>isNodeSdk,
    "isReactNative": ()=>isReactNative,
    "isSafari": ()=>isSafari,
    "isUWP": ()=>isUWP,
    "isValidFormat": ()=>isValidFormat,
    "isValidTimestamp": ()=>isValidTimestamp,
    "isWebWorker": ()=>isWebWorker,
    "issuedAtTime": ()=>issuedAtTime,
    "jsonEval": ()=>jsonEval,
    "map": ()=>map,
    "ordinal": ()=>ordinal,
    "promiseWithTimeout": ()=>promiseWithTimeout,
    "querystring": ()=>querystring,
    "querystringDecode": ()=>querystringDecode,
    "safeGet": ()=>safeGet,
    "stringLength": ()=>stringLength,
    "stringToByteArray": ()=>stringToByteArray,
    "stringify": ()=>stringify,
    "uuidv4": ()=>uuidv4,
    "validateArgCount": ()=>validateArgCount,
    "validateCallback": ()=>validateCallback,
    "validateContextObject": ()=>validateContextObject,
    "validateIndexedDBOpenable": ()=>validateIndexedDBOpenable,
    "validateNamespace": ()=>validateNamespace
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
const CONSTANTS = {
    /**
     * @define {boolean} Whether this is the client Node.js SDK.
     */ NODE_CLIENT: false,
    /**
     * @define {boolean} Whether this is the Admin Node.js SDK.
     */ NODE_ADMIN: false,
    /**
     * Firebase SDK Version
     */ SDK_VERSION: '${JSCORE_VERSION}'
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Throws an error if the provided assertion is falsy
 */ const assert = function(assertion, message) {
    if (!assertion) {
        throw assertionError(message);
    }
};
/**
 * Returns an Error object suitable for throwing.
 */ const assertionError = function(message) {
    return new Error('Firebase Database (' + CONSTANTS.SDK_VERSION + ') INTERNAL ASSERT FAILED: ' + message);
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const stringToByteArray$1 = function(str) {
    // TODO(user): Use native implementations if/when available
    const out = [];
    let p = 0;
    for(let i = 0; i < str.length; i++){
        let c = str.charCodeAt(i);
        if (c < 128) {
            out[p++] = c;
        } else if (c < 2048) {
            out[p++] = c >> 6 | 192;
            out[p++] = c & 63 | 128;
        } else if ((c & 0xfc00) === 0xd800 && i + 1 < str.length && (str.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
            // Surrogate Pair
            c = 0x10000 + ((c & 0x03ff) << 10) + (str.charCodeAt(++i) & 0x03ff);
            out[p++] = c >> 18 | 240;
            out[p++] = c >> 12 & 63 | 128;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
        } else {
            out[p++] = c >> 12 | 224;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
        }
    }
    return out;
};
/**
 * Turns an array of numbers into the string given by the concatenation of the
 * characters to which the numbers correspond.
 * @param bytes Array of numbers representing characters.
 * @return Stringification of the array.
 */ const byteArrayToString = function(bytes) {
    // TODO(user): Use native implementations if/when available
    const out = [];
    let pos = 0, c = 0;
    while(pos < bytes.length){
        const c1 = bytes[pos++];
        if (c1 < 128) {
            out[c++] = String.fromCharCode(c1);
        } else if (c1 > 191 && c1 < 224) {
            const c2 = bytes[pos++];
            out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
        } else if (c1 > 239 && c1 < 365) {
            // Surrogate Pair
            const c2 = bytes[pos++];
            const c3 = bytes[pos++];
            const c4 = bytes[pos++];
            const u = ((c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 0x10000;
            out[c++] = String.fromCharCode(0xd800 + (u >> 10));
            out[c++] = String.fromCharCode(0xdc00 + (u & 1023));
        } else {
            const c2 = bytes[pos++];
            const c3 = bytes[pos++];
            out[c++] = String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
        }
    }
    return out.join('');
};
// We define it as an object literal instead of a class because a class compiled down to es5 can't
// be treeshaked. https://github.com/rollup/rollup/issues/1691
// Static lookup maps, lazily populated by init_()
const base64 = {
    /**
     * Maps bytes to characters.
     */ byteToCharMap_: null,
    /**
     * Maps characters to bytes.
     */ charToByteMap_: null,
    /**
     * Maps bytes to websafe characters.
     * @private
     */ byteToCharMapWebSafe_: null,
    /**
     * Maps websafe characters to bytes.
     * @private
     */ charToByteMapWebSafe_: null,
    /**
     * Our default alphabet, shared between
     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
     */ ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789',
    /**
     * Our default alphabet. Value 64 (=) is special; it means "nothing."
     */ get ENCODED_VALS () {
        return this.ENCODED_VALS_BASE + '+/=';
    },
    /**
     * Our websafe alphabet.
     */ get ENCODED_VALS_WEBSAFE () {
        return this.ENCODED_VALS_BASE + '-_.';
    },
    /**
     * Whether this browser supports the atob and btoa functions. This extension
     * started at Mozilla but is now implemented by many browsers. We use the
     * ASSUME_* variables to avoid pulling in the full useragent detection library
     * but still allowing the standard per-browser compilations.
     *
     */ HAS_NATIVE_SUPPORT: typeof atob === 'function',
    /**
     * Base64-encode an array of bytes.
     *
     * @param input An array of bytes (numbers with
     *     value in [0, 255]) to encode.
     * @param webSafe Boolean indicating we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */ encodeByteArray (input, webSafe) {
        if (!Array.isArray(input)) {
            throw Error('encodeByteArray takes an array as a parameter');
        }
        this.init_();
        const byteToCharMap = webSafe ? this.byteToCharMapWebSafe_ : this.byteToCharMap_;
        const output = [];
        for(let i = 0; i < input.length; i += 3){
            const byte1 = input[i];
            const haveByte2 = i + 1 < input.length;
            const byte2 = haveByte2 ? input[i + 1] : 0;
            const haveByte3 = i + 2 < input.length;
            const byte3 = haveByte3 ? input[i + 2] : 0;
            const outByte1 = byte1 >> 2;
            const outByte2 = (byte1 & 0x03) << 4 | byte2 >> 4;
            let outByte3 = (byte2 & 0x0f) << 2 | byte3 >> 6;
            let outByte4 = byte3 & 0x3f;
            if (!haveByte3) {
                outByte4 = 64;
                if (!haveByte2) {
                    outByte3 = 64;
                }
            }
            output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
        }
        return output.join('');
    },
    /**
     * Base64-encode a string.
     *
     * @param input A string to encode.
     * @param webSafe If true, we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */ encodeString (input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return btoa(input);
        }
        return this.encodeByteArray(stringToByteArray$1(input), webSafe);
    },
    /**
     * Base64-decode a string.
     *
     * @param input to decode.
     * @param webSafe True if we should use the
     *     alternative alphabet.
     * @return string representing the decoded value.
     */ decodeString (input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return atob(input);
        }
        return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
    },
    /**
     * Base64-decode a string.
     *
     * In base-64 decoding, groups of four characters are converted into three
     * bytes.  If the encoder did not apply padding, the input length may not
     * be a multiple of 4.
     *
     * In this case, the last group will have fewer than 4 characters, and
     * padding will be inferred.  If the group has one or two characters, it decodes
     * to one byte.  If the group has three characters, it decodes to two bytes.
     *
     * @param input Input to decode.
     * @param webSafe True if we should use the web-safe alphabet.
     * @return bytes representing the decoded value.
     */ decodeStringToByteArray (input, webSafe) {
        this.init_();
        const charToByteMap = webSafe ? this.charToByteMapWebSafe_ : this.charToByteMap_;
        const output = [];
        for(let i = 0; i < input.length;){
            const byte1 = charToByteMap[input.charAt(i++)];
            const haveByte2 = i < input.length;
            const byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
            ++i;
            const haveByte3 = i < input.length;
            const byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            const haveByte4 = i < input.length;
            const byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
                throw new DecodeBase64StringError();
            }
            const outByte1 = byte1 << 2 | byte2 >> 4;
            output.push(outByte1);
            if (byte3 !== 64) {
                const outByte2 = byte2 << 4 & 0xf0 | byte3 >> 2;
                output.push(outByte2);
                if (byte4 !== 64) {
                    const outByte3 = byte3 << 6 & 0xc0 | byte4;
                    output.push(outByte3);
                }
            }
        }
        return output;
    },
    /**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */ init_ () {
        if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {};
            this.charToByteMap_ = {};
            this.byteToCharMapWebSafe_ = {};
            this.charToByteMapWebSafe_ = {};
            // We want quick mappings back and forth, so we precompute two maps.
            for(let i = 0; i < this.ENCODED_VALS.length; i++){
                this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
                this.charToByteMap_[this.byteToCharMap_[i]] = i;
                this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
                this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
                // Be forgiving when decoding and correctly decode both encodings.
                if (i >= this.ENCODED_VALS_BASE.length) {
                    this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
                    this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
                }
            }
        }
    }
};
/**
 * An error encountered while decoding base64 string.
 */ class DecodeBase64StringError extends Error {
    constructor(){
        super(...arguments);
        this.name = 'DecodeBase64StringError';
    }
}
/**
 * URL-safe base64 encoding
 */ const base64Encode = function(str) {
    const utf8Bytes = stringToByteArray$1(str);
    return base64.encodeByteArray(utf8Bytes, true);
};
/**
 * URL-safe base64 encoding (without "." padding in the end).
 * e.g. Used in JSON Web Token (JWT) parts.
 */ const base64urlEncodeWithoutPadding = function(str) {
    // Use base64url encoding and remove padding in the end (dot characters).
    return base64Encode(str).replace(/\./g, '');
};
/**
 * URL-safe base64 decoding
 *
 * NOTE: DO NOT use the global atob() function - it does NOT support the
 * base64Url variant encoding.
 *
 * @param str To be decoded
 * @return Decoded result, if possible
 */ const base64Decode = function(str) {
    try {
        return base64.decodeString(str, true);
    } catch (e) {
        console.error('base64Decode failed: ', e);
    }
    return null;
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Do a deep-copy of basic JavaScript Objects or Arrays.
 */ function deepCopy(value) {
    return deepExtend(undefined, value);
}
/**
 * Copy properties from source to target (recursively allows extension
 * of Objects and Arrays).  Scalar values in the target are over-written.
 * If target is undefined, an object of the appropriate type will be created
 * (and returned).
 *
 * We recursively copy all child properties of plain Objects in the source- so
 * that namespace- like dictionaries are merged.
 *
 * Note that the target can be a function, in which case the properties in
 * the source Object are copied onto it as static properties of the Function.
 *
 * Note: we don't merge __proto__ to prevent prototype pollution
 */ function deepExtend(target, source) {
    if (!(source instanceof Object)) {
        return source;
    }
    switch(source.constructor){
        case Date:
            // Treat Dates like scalars; if the target date object had any child
            // properties - they will be lost!
            const dateValue = source;
            return new Date(dateValue.getTime());
        case Object:
            if (target === undefined) {
                target = {};
            }
            break;
        case Array:
            // Always copy the array source and overwrite the target.
            target = [];
            break;
        default:
            // Not a plain Object - treat it as a scalar.
            return source;
    }
    for(const prop in source){
        // use isValidKey to guard against prototype pollution. See https://snyk.io/vuln/SNYK-JS-LODASH-450202
        if (!source.hasOwnProperty(prop) || !isValidKey(prop)) {
            continue;
        }
        target[prop] = deepExtend(target[prop], source[prop]);
    }
    return target;
}
function isValidKey(key) {
    return key !== '__proto__';
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Polyfill for `globalThis` object.
 * @returns the `globalThis` object for the given environment.
 * @public
 */ function getGlobal() {
    if (typeof self !== 'undefined') {
        return self;
    }
    if (typeof window !== 'undefined') {
        return window;
    }
    if (typeof global !== 'undefined') {
        return global;
    }
    throw new Error('Unable to locate global object.');
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const getDefaultsFromGlobal = ()=>getGlobal().__FIREBASE_DEFAULTS__;
/**
 * Attempt to read defaults from a JSON string provided to
 * process(.)env(.)__FIREBASE_DEFAULTS__ or a JSON file whose path is in
 * process(.)env(.)__FIREBASE_DEFAULTS_PATH__
 * The dots are in parens because certain compilers (Vite?) cannot
 * handle seeing that variable in comments.
 * See https://github.com/firebase/firebase-js-sdk/issues/6838
 */ const getDefaultsFromEnvVariable = ()=>{
    if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] === 'undefined' || typeof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env === 'undefined') {
        return;
    }
    const defaultsJsonString = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.__FIREBASE_DEFAULTS__;
    if (defaultsJsonString) {
        return JSON.parse(defaultsJsonString);
    }
};
const getDefaultsFromCookie = ()=>{
    if (typeof document === 'undefined') {
        return;
    }
    let match;
    try {
        match = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch (e) {
        // Some environments such as Angular Universal SSR have a
        // `document` object but error on accessing `document.cookie`.
        return;
    }
    const decoded = match && base64Decode(match[1]);
    return decoded && JSON.parse(decoded);
};
/**
 * Get the __FIREBASE_DEFAULTS__ object. It checks in order:
 * (1) if such an object exists as a property of `globalThis`
 * (2) if such an object was provided on a shell environment variable
 * (3) if such an object exists in a cookie
 * @public
 */ const getDefaults = ()=>{
    try {
        return getDefaultsFromGlobal() || getDefaultsFromEnvVariable() || getDefaultsFromCookie();
    } catch (e) {
        /**
         * Catch-all for being unable to get __FIREBASE_DEFAULTS__ due
         * to any environment case we have not accounted for. Log to
         * info instead of swallowing so we can find these unknown cases
         * and add paths for them if needed.
         */ console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
        return;
    }
};
/**
 * Returns emulator host stored in the __FIREBASE_DEFAULTS__ object
 * for the given product.
 * @returns a URL host formatted like `127.0.0.1:9999` or `[::1]:4000` if available
 * @public
 */ const getDefaultEmulatorHost = (productName)=>{
    var _a, _b;
    return (_b = (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.emulatorHosts) === null || _b === void 0 ? void 0 : _b[productName];
};
/**
 * Returns emulator hostname and port stored in the __FIREBASE_DEFAULTS__ object
 * for the given product.
 * @returns a pair of hostname and port like `["::1", 4000]` if available
 * @public
 */ const getDefaultEmulatorHostnameAndPort = (productName)=>{
    const host = getDefaultEmulatorHost(productName);
    if (!host) {
        return undefined;
    }
    const separatorIndex = host.lastIndexOf(':'); // Finding the last since IPv6 addr also has colons.
    if (separatorIndex <= 0 || separatorIndex + 1 === host.length) {
        throw new Error(`Invalid host ${host} with no separate hostname and port!`);
    }
    // eslint-disable-next-line no-restricted-globals
    const port = parseInt(host.substring(separatorIndex + 1), 10);
    if (host[0] === '[') {
        // Bracket-quoted `[ipv6addr]:port` => return "ipv6addr" (without brackets).
        return [
            host.substring(1, separatorIndex - 1),
            port
        ];
    } else {
        return [
            host.substring(0, separatorIndex),
            port
        ];
    }
};
/**
 * Returns Firebase app config stored in the __FIREBASE_DEFAULTS__ object.
 * @public
 */ const getDefaultAppConfig = ()=>{
    var _a;
    return (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.config;
};
/**
 * Returns an experimental setting on the __FIREBASE_DEFAULTS__ object (properties
 * prefixed by "_")
 * @public
 */ const getExperimentalSetting = (name)=>{
    var _a;
    return (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a[`_${name}`];
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Deferred {
    constructor(){
        this.reject = ()=>{};
        this.resolve = ()=>{};
        this.promise = new Promise((resolve, reject)=>{
            this.resolve = resolve;
            this.reject = reject;
        });
    }
    /**
     * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     */ wrapCallback(callback) {
        return (error, value)=>{
            if (error) {
                this.reject(error);
            } else {
                this.resolve(value);
            }
            if (typeof callback === 'function') {
                // Attaching noop handler just in case developer wasn't expecting
                // promises
                this.promise.catch(()=>{});
                // Some of our callbacks don't expect a value and our own tests
                // assert that the parameter length is 1
                if (callback.length === 1) {
                    callback(error);
                } else {
                    callback(error, value);
                }
            }
        };
    }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function createMockUserToken(token, projectId) {
    if (token.uid) {
        throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
    }
    // Unsecured JWTs use "none" as the algorithm.
    const header = {
        alg: 'none',
        type: 'JWT'
    };
    const project = projectId || 'demo-project';
    const iat = token.iat || 0;
    const sub = token.sub || token.user_id;
    if (!sub) {
        throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
    }
    const payload = Object.assign({
        // Set all required fields to decent defaults
        iss: `https://securetoken.google.com/${project}`,
        aud: project,
        iat,
        exp: iat + 3600,
        auth_time: iat,
        sub,
        user_id: sub,
        firebase: {
            sign_in_provider: 'custom',
            identities: {}
        }
    }, token);
    // Unsecured JWTs use the empty string as a signature.
    const signature = '';
    return [
        base64urlEncodeWithoutPadding(JSON.stringify(header)),
        base64urlEncodeWithoutPadding(JSON.stringify(payload)),
        signature
    ].join('.');
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */ function getUA() {
    if (typeof navigator !== 'undefined' && typeof navigator['userAgent'] === 'string') {
        return navigator['userAgent'];
    } else {
        return '';
    }
}
/**
 * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
 *
 * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
 * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
 * wait for a callback.
 */ function isMobileCordova() {
    return typeof window !== 'undefined' && // @ts-ignore Setting up an broadly applicable index signature for Window
    // just to deal with this case would probably be a bad idea.
    !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA());
}
/**
 * Detect Node.js.
 *
 * @return true if Node.js environment is detected or specified.
 */ // Node detection logic from: https://github.com/iliakan/detect-node/
function isNode() {
    var _a;
    const forceEnvironment = (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.forceEnvironment;
    if (forceEnvironment === 'node') {
        return true;
    } else if (forceEnvironment === 'browser') {
        return false;
    }
    try {
        return Object.prototype.toString.call(global.process) === '[object process]';
    } catch (e) {
        return false;
    }
}
/**
 * Detect Browser Environment
 */ function isBrowser() {
    return typeof window !== 'undefined' || isWebWorker();
}
/**
 * Detect Web Worker context
 */ function isWebWorker() {
    return typeof WorkerGlobalScope !== 'undefined' && typeof self !== 'undefined' && self instanceof WorkerGlobalScope;
}
function isBrowserExtension() {
    const runtime = typeof chrome === 'object' ? chrome.runtime : typeof browser === 'object' ? browser.runtime : undefined;
    return typeof runtime === 'object' && runtime.id !== undefined;
}
/**
 * Detect React Native.
 *
 * @return true if ReactNative environment is detected.
 */ function isReactNative() {
    return typeof navigator === 'object' && navigator['product'] === 'ReactNative';
}
/** Detects Electron apps. */ function isElectron() {
    return getUA().indexOf('Electron/') >= 0;
}
/** Detects Internet Explorer. */ function isIE() {
    const ua = getUA();
    return ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
}
/** Detects Universal Windows Platform apps. */ function isUWP() {
    return getUA().indexOf('MSAppHost/') >= 0;
}
/**
 * Detect whether the current SDK build is the Node version.
 *
 * @return true if it's the Node SDK build.
 */ function isNodeSdk() {
    return CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true;
}
/** Returns true if we are running in Safari. */ function isSafari() {
    return !isNode() && !!navigator.userAgent && navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome');
}
/**
 * This method checks if indexedDB is supported by current browser/service worker context
 * @return true if indexedDB is supported by current browser/service worker context
 */ function isIndexedDBAvailable() {
    try {
        return typeof indexedDB === 'object';
    } catch (e) {
        return false;
    }
}
/**
 * This method validates browser/sw context for indexedDB by opening a dummy indexedDB database and reject
 * if errors occur during the database open operation.
 *
 * @throws exception if current browser/sw context can't run idb.open (ex: Safari iframe, Firefox
 * private browsing)
 */ function validateIndexedDBOpenable() {
    return new Promise((resolve, reject)=>{
        try {
            let preExist = true;
            const DB_CHECK_NAME = 'validate-browser-context-for-indexeddb-analytics-module';
            const request = self.indexedDB.open(DB_CHECK_NAME);
            request.onsuccess = ()=>{
                request.result.close();
                // delete database only when it doesn't pre-exist
                if (!preExist) {
                    self.indexedDB.deleteDatabase(DB_CHECK_NAME);
                }
                resolve(true);
            };
            request.onupgradeneeded = ()=>{
                preExist = false;
            };
            request.onerror = ()=>{
                var _a;
                reject(((_a = request.error) === null || _a === void 0 ? void 0 : _a.message) || '');
            };
        } catch (error) {
            reject(error);
        }
    });
}
/**
 *
 * This method checks whether cookie is enabled within current browser
 * @return true if cookie is enabled within current browser
 */ function areCookiesEnabled() {
    if (typeof navigator === 'undefined' || !navigator.cookieEnabled) {
        return false;
    }
    return true;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @fileoverview Standardized Firebase Error.
 *
 * Usage:
 *
 *   // Typescript string literals for type-safe codes
 *   type Err =
 *     'unknown' |
 *     'object-not-found'
 *     ;
 *
 *   // Closure enum for type-safe error codes
 *   // at-enum {string}
 *   var Err = {
 *     UNKNOWN: 'unknown',
 *     OBJECT_NOT_FOUND: 'object-not-found',
 *   }
 *
 *   let errors: Map<Err, string> = {
 *     'generic-error': "Unknown error",
 *     'file-not-found': "Could not find file: {$file}",
 *   };
 *
 *   // Type-safe function - must pass a valid error code as param.
 *   let error = new ErrorFactory<Err>('service', 'Service', errors);
 *
 *   ...
 *   throw error.create(Err.GENERIC);
 *   ...
 *   throw error.create(Err.FILE_NOT_FOUND, {'file': fileName});
 *   ...
 *   // Service: Could not file file: foo.txt (service/file-not-found).
 *
 *   catch (e) {
 *     assert(e.message === "Could not find file: foo.txt.");
 *     if ((e as FirebaseError)?.code === 'service/file-not-found') {
 *       console.log("Could not read file: " + e['file']);
 *     }
 *   }
 */ const ERROR_NAME = 'FirebaseError';
// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
class FirebaseError extends Error {
    constructor(/** The error code for this error. */ code, message, /** Custom data for this error. */ customData){
        super(message);
        this.code = code;
        this.customData = customData;
        /** The custom name for all FirebaseErrors. */ this.name = ERROR_NAME;
        // Fix For ES5
        // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(this, FirebaseError.prototype);
        // Maintains proper stack trace for where our error was thrown.
        // Only available on V8.
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ErrorFactory.prototype.create);
        }
    }
}
class ErrorFactory {
    constructor(service, serviceName, errors){
        this.service = service;
        this.serviceName = serviceName;
        this.errors = errors;
    }
    create(code, ...data) {
        const customData = data[0] || {};
        const fullCode = `${this.service}/${code}`;
        const template = this.errors[code];
        const message = template ? replaceTemplate(template, customData) : 'Error';
        // Service Name: Error message (service/code).
        const fullMessage = `${this.serviceName}: ${message} (${fullCode}).`;
        const error = new FirebaseError(fullCode, fullMessage, customData);
        return error;
    }
}
function replaceTemplate(template, data) {
    return template.replace(PATTERN, (_, key)=>{
        const value = data[key];
        return value != null ? String(value) : `<${key}?>`;
    });
}
const PATTERN = /\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Evaluates a JSON string into a javascript object.
 *
 * @param {string} str A string containing JSON.
 * @return {*} The javascript object representing the specified JSON.
 */ function jsonEval(str) {
    return JSON.parse(str);
}
/**
 * Returns JSON representing a javascript object.
 * @param {*} data Javascript object to be stringified.
 * @return {string} The JSON contents of the object.
 */ function stringify(data) {
    return JSON.stringify(data);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Decodes a Firebase auth. token into constituent parts.
 *
 * Notes:
 * - May return with invalid / incomplete claims if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */ const decode = function(token) {
    let header = {}, claims = {}, data = {}, signature = '';
    try {
        const parts = token.split('.');
        header = jsonEval(base64Decode(parts[0]) || '');
        claims = jsonEval(base64Decode(parts[1]) || '');
        signature = parts[2];
        data = claims['d'] || {};
        delete claims['d'];
    } catch (e) {}
    return {
        header,
        claims,
        data,
        signature
    };
};
/**
 * Decodes a Firebase auth. token and checks the validity of its time-based claims. Will return true if the
 * token is within the time window authorized by the 'nbf' (not-before) and 'iat' (issued-at) claims.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */ const isValidTimestamp = function(token) {
    const claims = decode(token).claims;
    const now = Math.floor(new Date().getTime() / 1000);
    let validSince = 0, validUntil = 0;
    if (typeof claims === 'object') {
        if (claims.hasOwnProperty('nbf')) {
            validSince = claims['nbf'];
        } else if (claims.hasOwnProperty('iat')) {
            validSince = claims['iat'];
        }
        if (claims.hasOwnProperty('exp')) {
            validUntil = claims['exp'];
        } else {
            // token will expire after 24h by default
            validUntil = validSince + 86400;
        }
    }
    return !!now && !!validSince && !!validUntil && now >= validSince && now <= validUntil;
};
/**
 * Decodes a Firebase auth. token and returns its issued at time if valid, null otherwise.
 *
 * Notes:
 * - May return null if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */ const issuedAtTime = function(token) {
    const claims = decode(token).claims;
    if (typeof claims === 'object' && claims.hasOwnProperty('iat')) {
        return claims['iat'];
    }
    return null;
};
/**
 * Decodes a Firebase auth. token and checks the validity of its format. Expects a valid issued-at time.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */ const isValidFormat = function(token) {
    const decoded = decode(token), claims = decoded.claims;
    return !!claims && typeof claims === 'object' && claims.hasOwnProperty('iat');
};
/**
 * Attempts to peer into an auth token and determine if it's an admin auth token by looking at the claims portion.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */ const isAdmin = function(token) {
    const claims = decode(token).claims;
    return typeof claims === 'object' && claims['admin'] === true;
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function contains(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
function safeGet(obj, key) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        return obj[key];
    } else {
        return undefined;
    }
}
function isEmpty(obj) {
    for(const key in obj){
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}
function map(obj, fn, contextObj) {
    const res = {};
    for(const key in obj){
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            res[key] = fn.call(contextObj, obj[key], key, obj);
        }
    }
    return res;
}
/**
 * Deep equal two objects. Support Arrays and Objects.
 */ function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    for (const k of aKeys){
        if (!bKeys.includes(k)) {
            return false;
        }
        const aProp = a[k];
        const bProp = b[k];
        if (isObject(aProp) && isObject(bProp)) {
            if (!deepEqual(aProp, bProp)) {
                return false;
            }
        } else if (aProp !== bProp) {
            return false;
        }
    }
    for (const k of bKeys){
        if (!aKeys.includes(k)) {
            return false;
        }
    }
    return true;
}
function isObject(thing) {
    return thing !== null && typeof thing === 'object';
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Rejects if the given promise doesn't resolve in timeInMS milliseconds.
 * @internal
 */ function promiseWithTimeout(promise, timeInMS = 2000) {
    const deferredPromise = new Deferred();
    setTimeout(()=>deferredPromise.reject('timeout!'), timeInMS);
    promise.then(deferredPromise.resolve, deferredPromise.reject);
    return deferredPromise.promise;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */ function querystring(querystringParams) {
    const params = [];
    for (const [key, value] of Object.entries(querystringParams)){
        if (Array.isArray(value)) {
            value.forEach((arrayVal)=>{
                params.push(encodeURIComponent(key) + '=' + encodeURIComponent(arrayVal));
            });
        } else {
            params.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
        }
    }
    return params.length ? '&' + params.join('&') : '';
}
/**
 * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
 * (e.g. {arg: 'val', arg2: 'val2'})
 */ function querystringDecode(querystring) {
    const obj = {};
    const tokens = querystring.replace(/^\?/, '').split('&');
    tokens.forEach((token)=>{
        if (token) {
            const [key, value] = token.split('=');
            obj[decodeURIComponent(key)] = decodeURIComponent(value);
        }
    });
    return obj;
}
/**
 * Extract the query string part of a URL, including the leading question mark (if present).
 */ function extractQuerystring(url) {
    const queryStart = url.indexOf('?');
    if (!queryStart) {
        return '';
    }
    const fragmentStart = url.indexOf('#', queryStart);
    return url.substring(queryStart, fragmentStart > 0 ? fragmentStart : undefined);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @fileoverview SHA-1 cryptographic hash.
 * Variable names follow the notation in FIPS PUB 180-3:
 * http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
 *
 * Usage:
 *   var sha1 = new sha1();
 *   sha1.update(bytes);
 *   var hash = sha1.digest();
 *
 * Performance:
 *   Chrome 23:   ~400 Mbit/s
 *   Firefox 16:  ~250 Mbit/s
 *
 */ /**
 * SHA-1 cryptographic hash constructor.
 *
 * The properties declared here are discussed in the above algorithm document.
 * @constructor
 * @final
 * @struct
 */ class Sha1 {
    constructor(){
        /**
         * Holds the previous values of accumulated variables a-e in the compress_
         * function.
         * @private
         */ this.chain_ = [];
        /**
         * A buffer holding the partially computed hash result.
         * @private
         */ this.buf_ = [];
        /**
         * An array of 80 bytes, each a part of the message to be hashed.  Referred to
         * as the message schedule in the docs.
         * @private
         */ this.W_ = [];
        /**
         * Contains data needed to pad messages less than 64 bytes.
         * @private
         */ this.pad_ = [];
        /**
         * @private {number}
         */ this.inbuf_ = 0;
        /**
         * @private {number}
         */ this.total_ = 0;
        this.blockSize = 512 / 8;
        this.pad_[0] = 128;
        for(let i = 1; i < this.blockSize; ++i){
            this.pad_[i] = 0;
        }
        this.reset();
    }
    reset() {
        this.chain_[0] = 0x67452301;
        this.chain_[1] = 0xefcdab89;
        this.chain_[2] = 0x98badcfe;
        this.chain_[3] = 0x10325476;
        this.chain_[4] = 0xc3d2e1f0;
        this.inbuf_ = 0;
        this.total_ = 0;
    }
    /**
     * Internal compress helper function.
     * @param buf Block to compress.
     * @param offset Offset of the block in the buffer.
     * @private
     */ compress_(buf, offset) {
        if (!offset) {
            offset = 0;
        }
        const W = this.W_;
        // get 16 big endian words
        if (typeof buf === 'string') {
            for(let i = 0; i < 16; i++){
                // TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
                // have a bug that turns the post-increment ++ operator into pre-increment
                // during JIT compilation.  We have code that depends heavily on SHA-1 for
                // correctness and which is affected by this bug, so I've removed all uses
                // of post-increment ++ in which the result value is used.  We can revert
                // this change once the Safari bug
                // (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
                // most clients have been updated.
                W[i] = buf.charCodeAt(offset) << 24 | buf.charCodeAt(offset + 1) << 16 | buf.charCodeAt(offset + 2) << 8 | buf.charCodeAt(offset + 3);
                offset += 4;
            }
        } else {
            for(let i = 0; i < 16; i++){
                W[i] = buf[offset] << 24 | buf[offset + 1] << 16 | buf[offset + 2] << 8 | buf[offset + 3];
                offset += 4;
            }
        }
        // expand to 80 words
        for(let i = 16; i < 80; i++){
            const t = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
            W[i] = (t << 1 | t >>> 31) & 0xffffffff;
        }
        let a = this.chain_[0];
        let b = this.chain_[1];
        let c = this.chain_[2];
        let d = this.chain_[3];
        let e = this.chain_[4];
        let f, k;
        // TODO(user): Try to unroll this loop to speed up the computation.
        for(let i = 0; i < 80; i++){
            if (i < 40) {
                if (i < 20) {
                    f = d ^ b & (c ^ d);
                    k = 0x5a827999;
                } else {
                    f = b ^ c ^ d;
                    k = 0x6ed9eba1;
                }
            } else {
                if (i < 60) {
                    f = b & c | d & (b | c);
                    k = 0x8f1bbcdc;
                } else {
                    f = b ^ c ^ d;
                    k = 0xca62c1d6;
                }
            }
            const t = (a << 5 | a >>> 27) + f + e + k + W[i] & 0xffffffff;
            e = d;
            d = c;
            c = (b << 30 | b >>> 2) & 0xffffffff;
            b = a;
            a = t;
        }
        this.chain_[0] = this.chain_[0] + a & 0xffffffff;
        this.chain_[1] = this.chain_[1] + b & 0xffffffff;
        this.chain_[2] = this.chain_[2] + c & 0xffffffff;
        this.chain_[3] = this.chain_[3] + d & 0xffffffff;
        this.chain_[4] = this.chain_[4] + e & 0xffffffff;
    }
    update(bytes, length) {
        // TODO(johnlenz): tighten the function signature and remove this check
        if (bytes == null) {
            return;
        }
        if (length === undefined) {
            length = bytes.length;
        }
        const lengthMinusBlock = length - this.blockSize;
        let n = 0;
        // Using local instead of member variables gives ~5% speedup on Firefox 16.
        const buf = this.buf_;
        let inbuf = this.inbuf_;
        // The outer while loop should execute at most twice.
        while(n < length){
            // When we have no data in the block to top up, we can directly process the
            // input buffer (assuming it contains sufficient data). This gives ~25%
            // speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
            // the data is provided in large chunks (or in multiples of 64 bytes).
            if (inbuf === 0) {
                while(n <= lengthMinusBlock){
                    this.compress_(bytes, n);
                    n += this.blockSize;
                }
            }
            if (typeof bytes === 'string') {
                while(n < length){
                    buf[inbuf] = bytes.charCodeAt(n);
                    ++inbuf;
                    ++n;
                    if (inbuf === this.blockSize) {
                        this.compress_(buf);
                        inbuf = 0;
                        break;
                    }
                }
            } else {
                while(n < length){
                    buf[inbuf] = bytes[n];
                    ++inbuf;
                    ++n;
                    if (inbuf === this.blockSize) {
                        this.compress_(buf);
                        inbuf = 0;
                        break;
                    }
                }
            }
        }
        this.inbuf_ = inbuf;
        this.total_ += length;
    }
    /** @override */ digest() {
        const digest = [];
        let totalBits = this.total_ * 8;
        // Add pad 0x80 0x00*.
        if (this.inbuf_ < 56) {
            this.update(this.pad_, 56 - this.inbuf_);
        } else {
            this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
        }
        // Add # bits.
        for(let i = this.blockSize - 1; i >= 56; i--){
            this.buf_[i] = totalBits & 255;
            totalBits /= 256; // Don't use bit-shifting here!
        }
        this.compress_(this.buf_);
        let n = 0;
        for(let i = 0; i < 5; i++){
            for(let j = 24; j >= 0; j -= 8){
                digest[n] = this.chain_[i] >> j & 255;
                ++n;
            }
        }
        return digest;
    }
}
/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */ function createSubscribe(executor, onNoObservers) {
    const proxy = new ObserverProxy(executor, onNoObservers);
    return proxy.subscribe.bind(proxy);
}
/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */ class ObserverProxy {
    /**
     * @param executor Function which can make calls to a single Observer
     *     as a proxy.
     * @param onNoObservers Callback when count of Observers goes to zero.
     */ constructor(executor, onNoObservers){
        this.observers = [];
        this.unsubscribes = [];
        this.observerCount = 0;
        // Micro-task scheduling by calling task.then().
        this.task = Promise.resolve();
        this.finalized = false;
        this.onNoObservers = onNoObservers;
        // Call the executor asynchronously so subscribers that are called
        // synchronously after the creation of the subscribe function
        // can still receive the very first value generated in the executor.
        this.task.then(()=>{
            executor(this);
        }).catch((e)=>{
            this.error(e);
        });
    }
    next(value) {
        this.forEachObserver((observer)=>{
            observer.next(value);
        });
    }
    error(error) {
        this.forEachObserver((observer)=>{
            observer.error(error);
        });
        this.close(error);
    }
    complete() {
        this.forEachObserver((observer)=>{
            observer.complete();
        });
        this.close();
    }
    /**
     * Subscribe function that can be used to add an Observer to the fan-out list.
     *
     * - We require that no event is sent to a subscriber sychronously to their
     *   call to subscribe().
     */ subscribe(nextOrObserver, error, complete) {
        let observer;
        if (nextOrObserver === undefined && error === undefined && complete === undefined) {
            throw new Error('Missing Observer.');
        }
        // Assemble an Observer object when passed as callback functions.
        if (implementsAnyMethods(nextOrObserver, [
            'next',
            'error',
            'complete'
        ])) {
            observer = nextOrObserver;
        } else {
            observer = {
                next: nextOrObserver,
                error,
                complete
            };
        }
        if (observer.next === undefined) {
            observer.next = noop;
        }
        if (observer.error === undefined) {
            observer.error = noop;
        }
        if (observer.complete === undefined) {
            observer.complete = noop;
        }
        const unsub = this.unsubscribeOne.bind(this, this.observers.length);
        // Attempt to subscribe to a terminated Observable - we
        // just respond to the Observer with the final error or complete
        // event.
        if (this.finalized) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.task.then(()=>{
                try {
                    if (this.finalError) {
                        observer.error(this.finalError);
                    } else {
                        observer.complete();
                    }
                } catch (e) {
                // nothing
                }
                return;
            });
        }
        this.observers.push(observer);
        return unsub;
    }
    // Unsubscribe is synchronous - we guarantee that no events are sent to
    // any unsubscribed Observer.
    unsubscribeOne(i) {
        if (this.observers === undefined || this.observers[i] === undefined) {
            return;
        }
        delete this.observers[i];
        this.observerCount -= 1;
        if (this.observerCount === 0 && this.onNoObservers !== undefined) {
            this.onNoObservers(this);
        }
    }
    forEachObserver(fn) {
        if (this.finalized) {
            // Already closed by previous event....just eat the additional values.
            return;
        }
        // Since sendOne calls asynchronously - there is no chance that
        // this.observers will become undefined.
        for(let i = 0; i < this.observers.length; i++){
            this.sendOne(i, fn);
        }
    }
    // Call the Observer via one of it's callback function. We are careful to
    // confirm that the observe has not been unsubscribed since this asynchronous
    // function had been queued.
    sendOne(i, fn) {
        // Execute the callback asynchronously
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(()=>{
            if (this.observers !== undefined && this.observers[i] !== undefined) {
                try {
                    fn(this.observers[i]);
                } catch (e) {
                    // Ignore exceptions raised in Observers or missing methods of an
                    // Observer.
                    // Log error to console. b/31404806
                    if (typeof console !== 'undefined' && console.error) {
                        console.error(e);
                    }
                }
            }
        });
    }
    close(err) {
        if (this.finalized) {
            return;
        }
        this.finalized = true;
        if (err !== undefined) {
            this.finalError = err;
        }
        // Proxy is no longer needed - garbage collect references
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(()=>{
            this.observers = undefined;
            this.onNoObservers = undefined;
        });
    }
}
/** Turn synchronous function into one called asynchronously. */ // eslint-disable-next-line @typescript-eslint/ban-types
function async(fn, onError) {
    return (...args)=>{
        Promise.resolve(true).then(()=>{
            fn(...args);
        }).catch((error)=>{
            if (onError) {
                onError(error);
            }
        });
    };
}
/**
 * Return true if the object passed in implements any of the named methods.
 */ function implementsAnyMethods(obj, methods) {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }
    for (const method of methods){
        if (method in obj && typeof obj[method] === 'function') {
            return true;
        }
    }
    return false;
}
function noop() {
// do nothing
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Check to make sure the appropriate number of arguments are provided for a public function.
 * Throws an error if it fails.
 *
 * @param fnName The function name
 * @param minCount The minimum number of arguments to allow for the function call
 * @param maxCount The maximum number of argument to allow for the function call
 * @param argCount The actual number of arguments provided.
 */ const validateArgCount = function(fnName, minCount, maxCount, argCount) {
    let argError;
    if (argCount < minCount) {
        argError = 'at least ' + minCount;
    } else if (argCount > maxCount) {
        argError = maxCount === 0 ? 'none' : 'no more than ' + maxCount;
    }
    if (argError) {
        const error = fnName + ' failed: Was called with ' + argCount + (argCount === 1 ? ' argument.' : ' arguments.') + ' Expects ' + argError + '.';
        throw new Error(error);
    }
};
/**
 * Generates a string to prefix an error message about failed argument validation
 *
 * @param fnName The function name
 * @param argName The name of the argument
 * @return The prefix to add to the error thrown for validation.
 */ function errorPrefix(fnName, argName) {
    return `${fnName} failed: ${argName} argument `;
}
/**
 * @param fnName
 * @param argumentNumber
 * @param namespace
 * @param optional
 */ function validateNamespace(fnName, namespace, optional) {
    if (optional && !namespace) {
        return;
    }
    if (typeof namespace !== 'string') {
        //TODO: I should do more validation here. We only allow certain chars in namespaces.
        throw new Error(errorPrefix(fnName, 'namespace') + 'must be a valid firebase namespace.');
    }
}
function validateCallback(fnName, argumentName, // eslint-disable-next-line @typescript-eslint/ban-types
callback, optional) {
    if (optional && !callback) {
        return;
    }
    if (typeof callback !== 'function') {
        throw new Error(errorPrefix(fnName, argumentName) + 'must be a valid function.');
    }
}
function validateContextObject(fnName, argumentName, context, optional) {
    if (optional && !context) {
        return;
    }
    if (typeof context !== 'object' || context === null) {
        throw new Error(errorPrefix(fnName, argumentName) + 'must be a valid context object.');
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
// automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
// so it's been modified.
// Note that not all Unicode characters appear as single characters in JavaScript strings.
// fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
// use 2 characters in Javascript.  All 4-byte UTF-8 characters begin with a first
// character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
// pair).
// See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3
/**
 * @param {string} str
 * @return {Array}
 */ const stringToByteArray = function(str) {
    const out = [];
    let p = 0;
    for(let i = 0; i < str.length; i++){
        let c = str.charCodeAt(i);
        // Is this the lead surrogate in a surrogate pair?
        if (c >= 0xd800 && c <= 0xdbff) {
            const high = c - 0xd800; // the high 10 bits.
            i++;
            assert(i < str.length, 'Surrogate pair missing trail surrogate.');
            const low = str.charCodeAt(i) - 0xdc00; // the low 10 bits.
            c = 0x10000 + (high << 10) + low;
        }
        if (c < 128) {
            out[p++] = c;
        } else if (c < 2048) {
            out[p++] = c >> 6 | 192;
            out[p++] = c & 63 | 128;
        } else if (c < 65536) {
            out[p++] = c >> 12 | 224;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
        } else {
            out[p++] = c >> 18 | 240;
            out[p++] = c >> 12 & 63 | 128;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
        }
    }
    return out;
};
/**
 * Calculate length without actually converting; useful for doing cheaper validation.
 * @param {string} str
 * @return {number}
 */ const stringLength = function(str) {
    let p = 0;
    for(let i = 0; i < str.length; i++){
        const c = str.charCodeAt(i);
        if (c < 128) {
            p++;
        } else if (c < 2048) {
            p += 2;
        } else if (c >= 0xd800 && c <= 0xdbff) {
            // Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
            p += 4;
            i++; // skip trail surrogate.
        } else {
            p += 3;
        }
    }
    return p;
};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Copied from https://stackoverflow.com/a/2117523
 * Generates a new uuid.
 * @public
 */ const uuidv4 = function() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c)=>{
        const r = Math.random() * 16 | 0, v = c === 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
    });
};
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The amount of milliseconds to exponentially increase.
 */ const DEFAULT_INTERVAL_MILLIS = 1000;
/**
 * The factor to backoff by.
 * Should be a number greater than 1.
 */ const DEFAULT_BACKOFF_FACTOR = 2;
/**
 * The maximum milliseconds to increase to.
 *
 * <p>Visible for testing
 */ const MAX_VALUE_MILLIS = 4 * 60 * 60 * 1000; // Four hours, like iOS and Android.
/**
 * The percentage of backoff time to randomize by.
 * See
 * http://go/safe-client-behavior#step-1-determine-the-appropriate-retry-interval-to-handle-spike-traffic
 * for context.
 *
 * <p>Visible for testing
 */ const RANDOM_FACTOR = 0.5;
/**
 * Based on the backoff method from
 * https://github.com/google/closure-library/blob/master/closure/goog/math/exponentialbackoff.js.
 * Extracted here so we don't need to pass metadata and a stateful ExponentialBackoff object around.
 */ function calculateBackoffMillis(backoffCount, intervalMillis = DEFAULT_INTERVAL_MILLIS, backoffFactor = DEFAULT_BACKOFF_FACTOR) {
    // Calculates an exponentially increasing value.
    // Deviation: calculates value from count and a constant interval, so we only need to save value
    // and count to restore state.
    const currBaseValue = intervalMillis * Math.pow(backoffFactor, backoffCount);
    // A random "fuzz" to avoid waves of retries.
    // Deviation: randomFactor is required.
    const randomWait = Math.round(// A fraction of the backoff value to add/subtract.
    // Deviation: changes multiplication order to improve readability.
    RANDOM_FACTOR * currBaseValue * // A random float (rounded to int by Math.round above) in the range [-1, 1]. Determines
    // if we add or subtract.
    (Math.random() - 0.5) * 2);
    // Limits backoff to max to avoid effectively permanent backoff.
    return Math.min(MAX_VALUE_MILLIS, currBaseValue + randomWait);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provide English ordinal letters after a number
 */ function ordinal(i) {
    if (!Number.isFinite(i)) {
        return `${i}`;
    }
    return i + indicator(i);
}
function indicator(i) {
    i = Math.abs(i);
    const cent = i % 100;
    if (cent >= 10 && cent <= 20) {
        return 'th';
    }
    const dec = i % 10;
    if (dec === 1) {
        return 'st';
    }
    if (dec === 2) {
        return 'nd';
    }
    if (dec === 3) {
        return 'rd';
    }
    return 'th';
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function getModularInstance(service) {
    if (service && service._delegate) {
        return service._delegate;
    } else {
        return service;
    }
}
;
 //# sourceMappingURL=index.esm2017.js.map

})()),
"[project]/node_modules/@firebase/component/dist/esm/index.esm2017.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Component": ()=>Component,
    "ComponentContainer": ()=>ComponentContainer,
    "Provider": ()=>Provider
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@firebase/util/dist/index.esm2017.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */ class Component {
    /**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */ constructor(name, instanceFactory, type){
        this.name = name;
        this.instanceFactory = instanceFactory;
        this.type = type;
        this.multipleInstances = false;
        /**
         * Properties to be added to the service namespace
         */ this.serviceProps = {};
        this.instantiationMode = "LAZY" /* InstantiationMode.LAZY */ ;
        this.onInstanceCreated = null;
    }
    setInstantiationMode(mode) {
        this.instantiationMode = mode;
        return this;
    }
    setMultipleInstances(multipleInstances) {
        this.multipleInstances = multipleInstances;
        return this;
    }
    setServiceProps(props) {
        this.serviceProps = props;
        return this;
    }
    setInstanceCreatedCallback(callback) {
        this.onInstanceCreated = callback;
        return this;
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const DEFAULT_ENTRY_NAME = '[DEFAULT]';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */ class Provider {
    constructor(name, container){
        this.name = name;
        this.container = container;
        this.component = null;
        this.instances = new Map();
        this.instancesDeferred = new Map();
        this.instancesOptions = new Map();
        this.onInitCallbacks = new Map();
    }
    /**
     * @param identifier A provider can provide mulitple instances of a service
     * if this.component.multipleInstances is true.
     */ get(identifier) {
        // if multipleInstances is not supported, use the default name
        const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        if (!this.instancesDeferred.has(normalizedIdentifier)) {
            const deferred = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Deferred"]();
            this.instancesDeferred.set(normalizedIdentifier, deferred);
            if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
                // initialize the service if it can be auto-initialized
                try {
                    const instance = this.getOrInitializeService({
                        instanceIdentifier: normalizedIdentifier
                    });
                    if (instance) {
                        deferred.resolve(instance);
                    }
                } catch (e) {
                // when the instance factory throws an exception during get(), it should not cause
                // a fatal error. We just return the unresolved promise in this case.
                }
            }
        }
        return this.instancesDeferred.get(normalizedIdentifier).promise;
    }
    getImmediate(options) {
        var _a;
        // if multipleInstances is not supported, use the default name
        const normalizedIdentifier = this.normalizeInstanceIdentifier(options === null || options === void 0 ? void 0 : options.identifier);
        const optional = (_a = options === null || options === void 0 ? void 0 : options.optional) !== null && _a !== void 0 ? _a : false;
        if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
            try {
                return this.getOrInitializeService({
                    instanceIdentifier: normalizedIdentifier
                });
            } catch (e) {
                if (optional) {
                    return null;
                } else {
                    throw e;
                }
            }
        } else {
            // In case a component is not initialized and should/can not be auto-initialized at the moment, return null if the optional flag is set, or throw
            if (optional) {
                return null;
            } else {
                throw Error(`Service ${this.name} is not available`);
            }
        }
    }
    getComponent() {
        return this.component;
    }
    setComponent(component) {
        if (component.name !== this.name) {
            throw Error(`Mismatching Component ${component.name} for Provider ${this.name}.`);
        }
        if (this.component) {
            throw Error(`Component for ${this.name} has already been provided`);
        }
        this.component = component;
        // return early without attempting to initialize the component if the component requires explicit initialization (calling `Provider.initialize()`)
        if (!this.shouldAutoInitialize()) {
            return;
        }
        // if the service is eager, initialize the default instance
        if (isComponentEager(component)) {
            try {
                this.getOrInitializeService({
                    instanceIdentifier: DEFAULT_ENTRY_NAME
                });
            } catch (e) {
            // when the instance factory for an eager Component throws an exception during the eager
            // initialization, it should not cause a fatal error.
            // TODO: Investigate if we need to make it configurable, because some component may want to cause
            // a fatal error in this case?
            }
        }
        // Create service instances for the pending promises and resolve them
        // NOTE: if this.multipleInstances is false, only the default instance will be created
        // and all promises with resolve with it regardless of the identifier.
        for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()){
            const normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
            try {
                // `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
                const instance = this.getOrInitializeService({
                    instanceIdentifier: normalizedIdentifier
                });
                instanceDeferred.resolve(instance);
            } catch (e) {
            // when the instance factory throws an exception, it should not cause
            // a fatal error. We just leave the promise unresolved.
            }
        }
    }
    clearInstance(identifier = DEFAULT_ENTRY_NAME) {
        this.instancesDeferred.delete(identifier);
        this.instancesOptions.delete(identifier);
        this.instances.delete(identifier);
    }
    // app.delete() will call this method on every provider to delete the services
    // TODO: should we mark the provider as deleted?
    async delete() {
        const services = Array.from(this.instances.values());
        await Promise.all([
            ...services.filter((service)=>'INTERNAL' in service) // legacy services
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .map((service)=>service.INTERNAL.delete()),
            ...services.filter((service)=>'_delete' in service) // modularized services
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .map((service)=>service._delete())
        ]);
    }
    isComponentSet() {
        return this.component != null;
    }
    isInitialized(identifier = DEFAULT_ENTRY_NAME) {
        return this.instances.has(identifier);
    }
    getOptions(identifier = DEFAULT_ENTRY_NAME) {
        return this.instancesOptions.get(identifier) || {};
    }
    initialize(opts = {}) {
        const { options = {} } = opts;
        const normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);
        if (this.isInitialized(normalizedIdentifier)) {
            throw Error(`${this.name}(${normalizedIdentifier}) has already been initialized`);
        }
        if (!this.isComponentSet()) {
            throw Error(`Component ${this.name} has not been registered yet`);
        }
        const instance = this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier,
            options
        });
        // resolve any pending promise waiting for the service instance
        for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()){
            const normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
            if (normalizedIdentifier === normalizedDeferredIdentifier) {
                instanceDeferred.resolve(instance);
            }
        }
        return instance;
    }
    /**
     *
     * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
     * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
     *
     * @param identifier An optional instance identifier
     * @returns a function to unregister the callback
     */ onInit(callback, identifier) {
        var _a;
        const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        const existingCallbacks = (_a = this.onInitCallbacks.get(normalizedIdentifier)) !== null && _a !== void 0 ? _a : new Set();
        existingCallbacks.add(callback);
        this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
        const existingInstance = this.instances.get(normalizedIdentifier);
        if (existingInstance) {
            callback(existingInstance, normalizedIdentifier);
        }
        return ()=>{
            existingCallbacks.delete(callback);
        };
    }
    /**
     * Invoke onInit callbacks synchronously
     * @param instance the service instance`
     */ invokeOnInitCallbacks(instance, identifier) {
        const callbacks = this.onInitCallbacks.get(identifier);
        if (!callbacks) {
            return;
        }
        for (const callback of callbacks){
            try {
                callback(instance, identifier);
            } catch (_a) {
            // ignore errors in the onInit callback
            }
        }
    }
    getOrInitializeService({ instanceIdentifier, options = {} }) {
        let instance = this.instances.get(instanceIdentifier);
        if (!instance && this.component) {
            instance = this.component.instanceFactory(this.container, {
                instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
                options
            });
            this.instances.set(instanceIdentifier, instance);
            this.instancesOptions.set(instanceIdentifier, options);
            /**
             * Invoke onInit listeners.
             * Note this.component.onInstanceCreated is different, which is used by the component creator,
             * while onInit listeners are registered by consumers of the provider.
             */ this.invokeOnInitCallbacks(instance, instanceIdentifier);
            /**
             * Order is important
             * onInstanceCreated() should be called after this.instances.set(instanceIdentifier, instance); which
             * makes `isInitialized()` return true.
             */ if (this.component.onInstanceCreated) {
                try {
                    this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
                } catch (_a) {
                // ignore errors in the onInstanceCreatedCallback
                }
            }
        }
        return instance || null;
    }
    normalizeInstanceIdentifier(identifier = DEFAULT_ENTRY_NAME) {
        if (this.component) {
            return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
        } else {
            return identifier; // assume multiple instances are supported before the component is provided.
        }
    }
    shouldAutoInitialize() {
        return !!this.component && this.component.instantiationMode !== "EXPLICIT" /* InstantiationMode.EXPLICIT */ ;
    }
}
// undefined should be passed to the service factory for the default instance
function normalizeIdentifierForFactory(identifier) {
    return identifier === DEFAULT_ENTRY_NAME ? undefined : identifier;
}
function isComponentEager(component) {
    return component.instantiationMode === "EAGER" /* InstantiationMode.EAGER */ ;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */ class ComponentContainer {
    constructor(name){
        this.name = name;
        this.providers = new Map();
    }
    /**
     *
     * @param component Component being added
     * @param overwrite When a component with the same name has already been registered,
     * if overwrite is true: overwrite the existing component with the new component and create a new
     * provider with the new component. It can be useful in tests where you want to use different mocks
     * for different tests.
     * if overwrite is false: throw an exception
     */ addComponent(component) {
        const provider = this.getProvider(component.name);
        if (provider.isComponentSet()) {
            throw new Error(`Component ${component.name} has already been registered with ${this.name}`);
        }
        provider.setComponent(component);
    }
    addOrOverwriteComponent(component) {
        const provider = this.getProvider(component.name);
        if (provider.isComponentSet()) {
            // delete the existing provider from the container, so we can register the new component
            this.providers.delete(component.name);
        }
        this.addComponent(component);
    }
    /**
     * getProvider provides a type safe interface where it can only be called with a field name
     * present in NameServiceMapping interface.
     *
     * Firebase SDKs providing services should extend NameServiceMapping interface to register
     * themselves.
     */ getProvider(name) {
        if (this.providers.has(name)) {
            return this.providers.get(name);
        }
        // create a Provider for a service that hasn't registered with Firebase
        const provider = new Provider(name, this);
        this.providers.set(name, provider);
        return provider;
    }
    getProviders() {
        return Array.from(this.providers.values());
    }
}
;
 //# sourceMappingURL=index.esm2017.js.map

})()),
"[project]/node_modules/@firebase/logger/dist/esm/index.esm2017.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A container for all of the Logger instances
 */ __turbopack_esm__({
    "LogLevel": ()=>LogLevel,
    "Logger": ()=>Logger,
    "setLogLevel": ()=>setLogLevel,
    "setUserLogHandler": ()=>setUserLogHandler
});
const instances = [];
/**
 * The JS SDK supports 5 log levels and also allows a user the ability to
 * silence the logs altogether.
 *
 * The order is a follows:
 * DEBUG < VERBOSE < INFO < WARN < ERROR
 *
 * All of the log types above the current log level will be captured (i.e. if
 * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
 * `VERBOSE` logs will not)
 */ var LogLevel;
(function(LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["WARN"] = 3] = "WARN";
    LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
    LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
})(LogLevel || (LogLevel = {}));
const levelStringToEnum = {
    'debug': LogLevel.DEBUG,
    'verbose': LogLevel.VERBOSE,
    'info': LogLevel.INFO,
    'warn': LogLevel.WARN,
    'error': LogLevel.ERROR,
    'silent': LogLevel.SILENT
};
/**
 * The default log level
 */ const defaultLogLevel = LogLevel.INFO;
/**
 * By default, `console.debug` is not displayed in the developer console (in
 * chrome). To avoid forcing users to have to opt-in to these logs twice
 * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
 * logs to the `console.log` function.
 */ const ConsoleMethod = {
    [LogLevel.DEBUG]: 'log',
    [LogLevel.VERBOSE]: 'log',
    [LogLevel.INFO]: 'info',
    [LogLevel.WARN]: 'warn',
    [LogLevel.ERROR]: 'error'
};
/**
 * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
 * messages on to their corresponding console counterparts (if the log method
 * is supported by the current log level)
 */ const defaultLogHandler = (instance, logType, ...args)=>{
    if (logType < instance.logLevel) {
        return;
    }
    const now = new Date().toISOString();
    const method = ConsoleMethod[logType];
    if (method) {
        console[method](`[${now}]  ${instance.name}:`, ...args);
    } else {
        throw new Error(`Attempted to log a message with an invalid logType (value: ${logType})`);
    }
};
class Logger {
    /**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */ constructor(name){
        this.name = name;
        /**
         * The log level of the given Logger instance.
         */ this._logLevel = defaultLogLevel;
        /**
         * The main (internal) log handler for the Logger instance.
         * Can be set to a new function in internal package code but not by user.
         */ this._logHandler = defaultLogHandler;
        /**
         * The optional, additional, user-defined log handler for the Logger instance.
         */ this._userLogHandler = null;
        /**
         * Capture the current instance for later use
         */ instances.push(this);
    }
    get logLevel() {
        return this._logLevel;
    }
    set logLevel(val) {
        if (!(val in LogLevel)) {
            throw new TypeError(`Invalid value "${val}" assigned to \`logLevel\``);
        }
        this._logLevel = val;
    }
    // Workaround for setter/getter having to be the same type.
    setLogLevel(val) {
        this._logLevel = typeof val === 'string' ? levelStringToEnum[val] : val;
    }
    get logHandler() {
        return this._logHandler;
    }
    set logHandler(val) {
        if (typeof val !== 'function') {
            throw new TypeError('Value assigned to `logHandler` must be a function');
        }
        this._logHandler = val;
    }
    get userLogHandler() {
        return this._userLogHandler;
    }
    set userLogHandler(val) {
        this._userLogHandler = val;
    }
    /**
     * The functions below are all based on the `console` interface
     */ debug(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.DEBUG, ...args);
        this._logHandler(this, LogLevel.DEBUG, ...args);
    }
    log(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.VERBOSE, ...args);
        this._logHandler(this, LogLevel.VERBOSE, ...args);
    }
    info(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.INFO, ...args);
        this._logHandler(this, LogLevel.INFO, ...args);
    }
    warn(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.WARN, ...args);
        this._logHandler(this, LogLevel.WARN, ...args);
    }
    error(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.ERROR, ...args);
        this._logHandler(this, LogLevel.ERROR, ...args);
    }
}
function setLogLevel(level) {
    instances.forEach((inst)=>{
        inst.setLogLevel(level);
    });
}
function setUserLogHandler(logCallback, options) {
    for (const instance of instances){
        let customLogLevel = null;
        if (options && options.level) {
            customLogLevel = levelStringToEnum[options.level];
        }
        if (logCallback === null) {
            instance.userLogHandler = null;
        } else {
            instance.userLogHandler = (instance, level, ...args)=>{
                const message = args.map((arg)=>{
                    if (arg == null) {
                        return null;
                    } else if (typeof arg === 'string') {
                        return arg;
                    } else if (typeof arg === 'number' || typeof arg === 'boolean') {
                        return arg.toString();
                    } else if (arg instanceof Error) {
                        return arg.message;
                    } else {
                        try {
                            return JSON.stringify(arg);
                        } catch (ignored) {
                            return null;
                        }
                    }
                }).filter((arg)=>arg).join(' ');
                if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance.logLevel)) {
                    logCallback({
                        level: LogLevel[level].toLowerCase(),
                        message,
                        args,
                        type: instance.name
                    });
                }
            };
        }
    }
}
;
 //# sourceMappingURL=index.esm2017.js.map

})()),
"[project]/node_modules/@firebase/app/dist/esm/index.esm2017.js [app-client] (ecmascript) <locals>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "SDK_VERSION": ()=>SDK_VERSION,
    "_DEFAULT_ENTRY_NAME": ()=>DEFAULT_ENTRY_NAME,
    "_addComponent": ()=>_addComponent,
    "_addOrOverwriteComponent": ()=>_addOrOverwriteComponent,
    "_apps": ()=>_apps,
    "_clearComponents": ()=>_clearComponents,
    "_components": ()=>_components,
    "_getProvider": ()=>_getProvider,
    "_isFirebaseApp": ()=>_isFirebaseApp,
    "_isFirebaseServerApp": ()=>_isFirebaseServerApp,
    "_registerComponent": ()=>_registerComponent,
    "_removeServiceInstance": ()=>_removeServiceInstance,
    "_serverApps": ()=>_serverApps,
    "deleteApp": ()=>deleteApp,
    "getApp": ()=>getApp,
    "getApps": ()=>getApps,
    "initializeApp": ()=>initializeApp,
    "initializeServerApp": ()=>initializeServerApp,
    "onLog": ()=>onLog,
    "registerVersion": ()=>registerVersion,
    "setLogLevel": ()=>setLogLevel
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$logger$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@firebase/logger/dist/esm/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@firebase/util/dist/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$component$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@firebase/component/dist/esm/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$idb$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/idb/build/index.js [app-client] (ecmascript) <locals>");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class PlatformLoggerServiceImpl {
    constructor(container){
        this.container = container;
    }
    // In initial implementation, this will be called by installations on
    // auth token refresh, and installations will send this string.
    getPlatformInfoString() {
        const providers = this.container.getProviders();
        // Loop through providers and get library/version pairs from any that are
        // version components.
        return providers.map((provider)=>{
            if (isVersionServiceProvider(provider)) {
                const service = provider.getImmediate();
                return `${service.library}/${service.version}`;
            } else {
                return null;
            }
        }).filter((logString)=>logString).join(' ');
    }
}
/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */ function isVersionServiceProvider(provider) {
    const component = provider.getComponent();
    return (component === null || component === void 0 ? void 0 : component.type) === "VERSION" /* ComponentType.VERSION */ ;
}
const name$p = "@firebase/app";
const version$1 = "0.10.8";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const logger = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$logger$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"]('@firebase/app');
const name$o = "@firebase/app-compat";
const name$n = "@firebase/analytics-compat";
const name$m = "@firebase/analytics";
const name$l = "@firebase/app-check-compat";
const name$k = "@firebase/app-check";
const name$j = "@firebase/auth";
const name$i = "@firebase/auth-compat";
const name$h = "@firebase/database";
const name$g = "@firebase/database-compat";
const name$f = "@firebase/functions";
const name$e = "@firebase/functions-compat";
const name$d = "@firebase/installations";
const name$c = "@firebase/installations-compat";
const name$b = "@firebase/messaging";
const name$a = "@firebase/messaging-compat";
const name$9 = "@firebase/performance";
const name$8 = "@firebase/performance-compat";
const name$7 = "@firebase/remote-config";
const name$6 = "@firebase/remote-config-compat";
const name$5 = "@firebase/storage";
const name$4 = "@firebase/storage-compat";
const name$3 = "@firebase/firestore";
const name$2 = "@firebase/vertexai-preview";
const name$1 = "@firebase/firestore-compat";
const name = "firebase";
const version = "10.12.5";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The default app name
 *
 * @internal
 */ const DEFAULT_ENTRY_NAME = '[DEFAULT]';
const PLATFORM_LOG_STRING = {
    [name$p]: 'fire-core',
    [name$o]: 'fire-core-compat',
    [name$m]: 'fire-analytics',
    [name$n]: 'fire-analytics-compat',
    [name$k]: 'fire-app-check',
    [name$l]: 'fire-app-check-compat',
    [name$j]: 'fire-auth',
    [name$i]: 'fire-auth-compat',
    [name$h]: 'fire-rtdb',
    [name$g]: 'fire-rtdb-compat',
    [name$f]: 'fire-fn',
    [name$e]: 'fire-fn-compat',
    [name$d]: 'fire-iid',
    [name$c]: 'fire-iid-compat',
    [name$b]: 'fire-fcm',
    [name$a]: 'fire-fcm-compat',
    [name$9]: 'fire-perf',
    [name$8]: 'fire-perf-compat',
    [name$7]: 'fire-rc',
    [name$6]: 'fire-rc-compat',
    [name$5]: 'fire-gcs',
    [name$4]: 'fire-gcs-compat',
    [name$3]: 'fire-fst',
    [name$1]: 'fire-fst-compat',
    [name$2]: 'fire-vertex',
    'fire-js': 'fire-js',
    [name]: 'fire-js-all'
};
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @internal
 */ const _apps = new Map();
/**
 * @internal
 */ const _serverApps = new Map();
/**
 * Registered components.
 *
 * @internal
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
const _components = new Map();
/**
 * @param component - the component being added to this app's container
 *
 * @internal
 */ function _addComponent(app, component) {
    try {
        app.container.addComponent(component);
    } catch (e) {
        logger.debug(`Component ${component.name} failed to register with FirebaseApp ${app.name}`, e);
    }
}
/**
 *
 * @internal
 */ function _addOrOverwriteComponent(app, component) {
    app.container.addOrOverwriteComponent(component);
}
/**
 *
 * @param component - the component to register
 * @returns whether or not the component is registered successfully
 *
 * @internal
 */ function _registerComponent(component) {
    const componentName = component.name;
    if (_components.has(componentName)) {
        logger.debug(`There were multiple attempts to register component ${componentName}.`);
        return false;
    }
    _components.set(componentName, component);
    // add the component to existing app instances
    for (const app of _apps.values()){
        _addComponent(app, component);
    }
    for (const serverApp of _serverApps.values()){
        _addComponent(serverApp, component);
    }
    return true;
}
/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 *
 * @returns the provider for the service with the matching name
 *
 * @internal
 */ function _getProvider(app, name) {
    const heartbeatController = app.container.getProvider('heartbeat').getImmediate({
        optional: true
    });
    if (heartbeatController) {
        void heartbeatController.triggerHeartbeat();
    }
    return app.container.getProvider(name);
}
/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 * @param instanceIdentifier - service instance identifier in case the service supports multiple instances
 *
 * @internal
 */ function _removeServiceInstance(app, name, instanceIdentifier = DEFAULT_ENTRY_NAME) {
    _getProvider(app, name).clearInstance(instanceIdentifier);
}
/**
 *
 * @param obj - an object of type FirebaseApp or FirebaseOptions.
 *
 * @returns true if the provide object is of type FirebaseApp.
 *
 * @internal
 */ function _isFirebaseApp(obj) {
    return obj.options !== undefined;
}
/**
 *
 * @param obj - an object of type FirebaseApp.
 *
 * @returns true if the provided object is of type FirebaseServerAppImpl.
 *
 * @internal
 */ function _isFirebaseServerApp(obj) {
    return obj.settings !== undefined;
}
/**
 * Test only
 *
 * @internal
 */ function _clearComponents() {
    _components.clear();
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ERRORS = {
    ["no-app" /* AppError.NO_APP */ ]: "No Firebase App '{$appName}' has been created - " + 'call initializeApp() first',
    ["bad-app-name" /* AppError.BAD_APP_NAME */ ]: "Illegal App name: '{$appName}'",
    ["duplicate-app" /* AppError.DUPLICATE_APP */ ]: "Firebase App named '{$appName}' already exists with different options or config",
    ["app-deleted" /* AppError.APP_DELETED */ ]: "Firebase App named '{$appName}' already deleted",
    ["server-app-deleted" /* AppError.SERVER_APP_DELETED */ ]: 'Firebase Server App has been deleted',
    ["no-options" /* AppError.NO_OPTIONS */ ]: 'Need to provide options, when not being deployed to hosting via source.',
    ["invalid-app-argument" /* AppError.INVALID_APP_ARGUMENT */ ]: 'firebase.{$appName}() takes either no argument or a ' + 'Firebase App instance.',
    ["invalid-log-argument" /* AppError.INVALID_LOG_ARGUMENT */ ]: 'First argument to `onLog` must be null or a function.',
    ["idb-open" /* AppError.IDB_OPEN */ ]: 'Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.',
    ["idb-get" /* AppError.IDB_GET */ ]: 'Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.',
    ["idb-set" /* AppError.IDB_WRITE */ ]: 'Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.',
    ["idb-delete" /* AppError.IDB_DELETE */ ]: 'Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.',
    ["finalization-registry-not-supported" /* AppError.FINALIZATION_REGISTRY_NOT_SUPPORTED */ ]: 'FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.',
    ["invalid-server-app-environment" /* AppError.INVALID_SERVER_APP_ENVIRONMENT */ ]: 'FirebaseServerApp is not for use in browser environments.'
};
const ERROR_FACTORY = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorFactory"]('app', 'Firebase', ERRORS);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class FirebaseAppImpl {
    constructor(options, config, container){
        this._isDeleted = false;
        this._options = Object.assign({}, options);
        this._config = Object.assign({}, config);
        this._name = config.name;
        this._automaticDataCollectionEnabled = config.automaticDataCollectionEnabled;
        this._container = container;
        this.container.addComponent(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$component$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"]('app', ()=>this, "PUBLIC" /* ComponentType.PUBLIC */ ));
    }
    get automaticDataCollectionEnabled() {
        this.checkDestroyed();
        return this._automaticDataCollectionEnabled;
    }
    set automaticDataCollectionEnabled(val) {
        this.checkDestroyed();
        this._automaticDataCollectionEnabled = val;
    }
    get name() {
        this.checkDestroyed();
        return this._name;
    }
    get options() {
        this.checkDestroyed();
        return this._options;
    }
    get config() {
        this.checkDestroyed();
        return this._config;
    }
    get container() {
        return this._container;
    }
    get isDeleted() {
        return this._isDeleted;
    }
    set isDeleted(val) {
        this._isDeleted = val;
    }
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */ checkDestroyed() {
        if (this.isDeleted) {
            throw ERROR_FACTORY.create("app-deleted" /* AppError.APP_DELETED */ , {
                appName: this._name
            });
        }
    }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class FirebaseServerAppImpl extends FirebaseAppImpl {
    constructor(options, serverConfig, name, container){
        // Build configuration parameters for the FirebaseAppImpl base class.
        const automaticDataCollectionEnabled = serverConfig.automaticDataCollectionEnabled !== undefined ? serverConfig.automaticDataCollectionEnabled : false;
        // Create the FirebaseAppSettings object for the FirebaseAppImp constructor.
        const config = {
            name,
            automaticDataCollectionEnabled
        };
        if (options.apiKey !== undefined) {
            // Construct the parent FirebaseAppImp object.
            super(options, config, container);
        } else {
            const appImpl = options;
            super(appImpl.options, config, container);
        }
        // Now construct the data for the FirebaseServerAppImpl.
        this._serverConfig = Object.assign({
            automaticDataCollectionEnabled
        }, serverConfig);
        this._finalizationRegistry = null;
        if (typeof FinalizationRegistry !== 'undefined') {
            this._finalizationRegistry = new FinalizationRegistry(()=>{
                this.automaticCleanup();
            });
        }
        this._refCount = 0;
        this.incRefCount(this._serverConfig.releaseOnDeref);
        // Do not retain a hard reference to the dref object, otherwise the FinalizationRegistry
        // will never trigger.
        this._serverConfig.releaseOnDeref = undefined;
        serverConfig.releaseOnDeref = undefined;
        registerVersion(name$p, version$1, 'serverapp');
    }
    toJSON() {
        return undefined;
    }
    get refCount() {
        return this._refCount;
    }
    // Increment the reference count of this server app. If an object is provided, register it
    // with the finalization registry.
    incRefCount(obj) {
        if (this.isDeleted) {
            return;
        }
        this._refCount++;
        if (obj !== undefined && this._finalizationRegistry !== null) {
            this._finalizationRegistry.register(obj, this);
        }
    }
    // Decrement the reference count.
    decRefCount() {
        if (this.isDeleted) {
            return 0;
        }
        return --this._refCount;
    }
    // Invoked by the FinalizationRegistry callback to note that this app should go through its
    // reference counts and delete itself if no reference count remain. The coordinating logic that
    // handles this is in deleteApp(...).
    automaticCleanup() {
        void deleteApp(this);
    }
    get settings() {
        this.checkDestroyed();
        return this._serverConfig;
    }
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */ checkDestroyed() {
        if (this.isDeleted) {
            throw ERROR_FACTORY.create("server-app-deleted" /* AppError.SERVER_APP_DELETED */ );
        }
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The current SDK version.
 *
 * @public
 */ const SDK_VERSION = version;
function initializeApp(_options, rawConfig = {}) {
    let options = _options;
    if (typeof rawConfig !== 'object') {
        const name = rawConfig;
        rawConfig = {
            name
        };
    }
    const config = Object.assign({
        name: DEFAULT_ENTRY_NAME,
        automaticDataCollectionEnabled: false
    }, rawConfig);
    const name = config.name;
    if (typeof name !== 'string' || !name) {
        throw ERROR_FACTORY.create("bad-app-name" /* AppError.BAD_APP_NAME */ , {
            appName: String(name)
        });
    }
    options || (options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultAppConfig"])());
    if (!options) {
        throw ERROR_FACTORY.create("no-options" /* AppError.NO_OPTIONS */ );
    }
    const existingApp = _apps.get(name);
    if (existingApp) {
        // return the existing app if options and config deep equal the ones in the existing app.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepEqual"])(options, existingApp.options) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepEqual"])(config, existingApp.config)) {
            return existingApp;
        } else {
            throw ERROR_FACTORY.create("duplicate-app" /* AppError.DUPLICATE_APP */ , {
                appName: name
            });
        }
    }
    const container = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$component$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentContainer"](name);
    for (const component of _components.values()){
        container.addComponent(component);
    }
    const newApp = new FirebaseAppImpl(options, config, container);
    _apps.set(name, newApp);
    return newApp;
}
function initializeServerApp(_options, _serverAppConfig) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowser"])() && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWebWorker"])()) {
        // FirebaseServerApp isn't designed to be run in browsers.
        throw ERROR_FACTORY.create("invalid-server-app-environment" /* AppError.INVALID_SERVER_APP_ENVIRONMENT */ );
    }
    if (_serverAppConfig.automaticDataCollectionEnabled === undefined) {
        _serverAppConfig.automaticDataCollectionEnabled = false;
    }
    let appOptions;
    if (_isFirebaseApp(_options)) {
        appOptions = _options.options;
    } else {
        appOptions = _options;
    }
    // Build an app name based on a hash of the configuration options.
    const nameObj = Object.assign(Object.assign({}, _serverAppConfig), appOptions);
    // However, Do not mangle the name based on releaseOnDeref, since it will vary between the
    // construction of FirebaseServerApp instances. For example, if the object is the request headers.
    if (nameObj.releaseOnDeref !== undefined) {
        delete nameObj.releaseOnDeref;
    }
    const hashCode = (s)=>{
        return [
            ...s
        ].reduce((hash, c)=>Math.imul(31, hash) + c.charCodeAt(0) | 0, 0);
    };
    if (_serverAppConfig.releaseOnDeref !== undefined) {
        if (typeof FinalizationRegistry === 'undefined') {
            throw ERROR_FACTORY.create("finalization-registry-not-supported" /* AppError.FINALIZATION_REGISTRY_NOT_SUPPORTED */ , {});
        }
    }
    const nameString = '' + hashCode(JSON.stringify(nameObj));
    const existingApp = _serverApps.get(nameString);
    if (existingApp) {
        existingApp.incRefCount(_serverAppConfig.releaseOnDeref);
        return existingApp;
    }
    const container = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$component$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentContainer"](nameString);
    for (const component of _components.values()){
        container.addComponent(component);
    }
    const newApp = new FirebaseServerAppImpl(appOptions, _serverAppConfig, nameString, container);
    _serverApps.set(nameString, newApp);
    return newApp;
}
/**
 * Retrieves a {@link @firebase/app#FirebaseApp} instance.
 *
 * When called with no arguments, the default app is returned. When an app name
 * is provided, the app corresponding to that name is returned.
 *
 * An exception is thrown if the app being retrieved has not yet been
 * initialized.
 *
 * @example
 * ```javascript
 * // Return the default app
 * const app = getApp();
 * ```
 *
 * @example
 * ```javascript
 * // Return a named app
 * const otherApp = getApp("otherApp");
 * ```
 *
 * @param name - Optional name of the app to return. If no name is
 *   provided, the default is `"[DEFAULT]"`.
 *
 * @returns The app corresponding to the provided app name.
 *   If no app name is provided, the default app is returned.
 *
 * @public
 */ function getApp(name = DEFAULT_ENTRY_NAME) {
    const app = _apps.get(name);
    if (!app && name === DEFAULT_ENTRY_NAME && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultAppConfig"])()) {
        return initializeApp();
    }
    if (!app) {
        throw ERROR_FACTORY.create("no-app" /* AppError.NO_APP */ , {
            appName: name
        });
    }
    return app;
}
/**
 * A (read-only) array of all initialized apps.
 * @public
 */ function getApps() {
    return Array.from(_apps.values());
}
/**
 * Renders this app unusable and frees the resources of all associated
 * services.
 *
 * @example
 * ```javascript
 * deleteApp(app)
 *   .then(function() {
 *     console.log("App deleted successfully");
 *   })
 *   .catch(function(error) {
 *     console.log("Error deleting app:", error);
 *   });
 * ```
 *
 * @public
 */ async function deleteApp(app) {
    let cleanupProviders = false;
    const name = app.name;
    if (_apps.has(name)) {
        cleanupProviders = true;
        _apps.delete(name);
    } else if (_serverApps.has(name)) {
        const firebaseServerApp = app;
        if (firebaseServerApp.decRefCount() <= 0) {
            _serverApps.delete(name);
            cleanupProviders = true;
        }
    }
    if (cleanupProviders) {
        await Promise.all(app.container.getProviders().map((provider)=>provider.delete()));
        app.isDeleted = true;
    }
}
/**
 * Registers a library's name and version for platform logging purposes.
 * @param library - Name of 1p or 3p library (e.g. firestore, angularfire)
 * @param version - Current version of that library.
 * @param variant - Bundle variant, e.g., node, rn, etc.
 *
 * @public
 */ function registerVersion(libraryKeyOrName, version, variant) {
    var _a;
    // TODO: We can use this check to whitelist strings when/if we set up
    // a good whitelist system.
    let library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
    if (variant) {
        library += `-${variant}`;
    }
    const libraryMismatch = library.match(/\s|\//);
    const versionMismatch = version.match(/\s|\//);
    if (libraryMismatch || versionMismatch) {
        const warning = [
            `Unable to register library "${library}" with version "${version}":`
        ];
        if (libraryMismatch) {
            warning.push(`library name "${library}" contains illegal characters (whitespace or "/")`);
        }
        if (libraryMismatch && versionMismatch) {
            warning.push('and');
        }
        if (versionMismatch) {
            warning.push(`version name "${version}" contains illegal characters (whitespace or "/")`);
        }
        logger.warn(warning.join(' '));
        return;
    }
    _registerComponent(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$component$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"](`${library}-version`, ()=>({
            library,
            version
        }), "VERSION" /* ComponentType.VERSION */ ));
}
/**
 * Sets log handler for all Firebase SDKs.
 * @param logCallback - An optional custom log handler that executes user code whenever
 * the Firebase SDK makes a logging call.
 *
 * @public
 */ function onLog(logCallback, options) {
    if (logCallback !== null && typeof logCallback !== 'function') {
        throw ERROR_FACTORY.create("invalid-log-argument" /* AppError.INVALID_LOG_ARGUMENT */ );
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$logger$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setUserLogHandler"])(logCallback, options);
}
/**
 * Sets log level for all Firebase SDKs.
 *
 * All of the log types above the current log level are captured (i.e. if
 * you set the log level to `info`, errors are logged, but `debug` and
 * `verbose` logs are not).
 *
 * @public
 */ function setLogLevel(logLevel) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$logger$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLogLevel"])(logLevel);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const DB_NAME = 'firebase-heartbeat-database';
const DB_VERSION = 1;
const STORE_NAME = 'firebase-heartbeat-store';
let dbPromise = null;
function getDbPromise() {
    if (!dbPromise) {
        dbPromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$idb$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["openDB"])(DB_NAME, DB_VERSION, {
            upgrade: (db, oldVersion)=>{
                // We don't use 'break' in this switch statement, the fall-through
                // behavior is what we want, because if there are multiple versions between
                // the old version and the current version, we want ALL the migrations
                // that correspond to those versions to run, not only the last one.
                // eslint-disable-next-line default-case
                switch(oldVersion){
                    case 0:
                        try {
                            db.createObjectStore(STORE_NAME);
                        } catch (e) {
                            // Safari/iOS browsers throw occasional exceptions on
                            // db.createObjectStore() that may be a bug. Avoid blocking
                            // the rest of the app functionality.
                            console.warn(e);
                        }
                }
            }
        }).catch((e)=>{
            throw ERROR_FACTORY.create("idb-open" /* AppError.IDB_OPEN */ , {
                originalErrorMessage: e.message
            });
        });
    }
    return dbPromise;
}
async function readHeartbeatsFromIndexedDB(app) {
    try {
        const db = await getDbPromise();
        const tx = db.transaction(STORE_NAME);
        const result = await tx.objectStore(STORE_NAME).get(computeKey(app));
        // We already have the value but tx.done can throw,
        // so we need to await it here to catch errors
        await tx.done;
        return result;
    } catch (e) {
        if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FirebaseError"]) {
            logger.warn(e.message);
        } else {
            const idbGetError = ERROR_FACTORY.create("idb-get" /* AppError.IDB_GET */ , {
                originalErrorMessage: e === null || e === void 0 ? void 0 : e.message
            });
            logger.warn(idbGetError.message);
        }
    }
}
async function writeHeartbeatsToIndexedDB(app, heartbeatObject) {
    try {
        const db = await getDbPromise();
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const objectStore = tx.objectStore(STORE_NAME);
        await objectStore.put(heartbeatObject, computeKey(app));
        await tx.done;
    } catch (e) {
        if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FirebaseError"]) {
            logger.warn(e.message);
        } else {
            const idbGetError = ERROR_FACTORY.create("idb-set" /* AppError.IDB_WRITE */ , {
                originalErrorMessage: e === null || e === void 0 ? void 0 : e.message
            });
            logger.warn(idbGetError.message);
        }
    }
}
function computeKey(app) {
    return `${app.name}!${app.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const MAX_HEADER_BYTES = 1024;
// 30 days
const STORED_HEARTBEAT_RETENTION_MAX_MILLIS = 30 * 24 * 60 * 60 * 1000;
class HeartbeatServiceImpl {
    constructor(container){
        this.container = container;
        /**
         * In-memory cache for heartbeats, used by getHeartbeatsHeader() to generate
         * the header string.
         * Stores one record per date. This will be consolidated into the standard
         * format of one record per user agent string before being sent as a header.
         * Populated from indexedDB when the controller is instantiated and should
         * be kept in sync with indexedDB.
         * Leave public for easier testing.
         */ this._heartbeatsCache = null;
        const app = this.container.getProvider('app').getImmediate();
        this._storage = new HeartbeatStorageImpl(app);
        this._heartbeatsCachePromise = this._storage.read().then((result)=>{
            this._heartbeatsCache = result;
            return result;
        });
    }
    /**
     * Called to report a heartbeat. The function will generate
     * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
     * to IndexedDB.
     * Note that we only store one heartbeat per day. So if a heartbeat for today is
     * already logged, subsequent calls to this function in the same day will be ignored.
     */ async triggerHeartbeat() {
        var _a, _b;
        const platformLogger = this.container.getProvider('platform-logger').getImmediate();
        // This is the "Firebase user agent" string from the platform logger
        // service, not the browser user agent.
        const agent = platformLogger.getPlatformInfoString();
        const date = getUTCDateString();
        if (((_a = this._heartbeatsCache) === null || _a === void 0 ? void 0 : _a.heartbeats) == null) {
            this._heartbeatsCache = await this._heartbeatsCachePromise;
            // If we failed to construct a heartbeats cache, then return immediately.
            if (((_b = this._heartbeatsCache) === null || _b === void 0 ? void 0 : _b.heartbeats) == null) {
                return;
            }
        }
        // Do not store a heartbeat if one is already stored for this day
        // or if a header has already been sent today.
        if (this._heartbeatsCache.lastSentHeartbeatDate === date || this._heartbeatsCache.heartbeats.some((singleDateHeartbeat)=>singleDateHeartbeat.date === date)) {
            return;
        } else {
            // There is no entry for this date. Create one.
            this._heartbeatsCache.heartbeats.push({
                date,
                agent
            });
        }
        // Remove entries older than 30 days.
        this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((singleDateHeartbeat)=>{
            const hbTimestamp = new Date(singleDateHeartbeat.date).valueOf();
            const now = Date.now();
            return now - hbTimestamp <= STORED_HEARTBEAT_RETENTION_MAX_MILLIS;
        });
        return this._storage.overwrite(this._heartbeatsCache);
    }
    /**
     * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
     * It also clears all heartbeats from memory as well as in IndexedDB.
     *
     * NOTE: Consuming product SDKs should not send the header if this method
     * returns an empty string.
     */ async getHeartbeatsHeader() {
        var _a;
        if (this._heartbeatsCache === null) {
            await this._heartbeatsCachePromise;
        }
        // If it's still null or the array is empty, there is no data to send.
        if (((_a = this._heartbeatsCache) === null || _a === void 0 ? void 0 : _a.heartbeats) == null || this._heartbeatsCache.heartbeats.length === 0) {
            return '';
        }
        const date = getUTCDateString();
        // Extract as many heartbeats from the cache as will fit under the size limit.
        const { heartbeatsToSend, unsentEntries } = extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats);
        const headerString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["base64urlEncodeWithoutPadding"])(JSON.stringify({
            version: 2,
            heartbeats: heartbeatsToSend
        }));
        // Store last sent date to prevent another being logged/sent for the same day.
        this._heartbeatsCache.lastSentHeartbeatDate = date;
        if (unsentEntries.length > 0) {
            // Store any unsent entries if they exist.
            this._heartbeatsCache.heartbeats = unsentEntries;
            // This seems more likely than emptying the array (below) to lead to some odd state
            // since the cache isn't empty and this will be called again on the next request,
            // and is probably safest if we await it.
            await this._storage.overwrite(this._heartbeatsCache);
        } else {
            this._heartbeatsCache.heartbeats = [];
            // Do not wait for this, to reduce latency.
            void this._storage.overwrite(this._heartbeatsCache);
        }
        return headerString;
    }
}
function getUTCDateString() {
    const today = new Date();
    // Returns date format 'YYYY-MM-DD'
    return today.toISOString().substring(0, 10);
}
function extractHeartbeatsForHeader(heartbeatsCache, maxSize = MAX_HEADER_BYTES) {
    // Heartbeats grouped by user agent in the standard format to be sent in
    // the header.
    const heartbeatsToSend = [];
    // Single date format heartbeats that are not sent.
    let unsentEntries = heartbeatsCache.slice();
    for (const singleDateHeartbeat of heartbeatsCache){
        // Look for an existing entry with the same user agent.
        const heartbeatEntry = heartbeatsToSend.find((hb)=>hb.agent === singleDateHeartbeat.agent);
        if (!heartbeatEntry) {
            // If no entry for this user agent exists, create one.
            heartbeatsToSend.push({
                agent: singleDateHeartbeat.agent,
                dates: [
                    singleDateHeartbeat.date
                ]
            });
            if (countBytes(heartbeatsToSend) > maxSize) {
                // If the header would exceed max size, remove the added heartbeat
                // entry and stop adding to the header.
                heartbeatsToSend.pop();
                break;
            }
        } else {
            heartbeatEntry.dates.push(singleDateHeartbeat.date);
            // If the header would exceed max size, remove the added date
            // and stop adding to the header.
            if (countBytes(heartbeatsToSend) > maxSize) {
                heartbeatEntry.dates.pop();
                break;
            }
        }
        // Pop unsent entry from queue. (Skipped if adding the entry exceeded
        // quota and the loop breaks early.)
        unsentEntries = unsentEntries.slice(1);
    }
    return {
        heartbeatsToSend,
        unsentEntries
    };
}
class HeartbeatStorageImpl {
    constructor(app){
        this.app = app;
        this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
    }
    async runIndexedDBEnvironmentCheck() {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIndexedDBAvailable"])()) {
            return false;
        } else {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateIndexedDBOpenable"])().then(()=>true).catch(()=>false);
        }
    }
    /**
     * Read all heartbeats.
     */ async read() {
        const canUseIndexedDB = await this._canUseIndexedDBPromise;
        if (!canUseIndexedDB) {
            return {
                heartbeats: []
            };
        } else {
            const idbHeartbeatObject = await readHeartbeatsFromIndexedDB(this.app);
            if (idbHeartbeatObject === null || idbHeartbeatObject === void 0 ? void 0 : idbHeartbeatObject.heartbeats) {
                return idbHeartbeatObject;
            } else {
                return {
                    heartbeats: []
                };
            }
        }
    }
    // overwrite the storage with the provided heartbeats
    async overwrite(heartbeatsObject) {
        var _a;
        const canUseIndexedDB = await this._canUseIndexedDBPromise;
        if (!canUseIndexedDB) {
            return;
        } else {
            const existingHeartbeatsObject = await this.read();
            return writeHeartbeatsToIndexedDB(this.app, {
                lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
                heartbeats: heartbeatsObject.heartbeats
            });
        }
    }
    // add heartbeats
    async add(heartbeatsObject) {
        var _a;
        const canUseIndexedDB = await this._canUseIndexedDBPromise;
        if (!canUseIndexedDB) {
            return;
        } else {
            const existingHeartbeatsObject = await this.read();
            return writeHeartbeatsToIndexedDB(this.app, {
                lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
                heartbeats: [
                    ...existingHeartbeatsObject.heartbeats,
                    ...heartbeatsObject.heartbeats
                ]
            });
        }
    }
}
/**
 * Calculate bytes of a HeartbeatsByUserAgent array after being wrapped
 * in a platform logging header JSON object, stringified, and converted
 * to base 64.
 */ function countBytes(heartbeatsCache) {
    // base64 has a restricted set of characters, all of which should be 1 byte.
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["base64urlEncodeWithoutPadding"])(// heartbeatsCache wrapper properties
    JSON.stringify({
        version: 2,
        heartbeats: heartbeatsCache
    })).length;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function registerCoreComponents(variant) {
    _registerComponent(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$component$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"]('platform-logger', (container)=>new PlatformLoggerServiceImpl(container), "PRIVATE" /* ComponentType.PRIVATE */ ));
    _registerComponent(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$component$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"]('heartbeat', (container)=>new HeartbeatServiceImpl(container), "PRIVATE" /* ComponentType.PRIVATE */ ));
    // Register `app` package.
    registerVersion(name$p, version$1, variant);
    // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
    registerVersion(name$p, version$1, 'esm2017');
    // Register platform SDK identifier (no version).
    registerVersion('fire-js', '');
}
/**
 * Firebase App
 *
 * @remarks This package coordinates the communication between the different Firebase components
 * @packageDocumentation
 */ registerCoreComponents('');
;
 //# sourceMappingURL=index.esm2017.js.map

})()),
"[project]/node_modules/@firebase/app/dist/esm/index.esm2017.js [app-client] (ecmascript) <module evaluation>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {
"use strict";

__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$component$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@firebase/component/dist/esm/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$logger$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@firebase/logger/dist/esm/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@firebase/util/dist/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$idb$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/idb/build/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@firebase/app/dist/esm/index.esm2017.js [app-client] (ecmascript) <locals>");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/node_modules/@firebase/webchannel-wrapper/dist/bloom-blob/esm/bloom_blob_es2018.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Integer": ()=>Integer,
    "Md5": ()=>Md5,
    "default": ()=>bloom_blob_es2018
});
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
var bloom_blob_es2018 = {};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/ var Integer;
var Md5;
(function() {
    var h; /** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/ 
    function k(f, a) {
        function c() {}
        c.prototype = a.prototype;
        f.D = a.prototype;
        f.prototype = new c;
        f.prototype.constructor = f;
        f.C = function(d, e, g) {
            for(var b = Array(arguments.length - 2), r = 2; r < arguments.length; r++)b[r - 2] = arguments[r];
            return a.prototype[e].apply(d, b);
        };
    }
    function l() {
        this.blockSize = -1;
    }
    function m() {
        this.blockSize = -1;
        this.blockSize = 64;
        this.g = Array(4);
        this.B = Array(this.blockSize);
        this.o = this.h = 0;
        this.s();
    }
    k(m, l);
    m.prototype.s = function() {
        this.g[0] = 1732584193;
        this.g[1] = 4023233417;
        this.g[2] = 2562383102;
        this.g[3] = 271733878;
        this.o = this.h = 0;
    };
    function n(f, a, c) {
        c || (c = 0);
        var d = Array(16);
        if ("string" === typeof a) for(var e = 0; 16 > e; ++e)d[e] = a.charCodeAt(c++) | a.charCodeAt(c++) << 8 | a.charCodeAt(c++) << 16 | a.charCodeAt(c++) << 24;
        else for(e = 0; 16 > e; ++e)d[e] = a[c++] | a[c++] << 8 | a[c++] << 16 | a[c++] << 24;
        a = f.g[0];
        c = f.g[1];
        e = f.g[2];
        var g = f.g[3];
        var b = a + (g ^ c & (e ^ g)) + d[0] + 3614090360 & 4294967295;
        a = c + (b << 7 & 4294967295 | b >>> 25);
        b = g + (e ^ a & (c ^ e)) + d[1] + 3905402710 & 4294967295;
        g = a + (b << 12 & 4294967295 | b >>> 20);
        b = e + (c ^ g & (a ^ c)) + d[2] + 606105819 & 4294967295;
        e = g + (b << 17 & 4294967295 | b >>> 15);
        b = c + (a ^ e & (g ^ a)) + d[3] + 3250441966 & 4294967295;
        c = e + (b << 22 & 4294967295 | b >>> 10);
        b = a + (g ^ c & (e ^ g)) + d[4] + 4118548399 & 4294967295;
        a = c + (b << 7 & 4294967295 | b >>> 25);
        b = g + (e ^ a & (c ^ e)) + d[5] + 1200080426 & 4294967295;
        g = a + (b << 12 & 4294967295 | b >>> 20);
        b = e + (c ^ g & (a ^ c)) + d[6] + 2821735955 & 4294967295;
        e = g + (b << 17 & 4294967295 | b >>> 15);
        b = c + (a ^ e & (g ^ a)) + d[7] + 4249261313 & 4294967295;
        c = e + (b << 22 & 4294967295 | b >>> 10);
        b = a + (g ^ c & (e ^ g)) + d[8] + 1770035416 & 4294967295;
        a = c + (b << 7 & 4294967295 | b >>> 25);
        b = g + (e ^ a & (c ^ e)) + d[9] + 2336552879 & 4294967295;
        g = a + (b << 12 & 4294967295 | b >>> 20);
        b = e + (c ^ g & (a ^ c)) + d[10] + 4294925233 & 4294967295;
        e = g + (b << 17 & 4294967295 | b >>> 15);
        b = c + (a ^ e & (g ^ a)) + d[11] + 2304563134 & 4294967295;
        c = e + (b << 22 & 4294967295 | b >>> 10);
        b = a + (g ^ c & (e ^ g)) + d[12] + 1804603682 & 4294967295;
        a = c + (b << 7 & 4294967295 | b >>> 25);
        b = g + (e ^ a & (c ^ e)) + d[13] + 4254626195 & 4294967295;
        g = a + (b << 12 & 4294967295 | b >>> 20);
        b = e + (c ^ g & (a ^ c)) + d[14] + 2792965006 & 4294967295;
        e = g + (b << 17 & 4294967295 | b >>> 15);
        b = c + (a ^ e & (g ^ a)) + d[15] + 1236535329 & 4294967295;
        c = e + (b << 22 & 4294967295 | b >>> 10);
        b = a + (e ^ g & (c ^ e)) + d[1] + 4129170786 & 4294967295;
        a = c + (b << 5 & 4294967295 | b >>> 27);
        b = g + (c ^ e & (a ^ c)) + d[6] + 3225465664 & 4294967295;
        g = a + (b << 9 & 4294967295 | b >>> 23);
        b = e + (a ^ c & (g ^ a)) + d[11] + 643717713 & 4294967295;
        e = g + (b << 14 & 4294967295 | b >>> 18);
        b = c + (g ^ a & (e ^ g)) + d[0] + 3921069994 & 4294967295;
        c = e + (b << 20 & 4294967295 | b >>> 12);
        b = a + (e ^ g & (c ^ e)) + d[5] + 3593408605 & 4294967295;
        a = c + (b << 5 & 4294967295 | b >>> 27);
        b = g + (c ^ e & (a ^ c)) + d[10] + 38016083 & 4294967295;
        g = a + (b << 9 & 4294967295 | b >>> 23);
        b = e + (a ^ c & (g ^ a)) + d[15] + 3634488961 & 4294967295;
        e = g + (b << 14 & 4294967295 | b >>> 18);
        b = c + (g ^ a & (e ^ g)) + d[4] + 3889429448 & 4294967295;
        c = e + (b << 20 & 4294967295 | b >>> 12);
        b = a + (e ^ g & (c ^ e)) + d[9] + 568446438 & 4294967295;
        a = c + (b << 5 & 4294967295 | b >>> 27);
        b = g + (c ^ e & (a ^ c)) + d[14] + 3275163606 & 4294967295;
        g = a + (b << 9 & 4294967295 | b >>> 23);
        b = e + (a ^ c & (g ^ a)) + d[3] + 4107603335 & 4294967295;
        e = g + (b << 14 & 4294967295 | b >>> 18);
        b = c + (g ^ a & (e ^ g)) + d[8] + 1163531501 & 4294967295;
        c = e + (b << 20 & 4294967295 | b >>> 12);
        b = a + (e ^ g & (c ^ e)) + d[13] + 2850285829 & 4294967295;
        a = c + (b << 5 & 4294967295 | b >>> 27);
        b = g + (c ^ e & (a ^ c)) + d[2] + 4243563512 & 4294967295;
        g = a + (b << 9 & 4294967295 | b >>> 23);
        b = e + (a ^ c & (g ^ a)) + d[7] + 1735328473 & 4294967295;
        e = g + (b << 14 & 4294967295 | b >>> 18);
        b = c + (g ^ a & (e ^ g)) + d[12] + 2368359562 & 4294967295;
        c = e + (b << 20 & 4294967295 | b >>> 12);
        b = a + (c ^ e ^ g) + d[5] + 4294588738 & 4294967295;
        a = c + (b << 4 & 4294967295 | b >>> 28);
        b = g + (a ^ c ^ e) + d[8] + 2272392833 & 4294967295;
        g = a + (b << 11 & 4294967295 | b >>> 21);
        b = e + (g ^ a ^ c) + d[11] + 1839030562 & 4294967295;
        e = g + (b << 16 & 4294967295 | b >>> 16);
        b = c + (e ^ g ^ a) + d[14] + 4259657740 & 4294967295;
        c = e + (b << 23 & 4294967295 | b >>> 9);
        b = a + (c ^ e ^ g) + d[1] + 2763975236 & 4294967295;
        a = c + (b << 4 & 4294967295 | b >>> 28);
        b = g + (a ^ c ^ e) + d[4] + 1272893353 & 4294967295;
        g = a + (b << 11 & 4294967295 | b >>> 21);
        b = e + (g ^ a ^ c) + d[7] + 4139469664 & 4294967295;
        e = g + (b << 16 & 4294967295 | b >>> 16);
        b = c + (e ^ g ^ a) + d[10] + 3200236656 & 4294967295;
        c = e + (b << 23 & 4294967295 | b >>> 9);
        b = a + (c ^ e ^ g) + d[13] + 681279174 & 4294967295;
        a = c + (b << 4 & 4294967295 | b >>> 28);
        b = g + (a ^ c ^ e) + d[0] + 3936430074 & 4294967295;
        g = a + (b << 11 & 4294967295 | b >>> 21);
        b = e + (g ^ a ^ c) + d[3] + 3572445317 & 4294967295;
        e = g + (b << 16 & 4294967295 | b >>> 16);
        b = c + (e ^ g ^ a) + d[6] + 76029189 & 4294967295;
        c = e + (b << 23 & 4294967295 | b >>> 9);
        b = a + (c ^ e ^ g) + d[9] + 3654602809 & 4294967295;
        a = c + (b << 4 & 4294967295 | b >>> 28);
        b = g + (a ^ c ^ e) + d[12] + 3873151461 & 4294967295;
        g = a + (b << 11 & 4294967295 | b >>> 21);
        b = e + (g ^ a ^ c) + d[15] + 530742520 & 4294967295;
        e = g + (b << 16 & 4294967295 | b >>> 16);
        b = c + (e ^ g ^ a) + d[2] + 3299628645 & 4294967295;
        c = e + (b << 23 & 4294967295 | b >>> 9);
        b = a + (e ^ (c | ~g)) + d[0] + 4096336452 & 4294967295;
        a = c + (b << 6 & 4294967295 | b >>> 26);
        b = g + (c ^ (a | ~e)) + d[7] + 1126891415 & 4294967295;
        g = a + (b << 10 & 4294967295 | b >>> 22);
        b = e + (a ^ (g | ~c)) + d[14] + 2878612391 & 4294967295;
        e = g + (b << 15 & 4294967295 | b >>> 17);
        b = c + (g ^ (e | ~a)) + d[5] + 4237533241 & 4294967295;
        c = e + (b << 21 & 4294967295 | b >>> 11);
        b = a + (e ^ (c | ~g)) + d[12] + 1700485571 & 4294967295;
        a = c + (b << 6 & 4294967295 | b >>> 26);
        b = g + (c ^ (a | ~e)) + d[3] + 2399980690 & 4294967295;
        g = a + (b << 10 & 4294967295 | b >>> 22);
        b = e + (a ^ (g | ~c)) + d[10] + 4293915773 & 4294967295;
        e = g + (b << 15 & 4294967295 | b >>> 17);
        b = c + (g ^ (e | ~a)) + d[1] + 2240044497 & 4294967295;
        c = e + (b << 21 & 4294967295 | b >>> 11);
        b = a + (e ^ (c | ~g)) + d[8] + 1873313359 & 4294967295;
        a = c + (b << 6 & 4294967295 | b >>> 26);
        b = g + (c ^ (a | ~e)) + d[15] + 4264355552 & 4294967295;
        g = a + (b << 10 & 4294967295 | b >>> 22);
        b = e + (a ^ (g | ~c)) + d[6] + 2734768916 & 4294967295;
        e = g + (b << 15 & 4294967295 | b >>> 17);
        b = c + (g ^ (e | ~a)) + d[13] + 1309151649 & 4294967295;
        c = e + (b << 21 & 4294967295 | b >>> 11);
        b = a + (e ^ (c | ~g)) + d[4] + 4149444226 & 4294967295;
        a = c + (b << 6 & 4294967295 | b >>> 26);
        b = g + (c ^ (a | ~e)) + d[11] + 3174756917 & 4294967295;
        g = a + (b << 10 & 4294967295 | b >>> 22);
        b = e + (a ^ (g | ~c)) + d[2] + 718787259 & 4294967295;
        e = g + (b << 15 & 4294967295 | b >>> 17);
        b = c + (g ^ (e | ~a)) + d[9] + 3951481745 & 4294967295;
        f.g[0] = f.g[0] + a & 4294967295;
        f.g[1] = f.g[1] + (e + (b << 21 & 4294967295 | b >>> 11)) & 4294967295;
        f.g[2] = f.g[2] + e & 4294967295;
        f.g[3] = f.g[3] + g & 4294967295;
    }
    m.prototype.u = function(f, a) {
        void 0 === a && (a = f.length);
        for(var c = a - this.blockSize, d = this.B, e = this.h, g = 0; g < a;){
            if (0 == e) for(; g <= c;)n(this, f, g), g += this.blockSize;
            if ("string" === typeof f) for(; g < a;){
                if (d[e++] = f.charCodeAt(g++), e == this.blockSize) {
                    n(this, d);
                    e = 0;
                    break;
                }
            }
            else for(; g < a;)if (d[e++] = f[g++], e == this.blockSize) {
                n(this, d);
                e = 0;
                break;
            }
        }
        this.h = e;
        this.o += a;
    };
    m.prototype.v = function() {
        var f = Array((56 > this.h ? this.blockSize : 2 * this.blockSize) - this.h);
        f[0] = 128;
        for(var a = 1; a < f.length - 8; ++a)f[a] = 0;
        var c = 8 * this.o;
        for(a = f.length - 8; a < f.length; ++a)f[a] = c & 255, c /= 256;
        this.u(f);
        f = Array(16);
        for(a = c = 0; 4 > a; ++a)for(var d = 0; 32 > d; d += 8)f[c++] = this.g[a] >>> d & 255;
        return f;
    };
    function p(f, a) {
        var c = q;
        return Object.prototype.hasOwnProperty.call(c, f) ? c[f] : c[f] = a(f);
    }
    function t(f, a) {
        this.h = a;
        for(var c = [], d = !0, e = f.length - 1; 0 <= e; e--){
            var g = f[e] | 0;
            d && g == a || (c[e] = g, d = !1);
        }
        this.g = c;
    }
    var q = {};
    function u(f) {
        return -128 <= f && 128 > f ? p(f, function(a) {
            return new t([
                a | 0
            ], 0 > a ? -1 : 0);
        }) : new t([
            f | 0
        ], 0 > f ? -1 : 0);
    }
    function v(f) {
        if (isNaN(f) || !isFinite(f)) return w;
        if (0 > f) return x(v(-f));
        for(var a = [], c = 1, d = 0; f >= c; d++)a[d] = f / c | 0, c *= 4294967296;
        return new t(a, 0);
    }
    function y(f, a) {
        if (0 == f.length) throw Error("number format error: empty string");
        a = a || 10;
        if (2 > a || 36 < a) throw Error("radix out of range: " + a);
        if ("-" == f.charAt(0)) return x(y(f.substring(1), a));
        if (0 <= f.indexOf("-")) throw Error('number format error: interior "-" character');
        for(var c = v(Math.pow(a, 8)), d = w, e = 0; e < f.length; e += 8){
            var g = Math.min(8, f.length - e), b = parseInt(f.substring(e, e + g), a);
            8 > g ? (g = v(Math.pow(a, g)), d = d.j(g).add(v(b))) : (d = d.j(c), d = d.add(v(b)));
        }
        return d;
    }
    var w = u(0), z = u(1), A = u(16777216);
    h = t.prototype;
    h.m = function() {
        if (B(this)) return -x(this).m();
        for(var f = 0, a = 1, c = 0; c < this.g.length; c++){
            var d = this.i(c);
            f += (0 <= d ? d : 4294967296 + d) * a;
            a *= 4294967296;
        }
        return f;
    };
    h.toString = function(f) {
        f = f || 10;
        if (2 > f || 36 < f) throw Error("radix out of range: " + f);
        if (C(this)) return "0";
        if (B(this)) return "-" + x(this).toString(f);
        for(var a = v(Math.pow(f, 6)), c = this, d = "";;){
            var e = D(c, a).g;
            c = F(c, e.j(a));
            var g = ((0 < c.g.length ? c.g[0] : c.h) >>> 0).toString(f);
            c = e;
            if (C(c)) return g + d;
            for(; 6 > g.length;)g = "0" + g;
            d = g + d;
        }
    };
    h.i = function(f) {
        return 0 > f ? 0 : f < this.g.length ? this.g[f] : this.h;
    };
    function C(f) {
        if (0 != f.h) return !1;
        for(var a = 0; a < f.g.length; a++)if (0 != f.g[a]) return !1;
        return !0;
    }
    function B(f) {
        return -1 == f.h;
    }
    h.l = function(f) {
        f = F(this, f);
        return B(f) ? -1 : C(f) ? 0 : 1;
    };
    function x(f) {
        for(var a = f.g.length, c = [], d = 0; d < a; d++)c[d] = ~f.g[d];
        return new t(c, ~f.h).add(z);
    }
    h.abs = function() {
        return B(this) ? x(this) : this;
    };
    h.add = function(f) {
        for(var a = Math.max(this.g.length, f.g.length), c = [], d = 0, e = 0; e <= a; e++){
            var g = d + (this.i(e) & 65535) + (f.i(e) & 65535), b = (g >>> 16) + (this.i(e) >>> 16) + (f.i(e) >>> 16);
            d = b >>> 16;
            g &= 65535;
            b &= 65535;
            c[e] = b << 16 | g;
        }
        return new t(c, c[c.length - 1] & -2147483648 ? -1 : 0);
    };
    function F(f, a) {
        return f.add(x(a));
    }
    h.j = function(f) {
        if (C(this) || C(f)) return w;
        if (B(this)) return B(f) ? x(this).j(x(f)) : x(x(this).j(f));
        if (B(f)) return x(this.j(x(f)));
        if (0 > this.l(A) && 0 > f.l(A)) return v(this.m() * f.m());
        for(var a = this.g.length + f.g.length, c = [], d = 0; d < 2 * a; d++)c[d] = 0;
        for(d = 0; d < this.g.length; d++)for(var e = 0; e < f.g.length; e++){
            var g = this.i(d) >>> 16, b = this.i(d) & 65535, r = f.i(e) >>> 16, E = f.i(e) & 65535;
            c[2 * d + 2 * e] += b * E;
            G(c, 2 * d + 2 * e);
            c[2 * d + 2 * e + 1] += g * E;
            G(c, 2 * d + 2 * e + 1);
            c[2 * d + 2 * e + 1] += b * r;
            G(c, 2 * d + 2 * e + 1);
            c[2 * d + 2 * e + 2] += g * r;
            G(c, 2 * d + 2 * e + 2);
        }
        for(d = 0; d < a; d++)c[d] = c[2 * d + 1] << 16 | c[2 * d];
        for(d = a; d < 2 * a; d++)c[d] = 0;
        return new t(c, 0);
    };
    function G(f, a) {
        for(; (f[a] & 65535) != f[a];)f[a + 1] += f[a] >>> 16, f[a] &= 65535, a++;
    }
    function H(f, a) {
        this.g = f;
        this.h = a;
    }
    function D(f, a) {
        if (C(a)) throw Error("division by zero");
        if (C(f)) return new H(w, w);
        if (B(f)) return a = D(x(f), a), new H(x(a.g), x(a.h));
        if (B(a)) return a = D(f, x(a)), new H(x(a.g), a.h);
        if (30 < f.g.length) {
            if (B(f) || B(a)) throw Error("slowDivide_ only works with positive integers.");
            for(var c = z, d = a; 0 >= d.l(f);)c = I(c), d = I(d);
            var e = J(c, 1), g = J(d, 1);
            d = J(d, 2);
            for(c = J(c, 2); !C(d);){
                var b = g.add(d);
                0 >= b.l(f) && (e = e.add(c), g = b);
                d = J(d, 1);
                c = J(c, 1);
            }
            a = F(f, e.j(a));
            return new H(e, a);
        }
        for(e = w; 0 <= f.l(a);){
            c = Math.max(1, Math.floor(f.m() / a.m()));
            d = Math.ceil(Math.log(c) / Math.LN2);
            d = 48 >= d ? 1 : Math.pow(2, d - 48);
            g = v(c);
            for(b = g.j(a); B(b) || 0 < b.l(f);)c -= d, g = v(c), b = g.j(a);
            C(g) && (g = z);
            e = e.add(g);
            f = F(f, b);
        }
        return new H(e, f);
    }
    h.A = function(f) {
        return D(this, f).h;
    };
    h.and = function(f) {
        for(var a = Math.max(this.g.length, f.g.length), c = [], d = 0; d < a; d++)c[d] = this.i(d) & f.i(d);
        return new t(c, this.h & f.h);
    };
    h.or = function(f) {
        for(var a = Math.max(this.g.length, f.g.length), c = [], d = 0; d < a; d++)c[d] = this.i(d) | f.i(d);
        return new t(c, this.h | f.h);
    };
    h.xor = function(f) {
        for(var a = Math.max(this.g.length, f.g.length), c = [], d = 0; d < a; d++)c[d] = this.i(d) ^ f.i(d);
        return new t(c, this.h ^ f.h);
    };
    function I(f) {
        for(var a = f.g.length + 1, c = [], d = 0; d < a; d++)c[d] = f.i(d) << 1 | f.i(d - 1) >>> 31;
        return new t(c, f.h);
    }
    function J(f, a) {
        var c = a >> 5;
        a %= 32;
        for(var d = f.g.length - c, e = [], g = 0; g < d; g++)e[g] = 0 < a ? f.i(g + c) >>> a | f.i(g + c + 1) << 32 - a : f.i(g + c);
        return new t(e, f.h);
    }
    m.prototype.digest = m.prototype.v;
    m.prototype.reset = m.prototype.s;
    m.prototype.update = m.prototype.u;
    Md5 = bloom_blob_es2018.Md5 = m;
    t.prototype.add = t.prototype.add;
    t.prototype.multiply = t.prototype.j;
    t.prototype.modulo = t.prototype.A;
    t.prototype.compare = t.prototype.l;
    t.prototype.toNumber = t.prototype.m;
    t.prototype.toString = t.prototype.toString;
    t.prototype.getBits = t.prototype.i;
    t.fromNumber = v;
    t.fromString = y;
    Integer = bloom_blob_es2018.Integer = t;
}).apply(typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {});
;
 //# sourceMappingURL=bloom_blob_es2018.js.map

})()),
"[project]/node_modules/@firebase/webchannel-wrapper/dist/webchannel-blob/esm/webchannel_blob_es2018.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ErrorCode": ()=>ErrorCode,
    "Event": ()=>Event,
    "EventType": ()=>EventType,
    "FetchXmlHttpFactory": ()=>FetchXmlHttpFactory,
    "Stat": ()=>Stat,
    "WebChannel": ()=>WebChannel,
    "XhrIo": ()=>XhrIo,
    "createWebChannelTransport": ()=>createWebChannelTransport,
    "default": ()=>webchannel_blob_es2018,
    "getStatEventTarget": ()=>getStatEventTarget
});
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
var webchannel_blob_es2018 = {};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/ var XhrIo;
var FetchXmlHttpFactory;
var WebChannel;
var EventType;
var ErrorCode;
var Stat;
var Event;
var getStatEventTarget;
var createWebChannelTransport;
(function() {
    var h, aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a;
    };
    function ba(a) {
        a = [
            "object" == typeof globalThis && globalThis,
            a,
            "object" == typeof window && window,
            "object" == typeof self && self,
            "object" == typeof commonjsGlobal && commonjsGlobal
        ];
        for(var b = 0; b < a.length; ++b){
            var c = a[b];
            if (c && c.Math == Math) return c;
        }
        throw Error("Cannot find global object");
    }
    var ca = ba(this);
    function da(a, b) {
        if (b) a: {
            var c = ca;
            a = a.split(".");
            for(var d = 0; d < a.length - 1; d++){
                var e = a[d];
                if (!(e in c)) break a;
                c = c[e];
            }
            a = a[a.length - 1];
            d = c[a];
            b = b(d);
            b != d && null != b && aa(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            });
        }
    }
    function ea(a, b) {
        a instanceof String && (a += "");
        var c = 0, d = !1, e = {
            next: function() {
                if (!d && c < a.length) {
                    var f = c++;
                    return {
                        value: b(f, a[f]),
                        done: !1
                    };
                }
                d = !0;
                return {
                    done: !0,
                    value: void 0
                };
            }
        };
        e[Symbol.iterator] = function() {
            return e;
        };
        return e;
    }
    da("Array.prototype.values", function(a) {
        return a ? a : function() {
            return ea(this, function(b, c) {
                return c;
            });
        };
    }); /** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/ 
    var fa = fa || {}, k = this || self;
    function ha(a) {
        var b = typeof a;
        b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
        return "array" == b || "object" == b && "number" == typeof a.length;
    }
    function n(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b;
    }
    function ia(a, b, c) {
        return a.call.apply(a.bind, arguments);
    }
    function ja(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e);
            };
        }
        return function() {
            return a.apply(b, arguments);
        };
    }
    function p(a, b, c) {
        p = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ia : ja;
        return p.apply(null, arguments);
    }
    function ka(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d);
        };
    }
    function r(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.aa = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Qb = function(d, e, f) {
            for(var g = Array(arguments.length - 2), m = 2; m < arguments.length; m++)g[m - 2] = arguments[m];
            return b.prototype[e].apply(d, g);
        };
    }
    function la(a) {
        const b = a.length;
        if (0 < b) {
            const c = Array(b);
            for(let d = 0; d < b; d++)c[d] = a[d];
            return c;
        }
        return [];
    }
    function ma(a, b) {
        for(let c = 1; c < arguments.length; c++){
            const d = arguments[c];
            if (ha(d)) {
                const e = a.length || 0, f = d.length || 0;
                a.length = e + f;
                for(let g = 0; g < f; g++)a[e + g] = d[g];
            } else a.push(d);
        }
    }
    class na {
        constructor(a, b){
            this.i = a;
            this.j = b;
            this.h = 0;
            this.g = null;
        }
        get() {
            let a;
            0 < this.h ? (this.h--, a = this.g, this.g = a.next, a.next = null) : a = this.i();
            return a;
        }
    }
    function t(a) {
        return /^[\s\xa0]*$/.test(a);
    }
    function u() {
        var a = k.navigator;
        return a && (a = a.userAgent) ? a : "";
    }
    function oa(a) {
        oa[" "](a);
        return a;
    }
    oa[" "] = function() {};
    var pa = -1 != u().indexOf("Gecko") && !(-1 != u().toLowerCase().indexOf("webkit") && -1 == u().indexOf("Edge")) && !(-1 != u().indexOf("Trident") || -1 != u().indexOf("MSIE")) && -1 == u().indexOf("Edge");
    function qa(a, b, c) {
        for(const d in a)b.call(c, a[d], d, a);
    }
    function ra(a, b) {
        for(const c in a)b.call(void 0, a[c], c, a);
    }
    function sa(a) {
        const b = {};
        for(const c in a)b[c] = a[c];
        return b;
    }
    const ta = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    function ua(a, b) {
        let c, d;
        for(let e = 1; e < arguments.length; e++){
            d = arguments[e];
            for(c in d)a[c] = d[c];
            for(let f = 0; f < ta.length; f++)c = ta[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
        }
    }
    function va(a) {
        var b = 1;
        a = a.split(":");
        const c = [];
        for(; 0 < b && a.length;)c.push(a.shift()), b--;
        a.length && c.push(a.join(":"));
        return c;
    }
    function wa(a) {
        k.setTimeout(()=>{
            throw a;
        }, 0);
    }
    function xa() {
        var a = za;
        let b = null;
        a.g && (b = a.g, a.g = a.g.next, a.g || (a.h = null), b.next = null);
        return b;
    }
    class Aa {
        constructor(){
            this.h = this.g = null;
        }
        add(a, b) {
            const c = Ba.get();
            c.set(a, b);
            this.h ? this.h.next = c : this.g = c;
            this.h = c;
        }
    }
    var Ba = new na(()=>new Ca, (a)=>a.reset());
    class Ca {
        constructor(){
            this.next = this.g = this.h = null;
        }
        set(a, b) {
            this.h = a;
            this.g = b;
            this.next = null;
        }
        reset() {
            this.next = this.g = this.h = null;
        }
    }
    let x, y = !1, za = new Aa, Ea = ()=>{
        const a = k.Promise.resolve(void 0);
        x = ()=>{
            a.then(Da);
        };
    };
    var Da = ()=>{
        for(var a; a = xa();){
            try {
                a.h.call(a.g);
            } catch (c) {
                wa(c);
            }
            var b = Ba;
            b.j(a);
            100 > b.h && (b.h++, a.next = b.g, b.g = a);
        }
        y = !1;
    };
    function z() {
        this.s = this.s;
        this.C = this.C;
    }
    z.prototype.s = !1;
    z.prototype.ma = function() {
        this.s || (this.s = !0, this.N());
    };
    z.prototype.N = function() {
        if (this.C) for(; this.C.length;)this.C.shift()();
    };
    function A(a, b) {
        this.type = a;
        this.g = this.target = b;
        this.defaultPrevented = !1;
    }
    A.prototype.h = function() {
        this.defaultPrevented = !0;
    };
    var Fa = function() {
        if (!k.addEventListener || !Object.defineProperty) return !1;
        var a = !1, b = Object.defineProperty({}, "passive", {
            get: function() {
                a = !0;
            }
        });
        try {
            const c = ()=>{};
            k.addEventListener("test", c, b);
            k.removeEventListener("test", c, b);
        } catch (c) {}
        return a;
    }();
    function C(a, b) {
        A.call(this, a ? a.type : "");
        this.relatedTarget = this.g = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.i = null;
        if (a) {
            var c = this.type = a.type, d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.g = b;
            if (b = a.relatedTarget) {
                if (pa) {
                    a: {
                        try {
                            oa(b.nodeName);
                            var e = !0;
                            break a;
                        } catch (f) {}
                        e = !1;
                    }
                    e || (b = null);
                }
            } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
            this.relatedTarget = b;
            d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
            this.button = a.button;
            this.key = a.key || "";
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.pointerId = a.pointerId || 0;
            this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Ga[a.pointerType] || "";
            this.state = a.state;
            this.i = a;
            a.defaultPrevented && C.aa.h.call(this);
        }
    }
    r(C, A);
    var Ga = {
        2: "touch",
        3: "pen",
        4: "mouse"
    };
    C.prototype.h = function() {
        C.aa.h.call(this);
        var a = this.i;
        a.preventDefault ? a.preventDefault() : a.returnValue = !1;
    };
    var D = "closure_listenable_" + (1E6 * Math.random() | 0);
    var Ha = 0;
    function Ia(a, b, c, d, e) {
        this.listener = a;
        this.proxy = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.ha = e;
        this.key = ++Ha;
        this.da = this.fa = !1;
    }
    function Ja(a) {
        a.da = !0;
        a.listener = null;
        a.proxy = null;
        a.src = null;
        a.ha = null;
    }
    function Ka(a) {
        this.src = a;
        this.g = {};
        this.h = 0;
    }
    Ka.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.g[f];
        a || (a = this.g[f] = [], this.h++);
        var g = La(a, b, d, e);
        -1 < g ? (b = a[g], c || (b.fa = !1)) : (b = new Ia(b, this.src, f, !!d, e), b.fa = c, a.push(b));
        return b;
    };
    function Ma(a, b) {
        var c = b.type;
        if (c in a.g) {
            var d = a.g[c], e = Array.prototype.indexOf.call(d, b, void 0), f;
            (f = 0 <= e) && Array.prototype.splice.call(d, e, 1);
            f && (Ja(b), 0 == a.g[c].length && (delete a.g[c], a.h--));
        }
    }
    function La(a, b, c, d) {
        for(var e = 0; e < a.length; ++e){
            var f = a[e];
            if (!f.da && f.listener == b && f.capture == !!c && f.ha == d) return e;
        }
        return -1;
    }
    var Na = "closure_lm_" + (1E6 * Math.random() | 0), Oa = {};
    function Qa(a, b, c, d, e) {
        if (d && d.once) return Ra(a, b, c, d, e);
        if (Array.isArray(b)) {
            for(var f = 0; f < b.length; f++)Qa(a, b[f], c, d, e);
            return null;
        }
        c = Sa(c);
        return a && a[D] ? a.K(b, c, n(d) ? !!d.capture : !!d, e) : Ta(a, b, c, !1, d, e);
    }
    function Ta(a, b, c, d, e, f) {
        if (!b) throw Error("Invalid event type");
        var g = n(e) ? !!e.capture : !!e, m = Ua(a);
        m || (a[Na] = m = new Ka(a));
        c = m.add(b, c, d, g, f);
        if (c.proxy) return c;
        d = Va();
        c.proxy = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) Fa || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
        else if (a.attachEvent) a.attachEvent(Wa(b.toString()), d);
        else if (a.addListener && a.removeListener) a.addListener(d);
        else throw Error("addEventListener and attachEvent are unavailable.");
        return c;
    }
    function Va() {
        function a(c) {
            return b.call(a.src, a.listener, c);
        }
        const b = Xa;
        return a;
    }
    function Ra(a, b, c, d, e) {
        if (Array.isArray(b)) {
            for(var f = 0; f < b.length; f++)Ra(a, b[f], c, d, e);
            return null;
        }
        c = Sa(c);
        return a && a[D] ? a.L(b, c, n(d) ? !!d.capture : !!d, e) : Ta(a, b, c, !0, d, e);
    }
    function Ya(a, b, c, d, e) {
        if (Array.isArray(b)) for(var f = 0; f < b.length; f++)Ya(a, b[f], c, d, e);
        else (d = n(d) ? !!d.capture : !!d, c = Sa(c), a && a[D]) ? (a = a.i, b = String(b).toString(), b in a.g && (f = a.g[b], c = La(f, c, d, e), -1 < c && (Ja(f[c]), Array.prototype.splice.call(f, c, 1), 0 == f.length && (delete a.g[b], a.h--)))) : a && (a = Ua(a)) && (b = a.g[b.toString()], a = -1, b && (a = La(b, c, d, e)), (c = -1 < a ? b[a] : null) && Za(c));
    }
    function Za(a) {
        if ("number" !== typeof a && a && !a.da) {
            var b = a.src;
            if (b && b[D]) Ma(b.i, a);
            else {
                var c = a.type, d = a.proxy;
                b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Wa(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                (c = Ua(b)) ? (Ma(c, a), 0 == c.h && (c.src = null, b[Na] = null)) : Ja(a);
            }
        }
    }
    function Wa(a) {
        return a in Oa ? Oa[a] : Oa[a] = "on" + a;
    }
    function Xa(a, b) {
        if (a.da) a = !0;
        else {
            b = new C(b, this);
            var c = a.listener, d = a.ha || a.src;
            a.fa && Za(a);
            a = c.call(d, b);
        }
        return a;
    }
    function Ua(a) {
        a = a[Na];
        return a instanceof Ka ? a : null;
    }
    var $a = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
    function Sa(a) {
        if ("function" === typeof a) return a;
        a[$a] || (a[$a] = function(b) {
            return a.handleEvent(b);
        });
        return a[$a];
    }
    function E() {
        z.call(this);
        this.i = new Ka(this);
        this.M = this;
        this.F = null;
    }
    r(E, z);
    E.prototype[D] = !0;
    E.prototype.removeEventListener = function(a, b, c, d) {
        Ya(this, a, b, c, d);
    };
    function F(a, b) {
        var c, d = a.F;
        if (d) for(c = []; d; d = d.F)c.push(d);
        a = a.M;
        d = b.type || b;
        if ("string" === typeof b) b = new A(b, a);
        else if (b instanceof A) b.target = b.target || a;
        else {
            var e = b;
            b = new A(d, a);
            ua(b, e);
        }
        e = !0;
        if (c) for(var f = c.length - 1; 0 <= f; f--){
            var g = b.g = c[f];
            e = ab(g, d, !0, b) && e;
        }
        g = b.g = a;
        e = ab(g, d, !0, b) && e;
        e = ab(g, d, !1, b) && e;
        if (c) for(f = 0; f < c.length; f++)g = b.g = c[f], e = ab(g, d, !1, b) && e;
    }
    E.prototype.N = function() {
        E.aa.N.call(this);
        if (this.i) {
            var a = this.i, c;
            for(c in a.g){
                for(var d = a.g[c], e = 0; e < d.length; e++)Ja(d[e]);
                delete a.g[c];
                a.h--;
            }
        }
        this.F = null;
    };
    E.prototype.K = function(a, b, c, d) {
        return this.i.add(String(a), b, !1, c, d);
    };
    E.prototype.L = function(a, b, c, d) {
        return this.i.add(String(a), b, !0, c, d);
    };
    function ab(a, b, c, d) {
        b = a.i.g[String(b)];
        if (!b) return !0;
        b = b.concat();
        for(var e = !0, f = 0; f < b.length; ++f){
            var g = b[f];
            if (g && !g.da && g.capture == c) {
                var m = g.listener, q = g.ha || g.src;
                g.fa && Ma(a.i, g);
                e = !1 !== m.call(q, d) && e;
            }
        }
        return e && !d.defaultPrevented;
    }
    function bb(a, b, c) {
        if ("function" === typeof a) c && (a = p(a, c));
        else if (a && "function" == typeof a.handleEvent) a = p(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : k.setTimeout(a, b || 0);
    }
    function cb(a) {
        a.g = bb(()=>{
            a.g = null;
            a.i && (a.i = !1, cb(a));
        }, a.l);
        const b = a.h;
        a.h = null;
        a.m.apply(null, b);
    }
    class eb extends z {
        constructor(a, b){
            super();
            this.m = a;
            this.l = b;
            this.h = null;
            this.i = !1;
            this.g = null;
        }
        j(a) {
            this.h = arguments;
            this.g ? this.i = !0 : cb(this);
        }
        N() {
            super.N();
            this.g && (k.clearTimeout(this.g), this.g = null, this.i = !1, this.h = null);
        }
    }
    function G(a) {
        z.call(this);
        this.h = a;
        this.g = {};
    }
    r(G, z);
    var fb = [];
    function gb(a) {
        qa(a.g, function(b, c) {
            this.g.hasOwnProperty(c) && Za(b);
        }, a);
        a.g = {};
    }
    G.prototype.N = function() {
        G.aa.N.call(this);
        gb(this);
    };
    G.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };
    var hb = k.JSON.stringify;
    var ib = k.JSON.parse;
    var jb = class {
        stringify(a) {
            return k.JSON.stringify(a, void 0);
        }
        parse(a) {
            return k.JSON.parse(a, void 0);
        }
    };
    function kb() {}
    kb.prototype.h = null;
    function lb(a) {
        return a.h || (a.h = a.i());
    }
    function mb() {}
    var H = {
        OPEN: "a",
        kb: "b",
        Ja: "c",
        wb: "d"
    };
    function nb() {
        A.call(this, "d");
    }
    r(nb, A);
    function ob() {
        A.call(this, "c");
    }
    r(ob, A);
    var I = {}, pb = null;
    function qb() {
        return pb = pb || new E;
    }
    I.La = "serverreachability";
    function rb(a) {
        A.call(this, I.La, a);
    }
    r(rb, A);
    function J(a) {
        const b = qb();
        F(b, new rb(b));
    }
    I.STAT_EVENT = "statevent";
    function sb(a, b) {
        A.call(this, I.STAT_EVENT, a);
        this.stat = b;
    }
    r(sb, A);
    function K(a) {
        const b = qb();
        F(b, new sb(b, a));
    }
    I.Ma = "timingevent";
    function tb(a, b) {
        A.call(this, I.Ma, a);
        this.size = b;
    }
    r(tb, A);
    function ub(a, b) {
        if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
        return k.setTimeout(function() {
            a();
        }, b);
    }
    function vb() {
        this.g = !0;
    }
    vb.prototype.xa = function() {
        this.g = !1;
    };
    function wb(a, b, c, d, e, f) {
        a.info(function() {
            if (a.g) if (f) {
                var g = "";
                for(var m = f.split("&"), q = 0; q < m.length; q++){
                    var l = m[q].split("=");
                    if (1 < l.length) {
                        var v = l[0];
                        l = l[1];
                        var w = v.split("_");
                        g = 2 <= w.length && "type" == w[1] ? g + (v + "=" + l + "&") : g + (v + "=redacted&");
                    }
                }
            } else g = null;
            else g = f;
            return "XMLHTTP REQ (" + d + ") [attempt " + e + "]: " + b + "\n" + c + "\n" + g;
        });
    }
    function xb(a, b, c, d, e, f, g) {
        a.info(function() {
            return "XMLHTTP RESP (" + d + ") [ attempt " + e + "]: " + b + "\n" + c + "\n" + f + " " + g;
        });
    }
    function L(a, b, c, d) {
        a.info(function() {
            return "XMLHTTP TEXT (" + b + "): " + yb(a, c) + (d ? " " + d : "");
        });
    }
    function zb(a, b) {
        a.info(function() {
            return "TIMEOUT: " + b;
        });
    }
    vb.prototype.info = function() {};
    function yb(a, b) {
        if (!a.g) return b;
        if (!b) return null;
        try {
            var c = JSON.parse(b);
            if (c) {
                for(a = 0; a < c.length; a++)if (Array.isArray(c[a])) {
                    var d = c[a];
                    if (!(2 > d.length)) {
                        var e = d[1];
                        if (Array.isArray(e) && !(1 > e.length)) {
                            var f = e[0];
                            if ("noop" != f && "stop" != f && "close" != f) for(var g = 1; g < e.length; g++)e[g] = "";
                        }
                    }
                }
            }
            return hb(c);
        } catch (m) {
            return b;
        }
    }
    var Ab = {
        NO_ERROR: 0,
        gb: 1,
        tb: 2,
        sb: 3,
        nb: 4,
        rb: 5,
        ub: 6,
        Ia: 7,
        TIMEOUT: 8,
        xb: 9
    };
    var Bb = {
        lb: "complete",
        Hb: "success",
        Ja: "error",
        Ia: "abort",
        zb: "ready",
        Ab: "readystatechange",
        TIMEOUT: "timeout",
        vb: "incrementaldata",
        yb: "progress",
        ob: "downloadprogress",
        Pb: "uploadprogress"
    };
    var Cb;
    function Db() {}
    r(Db, kb);
    Db.prototype.g = function() {
        return new XMLHttpRequest;
    };
    Db.prototype.i = function() {
        return {};
    };
    Cb = new Db;
    function M(a, b, c, d) {
        this.j = a;
        this.i = b;
        this.l = c;
        this.R = d || 1;
        this.U = new G(this);
        this.I = 45E3;
        this.H = null;
        this.o = !1;
        this.m = this.A = this.v = this.L = this.F = this.S = this.B = null;
        this.D = [];
        this.g = null;
        this.C = 0;
        this.s = this.u = null;
        this.X = -1;
        this.J = !1;
        this.O = 0;
        this.M = null;
        this.W = this.K = this.T = this.P = !1;
        this.h = new Eb;
    }
    function Eb() {
        this.i = null;
        this.g = "";
        this.h = !1;
    }
    var Fb = {}, Gb = {};
    function Hb(a, b, c) {
        a.L = 1;
        a.v = Ib(N(b));
        a.m = c;
        a.P = !0;
        Jb(a, null);
    }
    function Jb(a, b) {
        a.F = Date.now();
        Kb(a);
        a.A = N(a.v);
        var c = a.A, d = a.R;
        Array.isArray(d) || (d = [
            String(d)
        ]);
        Lb(c.i, "t", d);
        a.C = 0;
        c = a.j.J;
        a.h = new Eb;
        a.g = Mb(a.j, c ? b : null, !a.m);
        0 < a.O && (a.M = new eb(p(a.Y, a, a.g), a.O));
        b = a.U;
        c = a.g;
        d = a.ca;
        var e = "readystatechange";
        Array.isArray(e) || (e && (fb[0] = e.toString()), e = fb);
        for(var f = 0; f < e.length; f++){
            var g = Qa(c, e[f], d || b.handleEvent, !1, b.h || b);
            if (!g) break;
            b.g[g.key] = g;
        }
        b = a.H ? sa(a.H) : {};
        a.m ? (a.u || (a.u = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.g.ea(a.A, a.u, a.m, b)) : (a.u = "GET", a.g.ea(a.A, a.u, null, b));
        J();
        wb(a.i, a.u, a.A, a.l, a.R, a.m);
    }
    M.prototype.ca = function(a) {
        a = a.target;
        const b = this.M;
        b && 3 == P(a) ? b.j() : this.Y(a);
    };
    M.prototype.Y = function(a) {
        try {
            if (a == this.g) a: {
                const w = P(this.g);
                var b = this.g.Ba();
                const O = this.g.Z();
                if (!(3 > w) && (3 != w || this.g && (this.h.h || this.g.oa() || Nb(this.g)))) {
                    this.J || 4 != w || 7 == b || (8 == b || 0 >= O ? J(3) : J(2));
                    Ob(this);
                    var c = this.g.Z();
                    this.X = c;
                    b: if (Pb(this)) {
                        var d = Nb(this.g);
                        a = "";
                        var e = d.length, f = 4 == P(this.g);
                        if (!this.h.i) {
                            if ("undefined" === typeof TextDecoder) {
                                Q(this);
                                Qb(this);
                                var g = "";
                                break b;
                            }
                            this.h.i = new k.TextDecoder;
                        }
                        for(b = 0; b < e; b++)this.h.h = !0, a += this.h.i.decode(d[b], {
                            stream: !(f && b == e - 1)
                        });
                        d.length = 0;
                        this.h.g += a;
                        this.C = 0;
                        g = this.h.g;
                    } else g = this.g.oa();
                    this.o = 200 == c;
                    xb(this.i, this.u, this.A, this.l, this.R, w, c);
                    if (this.o) {
                        if (this.T && !this.K) {
                            b: {
                                if (this.g) {
                                    var m, q = this.g;
                                    if ((m = q.g ? q.g.getResponseHeader("X-HTTP-Initial-Response") : null) && !t(m)) {
                                        var l = m;
                                        break b;
                                    }
                                }
                                l = null;
                            }
                            if (c = l) L(this.i, this.l, c, "Initial handshake response via X-HTTP-Initial-Response"), this.K = !0, Rb(this, c);
                            else {
                                this.o = !1;
                                this.s = 3;
                                K(12);
                                Q(this);
                                Qb(this);
                                break a;
                            }
                        }
                        if (this.P) {
                            c = !0;
                            let B;
                            for(; !this.J && this.C < g.length;)if (B = Sb(this, g), B == Gb) {
                                4 == w && (this.s = 4, K(14), c = !1);
                                L(this.i, this.l, null, "[Incomplete Response]");
                                break;
                            } else if (B == Fb) {
                                this.s = 4;
                                K(15);
                                L(this.i, this.l, g, "[Invalid Chunk]");
                                c = !1;
                                break;
                            } else L(this.i, this.l, B, null), Rb(this, B);
                            Pb(this) && 0 != this.C && (this.h.g = this.h.g.slice(this.C), this.C = 0);
                            4 != w || 0 != g.length || this.h.h || (this.s = 1, K(16), c = !1);
                            this.o = this.o && c;
                            if (!c) L(this.i, this.l, g, "[Invalid Chunked Response]"), Q(this), Qb(this);
                            else if (0 < g.length && !this.W) {
                                this.W = !0;
                                var v = this.j;
                                v.g == this && v.ba && !v.M && (v.j.info("Great, no buffering proxy detected. Bytes received: " + g.length), Tb(v), v.M = !0, K(11));
                            }
                        } else L(this.i, this.l, g, null), Rb(this, g);
                        4 == w && Q(this);
                        this.o && !this.J && (4 == w ? Ub(this.j, this) : (this.o = !1, Kb(this)));
                    } else Vb(this.g), 400 == c && 0 < g.indexOf("Unknown SID") ? (this.s = 3, K(12)) : (this.s = 0, K(13)), Q(this), Qb(this);
                }
            }
        } catch (w) {} finally{}
    };
    function Pb(a) {
        return a.g ? "GET" == a.u && 2 != a.L && a.j.Ca : !1;
    }
    function Sb(a, b) {
        var c = a.C, d = b.indexOf("\n", c);
        if (-1 == d) return Gb;
        c = Number(b.substring(c, d));
        if (isNaN(c)) return Fb;
        d += 1;
        if (d + c > b.length) return Gb;
        b = b.slice(d, d + c);
        a.C = d + c;
        return b;
    }
    M.prototype.cancel = function() {
        this.J = !0;
        Q(this);
    };
    function Kb(a) {
        a.S = Date.now() + a.I;
        Wb(a, a.I);
    }
    function Wb(a, b) {
        if (null != a.B) throw Error("WatchDog timer not null");
        a.B = ub(p(a.ba, a), b);
    }
    function Ob(a) {
        a.B && (k.clearTimeout(a.B), a.B = null);
    }
    M.prototype.ba = function() {
        this.B = null;
        const a = Date.now();
        0 <= a - this.S ? (zb(this.i, this.A), 2 != this.L && (J(), K(17)), Q(this), this.s = 2, Qb(this)) : Wb(this, this.S - a);
    };
    function Qb(a) {
        0 == a.j.G || a.J || Ub(a.j, a);
    }
    function Q(a) {
        Ob(a);
        var b = a.M;
        b && "function" == typeof b.ma && b.ma();
        a.M = null;
        gb(a.U);
        a.g && (b = a.g, a.g = null, b.abort(), b.ma());
    }
    function Rb(a, b) {
        try {
            var c = a.j;
            if (0 != c.G && (c.g == a || Xb(c.h, a))) {
                if (!a.K && Xb(c.h, a) && 3 == c.G) {
                    try {
                        var d = c.Da.g.parse(b);
                    } catch (l) {
                        d = null;
                    }
                    if (Array.isArray(d) && 3 == d.length) {
                        var e = d;
                        if (0 == e[0]) a: {
                            if (!c.u) {
                                if (c.g) if (c.g.F + 3E3 < a.F) Yb(c), Zb(c);
                                else break a;
                                $b(c);
                                K(18);
                            }
                        }
                        else c.za = e[1], 0 < c.za - c.T && 37500 > e[2] && c.F && 0 == c.v && !c.C && (c.C = ub(p(c.Za, c), 6E3));
                        if (1 >= ac(c.h) && c.ca) {
                            try {
                                c.ca();
                            } catch (l) {}
                            c.ca = void 0;
                        }
                    } else R(c, 11);
                } else if ((a.K || c.g == a) && Yb(c), !t(b)) for(e = c.Da.g.parse(b), b = 0; b < e.length; b++){
                    let l = e[b];
                    c.T = l[0];
                    l = l[1];
                    if (2 == c.G) if ("c" == l[0]) {
                        c.K = l[1];
                        c.ia = l[2];
                        const v = l[3];
                        null != v && (c.la = v, c.j.info("VER=" + c.la));
                        const w = l[4];
                        null != w && (c.Aa = w, c.j.info("SVER=" + c.Aa));
                        const O = l[5];
                        null != O && "number" === typeof O && 0 < O && (d = 1.5 * O, c.L = d, c.j.info("backChannelRequestTimeoutMs_=" + d));
                        d = c;
                        const B = a.g;
                        if (B) {
                            const ya = B.g ? B.g.getResponseHeader("X-Client-Wire-Protocol") : null;
                            if (ya) {
                                var f = d.h;
                                f.g || -1 == ya.indexOf("spdy") && -1 == ya.indexOf("quic") && -1 == ya.indexOf("h2") || (f.j = f.l, f.g = new Set, f.h && (bc(f, f.h), f.h = null));
                            }
                            if (d.D) {
                                const db = B.g ? B.g.getResponseHeader("X-HTTP-Session-Id") : null;
                                db && (d.ya = db, S(d.I, d.D, db));
                            }
                        }
                        c.G = 3;
                        c.l && c.l.ua();
                        c.ba && (c.R = Date.now() - a.F, c.j.info("Handshake RTT: " + c.R + "ms"));
                        d = c;
                        var g = a;
                        d.qa = cc(d, d.J ? d.ia : null, d.W);
                        if (g.K) {
                            dc(d.h, g);
                            var m = g, q = d.L;
                            q && (m.I = q);
                            m.B && (Ob(m), Kb(m));
                            d.g = g;
                        } else ec(d);
                        0 < c.i.length && fc(c);
                    } else "stop" != l[0] && "close" != l[0] || R(c, 7);
                    else 3 == c.G && ("stop" == l[0] || "close" == l[0] ? "stop" == l[0] ? R(c, 7) : gc(c) : "noop" != l[0] && c.l && c.l.ta(l), c.v = 0);
                }
            }
            J(4);
        } catch (l) {}
    }
    var hc = class {
        constructor(a, b){
            this.g = a;
            this.map = b;
        }
    };
    function ic(a) {
        this.l = a || 10;
        k.PerformanceNavigationTiming ? (a = k.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(k.chrome && k.chrome.loadTimes && k.chrome.loadTimes() && k.chrome.loadTimes().wasFetchedViaSpdy);
        this.j = a ? this.l : 1;
        this.g = null;
        1 < this.j && (this.g = new Set);
        this.h = null;
        this.i = [];
    }
    function jc(a) {
        return a.h ? !0 : a.g ? a.g.size >= a.j : !1;
    }
    function ac(a) {
        return a.h ? 1 : a.g ? a.g.size : 0;
    }
    function Xb(a, b) {
        return a.h ? a.h == b : a.g ? a.g.has(b) : !1;
    }
    function bc(a, b) {
        a.g ? a.g.add(b) : a.h = b;
    }
    function dc(a, b) {
        a.h && a.h == b ? a.h = null : a.g && a.g.has(b) && a.g.delete(b);
    }
    ic.prototype.cancel = function() {
        this.i = kc(this);
        if (this.h) this.h.cancel(), this.h = null;
        else if (this.g && 0 !== this.g.size) {
            for (const a of this.g.values())a.cancel();
            this.g.clear();
        }
    };
    function kc(a) {
        if (null != a.h) return a.i.concat(a.h.D);
        if (null != a.g && 0 !== a.g.size) {
            let b = a.i;
            for (const c of a.g.values())b = b.concat(c.D);
            return b;
        }
        return la(a.i);
    }
    function lc(a) {
        if (a.V && "function" == typeof a.V) return a.V();
        if ("undefined" !== typeof Map && a instanceof Map || "undefined" !== typeof Set && a instanceof Set) return Array.from(a.values());
        if ("string" === typeof a) return a.split("");
        if (ha(a)) {
            for(var b = [], c = a.length, d = 0; d < c; d++)b.push(a[d]);
            return b;
        }
        b = [];
        c = 0;
        for(d in a)b[c++] = a[d];
        return b;
    }
    function mc(a) {
        if (a.na && "function" == typeof a.na) return a.na();
        if (!a.V || "function" != typeof a.V) {
            if ("undefined" !== typeof Map && a instanceof Map) return Array.from(a.keys());
            if (!("undefined" !== typeof Set && a instanceof Set)) {
                if (ha(a) || "string" === typeof a) {
                    var b = [];
                    a = a.length;
                    for(var c = 0; c < a; c++)b.push(c);
                    return b;
                }
                b = [];
                c = 0;
                for(const d in a)b[c++] = d;
                return b;
            }
        }
    }
    function nc(a, b) {
        if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);
        else if (ha(a) || "string" === typeof a) Array.prototype.forEach.call(a, b, void 0);
        else for(var c = mc(a), d = lc(a), e = d.length, f = 0; f < e; f++)b.call(void 0, d[f], c && c[f], a);
    }
    var oc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
    function pc(a, b) {
        if (a) {
            a = a.split("&");
            for(var c = 0; c < a.length; c++){
                var d = a[c].indexOf("="), e = null;
                if (0 <= d) {
                    var f = a[c].substring(0, d);
                    e = a[c].substring(d + 1);
                } else f = a[c];
                b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
            }
        }
    }
    function T(a) {
        this.g = this.o = this.j = "";
        this.s = null;
        this.m = this.l = "";
        this.h = !1;
        if (a instanceof T) {
            this.h = a.h;
            qc(this, a.j);
            this.o = a.o;
            this.g = a.g;
            rc(this, a.s);
            this.l = a.l;
            var b = a.i;
            var c = new sc;
            c.i = b.i;
            b.g && (c.g = new Map(b.g), c.h = b.h);
            tc(this, c);
            this.m = a.m;
        } else a && (b = String(a).match(oc)) ? (this.h = !1, qc(this, b[1] || "", !0), this.o = uc(b[2] || ""), this.g = uc(b[3] || "", !0), rc(this, b[4]), this.l = uc(b[5] || "", !0), tc(this, b[6] || "", !0), this.m = uc(b[7] || "")) : (this.h = !1, this.i = new sc(null, this.h));
    }
    T.prototype.toString = function() {
        var a = [], b = this.j;
        b && a.push(vc(b, wc, !0), ":");
        var c = this.g;
        if (c || "file" == b) a.push("//"), (b = this.o) && a.push(vc(b, wc, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.s, null != c && a.push(":", String(c));
        if (c = this.l) this.g && "/" != c.charAt(0) && a.push("/"), a.push(vc(c, "/" == c.charAt(0) ? xc : yc, !0));
        (c = this.i.toString()) && a.push("?", c);
        (c = this.m) && a.push("#", vc(c, zc));
        return a.join("");
    };
    function N(a) {
        return new T(a);
    }
    function qc(a, b, c) {
        a.j = c ? uc(b, !0) : b;
        a.j && (a.j = a.j.replace(/:$/, ""));
    }
    function rc(a, b) {
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
            a.s = b;
        } else a.s = null;
    }
    function tc(a, b, c) {
        b instanceof sc ? (a.i = b, Ac(a.i, a.h)) : (c || (b = vc(b, Bc)), a.i = new sc(b, a.h));
    }
    function S(a, b, c) {
        a.i.set(b, c);
    }
    function Ib(a) {
        S(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36));
        return a;
    }
    function uc(a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
    }
    function vc(a, b, c) {
        return "string" === typeof a ? (a = encodeURI(a).replace(b, Cc), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
    }
    function Cc(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
    }
    var wc = /[#\/\?@]/g, yc = /[#\?:]/g, xc = /[#\?]/g, Bc = /[#\?@]/g, zc = /#/g;
    function sc(a, b) {
        this.h = this.g = null;
        this.i = a || null;
        this.j = !!b;
    }
    function U(a) {
        a.g || (a.g = new Map, a.h = 0, a.i && pc(a.i, function(b, c) {
            a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
        }));
    }
    h = sc.prototype;
    h.add = function(a, b) {
        U(this);
        this.i = null;
        a = V(this, a);
        var c = this.g.get(a);
        c || this.g.set(a, c = []);
        c.push(b);
        this.h += 1;
        return this;
    };
    function Dc(a, b) {
        U(a);
        b = V(a, b);
        a.g.has(b) && (a.i = null, a.h -= a.g.get(b).length, a.g.delete(b));
    }
    function Ec(a, b) {
        U(a);
        b = V(a, b);
        return a.g.has(b);
    }
    h.forEach = function(a, b) {
        U(this);
        this.g.forEach(function(c, d) {
            c.forEach(function(e) {
                a.call(b, e, d, this);
            }, this);
        }, this);
    };
    h.na = function() {
        U(this);
        const a = Array.from(this.g.values()), b = Array.from(this.g.keys()), c = [];
        for(let d = 0; d < b.length; d++){
            const e = a[d];
            for(let f = 0; f < e.length; f++)c.push(b[d]);
        }
        return c;
    };
    h.V = function(a) {
        U(this);
        let b = [];
        if ("string" === typeof a) Ec(this, a) && (b = b.concat(this.g.get(V(this, a))));
        else {
            a = Array.from(this.g.values());
            for(let c = 0; c < a.length; c++)b = b.concat(a[c]);
        }
        return b;
    };
    h.set = function(a, b) {
        U(this);
        this.i = null;
        a = V(this, a);
        Ec(this, a) && (this.h -= this.g.get(a).length);
        this.g.set(a, [
            b
        ]);
        this.h += 1;
        return this;
    };
    h.get = function(a, b) {
        if (!a) return b;
        a = this.V(a);
        return 0 < a.length ? String(a[0]) : b;
    };
    function Lb(a, b, c) {
        Dc(a, b);
        0 < c.length && (a.i = null, a.g.set(V(a, b), la(c)), a.h += c.length);
    }
    h.toString = function() {
        if (this.i) return this.i;
        if (!this.g) return "";
        const a = [], b = Array.from(this.g.keys());
        for(var c = 0; c < b.length; c++){
            var d = b[c];
            const f = encodeURIComponent(String(d)), g = this.V(d);
            for(d = 0; d < g.length; d++){
                var e = f;
                "" !== g[d] && (e += "=" + encodeURIComponent(String(g[d])));
                a.push(e);
            }
        }
        return this.i = a.join("&");
    };
    function V(a, b) {
        b = String(b);
        a.j && (b = b.toLowerCase());
        return b;
    }
    function Ac(a, b) {
        b && !a.j && (U(a), a.i = null, a.g.forEach(function(c, d) {
            var e = d.toLowerCase();
            d != e && (Dc(this, d), Lb(this, e, c));
        }, a));
        a.j = b;
    }
    function Fc(a, b) {
        const c = new vb;
        if (k.Image) {
            const d = new Image;
            d.onload = ka(W, c, "TestLoadImage: loaded", !0, b, d);
            d.onerror = ka(W, c, "TestLoadImage: error", !1, b, d);
            d.onabort = ka(W, c, "TestLoadImage: abort", !1, b, d);
            d.ontimeout = ka(W, c, "TestLoadImage: timeout", !1, b, d);
            k.setTimeout(function() {
                if (d.ontimeout) d.ontimeout();
            }, 1E4);
            d.src = a;
        } else b(!1);
    }
    function Gc(a, b) {
        const c = new vb, d = new AbortController, e = setTimeout(()=>{
            d.abort();
            W(c, "TestPingServer: timeout", !1, b);
        }, 1E4);
        fetch(a, {
            signal: d.signal
        }).then((f)=>{
            clearTimeout(e);
            f.ok ? W(c, "TestPingServer: ok", !0, b) : W(c, "TestPingServer: server error", !1, b);
        }).catch(()=>{
            clearTimeout(e);
            W(c, "TestPingServer: error", !1, b);
        });
    }
    function W(a, b, c, d, e) {
        try {
            e && (e.onload = null, e.onerror = null, e.onabort = null, e.ontimeout = null), d(c);
        } catch (f) {}
    }
    function Hc() {
        this.g = new jb;
    }
    function Ic(a, b, c) {
        const d = c || "";
        try {
            nc(a, function(e, f) {
                let g = e;
                n(e) && (g = hb(e));
                b.push(d + f + "=" + encodeURIComponent(g));
            });
        } catch (e) {
            throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
        }
    }
    function Jc(a) {
        this.l = a.Ub || null;
        this.j = a.eb || !1;
    }
    r(Jc, kb);
    Jc.prototype.g = function() {
        return new Kc(this.l, this.j);
    };
    Jc.prototype.i = function(a) {
        return function() {
            return a;
        };
    }({});
    function Kc(a, b) {
        E.call(this);
        this.D = a;
        this.o = b;
        this.m = void 0;
        this.status = this.readyState = 0;
        this.responseType = this.responseText = this.response = this.statusText = "";
        this.onreadystatechange = null;
        this.u = new Headers;
        this.h = null;
        this.B = "GET";
        this.A = "";
        this.g = !1;
        this.v = this.j = this.l = null;
    }
    r(Kc, E);
    h = Kc.prototype;
    h.open = function(a, b) {
        if (0 != this.readyState) throw this.abort(), Error("Error reopening a connection");
        this.B = a;
        this.A = b;
        this.readyState = 1;
        Lc(this);
    };
    h.send = function(a) {
        if (1 != this.readyState) throw this.abort(), Error("need to call open() first. ");
        this.g = !0;
        const b = {
            headers: this.u,
            method: this.B,
            credentials: this.m,
            cache: void 0
        };
        a && (b.body = a);
        (this.D || k).fetch(new Request(this.A, b)).then(this.Sa.bind(this), this.ga.bind(this));
    };
    h.abort = function() {
        this.response = this.responseText = "";
        this.u = new Headers;
        this.status = 0;
        this.j && this.j.cancel("Request was aborted.").catch(()=>{});
        1 <= this.readyState && this.g && 4 != this.readyState && (this.g = !1, Mc(this));
        this.readyState = 0;
    };
    h.Sa = function(a) {
        if (this.g && (this.l = a, this.h || (this.status = this.l.status, this.statusText = this.l.statusText, this.h = a.headers, this.readyState = 2, Lc(this)), this.g && (this.readyState = 3, Lc(this), this.g))) if ("arraybuffer" === this.responseType) a.arrayBuffer().then(this.Qa.bind(this), this.ga.bind(this));
        else if ("undefined" !== typeof k.ReadableStream && "body" in a) {
            this.j = a.body.getReader();
            if (this.o) {
                if (this.responseType) throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');
                this.response = [];
            } else this.response = this.responseText = "", this.v = new TextDecoder;
            Nc(this);
        } else a.text().then(this.Ra.bind(this), this.ga.bind(this));
    };
    function Nc(a) {
        a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a));
    }
    h.Pa = function(a) {
        if (this.g) {
            if (this.o && a.value) this.response.push(a.value);
            else if (!this.o) {
                var b = a.value ? a.value : new Uint8Array(0);
                if (b = this.v.decode(b, {
                    stream: !a.done
                })) this.response = this.responseText += b;
            }
            a.done ? Mc(this) : Lc(this);
            3 == this.readyState && Nc(this);
        }
    };
    h.Ra = function(a) {
        this.g && (this.response = this.responseText = a, Mc(this));
    };
    h.Qa = function(a) {
        this.g && (this.response = a, Mc(this));
    };
    h.ga = function() {
        this.g && Mc(this);
    };
    function Mc(a) {
        a.readyState = 4;
        a.l = null;
        a.j = null;
        a.v = null;
        Lc(a);
    }
    h.setRequestHeader = function(a, b) {
        this.u.append(a, b);
    };
    h.getResponseHeader = function(a) {
        return this.h ? this.h.get(a.toLowerCase()) || "" : "";
    };
    h.getAllResponseHeaders = function() {
        if (!this.h) return "";
        const a = [], b = this.h.entries();
        for(var c = b.next(); !c.done;)c = c.value, a.push(c[0] + ": " + c[1]), c = b.next();
        return a.join("\r\n");
    };
    function Lc(a) {
        a.onreadystatechange && a.onreadystatechange.call(a);
    }
    Object.defineProperty(Kc.prototype, "withCredentials", {
        get: function() {
            return "include" === this.m;
        },
        set: function(a) {
            this.m = a ? "include" : "same-origin";
        }
    });
    function Oc(a) {
        let b = "";
        qa(a, function(c, d) {
            b += d;
            b += ":";
            b += c;
            b += "\r\n";
        });
        return b;
    }
    function Pc(a, b, c) {
        a: {
            for(d in c){
                var d = !1;
                break a;
            }
            d = !0;
        }
        d || (c = Oc(c), "string" === typeof a ? null != c && encodeURIComponent(String(c)) : S(a, b, c));
    }
    function X(a) {
        E.call(this);
        this.headers = new Map;
        this.o = a || null;
        this.h = !1;
        this.v = this.g = null;
        this.D = "";
        this.m = 0;
        this.l = "";
        this.j = this.B = this.u = this.A = !1;
        this.I = null;
        this.H = "";
        this.J = !1;
    }
    r(X, E);
    var Qc = /^https?$/i, Rc = [
        "POST",
        "PUT"
    ];
    h = X.prototype;
    h.Ha = function(a) {
        this.J = a;
    };
    h.ea = function(a, b, c, d) {
        if (this.g) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.D + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.D = a;
        this.l = "";
        this.m = 0;
        this.A = !1;
        this.h = !0;
        this.g = this.o ? this.o.g() : Cb.g();
        this.v = this.o ? lb(this.o) : lb(Cb);
        this.g.onreadystatechange = p(this.Ea, this);
        try {
            this.B = !0, this.g.open(b, String(a), !0), this.B = !1;
        } catch (f) {
            Sc(this, f);
            return;
        }
        a = c || "";
        c = new Map(this.headers);
        if (d) if (Object.getPrototypeOf(d) === Object.prototype) for(var e in d)c.set(e, d[e]);
        else if ("function" === typeof d.keys && "function" === typeof d.get) for (const f of d.keys())c.set(f, d.get(f));
        else throw Error("Unknown input type for opt_headers: " + String(d));
        d = Array.from(c.keys()).find((f)=>"content-type" == f.toLowerCase());
        e = k.FormData && a instanceof k.FormData;
        !(0 <= Array.prototype.indexOf.call(Rc, b, void 0)) || d || e || c.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        for (const [f, g] of c)this.g.setRequestHeader(f, g);
        this.H && (this.g.responseType = this.H);
        "withCredentials" in this.g && this.g.withCredentials !== this.J && (this.g.withCredentials = this.J);
        try {
            Tc(this), this.u = !0, this.g.send(a), this.u = !1;
        } catch (f) {
            Sc(this, f);
        }
    };
    function Sc(a, b) {
        a.h = !1;
        a.g && (a.j = !0, a.g.abort(), a.j = !1);
        a.l = b;
        a.m = 5;
        Uc(a);
        Vc(a);
    }
    function Uc(a) {
        a.A || (a.A = !0, F(a, "complete"), F(a, "error"));
    }
    h.abort = function(a) {
        this.g && this.h && (this.h = !1, this.j = !0, this.g.abort(), this.j = !1, this.m = a || 7, F(this, "complete"), F(this, "abort"), Vc(this));
    };
    h.N = function() {
        this.g && (this.h && (this.h = !1, this.j = !0, this.g.abort(), this.j = !1), Vc(this, !0));
        X.aa.N.call(this);
    };
    h.Ea = function() {
        this.s || (this.B || this.u || this.j ? Wc(this) : this.bb());
    };
    h.bb = function() {
        Wc(this);
    };
    function Wc(a) {
        if (a.h && "undefined" != typeof fa && (!a.v[1] || 4 != P(a) || 2 != a.Z())) {
            if (a.u && 4 == P(a)) bb(a.Ea, 0, a);
            else if (F(a, "readystatechange"), 4 == P(a)) {
                a.h = !1;
                try {
                    const g = a.Z();
                    a: switch(g){
                        case 200:
                        case 201:
                        case 202:
                        case 204:
                        case 206:
                        case 304:
                        case 1223:
                            var b = !0;
                            break a;
                        default:
                            b = !1;
                    }
                    var c;
                    if (!(c = b)) {
                        var d;
                        if (d = 0 === g) {
                            var e = String(a.D).match(oc)[1] || null;
                            !e && k.self && k.self.location && (e = k.self.location.protocol.slice(0, -1));
                            d = !Qc.test(e ? e.toLowerCase() : "");
                        }
                        c = d;
                    }
                    if (c) F(a, "complete"), F(a, "success");
                    else {
                        a.m = 6;
                        try {
                            var f = 2 < P(a) ? a.g.statusText : "";
                        } catch (m) {
                            f = "";
                        }
                        a.l = f + " [" + a.Z() + "]";
                        Uc(a);
                    }
                } finally{
                    Vc(a);
                }
            }
        }
    }
    function Vc(a, b) {
        if (a.g) {
            Tc(a);
            const c = a.g, d = a.v[0] ? ()=>{} : null;
            a.g = null;
            a.v = null;
            b || F(a, "ready");
            try {
                c.onreadystatechange = d;
            } catch (e) {}
        }
    }
    function Tc(a) {
        a.I && (k.clearTimeout(a.I), a.I = null);
    }
    h.isActive = function() {
        return !!this.g;
    };
    function P(a) {
        return a.g ? a.g.readyState : 0;
    }
    h.Z = function() {
        try {
            return 2 < P(this) ? this.g.status : -1;
        } catch (a) {
            return -1;
        }
    };
    h.oa = function() {
        try {
            return this.g ? this.g.responseText : "";
        } catch (a) {
            return "";
        }
    };
    h.Oa = function(a) {
        if (this.g) {
            var b = this.g.responseText;
            a && 0 == b.indexOf(a) && (b = b.substring(a.length));
            return ib(b);
        }
    };
    function Nb(a) {
        try {
            if (!a.g) return null;
            if ("response" in a.g) return a.g.response;
            switch(a.H){
                case "":
                case "text":
                    return a.g.responseText;
                case "arraybuffer":
                    if ("mozResponseArrayBuffer" in a.g) return a.g.mozResponseArrayBuffer;
            }
            return null;
        } catch (b) {
            return null;
        }
    }
    function Vb(a) {
        const b = {};
        a = (a.g && 2 <= P(a) ? a.g.getAllResponseHeaders() || "" : "").split("\r\n");
        for(let d = 0; d < a.length; d++){
            if (t(a[d])) continue;
            var c = va(a[d]);
            const e = c[0];
            c = c[1];
            if ("string" !== typeof c) continue;
            c = c.trim();
            const f = b[e] || [];
            b[e] = f;
            f.push(c);
        }
        ra(b, function(d) {
            return d.join(", ");
        });
    }
    h.Ba = function() {
        return this.m;
    };
    h.Ka = function() {
        return "string" === typeof this.l ? this.l : String(this.l);
    };
    function Xc(a, b, c) {
        return c && c.internalChannelParams ? c.internalChannelParams[a] || b : b;
    }
    function Yc(a) {
        this.Aa = 0;
        this.i = [];
        this.j = new vb;
        this.ia = this.qa = this.I = this.W = this.g = this.ya = this.D = this.H = this.m = this.S = this.o = null;
        this.Ya = this.U = 0;
        this.Va = Xc("failFast", !1, a);
        this.F = this.C = this.u = this.s = this.l = null;
        this.X = !0;
        this.za = this.T = -1;
        this.Y = this.v = this.B = 0;
        this.Ta = Xc("baseRetryDelayMs", 5E3, a);
        this.cb = Xc("retryDelaySeedMs", 1E4, a);
        this.Wa = Xc("forwardChannelMaxRetries", 2, a);
        this.wa = Xc("forwardChannelRequestTimeoutMs", 2E4, a);
        this.pa = a && a.xmlHttpFactory || void 0;
        this.Xa = a && a.Tb || void 0;
        this.Ca = a && a.useFetchStreams || !1;
        this.L = void 0;
        this.J = a && a.supportsCrossDomainXhr || !1;
        this.K = "";
        this.h = new ic(a && a.concurrentRequestLimit);
        this.Da = new Hc;
        this.P = a && a.fastHandshake || !1;
        this.O = a && a.encodeInitMessageHeaders || !1;
        this.P && this.O && (this.O = !1);
        this.Ua = a && a.Rb || !1;
        a && a.xa && this.j.xa();
        a && a.forceLongPolling && (this.X = !1);
        this.ba = !this.P && this.X && a && a.detectBufferingProxy || !1;
        this.ja = void 0;
        a && a.longPollingTimeout && 0 < a.longPollingTimeout && (this.ja = a.longPollingTimeout);
        this.ca = void 0;
        this.R = 0;
        this.M = !1;
        this.ka = this.A = null;
    }
    h = Yc.prototype;
    h.la = 8;
    h.G = 1;
    h.connect = function(a, b, c, d) {
        K(0);
        this.W = a;
        this.H = b || {};
        c && void 0 !== d && (this.H.OSID = c, this.H.OAID = d);
        this.F = this.X;
        this.I = cc(this, null, this.W);
        fc(this);
    };
    function gc(a) {
        Zc(a);
        if (3 == a.G) {
            var b = a.U++, c = N(a.I);
            S(c, "SID", a.K);
            S(c, "RID", b);
            S(c, "TYPE", "terminate");
            $c(a, c);
            b = new M(a, a.j, b);
            b.L = 2;
            b.v = Ib(N(c));
            c = !1;
            if (k.navigator && k.navigator.sendBeacon) try {
                c = k.navigator.sendBeacon(b.v.toString(), "");
            } catch (d) {}
            !c && k.Image && ((new Image).src = b.v, c = !0);
            c || (b.g = Mb(b.j, null), b.g.ea(b.v));
            b.F = Date.now();
            Kb(b);
        }
        ad(a);
    }
    function Zb(a) {
        a.g && (Tb(a), a.g.cancel(), a.g = null);
    }
    function Zc(a) {
        Zb(a);
        a.u && (k.clearTimeout(a.u), a.u = null);
        Yb(a);
        a.h.cancel();
        a.s && ("number" === typeof a.s && k.clearTimeout(a.s), a.s = null);
    }
    function fc(a) {
        if (!jc(a.h) && !a.s) {
            a.s = !0;
            var b = a.Ga;
            x || Ea();
            y || (x(), y = !0);
            za.add(b, a);
            a.B = 0;
        }
    }
    function bd(a, b) {
        if (ac(a.h) >= a.h.j - (a.s ? 1 : 0)) return !1;
        if (a.s) return a.i = b.D.concat(a.i), !0;
        if (1 == a.G || 2 == a.G || a.B >= (a.Va ? 0 : a.Wa)) return !1;
        a.s = ub(p(a.Ga, a, b), cd(a, a.B));
        a.B++;
        return !0;
    }
    h.Ga = function(a) {
        if (this.s) if (this.s = null, 1 == this.G) {
            if (!a) {
                this.U = Math.floor(1E5 * Math.random());
                a = this.U++;
                const e = new M(this, this.j, a);
                let f = this.o;
                this.S && (f ? (f = sa(f), ua(f, this.S)) : f = this.S);
                null !== this.m || this.O || (e.H = f, f = null);
                if (this.P) a: {
                    var b = 0;
                    for(var c = 0; c < this.i.length; c++){
                        b: {
                            var d = this.i[c];
                            if ("__data__" in d.map && (d = d.map.__data__, "string" === typeof d)) {
                                d = d.length;
                                break b;
                            }
                            d = void 0;
                        }
                        if (void 0 === d) break;
                        b += d;
                        if (4096 < b) {
                            b = c;
                            break a;
                        }
                        if (4096 === b || c === this.i.length - 1) {
                            b = c + 1;
                            break a;
                        }
                    }
                    b = 1E3;
                }
                else b = 1E3;
                b = dd(this, e, b);
                c = N(this.I);
                S(c, "RID", a);
                S(c, "CVER", 22);
                this.D && S(c, "X-HTTP-Session-Id", this.D);
                $c(this, c);
                f && (this.O ? b = "headers=" + encodeURIComponent(String(Oc(f))) + "&" + b : this.m && Pc(c, this.m, f));
                bc(this.h, e);
                this.Ua && S(c, "TYPE", "init");
                this.P ? (S(c, "$req", b), S(c, "SID", "null"), e.T = !0, Hb(e, c, null)) : Hb(e, c, b);
                this.G = 2;
            }
        } else 3 == this.G && (a ? ed(this, a) : 0 == this.i.length || jc(this.h) || ed(this));
    };
    function ed(a, b) {
        var c;
        b ? c = b.l : c = a.U++;
        const d = N(a.I);
        S(d, "SID", a.K);
        S(d, "RID", c);
        S(d, "AID", a.T);
        $c(a, d);
        a.m && a.o && Pc(d, a.m, a.o);
        c = new M(a, a.j, c, a.B + 1);
        null === a.m && (c.H = a.o);
        b && (a.i = b.D.concat(a.i));
        b = dd(a, c, 1E3);
        c.I = Math.round(.5 * a.wa) + Math.round(.5 * a.wa * Math.random());
        bc(a.h, c);
        Hb(c, d, b);
    }
    function $c(a, b) {
        a.H && qa(a.H, function(c, d) {
            S(b, d, c);
        });
        a.l && nc({}, function(c, d) {
            S(b, d, c);
        });
    }
    function dd(a, b, c) {
        c = Math.min(a.i.length, c);
        var d = a.l ? p(a.l.Na, a.l, a) : null;
        a: {
            var e = a.i;
            let f = -1;
            for(;;){
                const g = [
                    "count=" + c
                ];
                -1 == f ? 0 < c ? (f = e[0].g, g.push("ofs=" + f)) : f = 0 : g.push("ofs=" + f);
                let m = !0;
                for(let q = 0; q < c; q++){
                    let l = e[q].g;
                    const v = e[q].map;
                    l -= f;
                    if (0 > l) f = Math.max(0, e[q].g - 100), m = !1;
                    else try {
                        Ic(v, g, "req" + l + "_");
                    } catch (w) {
                        d && d(v);
                    }
                }
                if (m) {
                    d = g.join("&");
                    break a;
                }
            }
        }
        a = a.i.splice(0, c);
        b.D = a;
        return d;
    }
    function ec(a) {
        if (!a.g && !a.u) {
            a.Y = 1;
            var b = a.Fa;
            x || Ea();
            y || (x(), y = !0);
            za.add(b, a);
            a.v = 0;
        }
    }
    function $b(a) {
        if (a.g || a.u || 3 <= a.v) return !1;
        a.Y++;
        a.u = ub(p(a.Fa, a), cd(a, a.v));
        a.v++;
        return !0;
    }
    h.Fa = function() {
        this.u = null;
        fd(this);
        if (this.ba && !(this.M || null == this.g || 0 >= this.R)) {
            var a = 2 * this.R;
            this.j.info("BP detection timer enabled: " + a);
            this.A = ub(p(this.ab, this), a);
        }
    };
    h.ab = function() {
        this.A && (this.A = null, this.j.info("BP detection timeout reached."), this.j.info("Buffering proxy detected and switch to long-polling!"), this.F = !1, this.M = !0, K(10), Zb(this), fd(this));
    };
    function Tb(a) {
        null != a.A && (k.clearTimeout(a.A), a.A = null);
    }
    function fd(a) {
        a.g = new M(a, a.j, "rpc", a.Y);
        null === a.m && (a.g.H = a.o);
        a.g.O = 0;
        var b = N(a.qa);
        S(b, "RID", "rpc");
        S(b, "SID", a.K);
        S(b, "AID", a.T);
        S(b, "CI", a.F ? "0" : "1");
        !a.F && a.ja && S(b, "TO", a.ja);
        S(b, "TYPE", "xmlhttp");
        $c(a, b);
        a.m && a.o && Pc(b, a.m, a.o);
        a.L && (a.g.I = a.L);
        var c = a.g;
        a = a.ia;
        c.L = 1;
        c.v = Ib(N(b));
        c.m = null;
        c.P = !0;
        Jb(c, a);
    }
    h.Za = function() {
        null != this.C && (this.C = null, Zb(this), $b(this), K(19));
    };
    function Yb(a) {
        null != a.C && (k.clearTimeout(a.C), a.C = null);
    }
    function Ub(a, b) {
        var c = null;
        if (a.g == b) {
            Yb(a);
            Tb(a);
            a.g = null;
            var d = 2;
        } else if (Xb(a.h, b)) c = b.D, dc(a.h, b), d = 1;
        else return;
        if (0 != a.G) {
            if (b.o) if (1 == d) {
                c = b.m ? b.m.length : 0;
                b = Date.now() - b.F;
                var e = a.B;
                d = qb();
                F(d, new tb(d, c));
                fc(a);
            } else ec(a);
            else if (e = b.s, 3 == e || 0 == e && 0 < b.X || !(1 == d && bd(a, b) || 2 == d && $b(a))) switch(c && 0 < c.length && (b = a.h, b.i = b.i.concat(c)), e){
                case 1:
                    R(a, 5);
                    break;
                case 4:
                    R(a, 10);
                    break;
                case 3:
                    R(a, 6);
                    break;
                default:
                    R(a, 2);
            }
        }
    }
    function cd(a, b) {
        let c = a.Ta + Math.floor(Math.random() * a.cb);
        a.isActive() || (c *= 2);
        return c * b;
    }
    function R(a, b) {
        a.j.info("Error code " + b);
        if (2 == b) {
            var c = p(a.fb, a), d = a.Xa;
            const e = !d;
            d = new T(d || "//www.google.com/images/cleardot.gif");
            k.location && "http" == k.location.protocol || qc(d, "https");
            Ib(d);
            e ? Fc(d.toString(), c) : Gc(d.toString(), c);
        } else K(2);
        a.G = 0;
        a.l && a.l.sa(b);
        ad(a);
        Zc(a);
    }
    h.fb = function(a) {
        a ? (this.j.info("Successfully pinged google.com"), K(2)) : (this.j.info("Failed to ping google.com"), K(1));
    };
    function ad(a) {
        a.G = 0;
        a.ka = [];
        if (a.l) {
            const b = kc(a.h);
            if (0 != b.length || 0 != a.i.length) ma(a.ka, b), ma(a.ka, a.i), a.h.i.length = 0, la(a.i), a.i.length = 0;
            a.l.ra();
        }
    }
    function cc(a, b, c) {
        var d = c instanceof T ? N(c) : new T(c);
        if ("" != d.g) b && (d.g = b + "." + d.g), rc(d, d.s);
        else {
            var e = k.location;
            d = e.protocol;
            b = b ? b + "." + e.hostname : e.hostname;
            e = +e.port;
            var f = new T(null);
            d && qc(f, d);
            b && (f.g = b);
            e && rc(f, e);
            c && (f.l = c);
            d = f;
        }
        c = a.D;
        b = a.ya;
        c && b && S(d, c, b);
        S(d, "VER", a.la);
        $c(a, d);
        return d;
    }
    function Mb(a, b, c) {
        if (b && !a.J) throw Error("Can't create secondary domain capable XhrIo object.");
        b = a.Ca && !a.pa ? new X(new Jc({
            eb: c
        })) : new X(a.pa);
        b.Ha(a.J);
        return b;
    }
    h.isActive = function() {
        return !!this.l && this.l.isActive(this);
    };
    function gd() {}
    h = gd.prototype;
    h.ua = function() {};
    h.ta = function() {};
    h.sa = function() {};
    h.ra = function() {};
    h.isActive = function() {
        return !0;
    };
    h.Na = function() {};
    function hd() {}
    hd.prototype.g = function(a, b) {
        return new Y(a, b);
    };
    function Y(a, b) {
        E.call(this);
        this.g = new Yc(b);
        this.l = a;
        this.h = b && b.messageUrlParams || null;
        a = b && b.messageHeaders || null;
        b && b.clientProtocolHeaderRequired && (a ? a["X-Client-Protocol"] = "webchannel" : a = {
            "X-Client-Protocol": "webchannel"
        });
        this.g.o = a;
        a = b && b.initMessageHeaders || null;
        b && b.messageContentType && (a ? a["X-WebChannel-Content-Type"] = b.messageContentType : a = {
            "X-WebChannel-Content-Type": b.messageContentType
        });
        b && b.va && (a ? a["X-WebChannel-Client-Profile"] = b.va : a = {
            "X-WebChannel-Client-Profile": b.va
        });
        this.g.S = a;
        (a = b && b.Sb) && !t(a) && (this.g.m = a);
        this.v = b && b.supportsCrossDomainXhr || !1;
        this.u = b && b.sendRawJson || !1;
        (b = b && b.httpSessionIdParam) && !t(b) && (this.g.D = b, a = this.h, null !== a && b in a && (a = this.h, b in a && delete a[b]));
        this.j = new Z(this);
    }
    r(Y, E);
    Y.prototype.m = function() {
        this.g.l = this.j;
        this.v && (this.g.J = !0);
        this.g.connect(this.l, this.h || void 0);
    };
    Y.prototype.close = function() {
        gc(this.g);
    };
    Y.prototype.o = function(a) {
        var b = this.g;
        if ("string" === typeof a) {
            var c = {};
            c.__data__ = a;
            a = c;
        } else this.u && (c = {}, c.__data__ = hb(a), a = c);
        b.i.push(new hc(b.Ya++, a));
        3 == b.G && fc(b);
    };
    Y.prototype.N = function() {
        this.g.l = null;
        delete this.j;
        gc(this.g);
        delete this.g;
        Y.aa.N.call(this);
    };
    function id(a) {
        nb.call(this);
        a.__headers__ && (this.headers = a.__headers__, this.statusCode = a.__status__, delete a.__headers__, delete a.__status__);
        var b = a.__sm__;
        if (b) {
            a: {
                for(const c in b){
                    a = c;
                    break a;
                }
                a = void 0;
            }
            if (this.i = a) a = this.i, b = null !== b && a in b ? b[a] : void 0;
            this.data = b;
        } else this.data = a;
    }
    r(id, nb);
    function jd() {
        ob.call(this);
        this.status = 1;
    }
    r(jd, ob);
    function Z(a) {
        this.g = a;
    }
    r(Z, gd);
    Z.prototype.ua = function() {
        F(this.g, "a");
    };
    Z.prototype.ta = function(a) {
        F(this.g, new id(a));
    };
    Z.prototype.sa = function(a) {
        F(this.g, new jd());
    };
    Z.prototype.ra = function() {
        F(this.g, "b");
    };
    hd.prototype.createWebChannel = hd.prototype.g;
    Y.prototype.send = Y.prototype.o;
    Y.prototype.open = Y.prototype.m;
    Y.prototype.close = Y.prototype.close;
    createWebChannelTransport = webchannel_blob_es2018.createWebChannelTransport = function() {
        return new hd;
    };
    getStatEventTarget = webchannel_blob_es2018.getStatEventTarget = function() {
        return qb();
    };
    Event = webchannel_blob_es2018.Event = I;
    Stat = webchannel_blob_es2018.Stat = {
        mb: 0,
        pb: 1,
        qb: 2,
        Jb: 3,
        Ob: 4,
        Lb: 5,
        Mb: 6,
        Kb: 7,
        Ib: 8,
        Nb: 9,
        PROXY: 10,
        NOPROXY: 11,
        Gb: 12,
        Cb: 13,
        Db: 14,
        Bb: 15,
        Eb: 16,
        Fb: 17,
        ib: 18,
        hb: 19,
        jb: 20
    };
    Ab.NO_ERROR = 0;
    Ab.TIMEOUT = 8;
    Ab.HTTP_ERROR = 6;
    ErrorCode = webchannel_blob_es2018.ErrorCode = Ab;
    Bb.COMPLETE = "complete";
    EventType = webchannel_blob_es2018.EventType = Bb;
    mb.EventType = H;
    H.OPEN = "a";
    H.CLOSE = "b";
    H.ERROR = "c";
    H.MESSAGE = "d";
    E.prototype.listen = E.prototype.K;
    WebChannel = webchannel_blob_es2018.WebChannel = mb;
    FetchXmlHttpFactory = webchannel_blob_es2018.FetchXmlHttpFactory = Jc;
    X.prototype.listenOnce = X.prototype.L;
    X.prototype.getLastError = X.prototype.Ka;
    X.prototype.getLastErrorCode = X.prototype.Ba;
    X.prototype.getStatus = X.prototype.Z;
    X.prototype.getResponseJson = X.prototype.Oa;
    X.prototype.getResponseText = X.prototype.oa;
    X.prototype.send = X.prototype.ea;
    X.prototype.setWithCredentials = X.prototype.Ha;
    XhrIo = webchannel_blob_es2018.XhrIo = X;
}).apply(typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {});
;
 //# sourceMappingURL=webchannel_blob_es2018.js.map

})()),
}]);

//# sourceMappingURL=08b5e_%40firebase_3f79a8._.js.map