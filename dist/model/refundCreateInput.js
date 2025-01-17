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
exports.RefundCreateInput = void 0;
/**
* Input for creating a refund.
*/
class RefundCreateInput {
    'amount';
    /**
    * The reason for the refund.
    */
    'reason';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "MoneyInput"
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string"
        }
    ];
    static getAttributeTypeMap() {
        return RefundCreateInput.attributeTypeMap;
    }
}
exports.RefundCreateInput = RefundCreateInput;
//# sourceMappingURL=refundCreateInput.js.map