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
exports.AccountStatementStatus = void 0;
/**
* The status of the account statement. Derived from the invoice data. If all invoices are paid, the account statement is considered paid.
*/
var AccountStatementStatus;
(function (AccountStatementStatus) {
    AccountStatementStatus[AccountStatementStatus["Unpaid"] = 'UNPAID'] = "Unpaid";
    AccountStatementStatus[AccountStatementStatus["PartiallyPaid"] = 'PARTIALLY_PAID'] = "PartiallyPaid";
    AccountStatementStatus[AccountStatementStatus["Paid"] = 'PAID'] = "Paid";
})(AccountStatementStatus || (exports.AccountStatementStatus = AccountStatementStatus = {}));
//# sourceMappingURL=accountStatementStatus.js.map