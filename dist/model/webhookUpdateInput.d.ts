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
import { WebhookEventType } from './webhookEventType';
import { WebhookStatus } from './webhookStatus';
/**
* The input for updating a webhook.
*/
export declare class WebhookUpdateInput {
    /**
    * Custom headers for the webhook
    */
    'headers'?: {
        [key: string]: string | null;
    } | null;
    'status'?: WebhookStatus;
    /**
    * The events to subscribe to.
    */
    'subscribedEvents'?: Set<WebhookEventType>;
    /**
    * The URL to send the webhook event to.
    */
    'url'?: string;
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
export declare namespace WebhookUpdateInput {
}
