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
exports.AccountStatementConnection = void 0;
/**
* Data for the account statement connection.
*/
class AccountStatementConnection {
    'type';
    static discriminator = "type";
    static attributeTypeMap = [
        {
            "name": "type",
            "baseName": "type",
            "type": "AccountStatementConnectionType"
        }
    ];
    static getAttributeTypeMap() {
        return AccountStatementConnection.attributeTypeMap;
    }
}
exports.AccountStatementConnection = AccountStatementConnection;
//# sourceMappingURL=accountStatementConnection.js.map