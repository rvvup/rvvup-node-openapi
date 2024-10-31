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
import { CheckoutApplePaySettingsInput } from './checkoutApplePaySettingsInput';
import { CheckoutCardSettingsInput } from './checkoutCardSettingsInput';
import { CheckoutGooglePaySettingsInput } from './checkoutGooglePaySettingsInput';
import { CheckoutPayByBankSettingsInput } from './checkoutPayByBankSettingsInput';
/**
* The payment method settings to be used for the checkout.
*/
export declare class CheckoutPaymentMethodSettingsInput {
    'applePay'?: CheckoutApplePaySettingsInput;
    'card'?: CheckoutCardSettingsInput;
    'googlePay'?: CheckoutGooglePaySettingsInput;
    'payByBank'?: CheckoutPayByBankSettingsInput;
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
