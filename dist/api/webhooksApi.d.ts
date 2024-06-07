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
/// <reference types="node" />
import http from 'http';
import { Webhook } from '../model/webhook';
import { WebhookCreateInput } from '../model/webhookCreateInput';
import { WebhookPage } from '../model/webhookPage';
import { WebhookUpdateInput } from '../model/webhookUpdateInput';
import { Authentication, Interceptor } from '../model/models';
import { HttpBearerAuth } from '../model/models';
export declare enum WebhooksApiApiKeys {
}
export declare class WebhooksApi {
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
    setApiKey(key: WebhooksApiApiKeys, value: string): void;
    set accessToken(accessToken: string | (() => string));
    addInterceptor(interceptor: Interceptor): void;
    /**
     * Create a new webhook
     * @summary Create a new webhook
     * @param merchantId Merchant ID
     * @param webhookCreateInput The webhook to create
     */
    createWebhook(merchantId: string, webhookCreateInput: WebhookCreateInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Webhook;
    }>;
    /**
     * Get a webhook by id
     * @summary Get a webhook by id
     * @param merchantId Merchant ID
     * @param webhookId Webhook ID
     */
    getWebhook(merchantId: string, webhookId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Webhook;
    }>;
    /**
     * Get all webhook
     * @summary Get all webhook
     * @param merchantId Merchant ID
     * @param offset pagination offset
     * @param limit pagination limit
     */
    listWebhooks(merchantId: string, offset?: number, limit?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WebhookPage;
    }>;
    /**
     * Update a webhook
     * @summary Update a webhook
     * @param merchantId Merchant ID
     * @param webhookId Webhook ID
     * @param webhookUpdateInput The webhook to update
     */
    updateWebhook(merchantId: string, webhookId: string, webhookUpdateInput: WebhookUpdateInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Webhook;
    }>;
}