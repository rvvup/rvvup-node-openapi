"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountStatementInvoice = void 0;
/**
* An account statement invoice.
*/
class AccountStatementInvoice {
    'amountPaid';
    'amountRemaining';
    'checkoutIds';
    'id';
    'invoiceDate';
    'merchantId';
    'reference';
    'status';
    'total';
    static discriminator = undefined;
    static attributeTypeMap = [
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
        }
    ];
    static getAttributeTypeMap() {
        return AccountStatementInvoice.attributeTypeMap;
    }
}
exports.AccountStatementInvoice = AccountStatementInvoice;
//# sourceMappingURL=accountStatementInvoice.js.map