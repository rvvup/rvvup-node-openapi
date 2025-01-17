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
exports.CheckoutPaymentMethodSettings = void 0;
/**
* The payment method settings to be used for the checkout.
*/
class CheckoutPaymentMethodSettings {
    'applePay';
    'card';
    'googlePay';
    'payByBank';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "applePay",
            "baseName": "applePay",
            "type": "CheckoutApplePaySettings"
        },
        {
            "name": "card",
            "baseName": "card",
            "type": "CheckoutCardSettings"
        },
        {
            "name": "googlePay",
            "baseName": "googlePay",
            "type": "CheckoutGooglePaySettings"
        },
        {
            "name": "payByBank",
            "baseName": "payByBank",
            "type": "CheckoutPayByBankSettings"
        }
    ];
    static getAttributeTypeMap() {
        return CheckoutPaymentMethodSettings.attributeTypeMap;
    }
}
exports.CheckoutPaymentMethodSettings = CheckoutPaymentMethodSettings;
//# sourceMappingURL=checkoutPaymentMethodSettings.js.map