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
import { NotificationType } from './notificationType';
/**
* Notification subscription configuration input.The configuration defines the type of a notification and what channels it should be delivered on.
*/
export declare class NotificationSubscriptionConfigurationInput {
    /**
    * Allowed channels for this notification type.
    */
    'allowedChannels': Set<NotificationSubscriptionConfigurationInput.AllowedChannelsEnum>;
    'notificationType': NotificationType;
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
export declare namespace NotificationSubscriptionConfigurationInput {
    enum AllowedChannelsEnum {
        Email,
        Sms
    }
}
