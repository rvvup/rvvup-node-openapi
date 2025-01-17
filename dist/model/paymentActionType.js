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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentActionType = void 0;
/**
* The type of the payment action.
*/
var PaymentActionType;
(function (PaymentActionType) {
    PaymentActionType[PaymentActionType["Authorization"] = 'AUTHORIZATION'] = "Authorization";
    PaymentActionType[PaymentActionType["Capture"] = 'CAPTURE'] = "Capture";
    PaymentActionType[PaymentActionType["Cancel"] = 'CANCEL'] = "Cancel";
    PaymentActionType[PaymentActionType["ConfirmAuthorization"] = 'CONFIRM_AUTHORIZATION'] = "ConfirmAuthorization";
    PaymentActionType[PaymentActionType["Card3DsAuthentication"] = 'CARD_3DS_AUTHENTICATION'] = "Card3DsAuthentication";
})(PaymentActionType || (exports.PaymentActionType = PaymentActionType = {}));
//# sourceMappingURL=paymentActionType.js.map