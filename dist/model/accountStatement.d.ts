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
import { AccountStatementConnection } from './accountStatementConnection';
import { AccountStatementInvoice } from './accountStatementInvoice';
import { AccountStatementStatus } from './accountStatementStatus';
/**
* The account statement.
*/
export declare class AccountStatement {
    'checkoutIds': Array<string>;
    'connection'?: AccountStatementConnection;
    'id': string;
    'invoices': Array<AccountStatementInvoice>;
    'merchantId': string;
    'status': AccountStatementStatus;
    'url': string;
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
export declare namespace AccountStatement {
}
