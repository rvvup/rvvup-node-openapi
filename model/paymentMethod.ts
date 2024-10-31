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
* The payment method.
*/
export enum PaymentMethod {
    FakePaymentMethod = <any> 'FAKE_PAYMENT_METHOD',
    Clearpay = <any> 'CLEARPAY',
    Crypto = <any> 'CRYPTO',
    Paypal = <any> 'PAYPAL',
    PaypalCustomCard = <any> 'PAYPAL_CUSTOM_CARD',
    Card = <any> 'CARD',
    ApplePay = <any> 'APPLE_PAY',
    GooglePay = <any> 'GOOGLE_PAY',
    PayByBank = <any> 'PAY_BY_BANK'
}
