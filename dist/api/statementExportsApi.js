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
exports.StatementExportsApi = exports.StatementExportsApiApiKeys = void 0;
const request_1 = __importDefault(require("request"));
const models_1 = require("../model/models");
const models_2 = require("../model/models");
const apis_1 = require("./apis");
let defaultBasePath = 'http://localhost';
// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================
var StatementExportsApiApiKeys;
(function (StatementExportsApiApiKeys) {
})(StatementExportsApiApiKeys || (exports.StatementExportsApiApiKeys = StatementExportsApiApiKeys = {}));
class StatementExportsApi {
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
        this.authentications[StatementExportsApiApiKeys[key]].apiKey = value;
    }
    set accessToken(accessToken) {
        this.authentications.apiKey.accessToken = accessToken;
    }
    addInterceptor(interceptor) {
        this.interceptors.push(interceptor);
    }
    /**
     * Export statements in different formats.
     * @summary Export a statement
     * @param merchantId merchant id
     * @param statementExportRequest Statement export filters
     */
    async exportStatement(merchantId, statementExportRequest, options = { headers: {} }) {
        const localVarPath = this.basePath + '/api/2024-03-01/{merchantId}/statements/export'
            .replace('{' + 'merchantId' + '}', encodeURIComponent(String(merchantId)));
        let localVarQueryParameters = {};
        let localVarHeaderParams = Object.assign({}, this._defaultHeaders);
        const produces = ['application/octet-stream'];
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
            throw new Error('Required parameter merchantId was null or undefined when calling exportStatement.');
        }
        // verify required parameter 'statementExportRequest' is not null or undefined
        if (statementExportRequest === null || statementExportRequest === undefined) {
            throw new Error('Required parameter statementExportRequest was null or undefined when calling exportStatement.');
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
            body: models_1.ObjectSerializer.serialize(statementExportRequest, "StatementExportRequest")
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
exports.StatementExportsApi = StatementExportsApi;
//# sourceMappingURL=statementExportsApi.js.map