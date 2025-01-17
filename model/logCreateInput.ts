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
import { ActionTypeInput } from './actionTypeInput';

/**
* The log to create
*/
export class LogCreateInput {
    'actionType': ActionTypeInput;
    'currentData': { [key: string]: object; };
    'reason'?: string;
    'resourceId': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "actionType",
            "baseName": "actionType",
            "type": "ActionTypeInput"
        },
        {
            "name": "currentData",
            "baseName": "currentData",
            "type": "{ [key: string]: object; }"
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string"
        },
        {
            "name": "resourceId",
            "baseName": "resourceId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return LogCreateInput.attributeTypeMap;
    }
}

export namespace LogCreateInput {
}
