export * from './accountStatementsApi';
import { AccountStatementsApi } from './accountStatementsApi';
export * from './checkoutTemplatesApi';
import { CheckoutTemplatesApi } from './checkoutTemplatesApi';
export * from './checkoutsApi';
import { CheckoutsApi } from './checkoutsApi';
export * from './connectionsApi';
import { ConnectionsApi } from './connectionsApi';
export * from './logsApi';
import { LogsApi } from './logsApi';
export * from './notificationsApi';
import { NotificationsApi } from './notificationsApi';
export * from './paymentLinksApi';
import { PaymentLinksApi } from './paymentLinksApi';
export * from './paymentMethodsApi';
import { PaymentMethodsApi } from './paymentMethodsApi';
export * from './paymentSessionsApi';
import { PaymentSessionsApi } from './paymentSessionsApi';
export * from './paymentSettingsApi';
import { PaymentSettingsApi } from './paymentSettingsApi';
export * from './refundsApi';
import { RefundsApi } from './refundsApi';
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

export const APIS = [AccountStatementsApi, CheckoutTemplatesApi, CheckoutsApi, ConnectionsApi, LogsApi, NotificationsApi, PaymentLinksApi, PaymentMethodsApi, PaymentSessionsApi, PaymentSettingsApi, RefundsApi, StatementExportsApi, ThemesApi, WebhooksApi];
