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
import { CheckoutAmountType } from './checkoutAmountType';
import { CheckoutCustomerFieldsUpdateInput } from './checkoutCustomerFieldsUpdateInput';
import { CheckoutPaymentMethodSettingsUpdateInput } from './checkoutPaymentMethodSettingsUpdateInput';
import { CheckoutReferenceType } from './checkoutReferenceType';
/**
* The input for updating a checkout template.
*/
export declare class CheckoutTemplateUpdateInput {
    'amountType'?: CheckoutAmountType;
    'customerFields'?: CheckoutCustomerFieldsUpdateInput;
    /**
    * Ordered list of payment methods that are enabled for the checkout.
    */
    'enabledPaymentMethods'?: CheckoutTemplateUpdateInput.EnabledPaymentMethodsEnum;
    /**
    * The name of the checkout template.
    */
    'name'?: string;
    /**
    * Whether the customer should be notified on payment completion.
    */
    'notifyCustomer'?: boolean;
    /**
    * Whether you should be notified on payment completion.
    */
    'notifyMerchant'?: boolean;
    'paymentMethodSettings'?: CheckoutPaymentMethodSettingsUpdateInput;
    'referenceType'?: CheckoutReferenceType;
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
export declare namespace CheckoutTemplateUpdateInput {
    enum EnabledPaymentMethodsEnum {
    }
}
