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

import { RequestFile } from './models';
import { AccountStatementConnectionType } from './accountStatementConnectionType';

/**
* Data for the account statement connection.
*/
export class AccountStatementConnection {
    'type': AccountStatementConnectionType;

    static discriminator: string | undefined = "type";

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "AccountStatementConnectionType"
        }    ];

    static getAttributeTypeMap() {
        return AccountStatementConnection.attributeTypeMap;
    }
}

export namespace AccountStatementConnection {
}
