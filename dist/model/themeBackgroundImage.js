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
exports.ThemeBackgroundImage = void 0;
/**
* The background images for the theme.
*/
class ThemeBackgroundImage {
    'desktop';
    'mobile';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "desktop",
            "baseName": "desktop",
            "type": "ThemeDesktopBackgroundImage"
        },
        {
            "name": "mobile",
            "baseName": "mobile",
            "type": "ThemeMobileBackgroundImage"
        }
    ];
    static getAttributeTypeMap() {
        return ThemeBackgroundImage.attributeTypeMap;
    }
}
exports.ThemeBackgroundImage = ThemeBackgroundImage;
//# sourceMappingURL=themeBackgroundImage.js.map