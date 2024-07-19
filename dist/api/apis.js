"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIS = exports.HttpError = void 0;
__exportStar(require("./accountStatementsApi"), exports);
const accountStatementsApi_1 = require("./accountStatementsApi");
__exportStar(require("./checkoutTemplatesApi"), exports);
const checkoutTemplatesApi_1 = require("./checkoutTemplatesApi");
__exportStar(require("./checkoutsApi"), exports);
const checkoutsApi_1 = require("./checkoutsApi");
__exportStar(require("./paymentLinksApi"), exports);
const paymentLinksApi_1 = require("./paymentLinksApi");
__exportStar(require("./paymentSessionsApi"), exports);
const paymentSessionsApi_1 = require("./paymentSessionsApi");
__exportStar(require("./statementExportsApi"), exports);
const statementExportsApi_1 = require("./statementExportsApi");
__exportStar(require("./themesApi"), exports);
const themesApi_1 = require("./themesApi");
__exportStar(require("./webhooksApi"), exports);
const webhooksApi_1 = require("./webhooksApi");
class HttpError extends Error {
    response;
    body;
    statusCode;
    constructor(response, body, statusCode) {
        super('HTTP request failed');
        this.response = response;
        this.body = body;
        this.statusCode = statusCode;
        this.name = 'HttpError';
    }
}
exports.HttpError = HttpError;
exports.APIS = [accountStatementsApi_1.AccountStatementsApi, checkoutTemplatesApi_1.CheckoutTemplatesApi, checkoutsApi_1.CheckoutsApi, paymentLinksApi_1.PaymentLinksApi, paymentSessionsApi_1.PaymentSessionsApi, statementExportsApi_1.StatementExportsApi, themesApi_1.ThemesApi, webhooksApi_1.WebhooksApi];
//# sourceMappingURL=apis.js.map