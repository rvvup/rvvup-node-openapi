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
import { AccountStatementCreditNote } from './accountStatementCreditNote';
import { AccountStatementInvoice } from './accountStatementInvoice';
import { AccountStatementStatus } from './accountStatementStatus';

/**
* The account statement.
*/
export class AccountStatement {
    /**
    * A list of successful checkouts that have been made for the statement.
    */
    'checkoutIds': Set<string>;
    'connection'?: AccountStatementConnection;
    /**
    * The credit notes of the account statement.
    */
    'creditNotes': Array<AccountStatementCreditNote>;
    /**
    * The unique ID of the account statement.
    */
    'id': string;
    /**
    * The invoices of the account statement.
    */
    'invoices': Array<AccountStatementInvoice>;
    /**
    * The ID of the merchant that owns this account statement.
    */
    'merchantId': string;
    /**
    * A list of checkouts that have in progress pending payments for the statement.
    */
    'pendingCheckoutIds': Set<string>;
    /**
    * The reference of the account statement.
    */
    'reference'?: string;
    'status': AccountStatementStatus;
    /**
    * The URL to the account statement page.
    */
    'url': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "checkoutIds",
            "baseName": "checkoutIds",
            "type": "Set<string>"
        },
        {
            "name": "connection",
            "baseName": "connection",
            "type": "AccountStatementConnection"
        },
        {
            "name": "creditNotes",
            "baseName": "creditNotes",
            "type": "Array<AccountStatementCreditNote>"
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
            "name": "pendingCheckoutIds",
            "baseName": "pendingCheckoutIds",
            "type": "Set<string>"
        },
        {
            "name": "reference",
            "baseName": "reference",
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
