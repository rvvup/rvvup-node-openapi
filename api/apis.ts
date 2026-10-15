export * from './accountStatementsApi';
import { AccountStatementsApi } from './accountStatementsApi';
export * from './chaserPlansApi';
import { ChaserPlansApi } from './chaserPlansApi';
export * from './checkoutTemplatesApi';
import { CheckoutTemplatesApi } from './checkoutTemplatesApi';
export * from './checkoutsApi';
import { CheckoutsApi } from './checkoutsApi';
export * from './confirmationOfPayeeApi';
import { ConfirmationOfPayeeApi } from './confirmationOfPayeeApi';
export * from './connectionsApi';
import { ConnectionsApi } from './connectionsApi';
export * from './creditNotesApi';
import { CreditNotesApi } from './creditNotesApi';
export * from './customerAccountsApi';
import { CustomerAccountsApi } from './customerAccountsApi';
export * from './disbursementsApi';
import { DisbursementsApi } from './disbursementsApi';
export * from './externalPayeesApi';
import { ExternalPayeesApi } from './externalPayeesApi';
export * from './invoicesApi';
import { InvoicesApi } from './invoicesApi';
export * from './merchantDomainsApi';
import { MerchantDomainsApi } from './merchantDomainsApi';
export * from './notificationsApi';
import { NotificationsApi } from './notificationsApi';
export * from './ordersApi';
import { OrdersApi } from './ordersApi';
export * from './payeesApi';
import { PayeesApi } from './payeesApi';
export * from './paymentLinksApi';
import { PaymentLinksApi } from './paymentLinksApi';
export * from './paymentMethodTokensApi';
import { PaymentMethodTokensApi } from './paymentMethodTokensApi';
export * from './paymentMethodsApi';
import { PaymentMethodsApi } from './paymentMethodsApi';
export * from './paymentSessionsApi';
import { PaymentSessionsApi } from './paymentSessionsApi';
export * from './paymentSettingsApi';
import { PaymentSettingsApi } from './paymentSettingsApi';
export * from './publicApi';
import { PublicApi } from './publicApi';
export * from './refundsApi';
import { RefundsApi } from './refundsApi';
export * from './shipmentTrackingApi';
import { ShipmentTrackingApi } from './shipmentTrackingApi';
export * from './statementExportsApi';
import { StatementExportsApi } from './statementExportsApi';
export * from './themesApi';
import { ThemesApi } from './themesApi';
export * from './transfersApi';
import { TransfersApi } from './transfersApi';
export * from './webhooksApi';
import { WebhooksApi } from './webhooksApi';
export * from './zopaRetailFinanceApi';
import { ZopaRetailFinanceApi } from './zopaRetailFinanceApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AccountStatementsApi, ChaserPlansApi, CheckoutTemplatesApi, CheckoutsApi, ConfirmationOfPayeeApi, ConnectionsApi, CreditNotesApi, CustomerAccountsApi, DisbursementsApi, ExternalPayeesApi, InvoicesApi, MerchantDomainsApi, NotificationsApi, OrdersApi, PayeesApi, PaymentLinksApi, PaymentMethodTokensApi, PaymentMethodsApi, PaymentSessionsApi, PaymentSettingsApi, PublicApi, RefundsApi, ShipmentTrackingApi, StatementExportsApi, ThemesApi, TransfersApi, WebhooksApi, ZopaRetailFinanceApi];
