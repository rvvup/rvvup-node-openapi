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
import { ThemePaymentMethodSelectorColors } from './themePaymentMethodSelectorColors';

/**
* The theme settings for the payment method selector.
*/
export class ThemePaymentMethodSelector {
    'colors': ThemePaymentMethodSelectorColors;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "colors",
            "baseName": "colors",
            "type": "ThemePaymentMethodSelectorColors"
        }    ];

    static getAttributeTypeMap() {
        return ThemePaymentMethodSelector.attributeTypeMap;
    }
}

