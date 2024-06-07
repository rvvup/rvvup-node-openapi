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
exports.WebhookEventType = void 0;
/**
* The event type of the webhook.
*/
var WebhookEventType;
(function (WebhookEventType) {
    WebhookEventType[WebhookEventType["PaymentAuthorized"] = 'PAYMENT_AUTHORIZED'] = "PaymentAuthorized";
    WebhookEventType[WebhookEventType["PaymentCompleted"] = 'PAYMENT_COMPLETED'] = "PaymentCompleted";
    WebhookEventType[WebhookEventType["PaymentSucceeded"] = 'PAYMENT_SUCCEEDED'] = "PaymentSucceeded";
    WebhookEventType[WebhookEventType["RefundCompleted"] = 'REFUND_COMPLETED'] = "RefundCompleted";
    WebhookEventType[WebhookEventType["RefundSucceeded"] = 'REFUND_SUCCEEDED'] = "RefundSucceeded";
})(WebhookEventType || (exports.WebhookEventType = WebhookEventType = {}));
//# sourceMappingURL=webhookEventType.js.map