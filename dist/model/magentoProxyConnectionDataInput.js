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
exports.MagentoProxyConnectionDataInput = void 0;
const connectionDataInput_1 = require("./connectionDataInput");
/**
* Data for the magento proxy connection.
*/
class MagentoProxyConnectionDataInput extends connectionDataInput_1.ConnectionDataInput {
    'accessToken';
    'accessTokenSecret';
    'baseUrl';
    'consumerKey';
    'consumerSecret';
    'oauthSignatureMethod';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "accessToken",
            "baseName": "accessToken",
            "type": "string"
        },
        {
            "name": "accessTokenSecret",
            "baseName": "accessTokenSecret",
            "type": "string"
        },
        {
            "name": "baseUrl",
            "baseName": "baseUrl",
            "type": "string"
        },
        {
            "name": "consumerKey",
            "baseName": "consumerKey",
            "type": "string"
        },
        {
            "name": "consumerSecret",
            "baseName": "consumerSecret",
            "type": "string"
        },
        {
            "name": "oauthSignatureMethod",
            "baseName": "oauthSignatureMethod",
            "type": "ConnectionOauthSignatureMethod"
        }
    ];
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MagentoProxyConnectionDataInput.attributeTypeMap);
    }
}
exports.MagentoProxyConnectionDataInput = MagentoProxyConnectionDataInput;
//# sourceMappingURL=magentoProxyConnectionDataInput.js.map