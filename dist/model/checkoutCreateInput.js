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
exports.CheckoutCreateInput = void 0;
/**
* The input to create a new checkout.
*/
class CheckoutCreateInput {
    'amount';
    'billingAddress';
    /**
    * The URL to redirect the user to if the checkout does not complete successfully.                          This field supports the template variable `{{CHECKOUT_ID}}` which will be replaced with the                          created checkouts ID.
    */
    'cancelUrl';
    /**
    * The ID of the checkout template to use for this checkout.                          If not provided, the default template will be used.                          If provided, the template must be available to the merchant.
    */
    'checkoutTemplateId';
    'customer';
    'items';
    /**
    * Key value pairs to store additional information about the checkout.
    */
    'metadata';
    'mode';
    /**
    * ID related to this checkout mode. Required for the ACCOUNT_STATEMENT mode and should be set to the AccountStatement\'s ID.Automatically set for all other modes.
    */
    'modeId';
    /**
    * The URL to redirect the user to if the checkout falls into a pending payment flow.                          This field supports the template variable `{{CHECKOUT_ID}}` which will be replaced with the                          created checkouts ID.
    */
    'pendingUrl';
    /**
    * Your reference to identify the checkout and the subsequently created payment sessions.
    */
    'reference';
    'source';
    /**
    * The URL to redirect the user to after the checkout is completed successfully.                          This field supports the template variable `{{CHECKOUT_ID}}` which will be replaced with the                          created checkouts ID.
    */
    'successUrl';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "MoneyInput"
        },
        {
            "name": "billingAddress",
            "baseName": "billingAddress",
            "type": "AddressInput"
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
            "name": "customer",
            "baseName": "customer",
            "type": "CustomerInput"
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<ItemInput>"
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
            "name": "successUrl",
            "baseName": "successUrl",
            "type": "string"
        }
    ];
    static getAttributeTypeMap() {
        return CheckoutCreateInput.attributeTypeMap;
    }
}
exports.CheckoutCreateInput = CheckoutCreateInput;
//# sourceMappingURL=checkoutCreateInput.js.map