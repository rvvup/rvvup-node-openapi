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
exports.ConnectionCreateInput = void 0;
/**
* The input to create a new connection.
*/
class ConnectionCreateInput {
    'data';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "ConnectionDataInput"
        }
    ];
    static getAttributeTypeMap() {
        return ConnectionCreateInput.attributeTypeMap;
    }
}
exports.ConnectionCreateInput = ConnectionCreateInput;
//# sourceMappingURL=connectionCreateInput.js.map