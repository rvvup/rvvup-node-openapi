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
import { AccountStatementConnection } from './accountStatementConnection';
import { AccountStatementInvoice } from './accountStatementInvoice';
import { AccountStatementStatus } from './accountStatementStatus';

/**
* The account statement.
*/
export class AccountStatement {
    'checkoutIds': Array<string>;
    'connection'?: AccountStatementConnection;
    'id': string;
    'invoices': Array<AccountStatementInvoice>;
    'merchantId': string;
    'status': AccountStatementStatus;
    'url': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "checkoutIds",
            "baseName": "checkoutIds",
            "type": "Array<string>"
        },
        {
            "name": "connection",
            "baseName": "connection",
            "type": "AccountStatementConnection"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "invoices",
            "baseName": "invoices",
            "type": "Array<AccountStatementInvoice>"
        },
        {
            "name": "merchantId",
            "baseName": "merchantId",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "AccountStatementStatus"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AccountStatement.attributeTypeMap;
    }
}

export namespace AccountStatement {
}