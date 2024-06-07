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
exports.ThemeColors = void 0;
/**
* Theme colors object
*/
class ThemeColors {
    /**
    * Primary color.
    */
    'primary';
    /**
    * Primary divider color.
    */
    'primaryDivider';
    /**
    * Primary hover color.
    */
    'primaryHover';
    /**
    * Primary hover light color.
    */
    'primaryHoverLight';
    /**
    * Primary light color.
    */
    'primaryLight';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "primary",
            "baseName": "primary",
            "type": "string"
        },
        {
            "name": "primaryDivider",
            "baseName": "primaryDivider",
            "type": "string"
        },
        {
            "name": "primaryHover",
            "baseName": "primaryHover",
            "type": "string"
        },
        {
            "name": "primaryHoverLight",
            "baseName": "primaryHoverLight",
            "type": "string"
        },
        {
            "name": "primaryLight",
            "baseName": "primaryLight",
            "type": "string"
        }
    ];
    static getAttributeTypeMap() {
        return ThemeColors.attributeTypeMap;
    }
}
exports.ThemeColors = ThemeColors;
//# sourceMappingURL=themeColors.js.map