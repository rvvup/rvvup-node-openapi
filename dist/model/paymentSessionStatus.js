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
exports.PaymentSessionStatus = void 0;
/**
* The status of the payment session.
*/
var PaymentSessionStatus;
(function (PaymentSessionStatus) {
    PaymentSessionStatus[PaymentSessionStatus["Cancelled"] = 'CANCELLED'] = "Cancelled";
    PaymentSessionStatus[PaymentSessionStatus["Declined"] = 'DECLINED'] = "Declined";
    PaymentSessionStatus[PaymentSessionStatus["Expired"] = 'EXPIRED'] = "Expired";
    PaymentSessionStatus[PaymentSessionStatus["Pending"] = 'PENDING'] = "Pending";
    PaymentSessionStatus[PaymentSessionStatus["RequiresAction"] = 'REQUIRES_ACTION'] = "RequiresAction";
    PaymentSessionStatus[PaymentSessionStatus["RequiresPayment"] = 'REQUIRES_PAYMENT'] = "RequiresPayment";
    PaymentSessionStatus[PaymentSessionStatus["Succeeded"] = 'SUCCEEDED'] = "Succeeded";
})(PaymentSessionStatus || (exports.PaymentSessionStatus = PaymentSessionStatus = {}));
//# sourceMappingURL=paymentSessionStatus.js.map