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
import { AccountStatementInvoiceStatus } from './accountStatementInvoiceStatus';
import { Money } from './money';

/**
* An account statement invoice.
*/
export class AccountStatementInvoice {
    'amountPaid': Money;
    'amountRemaining': Money;
    'checkoutIds': Array<string>;
    'id': string;
    'invoiceDate': Date;
    'merchantId': string;
    'reference': string;
    'status': AccountStatementInvoiceStatus;
    'total': Money;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amountPaid",
            "baseName": "amountPaid",
            "type": "Money"
        },
        {
            "name": "amountRemaining",
            "baseName": "amountRemaining",
            "type": "Money"
        },
        {
            "name": "checkoutIds",
            "baseName": "checkoutIds",
            "type": "Array<string>"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "invoiceDate",
            "baseName": "invoiceDate",
            "type": "Date"
        },
        {
            "name": "merchantId",
            "baseName": "merchantId",
            "type": "string"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "AccountStatementInvoiceStatus"
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "Money"
        }    ];

    static getAttributeTypeMap() {
        return AccountStatementInvoice.attributeTypeMap;
    }
}

export namespace AccountStatementInvoice {
}