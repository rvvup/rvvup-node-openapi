"use strict";
/**
 * Rvvup API
 * Rvvup Public API
 *
 * The version of the OpenAPI document: 2024-03-01
 * Contact: info@rvvup.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckoutsApi = exports.CheckoutsApiApiKeys = void 0;
const request_1 = __importDefault(require("request"));
const models_1 = require("../model/models");
const models_2 = require("../model/models");
const apis_1 = require("./apis");
let defaultBasePath = 'http://localhost';
// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================
var CheckoutsApiApiKeys;
(function (CheckoutsApiApiKeys) {
})(CheckoutsApiApiKeys || (exports.CheckoutsApiApiKeys = CheckoutsApiApiKeys = {}));
class CheckoutsApi {
    _basePath = defaultBasePath;
    _defaultHeaders = {};
    _useQuerystring = false;
    authentications = {
        'default': new models_1.VoidAuth(),
        'apiKey': new models_2.HttpBearerAuth(),
    };
    interceptors = [];
    constructor(basePathOrUsername, password, basePath) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    set defaultHeaders(defaultHeaders) {
        this._defaultHeaders = defaultHeaders;
    }
    get defaultHeaders() {
        return this._defaultHeaders;
    }
    get basePath() {
        return this._basePath;
    }
    setDefaultAuthentication(auth) {
        this.authentications.default = auth;
    }
    setApiKey(key, value) {
        this.authentications[CheckoutsApiApiKeys[key]].apiKey = value;
    }
    set accessToken(accessToken) {
        this.authentications.apiKey.accessToken = accessToken;
    }
    addInterceptor(interceptor) {
        this.interceptors.push(interceptor);
    }
    /**
     * Creates a new checkout.
     * @summary Create new checkout
     * @param merchantId merchant id
     * @param checkoutCreateInput The Checkout to create
     * @param idempotencyKey Idempotency Key
     */
    async createCheckout(merchantId, checkoutCreateInput, idempotencyKey, options = { headers: {} }) {
        const localVarPath = this.basePath + '/api/2024-03-01/{merchantId}/checkouts'
            .replace('{' + 'merchantId' + '}', encodeURIComponent(String(merchantId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams = {};
        // verify required parameter 'merchantId' is not null or undefined
        if (merchantId === null || merchantId === undefined) {
            throw new Error('Required parameter merchantId was null or undefined when calling createCheckout.');
        }
        // verify required parameter 'checkoutCreateInput' is not null or undefined
        if (checkoutCreateInput === null || checkoutCreateInput === undefined) {
            throw new Error('Required parameter checkoutCreateInput was null or undefined when calling createCheckout.');
        }
        localVarHeaderParams['Idempotency-Key'] = models_1.ObjectSerializer.serialize(idempotencyKey, "string");
        Object.assign(localVarHeaderParams, options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: models_1.ObjectSerializer.serialize(checkoutCreateInput, "CheckoutCreateInput")
        };
        let authenticationPromise = Promise.resolve();
        if (this.authentications.apiKey.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.apiKey.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }
        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    localVarRequestOptions.formData = localVarFormParams;
                }
                else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise((resolve, reject) => {
                (0, request_1.default)(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = models_1.ObjectSerializer.deserialize(body, "Checkout");
                            resolve({ response: response, body: body });
                        }
                        else {
                            reject(new apis_1.HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Get a checkout by id
     * @summary Get a checkout
     * @param checkoutId checkout id
     * @param merchantId merchant id
     * @param accept Accept header
     */
    async getCheckout(checkoutId, merchantId, accept, options = { headers: {} }) {
        const localVarPath = this.basePath + '/api/2024-03-01/{merchantId}/checkouts/{checkoutId}'
            .replace('{' + 'checkoutId' + '}', encodeURIComponent(String(checkoutId)))
            .replace('{' + 'merchantId' + '}', encodeURIComponent(String(merchantId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this._defaultHeaders);
        const produces = ['application/json', 'application/schema+json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams = {};
        // verify required parameter 'checkoutId' is not null or undefined
        if (checkoutId === null || checkoutId === undefined) {
            throw new Error('Required parameter checkoutId was null or undefined when calling getCheckout.');
        }
        // verify required parameter 'merchantId' is not null or undefined
        if (merchantId === null || merchantId === undefined) {
            throw new Error('Required parameter merchantId was null or undefined when calling getCheckout.');
        }
        localVarHeaderParams['Accept'] = models_1.ObjectSerializer.serialize(accept, "string");
        Object.assign(localVarHeaderParams, options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        let authenticationPromise = Promise.resolve();
        if (this.authentications.apiKey.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.apiKey.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }
        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    localVarRequestOptions.formData = localVarFormParams;
                }
                else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise((resolve, reject) => {
                (0, request_1.default)(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = models_1.ObjectSerializer.deserialize(body, "Checkout");
                            resolve({ response: response, body: body });
                        }
                        else {
                            reject(new apis_1.HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Gets the theme for a checkout. The theme is used to style the checkout page.
     * @summary Get the theme for a checkout
     * @param merchantId Merchant ID
     * @param checkoutId Checkout ID
     */
    async getThemeForCheckout(merchantId, checkoutId, options = { headers: {} }) {
        const localVarPath = this.basePath + '/api/2024-03-01/{merchantId}/checkouts/{checkoutId}/theme'
            .replace('{' + 'merchantId' + '}', encodeURIComponent(String(merchantId)))
            .replace('{' + 'checkoutId' + '}', encodeURIComponent(String(checkoutId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams = {};
        // verify required parameter 'merchantId' is not null or undefined
        if (merchantId === null || merchantId === undefined) {
            throw new Error('Required parameter merchantId was null or undefined when calling getThemeForCheckout.');
        }
        // verify required parameter 'checkoutId' is not null or undefined
        if (checkoutId === null || checkoutId === undefined) {
            throw new Error('Required parameter checkoutId was null or undefined when calling getThemeForCheckout.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        let authenticationPromise = Promise.resolve();
        if (this.authentications.apiKey.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.apiKey.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }
        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    localVarRequestOptions.formData = localVarFormParams;
                }
                else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise((resolve, reject) => {
                (0, request_1.default)(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = models_1.ObjectSerializer.deserialize(body, "Theme");
                            resolve({ response: response, body: body });
                        }
                        else {
                            reject(new apis_1.HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Lists the currently eligible payment methods for a checkout. The payment method status and checkout template settings are used to determine the eligible methods.
     * @summary Get payment methods for a checkout
     * @param checkoutId checkout id
     * @param merchantId merchant id
     * @param offset pagination offset
     * @param limit pagination limit
     */
    async listCheckoutPaymentMethods(checkoutId, merchantId, offset, limit, options = { headers: {} }) {
        const localVarPath = this.basePath + '/api/2024-03-01/{merchantId}/checkouts/{checkoutId}/payment-methods'
            .replace('{' + 'checkoutId' + '}', encodeURIComponent(String(checkoutId)))
            .replace('{' + 'merchantId' + '}', encodeURIComponent(String(merchantId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams = {};
        // verify required parameter 'checkoutId' is not null or undefined
        if (checkoutId === null || checkoutId === undefined) {
            throw new Error('Required parameter checkoutId was null or undefined when calling listCheckoutPaymentMethods.');
        }
        // verify required parameter 'merchantId' is not null or undefined
        if (merchantId === null || merchantId === undefined) {
            throw new Error('Required parameter merchantId was null or undefined when calling listCheckoutPaymentMethods.');
        }
        if (offset !== undefined) {
            localVarQueryParameters['offset'] = models_1.ObjectSerializer.serialize(offset, "number");
        }
        if (limit !== undefined) {
            localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
        }
        Object.assign(localVarHeaderParams, options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        let authenticationPromise = Promise.resolve();
        if (this.authentications.apiKey.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.apiKey.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }
        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    localVarRequestOptions.formData = localVarFormParams;
                }
                else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise((resolve, reject) => {
                (0, request_1.default)(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = models_1.ObjectSerializer.deserialize(body, "PaymentMethodDetailsPage");
                            resolve({ response: response, body: body });
                        }
                        else {
                            reject(new apis_1.HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * List checkouts
     * @summary List checkouts
     * @param merchantId merchant id
     * @param offset pagination offset
     * @param limit pagination limit
     */
    async listCheckouts(merchantId, offset, limit, options = { headers: {} }) {
        const localVarPath = this.basePath + '/api/2024-03-01/{merchantId}/checkouts'
            .replace('{' + 'merchantId' + '}', encodeURIComponent(String(merchantId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams = {};
        // verify required parameter 'merchantId' is not null or undefined
        if (merchantId === null || merchantId === undefined) {
            throw new Error('Required parameter merchantId was null or undefined when calling listCheckouts.');
        }
        if (offset !== undefined) {
            localVarQueryParameters['offset'] = models_1.ObjectSerializer.serialize(offset, "number");
        }
        if (limit !== undefined) {
            localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
        }
        Object.assign(localVarHeaderParams, options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        let authenticationPromise = Promise.resolve();
        if (this.authentications.apiKey.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.apiKey.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }
        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    localVarRequestOptions.formData = localVarFormParams;
                }
                else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise((resolve, reject) => {
                (0, request_1.default)(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = models_1.ObjectSerializer.deserialize(body, "CheckoutPage");
                            resolve({ response: response, body: body });
                        }
                        else {
                            reject(new apis_1.HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
exports.CheckoutsApi = CheckoutsApi;
//# sourceMappingURL=checkoutsApi.js.map