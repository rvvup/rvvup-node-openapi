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
import { ApplicationSource } from './applicationSource';
import { CheckoutAmountType } from './checkoutAmountType';
import { CheckoutCustomerFieldsInput } from './checkoutCustomerFieldsInput';
import { CheckoutMode } from './checkoutMode';
import { CheckoutPaymentMethodSettingsInput } from './checkoutPaymentMethodSettingsInput';
import { CheckoutReferenceType } from './checkoutReferenceType';
import { PaymentMethod } from './paymentMethod';

/**
* The input for creating a checkout template.
*/
export class CheckoutTemplateCreateInput {
    'amountType'?: CheckoutAmountType;
    'customerFields'?: CheckoutCustomerFieldsInput;
    /**
    * Ordered list of payment methods that are enabled for the checkout.
    */
    'enabledPaymentMethods'?: CheckoutTemplateCreateInput.EnabledPaymentMethodsEnum;
    'mode'?: CheckoutMode;
    /**
    * The name of the checkout template.
    */
    'name': string;
    /**
    * Whether the customer should be notified on payment completion.
    */
    'notifyCustomer'?: boolean = false;
    /**
    * Whether you should be notified on payment completion.
    */
    'notifyMerchant'?: boolean = false;
    'paymentMethodSettings'?: CheckoutPaymentMethodSettingsInput;
    'referenceType'?: CheckoutReferenceType;
    'source'?: ApplicationSource;

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
            "type": "CheckoutCustomerFieldsInput"
        },
        {
            "name": "enabledPaymentMethods",
            "baseName": "enabledPaymentMethods",
            "type": "CheckoutTemplateCreateInput.EnabledPaymentMethodsEnum"
        },
        {
            "name": "mode",
            "baseName": "mode",
            "type": "CheckoutMode"
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
            "type": "CheckoutPaymentMethodSettingsInput"
        },
        {
            "name": "referenceType",
            "baseName": "referenceType",
            "type": "CheckoutReferenceType"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "ApplicationSource"
        }    ];

    static getAttributeTypeMap() {
        return CheckoutTemplateCreateInput.attributeTypeMap;
    }
}

export namespace CheckoutTemplateCreateInput {
    export enum EnabledPaymentMethodsEnum {
    }
}
