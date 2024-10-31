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
exports.ConnectionPage = void 0;
class ConnectionPage {
    'pageable';
    'results';
    'total';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "pageable",
            "baseName": "pageable",
            "type": "Pageable"
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<Connection>"
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number"
        }
    ];
    static getAttributeTypeMap() {
        return ConnectionPage.attributeTypeMap;
    }
}
exports.ConnectionPage = ConnectionPage;
//# sourceMappingURL=connectionPage.js.map