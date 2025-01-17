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
import { ConnectionData } from './connectionData';
import { ConnectionStatus } from './connectionStatus';

/**
* The connection.
*/
export class Connection {
    'createdAt': Date;
    'data': ConnectionData;
    'id': string;
    'merchantId': string;
    'status': ConnectionStatus;
    'updatedAt': Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "ConnectionData"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "merchantId",
            "baseName": "merchantId",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "ConnectionStatus"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return Connection.attributeTypeMap;
    }
}

export namespace Connection {
}
