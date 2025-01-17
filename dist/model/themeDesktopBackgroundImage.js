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
exports.ThemeDesktopBackgroundImage = void 0;
/**
* The background image for desktop with the URLs for the different dimensions.
*/
class ThemeDesktopBackgroundImage {
    /**
    * The ID of the image document.
    */
    'documentId';
    /**
    * The URL for the image with the size 1920x1080.
    */
    'size1920x1080';
    /**
    * The URL for the image with the size 420x800.
    */
    'size420x800';
    /**
    * The URL for the image with the size 768x1024.
    */
    'size768x1024';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "documentId",
            "baseName": "documentId",
            "type": "string"
        },
        {
            "name": "size1920x1080",
            "baseName": "size1920x1080",
            "type": "string"
        },
        {
            "name": "size420x800",
            "baseName": "size420x800",
            "type": "string"
        },
        {
            "name": "size768x1024",
            "baseName": "size768x1024",
            "type": "string"
        }
    ];
    static getAttributeTypeMap() {
        return ThemeDesktopBackgroundImage.attributeTypeMap;
    }
}
exports.ThemeDesktopBackgroundImage = ThemeDesktopBackgroundImage;
//# sourceMappingURL=themeDesktopBackgroundImage.js.map