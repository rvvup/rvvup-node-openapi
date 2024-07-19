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
import { ThemeBackgroundImageCreateInput } from './themeBackgroundImageCreateInput';
import { ThemeColorsCreateInput } from './themeColorsCreateInput';
import { ThemePaymentMethodSelectorCreateInput } from './themePaymentMethodSelectorCreateInput';

/**
* Theme create input object
*/
export class ThemeCreateInput {
    'backgroundImage'?: ThemeBackgroundImageCreateInput;
    'colors': ThemeColorsCreateInput;
    /**
    * Whether the theme is the default theme that is used when no theme is specified.
    */
    'isDefault': boolean;
    /**
    * The name of the theme.
    */
    'name': string;
    'paymentMethodSelector': ThemePaymentMethodSelectorCreateInput;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "backgroundImage",
            "baseName": "backgroundImage",
            "type": "ThemeBackgroundImageCreateInput"
        },
        {
            "name": "colors",
            "baseName": "colors",
            "type": "ThemeColorsCreateInput"
        },
        {
            "name": "isDefault",
            "baseName": "isDefault",
            "type": "boolean"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "paymentMethodSelector",
            "baseName": "paymentMethodSelector",
            "type": "ThemePaymentMethodSelectorCreateInput"
        }    ];

    static getAttributeTypeMap() {
        return ThemeCreateInput.attributeTypeMap;
    }
}

