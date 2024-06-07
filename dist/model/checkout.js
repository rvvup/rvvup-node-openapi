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
    /**
    * The ID of the merchant that owns this checkout.
    */
    'merchantId';
    /**
    * Key value pairs to store additional information about the checkout.
    */
    'metadata';
    /**
    * The ID of the payment link that was used to create this checkout.
    */
    'paymentLinkId';
    /**
    * The IDs of the payment sessions that were created for this checkout.
    */
    'paymentSessionIds';
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