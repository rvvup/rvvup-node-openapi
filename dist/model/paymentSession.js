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
exports.PaymentSession = void 0;
class PaymentSession {
    'billingAddress';
    /**
    * The ID of the checkout that the payment session was created from.
    */
    'checkoutId';
    /**
    * The datetime when the payment session was created.
    */
    'createdAt';
    'customer';
    /**
    * The URL to the merchant dashboard for the payment session.
    */
    'dashboardUrl';
    'discountTotal';
    /**
    * Your reference to identify the payment session.
    */
    'externalReference';
    /**
    * The unique ID for the payment session.
    */
    'id';
    /**
    * List of items that the customer is purchasing.
    */
    'items';
    /**
    * The ID of the merchant that the payment session was created for.
    */
    'merchantId';
    /**
    * The ID of the payment link that the payment session was created from.
    */
    'paymentLinkId';
    /**
    * List of payments that have been made for the payment session.
    */
    'payments';
    /**
    * Whether the customer is required to provide a shipping address.
    */
    'requiresShipping';
    'shippingAddress';
    'shippingTotal';
    'status';
    'taxTotal';
    'total';
    /**
    * The datetime when the payment session was last updated.
    */
    'updatedAt';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "billingAddress",
            "baseName": "billingAddress",
            "type": "Address"
        },
        {
            "name": "checkoutId",
            "baseName": "checkoutId",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "customer",
            "baseName": "customer",
            "type": "Customer"
        },
        {
            "name": "dashboardUrl",
            "baseName": "dashboardUrl",
            "type": "string"
        },
        {
            "name": "discountTotal",
            "baseName": "discountTotal",
            "type": "Money"
        },
        {
            "name": "externalReference",
            "baseName": "externalReference",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<Item>"
        },
        {
            "name": "merchantId",
            "baseName": "merchantId",
            "type": "string"
        },
        {
            "name": "paymentLinkId",
            "baseName": "paymentLinkId",
            "type": "string"
        },
        {
            "name": "payments",
            "baseName": "payments",
            "type": "Array<Payment>"
        },
        {
            "name": "requiresShipping",
            "baseName": "requiresShipping",
            "type": "boolean"
        },
        {
            "name": "shippingAddress",
            "baseName": "shippingAddress",
            "type": "Address"
        },
        {
            "name": "shippingTotal",
            "baseName": "shippingTotal",
            "type": "Money"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "PaymentSessionStatus"
        },
        {
            "name": "taxTotal",
            "baseName": "taxTotal",
            "type": "Money"
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "Money"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date"
        }
    ];
    static getAttributeTypeMap() {
        return PaymentSession.attributeTypeMap;
    }
}
exports.PaymentSession = PaymentSession;
//# sourceMappingURL=paymentSession.js.map