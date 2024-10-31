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
import http from 'http';
import { NotificationSubscription } from '../model/notificationSubscription';
import { NotificationSubscriptionCreateInput } from '../model/notificationSubscriptionCreateInput';
import { NotificationSubscriptionPage } from '../model/notificationSubscriptionPage';
import { Authentication, Interceptor } from '../model/models';
import { HttpBearerAuth } from '../model/models';
export declare enum NotificationsApiApiKeys {
}
export declare class NotificationsApi {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
        apiKey: HttpBearerAuth;
    };
    protected interceptors: Interceptor[];
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    set defaultHeaders(defaultHeaders: any);
    get defaultHeaders(): any;
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: NotificationsApiApiKeys, value: string): void;
    set accessToken(accessToken: string | (() => string));
    addInterceptor(interceptor: Interceptor): void;
    /**
     * Create a new notification subscription.
     * @summary Create a new notification subscription.
     * @param merchantId Merchant ID
     * @param notificationSubscriptionCreateInput The notification subscription to create
     */
    createNotificationSubscription(merchantId: string, notificationSubscriptionCreateInput: NotificationSubscriptionCreateInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: NotificationSubscription;
    }>;
    /**
     * Get a notification subscription by ID
     * @summary Get a notification subscription
     * @param merchantId Merchant ID
     * @param id Notification Subscription ID
     */
    getNotificationSubscription(merchantId: string, id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: NotificationSubscription;
    }>;
    /**
     * List notification subscriptions.
     * @summary List notification subscriptions.
     * @param merchantId Merchant ID
     * @param offset pagination offset
     * @param limit pagination limit
     */
    listNotificationSubscriptions(merchantId: string, offset?: number, limit?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: NotificationSubscriptionPage;
    }>;
}