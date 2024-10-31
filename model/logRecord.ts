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
import { ActionType } from './actionType';
import { ActorType } from './actorType';
import { ResourceType } from './resourceType';

/**
* A log record
*/
export class LogRecord {
    'actionType': ActionType;
    'actorType': ActorType;
    /**
    * The creation timestamp
    */
    'createdAt': Date;
    /**
    * The current log record value
    */
    'currentValue': { [key: string]: object; };
    /**
    * The log record ID
    */
    'id': string;
    /**
    * The IP address
    */
    'ipAddress'?: string;
    /**
    * The merchant ID
    */
    'merchantId'?: string;
    /**
    * The previous log record value
    */
    'previousValue'?: { [key: string]: object; };
    /**
    * The principal ID
    */
    'principalId': string;
    /**
    * The reason for the log record
    */
    'reason'?: string;
    /**
    * The resource being accessed
    */
    'resource'?: string;
    /**
    * The resource ID
    */
    'resourceId': string;
    'resourceType': ResourceType;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "actionType",
            "baseName": "actionType",
            "type": "ActionType"
        },
        {
            "name": "actorType",
            "baseName": "actorType",
            "type": "ActorType"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "currentValue",
            "baseName": "currentValue",
            "type": "{ [key: string]: object; }"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "ipAddress",
            "baseName": "ipAddress",
            "type": "string"
        },
        {
            "name": "merchantId",
            "baseName": "merchantId",
            "type": "string"
        },
        {
            "name": "previousValue",
            "baseName": "previousValue",
            "type": "{ [key: string]: object; }"
        },
        {
            "name": "principalId",
            "baseName": "principalId",
            "type": "string"
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string"
        },
        {
            "name": "resource",
            "baseName": "resource",
            "type": "string"
        },
        {
            "name": "resourceId",
            "baseName": "resourceId",
            "type": "string"
        },
        {
            "name": "resourceType",
            "baseName": "resourceType",
            "type": "ResourceType"
        }    ];

    static getAttributeTypeMap() {
        return LogRecord.attributeTypeMap;
    }
}

export namespace LogRecord {
}
