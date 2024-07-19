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
import { ApplicationSource } from './applicationSource';
import { CheckoutAmountType } from './checkoutAmountType';
import { CheckoutCustomerFieldsInput } from './checkoutCustomerFieldsInput';
import { CheckoutMode } from './checkoutMode';
import { CheckoutPaymentMethodSettingsInput } from './checkoutPaymentMethodSettingsInput';
/**
* The input for creating a checkout template.
*/
export declare class CheckoutTemplateCreateInput {
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
    'notifyCustomer'?: boolean;
    /**
    * Whether you should be notified on payment completion.
    */
    'notifyMerchant'?: boolean;
    'paymentMethodSettings'?: CheckoutPaymentMethodSettingsInput;
    'source'?: ApplicationSource;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace CheckoutTemplateCreateInput {
    enum EnabledPaymentMethodsEnum {
    }
}
