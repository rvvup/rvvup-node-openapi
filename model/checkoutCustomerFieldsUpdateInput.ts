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
import { CheckoutCustomerFieldType } from './checkoutCustomerFieldType';

/**
* The customer fields that are required or optional for the checkout.                      If a field is not required or optional, it will not be shown in the hosted checkout page.
*/
export class CheckoutCustomerFieldsUpdateInput {
    /**
    * The optional customer fields for the checkout.
    */
    'optional'?: Set<CheckoutCustomerFieldType>;
    /**
    * The required customer fields for the checkout.
    */
    'required'?: Set<CheckoutCustomerFieldType>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "optional",
            "baseName": "optional",
            "type": "Set<CheckoutCustomerFieldType>"
        },
        {
            "name": "required",
            "baseName": "required",
            "type": "Set<CheckoutCustomerFieldType>"
        }    ];

    static getAttributeTypeMap() {
        return CheckoutCustomerFieldsUpdateInput.attributeTypeMap;
    }
}

