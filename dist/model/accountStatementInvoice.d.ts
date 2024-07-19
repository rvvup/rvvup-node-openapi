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
import { AccountStatementInvoiceStatus } from './accountStatementInvoiceStatus';
import { Money } from './money';
/**
* An account statement invoice.
*/
export declare class AccountStatementInvoice {
    'amountPaid': Money;
    'amountRemaining': Money;
    'checkoutIds': Array<string>;
    'id': string;
    'invoiceDate': Date;
    'merchantId': string;
    'reference': string;
    'status': AccountStatementInvoiceStatus;
    'total': Money;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace AccountStatementInvoice {
}
