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
import { MoneyInput } from './moneyInput';

/**
* The input to create a new account statement credit note.
*/
export class AccountStatementCreditNoteCreateInput {
    'amountRemaining': MoneyInput;
    /**
    * The created date of the credit note.
    */
    'creditNoteDate': Date;
    /**
    * The due date of the credit note.
    */
    'dueDate': Date;
    /**
    * Key value pairs to store additional information about the credit note.
    */
    'metadata'?: { [key: string]: string; };
    /**
    * The reference of the credit note.
    */
    'reference': string;
    'taxAmount': MoneyInput;
    'total': MoneyInput;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amountRemaining",
            "baseName": "amountRemaining",
            "type": "MoneyInput"
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
            "type": "MoneyInput"
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "MoneyInput"
        }    ];

    static getAttributeTypeMap() {
        return AccountStatementCreditNoteCreateInput.attributeTypeMap;
    }
}

