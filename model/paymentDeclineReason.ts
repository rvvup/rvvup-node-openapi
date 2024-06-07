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
* The reason the payment was declined.
*/
export enum PaymentDeclineReason {
    InsufficientFunds = <any> 'INSUFFICIENT_FUNDS',
    FundingInstrumentDeclined = <any> 'FUNDING_INSTRUMENT_DECLINED',
    ConsentMissing = <any> 'CONSENT_MISSING',
    SuspectedFraud = <any> 'SUSPECTED_FRAUD',
    AmountLimitsExceeded = <any> 'AMOUNT_LIMITS_EXCEEDED',
    AccountClosed = <any> 'ACCOUNT_CLOSED',
    Cvv2Failure = <any> 'CVV2_FAILURE',
    FundingInstrumentExpired = <any> 'FUNDING_INSTRUMENT_EXPIRED',
    FundingInstrumentInvalid = <any> 'FUNDING_INSTRUMENT_INVALID'
}
