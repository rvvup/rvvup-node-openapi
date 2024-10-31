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
import { ConnectionData } from './connectionData';
import { ConnectionOauthSignatureMethod } from './connectionOauthSignatureMethod';
/**
* Data for the magento proxy connection.
*/
export declare class MagentoProxyConnectionData extends ConnectionData {
    'accessToken'?: string;
    'accessTokenSecret'?: string;
    'baseUrl'?: string;
    'consumerKey'?: string;
    'consumerSecret'?: string;
    'displayName': string;
    'oauthSignatureMethod'?: ConnectionOauthSignatureMethod;
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
export declare namespace MagentoProxyConnectionData {
}
