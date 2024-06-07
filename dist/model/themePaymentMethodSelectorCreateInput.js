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
exports.ThemePaymentMethodSelectorCreateInput = void 0;
/**
* The theme settings for the payment method selector.
*/
class ThemePaymentMethodSelectorCreateInput {
    'colors';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "colors",
            "baseName": "colors",
            "type": "ThemePaymentMethodSelectorColorsCreateInput"
        }
    ];
    static getAttributeTypeMap() {
        return ThemePaymentMethodSelectorCreateInput.attributeTypeMap;
    }
}
exports.ThemePaymentMethodSelectorCreateInput = ThemePaymentMethodSelectorCreateInput;
//# sourceMappingURL=themePaymentMethodSelectorCreateInput.js.map