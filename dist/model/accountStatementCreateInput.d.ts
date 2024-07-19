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
import { AccountStatementConnectionInput } from './accountStatementConnectionInput';
import { AccountStatementInvoiceCreateInput } from './accountStatementInvoiceCreateInput';
/**
* The input to create a new account statement.
*/
export declare class AccountStatementCreateInput {
    'connection'?: AccountStatementConnectionInput;
    'invoices'?: Array<AccountStatementInvoiceCreateInput>;
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