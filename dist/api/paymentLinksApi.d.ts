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
import { PaymentLink } from '../model/paymentLink';
import { PaymentLinkCreateInput } from '../model/paymentLinkCreateInput';
import { PaymentLinkPage } from '../model/paymentLinkPage';
import { Authentication, Interceptor } from '../model/models';
import { HttpBearerAuth } from '../model/models';
export declare enum PaymentLinksApiApiKeys {
}
export declare class PaymentLinksApi {
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
    setApiKey(key: PaymentLinksApiApiKeys, value: string): void;
    set accessToken(accessToken: string | (() => string));
    addInterceptor(interceptor: Interceptor): void;
    /**
     * Creates a new payment link. User can choose whether to make it reusable
     * @summary Create new payment link
     * @param merchantId merchant id
     * @param paymentLinkCreateInput The Payment Link to create
     * @param idempotencyKey Idempotency Key
     */
    createPaymentLink(merchantId: string, paymentLinkCreateInput: PaymentLinkCreateInput, idempotencyKey?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaymentLink;
    }>;
    /**
     * Deactivate a payment link
     * @summary Deactivate a payment link
     * @param paymentLinkId payment link id
     * @param merchantId merchant id
     */
    deactivatePaymentLink(paymentLinkId: string, merchantId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaymentLink;
    }>;
    /**
     * Get a payment link by id
     * @summary Get a payment link
     * @param paymentLinkId payment link id
     * @param merchantId merchant id
     */
    getPaymentLink(paymentLinkId: string, merchantId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaymentLink;
    }>;
    /**
     * List payment links
     * @summary List payment links
     * @param merchantId merchant id
     * @param offset pagination offset
     * @param limit pagination limit
     */
    listPaymentLinks(merchantId: string, offset?: number, limit?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaymentLinkPage;
    }>;
}
