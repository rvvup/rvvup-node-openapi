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
exports.PaymentSessionsApi = exports.PaymentSessionsApiApiKeys = void 0;
const request_1 = __importDefault(require("request"));
const models_1 = require("../model/models");
const models_2 = require("../model/models");
const apis_1 = require("./apis");
let defaultBasePath = 'http://localhost';
// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================
var PaymentSessionsApiApiKeys;
(function (PaymentSessionsApiApiKeys) {
})(PaymentSessionsApiApiKeys || (exports.PaymentSessionsApiApiKeys = PaymentSessionsApiApiKeys = {}));
class PaymentSessionsApi {
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
        this.authentications[PaymentSessionsApiApiKeys[key]].apiKey = value;
    }
    set accessToken(accessToken) {
        this.authentications.apiKey.accessToken = accessToken;
    }
    addInterceptor(interceptor) {
        this.interceptors.push(interceptor);
    }
    /**
     * Creates a payment session with a new active payment.
     * @summary Create a payment session
     * @param merchantId merchant id
     * @param checkoutId checkout id
     * @param paymentSessionCreateInput The Payment Session to create
     */
    async createPaymentSession(merchantId, checkoutId, paymentSessionCreateInput, options = { headers: {} }) {
        const localVarPath = this.basePath + '/api/2024-03-01/{merchantId}/checkouts/{checkoutId}/payment-sessions'
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
            throw new Error('Required parameter merchantId was null or undefined when calling createPaymentSession.');
        }
        // verify required parameter 'checkoutId' is not null or undefined
        if (checkoutId === null || checkoutId === undefined) {
            throw new Error('Required parameter checkoutId was null or undefined when calling createPaymentSession.');
        }
        // verify required parameter 'paymentSessionCreateInput' is not null or undefined
        if (paymentSessionCreateInput === null || paymentSessionCreateInput === undefined) {
            throw new Error('Required parameter paymentSessionCreateInput was null or undefined when calling createPaymentSession.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: models_1.ObjectSerializer.serialize(paymentSessionCreateInput, "PaymentSessionCreateInput")
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
                            body = models_1.ObjectSerializer.deserialize(body, "PaymentSession");
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
     * Get a payment session by id.
     * @summary Get a payment session
     * @param merchantId merchant id
     * @param checkoutId checkout id
     * @param paymentSessionId payment session id
     */
    async getPaymentSession(merchantId, checkoutId, paymentSessionId, options = { headers: {} }) {
        const localVarPath = this.basePath + '/api/2024-03-01/{merchantId}/checkouts/{checkoutId}/payment-sessions/{paymentSessionId}'
            .replace('{' + 'merchantId' + '}', encodeURIComponent(String(merchantId)))
            .replace('{' + 'checkoutId' + '}', encodeURIComponent(String(checkoutId)))
            .replace('{' + 'paymentSessionId' + '}', encodeURIComponent(String(paymentSessionId)));
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
            throw new Error('Required parameter merchantId was null or undefined when calling getPaymentSession.');
        }
        // verify required parameter 'checkoutId' is not null or undefined
        if (checkoutId === null || checkoutId === undefined) {
            throw new Error('Required parameter checkoutId was null or undefined when calling getPaymentSession.');
        }
        // verify required parameter 'paymentSessionId' is not null or undefined
        if (paymentSessionId === null || paymentSessionId === undefined) {
            throw new Error('Required parameter paymentSessionId was null or undefined when calling getPaymentSession.');
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
                            body = models_1.ObjectSerializer.deserialize(body, "PaymentSession");
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
exports.PaymentSessionsApi = PaymentSessionsApi;
//# sourceMappingURL=paymentSessionsApi.js.map