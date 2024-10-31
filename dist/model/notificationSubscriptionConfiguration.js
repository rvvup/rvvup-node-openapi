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
exports.NotificationSubscriptionConfiguration = void 0;
/**
* Notification subscription configuration entry.The configuration defines the type of a notification and what channels it should be delivered on.
*/
class NotificationSubscriptionConfiguration {
    /**
    * Allowed channels for this notification type.
    */
    'allowedChannels';
    'id';
    'notificationType';
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "allowedChannels",
            "baseName": "allowedChannels",
            "type": "Array<NotificationSubscriptionConfiguration.AllowedChannelsEnum>"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "notificationType",
            "baseName": "notificationType",
            "type": "NotificationType"
        }
    ];
    static getAttributeTypeMap() {
        return NotificationSubscriptionConfiguration.attributeTypeMap;
    }
}
exports.NotificationSubscriptionConfiguration = NotificationSubscriptionConfiguration;
(function (NotificationSubscriptionConfiguration) {
    let AllowedChannelsEnum;
    (function (AllowedChannelsEnum) {
        AllowedChannelsEnum[AllowedChannelsEnum["Email"] = 'EMAIL'] = "Email";
        AllowedChannelsEnum[AllowedChannelsEnum["Sms"] = 'SMS'] = "Sms";
    })(AllowedChannelsEnum = NotificationSubscriptionConfiguration.AllowedChannelsEnum || (NotificationSubscriptionConfiguration.AllowedChannelsEnum = {}));
})(NotificationSubscriptionConfiguration || (exports.NotificationSubscriptionConfiguration = NotificationSubscriptionConfiguration = {}));
//# sourceMappingURL=notificationSubscriptionConfiguration.js.map