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

import { RequestFile } from './models';

/**
* Theme colors object
*/
export class ThemeColors {
    /**
    * Primary color.
    */
    'primary': string;
    /**
    * Primary divider color.
    */
    'primaryDivider': string;
    /**
    * Primary hover color.
    */
    'primaryHover': string;
    /**
    * Primary hover light color.
    */
    'primaryHoverLight': string;
    /**
    * Primary light color.
    */
    'primaryLight': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
        }    ];

    static getAttributeTypeMap() {
        return ThemeColors.attributeTypeMap;
    }
}

