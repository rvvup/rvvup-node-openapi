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
import { ActionType } from './actionType';
import { ActorType } from './actorType';
import { ResourceType } from './resourceType';
/**
* A log record
*/
export declare class LogRecord {
    'actionType': ActionType;
    'actorType': ActorType;
    /**
    * The creation timestamp
    */
    'createdAt': Date;
    /**
    * The current log record value
    */
    'currentValue': {
        [key: string]: object;
    };
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
    'previousValue'?: {
        [key: string]: object;
    };
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
export declare namespace LogRecord {
}