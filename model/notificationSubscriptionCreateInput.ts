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
import { NotificationSubscriptionConfigurationInput } from './notificationSubscriptionConfigurationInput';
import { NotificationSubscriptionRecipientInput } from './notificationSubscriptionRecipientInput';

/**
* Notification subscription create input.
*/
export class NotificationSubscriptionCreateInput {
    /**
    * Datetime from when the subscription is active. Defaults to current time
    */
    'activeFrom'?: Date;
    /**
    * Optional end datetime for the subscription.
    */
    'activeTo'?: Date;
    /**
    * List of notification configurations for the subscription.
    */
    'configurations': Array<NotificationSubscriptionConfigurationInput>;
    /**
    * Whether main contact of the merchant is included in the recipients.
    */
    'includeMainContact': boolean;
    /**
    * The name of the subscription.
    */
    'name': string;
    /**
    * List of notification recipients for the subscription.
    */
    'recipients': Array<NotificationSubscriptionRecipientInput>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "activeFrom",
            "baseName": "activeFrom",
            "type": "Date"
        },
        {
            "name": "activeTo",
            "baseName": "activeTo",
            "type": "Date"
        },
        {
            "name": "configurations",
            "baseName": "configurations",
            "type": "Array<NotificationSubscriptionConfigurationInput>"
        },
        {
            "name": "includeMainContact",
            "baseName": "includeMainContact",
            "type": "boolean"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "recipients",
            "baseName": "recipients",
            "type": "Array<NotificationSubscriptionRecipientInput>"
        }    ];

    static getAttributeTypeMap() {
        return NotificationSubscriptionCreateInput.attributeTypeMap;
    }
}

