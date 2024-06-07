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
import { CheckoutAmountType } from './checkoutAmountType';
import { CheckoutCustomerFieldsUpdateInput } from './checkoutCustomerFieldsUpdateInput';
import { CheckoutPaymentMethodSettingsUpdateInput } from './checkoutPaymentMethodSettingsUpdateInput';
import { PaymentMethod } from './paymentMethod';

/**
* The input for updating a checkout template.
*/
export class CheckoutTemplateUpdateInput {
    'amountType'?: CheckoutAmountType;
    'customerFields'?: CheckoutCustomerFieldsUpdateInput;
    /**
    * Ordered list of payment methods that are enabled for the checkout.
    */
    'enabledPaymentMethods'?: Array<PaymentMethod>;
    /**
    * The name of the checkout template.
    */
    'name'?: string;
    /**
    * Whether the customer should be notified on payment completion.
    */
    'notifyCustomer'?: boolean = false;
    /**
    * Whether you should be notified on payment completion.
    */
    'notifyMerchant'?: boolean = false;
    'paymentMethodSettings'?: CheckoutPaymentMethodSettingsUpdateInput;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amountType",
            "baseName": "amountType",
            "type": "CheckoutAmountType"
        },
        {
            "name": "customerFields",
            "baseName": "customerFields",
            "type": "CheckoutCustomerFieldsUpdateInput"
        },
        {
            "name": "enabledPaymentMethods",
            "baseName": "enabledPaymentMethods",
            "type": "Array<PaymentMethod>"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "notifyCustomer",
            "baseName": "notifyCustomer",
            "type": "boolean"
        },
        {
            "name": "notifyMerchant",
            "baseName": "notifyMerchant",
            "type": "boolean"
        },
        {
            "name": "paymentMethodSettings",
            "baseName": "paymentMethodSettings",
            "type": "CheckoutPaymentMethodSettingsUpdateInput"
        }    ];

    static getAttributeTypeMap() {
        return CheckoutTemplateUpdateInput.attributeTypeMap;
    }
}

export namespace CheckoutTemplateUpdateInput {
}
