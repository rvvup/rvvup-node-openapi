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
import { Money } from './money';

/**
* An account statement credit note.
*/
export class AccountStatementCreditNote {
    'amountRemaining': Money;
    /**
    * The created date of the credit note.
    */
    'creditNoteDate': Date;
    /**
    * The due date of the credit note.
    */
    'dueDate': Date;
    /**
    * The unique ID of the credit note.
    */
    'id': string;
    /**
    * The ID of the merchant that owns the credit note.
    */
    'merchantId': string;
    /**
    * Key value pairs to store additional information about the credit note.
    */
    'metadata': { [key: string]: string; };
    /**
    * The reference of the invoice.
    */
    'reference': string;
    'taxAmount': Money;
    'total': Money;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amountRemaining",
            "baseName": "amountRemaining",
            "type": "Money"
        },
        {
            "name": "creditNoteDate",
            "baseName": "creditNoteDate",
            "type": "Date"
        },
        {
            "name": "dueDate",
            "baseName": "dueDate",
            "type": "Date"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "merchantId",
            "baseName": "merchantId",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "taxAmount",
            "baseName": "taxAmount",
            "type": "Money"
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "Money"
        }    ];

    static getAttributeTypeMap() {
        return AccountStatementCreditNote.attributeTypeMap;
    }
}

