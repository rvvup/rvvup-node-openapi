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
exports.CheckoutCardSettings = void 0;
/**
* The Card settings to be used for the checkout.
*/
class CheckoutCardSettings {
    'captureType';
    'customerFields';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "captureType",
            "baseName": "captureType",
            "type": "PaymentCaptureType"
        },
        {
            "name": "customerFields",
            "baseName": "customerFields",
            "type": "CheckoutCustomerFields"
        }
    ];
    static getAttributeTypeMap() {
        return CheckoutCardSettings.attributeTypeMap;
    }
}
exports.CheckoutCardSettings = CheckoutCardSettings;
//# sourceMappingURL=checkoutCardSettings.js.map