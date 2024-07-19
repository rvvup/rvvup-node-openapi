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
import { Checkout } from '../model/checkout';
import { CheckoutCreateInput } from '../model/checkoutCreateInput';
import { CheckoutPage } from '../model/checkoutPage';
import { PaymentMethodDetailsPage } from '../model/paymentMethodDetailsPage';
import { Theme } from '../model/theme';
import { Authentication, Interceptor } from '../model/models';
import { HttpBearerAuth } from '../model/models';
export declare enum CheckoutsApiApiKeys {
}
export declare class CheckoutsApi {
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
    setApiKey(key: CheckoutsApiApiKeys, value: string): void;
    set accessToken(accessToken: string | (() => string));
    addInterceptor(interceptor: Interceptor): void;
    /**
     * Creates a new checkout.
     * @summary Create new checkout
     * @param merchantId merchant id
     * @param checkoutCreateInput The Checkout to create
     * @param idempotencyKey Idempotency Key
     */
    createCheckout(merchantId: string, checkoutCreateInput: CheckoutCreateInput, idempotencyKey?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Checkout;
    }>;
    /**
     * Get a checkout by id
     * @summary Get a checkout
     * @param checkoutId checkout id
     * @param merchantId merchant id
     * @param accept Accept header
     */
    getCheckout(checkoutId: string, merchantId: string, accept?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Checkout;
    }>;
    /**
     * Gets the theme for a checkout. The theme is used to style the checkout page.
     * @summary Get the theme for a checkout
     * @param merchantId Merchant ID
     * @param checkoutId Checkout ID
     */
    getThemeForCheckout(merchantId: string, checkoutId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Theme;
    }>;
    /**
     * Lists the currently eligible payment methods for a checkout. The payment method status and checkout template settings are used to determine the eligible methods.
     * @summary Get payment methods for a checkout
     * @param checkoutId checkout id
     * @param merchantId merchant id
     * @param offset pagination offset
     * @param limit pagination limit
     */
    listCheckoutPaymentMethods(checkoutId: string, merchantId: string, offset?: number, limit?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaymentMethodDetailsPage;
    }>;
    /**
     * List checkouts
     * @summary List checkouts
     * @param merchantId merchant id
     * @param offset pagination offset
     * @param limit pagination limit
     */
    listCheckouts(merchantId: string, offset?: number, limit?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CheckoutPage;
    }>;
}
