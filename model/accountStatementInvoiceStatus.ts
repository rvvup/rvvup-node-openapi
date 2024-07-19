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
* The status for this invoice.
*/
export enum AccountStatementInvoiceStatus {
    Unpaid = <any> 'UNPAID',
    PartiallyPaid = <any> 'PARTIALLY_PAID',
    Paid = <any> 'PAID'
}
