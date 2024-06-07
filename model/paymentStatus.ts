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
* The status of the payment.
*/
export enum PaymentStatus {
    Created = <any> 'CREATED',
    Pending = <any> 'PENDING',
    Succeeded = <any> 'SUCCEEDED',
    RequiresAction = <any> 'REQUIRES_ACTION',
    Failed = <any> 'FAILED',
    Cancelled = <any> 'CANCELLED',
    Declined = <any> 'DECLINED',
    Expired = <any> 'EXPIRED',
    Voided = <any> 'VOIDED',
    Authorized = <any> 'AUTHORIZED',
    AuthorizationExpired = <any> 'AUTHORIZATION_EXPIRED'
}