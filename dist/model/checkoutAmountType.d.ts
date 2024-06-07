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
/**
* The amount type for the checkout. This can be either a fixed amount or an editable amount. If the amount is editable, the user can enter the amount they want to pay inside the hosted checkout. If the amount is fixed, the amount set in the checkout is the amount that will be paid and cannot be changed inside the hosted checkout.
*/
export declare enum CheckoutAmountType {
    Fixed,
    Editable
}
