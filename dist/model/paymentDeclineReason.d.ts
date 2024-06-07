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
* The reason the payment was declined.
*/
export declare enum PaymentDeclineReason {
    InsufficientFunds,
    FundingInstrumentDeclined,
    ConsentMissing,
    SuspectedFraud,
    AmountLimitsExceeded,
    AccountClosed,
    Cvv2Failure,
    FundingInstrumentExpired,
    FundingInstrumentInvalid
}
