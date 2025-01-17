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
exports.Checkout = void 0;
/**
* Checkout object
*/
class Checkout {
    'amount';
    'billingAddress';
    /**
    * The URL to redirect the customer to if the checkout does not complete successfully.
    */
    'cancelUrl';
    /**
    * The ID of the checkout template to use for this checkout.
    */
    'checkoutTemplateId';
    /**
    * The datetime when the checkout was created.
    */
    'createdAt';
    'customer';
    /**
    * The datetime when the checkout will expire.
    */
    'expiresAt';
    /**
    * The unique ID of the checkout.
    */
    'id';
    'items';
    /**
    * The ID of the merchant that owns this checkout.
    */
    'merchantId';
    /**
    * Key value pairs to store additional information about the checkout.
    */
    'metadata';
    'mode';
    /**
    * Id related to this checkout mode. The associated AccountStatement\'s id for the ACCOUNT_STATEMENT mode.The associated PaymentLink\'s id for the PAYMENT_LINK mode.The checkout\'s id for the CHECKOUT and VIRTUAL_TERMINAL mode.
    */
    'modeId';
    /**
    * The ID of the payment link that was used to create this checkout.This field is deprecated and will be removed in a future version.Use the modeId field instead.
    */
    'paymentLinkId';
    /**
    * The IDs of the payment sessions that were created for this checkout.
    */
    'paymentSessionIds';
    /**
    * The URL to redirect the customer to if the checkout falls into a pending payment flow.
    */
    'pendingUrl';
    /**
    * Your reference to identify the checkout and the subsequently created payment sessions.
    */
    'reference';
    'source';
    'status';
    /**
    * The URL to redirect the customer to after the checkout is completed successfully.
    */
    'successUrl';
    /**
    * The datetime when the checkout was last updated.
    */
    'updatedAt';
    /**
    * The URL to the hosted checkout page.
    */
    'url';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "Money"
        },
        {
            "name": "billingAddress",
            "baseName": "billingAddress",
            "type": "Address"
        },
        {
            "name": "cancelUrl",
            "baseName": "cancelUrl",
            "type": "string"
        },
        {
            "name": "checkoutTemplateId",
            "baseName": "checkoutTemplateId",
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
            "name": "expiresAt",
            "baseName": "expiresAt",
            "type": "Date"
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
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "mode",
            "baseName": "mode",
            "type": "CheckoutMode"
        },
        {
            "name": "modeId",
            "baseName": "modeId",
            "type": "string"
        },
        {
            "name": "paymentLinkId",
            "baseName": "paymentLinkId",
            "type": "string"
        },
        {
            "name": "paymentSessionIds",
            "baseName": "paymentSessionIds",
            "type": "Array<string>"
        },
        {
            "name": "pendingUrl",
            "baseName": "pendingUrl",
            "type": "string"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "ApplicationSource"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "CheckoutStatus"
        },
        {
            "name": "successUrl",
            "baseName": "successUrl",
            "type": "string"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        }
    ];
    static getAttributeTypeMap() {
        return Checkout.attributeTypeMap;
    }
}
exports.Checkout = Checkout;
//# sourceMappingURL=checkout.js.map