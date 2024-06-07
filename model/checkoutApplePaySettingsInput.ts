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
import { CheckoutCustomerFieldsInput } from './checkoutCustomerFieldsInput';
import { PaymentCaptureType } from './paymentCaptureType';

/**
* The Apple Pay settings to be used for the checkout.
*/
export class CheckoutApplePaySettingsInput {
    'captureType'?: PaymentCaptureType;
    'customerFields'?: CheckoutCustomerFieldsInput;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "captureType",
            "baseName": "captureType",
            "type": "PaymentCaptureType"
        },
        {
            "name": "customerFields",
            "baseName": "customerFields",
            "type": "CheckoutCustomerFieldsInput"
        }    ];

    static getAttributeTypeMap() {
        return CheckoutApplePaySettingsInput.attributeTypeMap;
    }
}

export namespace CheckoutApplePaySettingsInput {
}
