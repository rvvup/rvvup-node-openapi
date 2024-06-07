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
* The status of the payment link.
*/
export enum PaymentLinkStatus {
    Active = <any> 'ACTIVE',
    Expired = <any> 'EXPIRED',
    Inactive = <any> 'INACTIVE',
    Completed = <any> 'COMPLETED'
}
