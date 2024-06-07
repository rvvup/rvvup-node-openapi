export * from './checkoutTemplatesApi';
import { CheckoutTemplatesApi } from './checkoutTemplatesApi';
export * from './checkoutsApi';
import { CheckoutsApi } from './checkoutsApi';
export * from './paymentLinksApi';
import { PaymentLinksApi } from './paymentLinksApi';
export * from './paymentSessionsApi';
import { PaymentSessionsApi } from './paymentSessionsApi';
export * from './statementExportsApi';
import { StatementExportsApi } from './statementExportsApi';
export * from './themesApi';
import { ThemesApi } from './themesApi';
export * from './webhooksApi';
import { WebhooksApi } from './webhooksApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [CheckoutTemplatesApi, CheckoutsApi, PaymentLinksApi, PaymentSessionsApi, StatementExportsApi, ThemesApi, WebhooksApi];
