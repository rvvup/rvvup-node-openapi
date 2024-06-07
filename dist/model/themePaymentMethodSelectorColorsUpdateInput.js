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
exports.ThemePaymentMethodSelectorColorsUpdateInput = void 0;
/**
* Theme payment method selector colors update input
*/
class ThemePaymentMethodSelectorColorsUpdateInput {
    /**
    * The border color.
    */
    'background';
    /**
    * The background color.
    */
    'border';
    /**
    * The hover background color.
    */
    'hoverBackground';
    /**
    * The hover text color.
    */
    'hoverText';
    /**
    * The text color.
    */
    'text';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "background",
            "baseName": "background",
            "type": "string"
        },
        {
            "name": "border",
            "baseName": "border",
            "type": "string"
        },
        {
            "name": "hoverBackground",
            "baseName": "hoverBackground",
            "type": "string"
        },
        {
            "name": "hoverText",
            "baseName": "hoverText",
            "type": "string"
        },
        {
            "name": "text",
            "baseName": "text",
            "type": "string"
        }
    ];
    static getAttributeTypeMap() {
        return ThemePaymentMethodSelectorColorsUpdateInput.attributeTypeMap;
    }
}
exports.ThemePaymentMethodSelectorColorsUpdateInput = ThemePaymentMethodSelectorColorsUpdateInput;
//# sourceMappingURL=themePaymentMethodSelectorColorsUpdateInput.js.map