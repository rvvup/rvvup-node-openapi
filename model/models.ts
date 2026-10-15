import localVarRequest from 'request';

export * from './accountStatement';
export * from './accountStatementConnection';
export * from './accountStatementConnectionInput';
export * from './accountStatementConnectionType';
export * from './accountStatementCreateInput';
export * from './accountStatementCreditNote';
export * from './accountStatementCreditNoteAllocation';
export * from './accountStatementCreditNoteCreateInput';
export * from './accountStatementInvoice';
export * from './accountStatementInvoiceAllocation';
export * from './accountStatementInvoiceCreateInput';
export * from './accountStatementInvoiceStatus';
export * from './accountStatementMagentoProxyConnection';
export * from './accountStatementMagentoProxyConnectionInput';
export * from './accountStatementPaymentPreview';
export * from './accountStatementPaymentPreviewInput';
export * from './accountStatementStatus';
export * from './address';
export * from './addressInput';
export * from './applePayExpressSettings';
export * from './applePayPageSettings';
export * from './applePayPaymentMethodSettings';
export * from './applicationSource';
export * from './bankAccountType';
export * from './cardPaymentMethodSettings';
export * from './chaserPlan';
export * from './chaserPlanCreateInput';
export * from './chaserPlanPage';
export * from './chaserPlanSchedule';
export * from './chaserPlanScheduleCreateInput';
export * from './checkout';
export * from './checkoutAmountConstraintType';
export * from './checkoutAmountRange';
export * from './checkoutAmountRangeInput';
export * from './checkoutAmountType';
export * from './checkoutApplePaySettings';
export * from './checkoutApplePaySettingsInput';
export * from './checkoutApplePaySettingsUpdateInput';
export * from './checkoutCardSettings';
export * from './checkoutCardSettingsInput';
export * from './checkoutCardSettingsUpdateInput';
export * from './checkoutClearpaySettings';
export * from './checkoutClearpaySettingsInput';
export * from './checkoutClearpaySettingsUpdateInput';
export * from './checkoutCreateInput';
export * from './checkoutCustomerFieldType';
export * from './checkoutCustomerFields';
export * from './checkoutCustomerFieldsInput';
export * from './checkoutCustomerFieldsUpdateInput';
export * from './checkoutGooglePaySettings';
export * from './checkoutGooglePaySettingsInput';
export * from './checkoutGooglePaySettingsUpdateInput';
export * from './checkoutKlarnaSettings';
export * from './checkoutKlarnaSettingsInput';
export * from './checkoutKlarnaSettingsUpdateInput';
export * from './checkoutMode';
export * from './checkoutPage';
export * from './checkoutPayByBankSettings';
export * from './checkoutPayByBankSettingsInput';
export * from './checkoutPayByBankSettingsUpdateInput';
export * from './checkoutPaymentMethodLimit';
export * from './checkoutPaymentMethodLimitInput';
export * from './checkoutPaymentMethodLimitUpdateInput';
export * from './checkoutPaymentMethodSettings';
export * from './checkoutPaymentMethodSettingsInput';
export * from './checkoutPaymentMethodSettingsUpdateInput';
export * from './checkoutPaymentMethodTotalLimit';
export * from './checkoutReferenceType';
export * from './checkoutStatus';
export * from './checkoutTemplate';
export * from './checkoutTemplateCreateInput';
export * from './checkoutTemplatePage';
export * from './checkoutTemplateUpdateInput';
export * from './checkoutZopaRetailFinanceSettings';
export * from './checkoutZopaRetailFinanceSettingsInput';
export * from './checkoutZopaRetailFinanceSettingsUpdateInput';
export * from './confirmationOfPayeeCheckInput';
export * from './confirmationOfPayeeResult';
export * from './connection';
export * from './connectionCreateInput';
export * from './connectionData';
export * from './connectionDataInput';
export * from './connectionOauthSignatureMethod';
export * from './connectionPage';
export * from './connectionStatus';
export * from './connectionType';
export * from './copMatchResult';
export * from './creditNote';
export * from './creditNoteCreateInput';
export * from './creditNoteDownload';
export * from './creditNoteItem';
export * from './creditNoteItemCreateInput';
export * from './creditNotePage';
export * from './creditNoteStatus';
export * from './creditNoteUpdateInput';
export * from './customer';
export * from './customerAccount';
export * from './customerAccountAddress';
export * from './customerAccountAddressCreateInput';
export * from './customerAccountCreateInput';
export * from './customerAccountPage';
export * from './customerInput';
export * from './disbursementBatch';
export * from './disbursementBatchStatus';
export * from './disbursementFee';
export * from './disbursementPayment';
export * from './disbursementRefund';
export * from './expressCheckoutDisplayIntent';
export * from './externalPayee';
export * from './externalPayeeCreateInput';
export * from './externalPayeePage';
export * from './googlePayConnectionData';
export * from './googlePayConnectionDataInput';
export * from './invoice';
export * from './invoiceCreateInput';
export * from './invoiceCustomerAccount';
export * from './invoiceCustomerAccountAddress';
export * from './invoiceDownload';
export * from './invoiceItem';
export * from './invoiceItemCreateInput';
export * from './invoiceItemSupplyDateDto';
export * from './invoiceItemSupplyDateInputDto';
export * from './invoiceMerchant';
export * from './invoiceMerchantAddress';
export * from './invoiceNotification';
export * from './invoiceNotificationInput';
export * from './invoiceNotificationPage';
export * from './invoiceNotificationSentBy';
export * from './invoicePage';
export * from './invoiceStatus';
export * from './invoiceUpdateInputDto';
export * from './item';
export * from './itemInput';
export * from './itemRestriction';
export * from './klarnaConnectionData';
export * from './klarnaConnectionDataInput';
export * from './klarnaPaymentMethodSettings';
export * from './magentoConnectionData';
export * from './magentoConnectionDataInput';
export * from './magentoProxyConnectionData';
export * from './magentoProxyConnectionDataInput';
export * from './merchantDomains';
export * from './merchantDomainsCreateInput';
export * from './merchantDomainsPage';
export * from './merchantLogoWithUrls';
export * from './money';
export * from './moneyInput';
export * from './nonNegativeMoneyInput';
export * from './notificationSubscription';
export * from './notificationSubscriptionConfiguration';
export * from './notificationSubscriptionConfigurationInput';
export * from './notificationSubscriptionCreateInput';
export * from './notificationSubscriptionPage';
export * from './notificationSubscriptionRecipient';
export * from './notificationSubscriptionRecipientInput';
export * from './notificationType';
export * from './order';
export * from './ordersPage';
export * from './pageable';
export * from './payee';
export * from './payeePage';
export * from './payment';
export * from './paymentAction';
export * from './paymentActionMethod';
export * from './paymentActionType';
export * from './paymentCaptureType';
export * from './paymentDeclineReason';
export * from './paymentLink';
export * from './paymentLinkCreateInput';
export * from './paymentLinkPage';
export * from './paymentLinkStatus';
export * from './paymentMethod';
export * from './paymentMethodAsset';
export * from './paymentMethodAssetType';
export * from './paymentMethodDetail';
export * from './paymentMethodDetailsPage';
export * from './paymentMethodLimit';
export * from './paymentMethodSettings';
export * from './paymentMethodStatus';
export * from './paymentMethodTokenDto';
export * from './paymentMethodTotalLimit';
export * from './paymentSession';
export * from './paymentSessionCreateInput';
export * from './paymentSessionStatus';
export * from './paymentSettings';
export * from './paymentSettingsContext';
export * from './paymentSettingsMerchant';
export * from './paymentSettlementStatus';
export * from './paymentStatus';
export * from './paymentSummary';
export * from './paymentType';
export * from './paymentVoidReason';
export * from './refund';
export * from './refundCreateInput';
export * from './refundFailureReason';
export * from './refundStatus';
export * from './savedTokenProvider';
export * from './savedTokenScope';
export * from './savedTokenStatus';
export * from './savedTokenType';
export * from './shipmentTracking';
export * from './shipmentTrackingCreateInput';
export * from './shipmentTrackingDetail';
export * from './shipmentTrackingDetailInput';
export * from './shipmentTrackingItem';
export * from './shipmentTrackingItemInput';
export * from './shippingMethod';
export * from './shippingMethodInput';
export * from './startEnd';
export * from './statementExportRequest';
export * from './theme';
export * from './themeBackgroundImage';
export * from './themeBackgroundImageCreateInput';
export * from './themeBackgroundImageUpdateInput';
export * from './themeColors';
export * from './themeColorsCreateInput';
export * from './themeColorsUpdateInput';
export * from './themeCreateInput';
export * from './themeDesktopBackgroundImage';
export * from './themeImageCreateInput';
export * from './themeImageUpdateInput';
export * from './themeMobileBackgroundImage';
export * from './themePage';
export * from './themePaymentMethodSelector';
export * from './themePaymentMethodSelectorColors';
export * from './themePaymentMethodSelectorColorsCreateInput';
export * from './themePaymentMethodSelectorColorsUpdateInput';
export * from './themePaymentMethodSelectorCreateInput';
export * from './themePaymentMethodSelectorUpdateInput';
export * from './themeUpdateInput';
export * from './transfer';
export * from './transferCreateInput';
export * from './transferPage';
export * from './transferStatus';
export * from './transferType';
export * from './webhook';
export * from './webhookCreateInput';
export * from './webhookEventType';
export * from './webhookPage';
export * from './webhookStatus';
export * from './webhookUpdateInput';
export * from './woocommerceConnectionData';
export * from './woocommerceConnectionDataInput';
export * from './zopaRetailFinanceConnectionData';
export * from './zopaRetailFinanceConnectionDataInput';
export * from './zopaRetailFinanceFulfilRequest';
export * from './zopaRetailFinanceFulfilResponse';
export * from './zopaRetailFinanceIncomeType';
export * from './zopaRetailFinanceLoanTerm';
export * from './zopaRetailFinanceLoanTerms';
export * from './zopaRetailFinancePageSettings';
export * from './zopaRetailFinancePaymentDetails';
export * from './zopaRetailFinancePaymentMethodSettings';
export * from './zopaRetailFinancePlanSummary';
export * from './zopaRetailFinanceQuote';
export * from './zopaRetailFinanceQuoteAddress';
export * from './zopaRetailFinanceQuoteCustomer';
export * from './zopaRetailFinanceQuoteDecision';
export * from './zopaRetailFinanceQuoteOrder';
export * from './zopaRetailFinanceQuoteRequest';
export * from './zopaRetailFinanceQuoteResponse';
export * from './zopaRetailFinanceRepresentativeExample';
export * from './zopaRetailFinanceResidentialStatus';
export * from './zopaRetailFinanceTitle';
export * from './zopaRetailFinanceWidgetSettings';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AccountStatement } from './accountStatement';
import { AccountStatementConnection } from './accountStatementConnection';
import { AccountStatementConnectionInput } from './accountStatementConnectionInput';
import { AccountStatementConnectionType } from './accountStatementConnectionType';
import { AccountStatementCreateInput } from './accountStatementCreateInput';
import { AccountStatementCreditNote } from './accountStatementCreditNote';
import { AccountStatementCreditNoteAllocation } from './accountStatementCreditNoteAllocation';
import { AccountStatementCreditNoteCreateInput } from './accountStatementCreditNoteCreateInput';
import { AccountStatementInvoice } from './accountStatementInvoice';
import { AccountStatementInvoiceAllocation } from './accountStatementInvoiceAllocation';
import { AccountStatementInvoiceCreateInput } from './accountStatementInvoiceCreateInput';
import { AccountStatementInvoiceStatus } from './accountStatementInvoiceStatus';
import { AccountStatementMagentoProxyConnection } from './accountStatementMagentoProxyConnection';
import { AccountStatementMagentoProxyConnectionInput } from './accountStatementMagentoProxyConnectionInput';
import { AccountStatementPaymentPreview } from './accountStatementPaymentPreview';
import { AccountStatementPaymentPreviewInput } from './accountStatementPaymentPreviewInput';
import { AccountStatementStatus } from './accountStatementStatus';
import { Address } from './address';
import { AddressInput } from './addressInput';
import { ApplePayExpressSettings } from './applePayExpressSettings';
import { ApplePayPageSettings } from './applePayPageSettings';
import { ApplePayPaymentMethodSettings } from './applePayPaymentMethodSettings';
import { ApplicationSource } from './applicationSource';
import { BankAccountType } from './bankAccountType';
import { CardPaymentMethodSettings } from './cardPaymentMethodSettings';
import { ChaserPlan } from './chaserPlan';
import { ChaserPlanCreateInput } from './chaserPlanCreateInput';
import { ChaserPlanPage } from './chaserPlanPage';
import { ChaserPlanSchedule } from './chaserPlanSchedule';
import { ChaserPlanScheduleCreateInput } from './chaserPlanScheduleCreateInput';
import { Checkout } from './checkout';
import { CheckoutAmountConstraintType } from './checkoutAmountConstraintType';
import { CheckoutAmountRange } from './checkoutAmountRange';
import { CheckoutAmountRangeInput } from './checkoutAmountRangeInput';
import { CheckoutAmountType } from './checkoutAmountType';
import { CheckoutApplePaySettings } from './checkoutApplePaySettings';
import { CheckoutApplePaySettingsInput } from './checkoutApplePaySettingsInput';
import { CheckoutApplePaySettingsUpdateInput } from './checkoutApplePaySettingsUpdateInput';
import { CheckoutCardSettings } from './checkoutCardSettings';
import { CheckoutCardSettingsInput } from './checkoutCardSettingsInput';
import { CheckoutCardSettingsUpdateInput } from './checkoutCardSettingsUpdateInput';
import { CheckoutClearpaySettings } from './checkoutClearpaySettings';
import { CheckoutClearpaySettingsInput } from './checkoutClearpaySettingsInput';
import { CheckoutClearpaySettingsUpdateInput } from './checkoutClearpaySettingsUpdateInput';
import { CheckoutCreateInput } from './checkoutCreateInput';
import { CheckoutCustomerFieldType } from './checkoutCustomerFieldType';
import { CheckoutCustomerFields } from './checkoutCustomerFields';
import { CheckoutCustomerFieldsInput } from './checkoutCustomerFieldsInput';
import { CheckoutCustomerFieldsUpdateInput } from './checkoutCustomerFieldsUpdateInput';
import { CheckoutGooglePaySettings } from './checkoutGooglePaySettings';
import { CheckoutGooglePaySettingsInput } from './checkoutGooglePaySettingsInput';
import { CheckoutGooglePaySettingsUpdateInput } from './checkoutGooglePaySettingsUpdateInput';
import { CheckoutKlarnaSettings } from './checkoutKlarnaSettings';
import { CheckoutKlarnaSettingsInput } from './checkoutKlarnaSettingsInput';
import { CheckoutKlarnaSettingsUpdateInput } from './checkoutKlarnaSettingsUpdateInput';
import { CheckoutMode } from './checkoutMode';
import { CheckoutPage } from './checkoutPage';
import { CheckoutPayByBankSettings } from './checkoutPayByBankSettings';
import { CheckoutPayByBankSettingsInput } from './checkoutPayByBankSettingsInput';
import { CheckoutPayByBankSettingsUpdateInput } from './checkoutPayByBankSettingsUpdateInput';
import { CheckoutPaymentMethodLimit } from './checkoutPaymentMethodLimit';
import { CheckoutPaymentMethodLimitInput } from './checkoutPaymentMethodLimitInput';
import { CheckoutPaymentMethodLimitUpdateInput } from './checkoutPaymentMethodLimitUpdateInput';
import { CheckoutPaymentMethodSettings } from './checkoutPaymentMethodSettings';
import { CheckoutPaymentMethodSettingsInput } from './checkoutPaymentMethodSettingsInput';
import { CheckoutPaymentMethodSettingsUpdateInput } from './checkoutPaymentMethodSettingsUpdateInput';
import { CheckoutPaymentMethodTotalLimit } from './checkoutPaymentMethodTotalLimit';
import { CheckoutReferenceType } from './checkoutReferenceType';
import { CheckoutStatus } from './checkoutStatus';
import { CheckoutTemplate } from './checkoutTemplate';
import { CheckoutTemplateCreateInput } from './checkoutTemplateCreateInput';
import { CheckoutTemplatePage } from './checkoutTemplatePage';
import { CheckoutTemplateUpdateInput } from './checkoutTemplateUpdateInput';
import { CheckoutZopaRetailFinanceSettings } from './checkoutZopaRetailFinanceSettings';
import { CheckoutZopaRetailFinanceSettingsInput } from './checkoutZopaRetailFinanceSettingsInput';
import { CheckoutZopaRetailFinanceSettingsUpdateInput } from './checkoutZopaRetailFinanceSettingsUpdateInput';
import { ConfirmationOfPayeeCheckInput } from './confirmationOfPayeeCheckInput';
import { ConfirmationOfPayeeResult } from './confirmationOfPayeeResult';
import { Connection } from './connection';
import { ConnectionCreateInput } from './connectionCreateInput';
import { ConnectionData } from './connectionData';
import { ConnectionDataInput } from './connectionDataInput';
import { ConnectionOauthSignatureMethod } from './connectionOauthSignatureMethod';
import { ConnectionPage } from './connectionPage';
import { ConnectionStatus } from './connectionStatus';
import { ConnectionType } from './connectionType';
import { CopMatchResult } from './copMatchResult';
import { CreditNote } from './creditNote';
import { CreditNoteCreateInput } from './creditNoteCreateInput';
import { CreditNoteDownload } from './creditNoteDownload';
import { CreditNoteItem } from './creditNoteItem';
import { CreditNoteItemCreateInput } from './creditNoteItemCreateInput';
import { CreditNotePage } from './creditNotePage';
import { CreditNoteStatus } from './creditNoteStatus';
import { CreditNoteUpdateInput } from './creditNoteUpdateInput';
import { Customer } from './customer';
import { CustomerAccount } from './customerAccount';
import { CustomerAccountAddress } from './customerAccountAddress';
import { CustomerAccountAddressCreateInput } from './customerAccountAddressCreateInput';
import { CustomerAccountCreateInput } from './customerAccountCreateInput';
import { CustomerAccountPage } from './customerAccountPage';
import { CustomerInput } from './customerInput';
import { DisbursementBatch } from './disbursementBatch';
import { DisbursementBatchStatus } from './disbursementBatchStatus';
import { DisbursementFee } from './disbursementFee';
import { DisbursementPayment } from './disbursementPayment';
import { DisbursementRefund } from './disbursementRefund';
import { ExpressCheckoutDisplayIntent } from './expressCheckoutDisplayIntent';
import { ExternalPayee } from './externalPayee';
import { ExternalPayeeCreateInput } from './externalPayeeCreateInput';
import { ExternalPayeePage } from './externalPayeePage';
import { GooglePayConnectionData } from './googlePayConnectionData';
import { GooglePayConnectionDataInput } from './googlePayConnectionDataInput';
import { Invoice } from './invoice';
import { InvoiceCreateInput } from './invoiceCreateInput';
import { InvoiceCustomerAccount } from './invoiceCustomerAccount';
import { InvoiceCustomerAccountAddress } from './invoiceCustomerAccountAddress';
import { InvoiceDownload } from './invoiceDownload';
import { InvoiceItem } from './invoiceItem';
import { InvoiceItemCreateInput } from './invoiceItemCreateInput';
import { InvoiceItemSupplyDateDto } from './invoiceItemSupplyDateDto';
import { InvoiceItemSupplyDateInputDto } from './invoiceItemSupplyDateInputDto';
import { InvoiceMerchant } from './invoiceMerchant';
import { InvoiceMerchantAddress } from './invoiceMerchantAddress';
import { InvoiceNotification } from './invoiceNotification';
import { InvoiceNotificationInput } from './invoiceNotificationInput';
import { InvoiceNotificationPage } from './invoiceNotificationPage';
import { InvoiceNotificationSentBy } from './invoiceNotificationSentBy';
import { InvoicePage } from './invoicePage';
import { InvoiceStatus } from './invoiceStatus';
import { InvoiceUpdateInputDto } from './invoiceUpdateInputDto';
import { Item } from './item';
import { ItemInput } from './itemInput';
import { ItemRestriction } from './itemRestriction';
import { KlarnaConnectionData } from './klarnaConnectionData';
import { KlarnaConnectionDataInput } from './klarnaConnectionDataInput';
import { KlarnaPaymentMethodSettings } from './klarnaPaymentMethodSettings';
import { MagentoConnectionData } from './magentoConnectionData';
import { MagentoConnectionDataInput } from './magentoConnectionDataInput';
import { MagentoProxyConnectionData } from './magentoProxyConnectionData';
import { MagentoProxyConnectionDataInput } from './magentoProxyConnectionDataInput';
import { MerchantDomains } from './merchantDomains';
import { MerchantDomainsCreateInput } from './merchantDomainsCreateInput';
import { MerchantDomainsPage } from './merchantDomainsPage';
import { MerchantLogoWithUrls } from './merchantLogoWithUrls';
import { Money } from './money';
import { MoneyInput } from './moneyInput';
import { NonNegativeMoneyInput } from './nonNegativeMoneyInput';
import { NotificationSubscription } from './notificationSubscription';
import { NotificationSubscriptionConfiguration } from './notificationSubscriptionConfiguration';
import { NotificationSubscriptionConfigurationInput } from './notificationSubscriptionConfigurationInput';
import { NotificationSubscriptionCreateInput } from './notificationSubscriptionCreateInput';
import { NotificationSubscriptionPage } from './notificationSubscriptionPage';
import { NotificationSubscriptionRecipient } from './notificationSubscriptionRecipient';
import { NotificationSubscriptionRecipientInput } from './notificationSubscriptionRecipientInput';
import { NotificationType } from './notificationType';
import { Order } from './order';
import { OrdersPage } from './ordersPage';
import { Pageable } from './pageable';
import { Payee } from './payee';
import { PayeePage } from './payeePage';
import { Payment } from './payment';
import { PaymentAction } from './paymentAction';
import { PaymentActionMethod } from './paymentActionMethod';
import { PaymentActionType } from './paymentActionType';
import { PaymentCaptureType } from './paymentCaptureType';
import { PaymentDeclineReason } from './paymentDeclineReason';
import { PaymentLink } from './paymentLink';
import { PaymentLinkCreateInput } from './paymentLinkCreateInput';
import { PaymentLinkPage } from './paymentLinkPage';
import { PaymentLinkStatus } from './paymentLinkStatus';
import { PaymentMethod } from './paymentMethod';
import { PaymentMethodAsset } from './paymentMethodAsset';
import { PaymentMethodAssetType } from './paymentMethodAssetType';
import { PaymentMethodDetail } from './paymentMethodDetail';
import { PaymentMethodDetailsPage } from './paymentMethodDetailsPage';
import { PaymentMethodLimit } from './paymentMethodLimit';
import { PaymentMethodSettings } from './paymentMethodSettings';
import { PaymentMethodStatus } from './paymentMethodStatus';
import { PaymentMethodTokenDto } from './paymentMethodTokenDto';
import { PaymentMethodTotalLimit } from './paymentMethodTotalLimit';
import { PaymentSession } from './paymentSession';
import { PaymentSessionCreateInput } from './paymentSessionCreateInput';
import { PaymentSessionStatus } from './paymentSessionStatus';
import { PaymentSettings } from './paymentSettings';
import { PaymentSettingsContext } from './paymentSettingsContext';
import { PaymentSettingsMerchant } from './paymentSettingsMerchant';
import { PaymentSettlementStatus } from './paymentSettlementStatus';
import { PaymentStatus } from './paymentStatus';
import { PaymentSummary } from './paymentSummary';
import { PaymentType } from './paymentType';
import { PaymentVoidReason } from './paymentVoidReason';
import { Refund } from './refund';
import { RefundCreateInput } from './refundCreateInput';
import { RefundFailureReason } from './refundFailureReason';
import { RefundStatus } from './refundStatus';
import { SavedTokenProvider } from './savedTokenProvider';
import { SavedTokenScope } from './savedTokenScope';
import { SavedTokenStatus } from './savedTokenStatus';
import { SavedTokenType } from './savedTokenType';
import { ShipmentTracking } from './shipmentTracking';
import { ShipmentTrackingCreateInput } from './shipmentTrackingCreateInput';
import { ShipmentTrackingDetail } from './shipmentTrackingDetail';
import { ShipmentTrackingDetailInput } from './shipmentTrackingDetailInput';
import { ShipmentTrackingItem } from './shipmentTrackingItem';
import { ShipmentTrackingItemInput } from './shipmentTrackingItemInput';
import { ShippingMethod } from './shippingMethod';
import { ShippingMethodInput } from './shippingMethodInput';
import { StartEnd } from './startEnd';
import { StatementExportRequest } from './statementExportRequest';
import { Theme } from './theme';
import { ThemeBackgroundImage } from './themeBackgroundImage';
import { ThemeBackgroundImageCreateInput } from './themeBackgroundImageCreateInput';
import { ThemeBackgroundImageUpdateInput } from './themeBackgroundImageUpdateInput';
import { ThemeColors } from './themeColors';
import { ThemeColorsCreateInput } from './themeColorsCreateInput';
import { ThemeColorsUpdateInput } from './themeColorsUpdateInput';
import { ThemeCreateInput } from './themeCreateInput';
import { ThemeDesktopBackgroundImage } from './themeDesktopBackgroundImage';
import { ThemeImageCreateInput } from './themeImageCreateInput';
import { ThemeImageUpdateInput } from './themeImageUpdateInput';
import { ThemeMobileBackgroundImage } from './themeMobileBackgroundImage';
import { ThemePage } from './themePage';
import { ThemePaymentMethodSelector } from './themePaymentMethodSelector';
import { ThemePaymentMethodSelectorColors } from './themePaymentMethodSelectorColors';
import { ThemePaymentMethodSelectorColorsCreateInput } from './themePaymentMethodSelectorColorsCreateInput';
import { ThemePaymentMethodSelectorColorsUpdateInput } from './themePaymentMethodSelectorColorsUpdateInput';
import { ThemePaymentMethodSelectorCreateInput } from './themePaymentMethodSelectorCreateInput';
import { ThemePaymentMethodSelectorUpdateInput } from './themePaymentMethodSelectorUpdateInput';
import { ThemeUpdateInput } from './themeUpdateInput';
import { Transfer } from './transfer';
import { TransferCreateInput } from './transferCreateInput';
import { TransferPage } from './transferPage';
import { TransferStatus } from './transferStatus';
import { TransferType } from './transferType';
import { Webhook } from './webhook';
import { WebhookCreateInput } from './webhookCreateInput';
import { WebhookEventType } from './webhookEventType';
import { WebhookPage } from './webhookPage';
import { WebhookStatus } from './webhookStatus';
import { WebhookUpdateInput } from './webhookUpdateInput';
import { WoocommerceConnectionData } from './woocommerceConnectionData';
import { WoocommerceConnectionDataInput } from './woocommerceConnectionDataInput';
import { ZopaRetailFinanceConnectionData } from './zopaRetailFinanceConnectionData';
import { ZopaRetailFinanceConnectionDataInput } from './zopaRetailFinanceConnectionDataInput';
import { ZopaRetailFinanceFulfilRequest } from './zopaRetailFinanceFulfilRequest';
import { ZopaRetailFinanceFulfilResponse } from './zopaRetailFinanceFulfilResponse';
import { ZopaRetailFinanceIncomeType } from './zopaRetailFinanceIncomeType';
import { ZopaRetailFinanceLoanTerm } from './zopaRetailFinanceLoanTerm';
import { ZopaRetailFinanceLoanTerms } from './zopaRetailFinanceLoanTerms';
import { ZopaRetailFinancePageSettings } from './zopaRetailFinancePageSettings';
import { ZopaRetailFinancePaymentDetails } from './zopaRetailFinancePaymentDetails';
import { ZopaRetailFinancePaymentMethodSettings } from './zopaRetailFinancePaymentMethodSettings';
import { ZopaRetailFinancePlanSummary } from './zopaRetailFinancePlanSummary';
import { ZopaRetailFinanceQuote } from './zopaRetailFinanceQuote';
import { ZopaRetailFinanceQuoteAddress } from './zopaRetailFinanceQuoteAddress';
import { ZopaRetailFinanceQuoteCustomer } from './zopaRetailFinanceQuoteCustomer';
import { ZopaRetailFinanceQuoteDecision } from './zopaRetailFinanceQuoteDecision';
import { ZopaRetailFinanceQuoteOrder } from './zopaRetailFinanceQuoteOrder';
import { ZopaRetailFinanceQuoteRequest } from './zopaRetailFinanceQuoteRequest';
import { ZopaRetailFinanceQuoteResponse } from './zopaRetailFinanceQuoteResponse';
import { ZopaRetailFinanceRepresentativeExample } from './zopaRetailFinanceRepresentativeExample';
import { ZopaRetailFinanceResidentialStatus } from './zopaRetailFinanceResidentialStatus';
import { ZopaRetailFinanceTitle } from './zopaRetailFinanceTitle';
import { ZopaRetailFinanceWidgetSettings } from './zopaRetailFinanceWidgetSettings';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "AccountStatementConnectionType": AccountStatementConnectionType,
        "AccountStatementInvoiceStatus": AccountStatementInvoiceStatus,
        "AccountStatementStatus": AccountStatementStatus,
        "ApplicationSource": ApplicationSource,
        "BankAccountType": BankAccountType,
        "ChaserPlanSchedule.NotificationChannelEnum": ChaserPlanSchedule.NotificationChannelEnum,
        "ChaserPlanScheduleCreateInput.NotificationChannelEnum": ChaserPlanScheduleCreateInput.NotificationChannelEnum,
        "CheckoutAmountConstraintType": CheckoutAmountConstraintType,
        "CheckoutAmountType": CheckoutAmountType,
        "CheckoutCustomerFieldType": CheckoutCustomerFieldType,
        "CheckoutMode": CheckoutMode,
        "CheckoutReferenceType": CheckoutReferenceType,
        "CheckoutStatus": CheckoutStatus,
        "CheckoutTemplate.DisabledPaymentMethodsEnum": CheckoutTemplate.DisabledPaymentMethodsEnum,
        "CheckoutTemplateCreateInput.DisabledPaymentMethodsEnum": CheckoutTemplateCreateInput.DisabledPaymentMethodsEnum,
        "CheckoutTemplateCreateInput.EnabledPaymentMethodsEnum": CheckoutTemplateCreateInput.EnabledPaymentMethodsEnum,
        "CheckoutTemplateUpdateInput.DisabledPaymentMethodsEnum": CheckoutTemplateUpdateInput.DisabledPaymentMethodsEnum,
        "CheckoutTemplateUpdateInput.EnabledPaymentMethodsEnum": CheckoutTemplateUpdateInput.EnabledPaymentMethodsEnum,
        "ConnectionOauthSignatureMethod": ConnectionOauthSignatureMethod,
        "ConnectionStatus": ConnectionStatus,
        "ConnectionType": ConnectionType,
        "CopMatchResult": CopMatchResult,
        "CreditNote.ReasonEnum": CreditNote.ReasonEnum,
        "CreditNoteCreateInput.ReasonEnum": CreditNoteCreateInput.ReasonEnum,
        "CreditNoteStatus": CreditNoteStatus,
        "CreditNoteUpdateInput.ReasonEnum": CreditNoteUpdateInput.ReasonEnum,
        "DisbursementBatchStatus": DisbursementBatchStatus,
        "ExpressCheckoutDisplayIntent": ExpressCheckoutDisplayIntent,
        "ExternalPayee.StatusEnum": ExternalPayee.StatusEnum,
        "InvoiceNotification.StatusEnum": InvoiceNotification.StatusEnum,
        "InvoiceNotification.TypeEnum": InvoiceNotification.TypeEnum,
        "InvoiceNotificationInput.TypeEnum": InvoiceNotificationInput.TypeEnum,
        "InvoiceStatus": InvoiceStatus,
        "ItemRestriction": ItemRestriction,
        "MoneyInput.CurrencyEnum": MoneyInput.CurrencyEnum,
        "NonNegativeMoneyInput.CurrencyEnum": NonNegativeMoneyInput.CurrencyEnum,
        "NotificationSubscriptionConfiguration.AllowedChannelsEnum": NotificationSubscriptionConfiguration.AllowedChannelsEnum,
        "NotificationSubscriptionConfigurationInput.AllowedChannelsEnum": NotificationSubscriptionConfigurationInput.AllowedChannelsEnum,
        "NotificationType": NotificationType,
        "PaymentActionMethod": PaymentActionMethod,
        "PaymentActionType": PaymentActionType,
        "PaymentCaptureType": PaymentCaptureType,
        "PaymentDeclineReason": PaymentDeclineReason,
        "PaymentLinkStatus": PaymentLinkStatus,
        "PaymentMethod": PaymentMethod,
        "PaymentMethodAssetType": PaymentMethodAssetType,
        "PaymentMethodStatus": PaymentMethodStatus,
        "PaymentSessionStatus": PaymentSessionStatus,
        "PaymentSettlementStatus": PaymentSettlementStatus,
        "PaymentStatus": PaymentStatus,
        "PaymentType": PaymentType,
        "PaymentVoidReason": PaymentVoidReason,
        "RefundFailureReason": RefundFailureReason,
        "RefundStatus": RefundStatus,
        "SavedTokenProvider": SavedTokenProvider,
        "SavedTokenScope": SavedTokenScope,
        "SavedTokenStatus": SavedTokenStatus,
        "SavedTokenType": SavedTokenType,
        "StatementExportRequest.ExportFormatEnum": StatementExportRequest.ExportFormatEnum,
        "TransferStatus": TransferStatus,
        "TransferType": TransferType,
        "WebhookEventType": WebhookEventType,
        "WebhookStatus": WebhookStatus,
        "ZopaRetailFinanceIncomeType": ZopaRetailFinanceIncomeType,
        "ZopaRetailFinancePaymentDetails.CreditDecisionEnum": ZopaRetailFinancePaymentDetails.CreditDecisionEnum,
        "ZopaRetailFinanceQuoteDecision": ZopaRetailFinanceQuoteDecision,
        "ZopaRetailFinanceResidentialStatus": ZopaRetailFinanceResidentialStatus,
        "ZopaRetailFinanceTitle": ZopaRetailFinanceTitle,
}

let typeMap: {[index: string]: any} = {
    "AccountStatement": AccountStatement,
    "AccountStatementConnection": AccountStatementConnection,
    "AccountStatementConnectionInput": AccountStatementConnectionInput,
    "AccountStatementCreateInput": AccountStatementCreateInput,
    "AccountStatementCreditNote": AccountStatementCreditNote,
    "AccountStatementCreditNoteAllocation": AccountStatementCreditNoteAllocation,
    "AccountStatementCreditNoteCreateInput": AccountStatementCreditNoteCreateInput,
    "AccountStatementInvoice": AccountStatementInvoice,
    "AccountStatementInvoiceAllocation": AccountStatementInvoiceAllocation,
    "AccountStatementInvoiceCreateInput": AccountStatementInvoiceCreateInput,
    "AccountStatementMagentoProxyConnection": AccountStatementMagentoProxyConnection,
    "AccountStatementMagentoProxyConnectionInput": AccountStatementMagentoProxyConnectionInput,
    "AccountStatementPaymentPreview": AccountStatementPaymentPreview,
    "AccountStatementPaymentPreviewInput": AccountStatementPaymentPreviewInput,
    "Address": Address,
    "AddressInput": AddressInput,
    "ApplePayExpressSettings": ApplePayExpressSettings,
    "ApplePayPageSettings": ApplePayPageSettings,
    "ApplePayPaymentMethodSettings": ApplePayPaymentMethodSettings,
    "CardPaymentMethodSettings": CardPaymentMethodSettings,
    "ChaserPlan": ChaserPlan,
    "ChaserPlanCreateInput": ChaserPlanCreateInput,
    "ChaserPlanPage": ChaserPlanPage,
    "ChaserPlanSchedule": ChaserPlanSchedule,
    "ChaserPlanScheduleCreateInput": ChaserPlanScheduleCreateInput,
    "Checkout": Checkout,
    "CheckoutAmountRange": CheckoutAmountRange,
    "CheckoutAmountRangeInput": CheckoutAmountRangeInput,
    "CheckoutApplePaySettings": CheckoutApplePaySettings,
    "CheckoutApplePaySettingsInput": CheckoutApplePaySettingsInput,
    "CheckoutApplePaySettingsUpdateInput": CheckoutApplePaySettingsUpdateInput,
    "CheckoutCardSettings": CheckoutCardSettings,
    "CheckoutCardSettingsInput": CheckoutCardSettingsInput,
    "CheckoutCardSettingsUpdateInput": CheckoutCardSettingsUpdateInput,
    "CheckoutClearpaySettings": CheckoutClearpaySettings,
    "CheckoutClearpaySettingsInput": CheckoutClearpaySettingsInput,
    "CheckoutClearpaySettingsUpdateInput": CheckoutClearpaySettingsUpdateInput,
    "CheckoutCreateInput": CheckoutCreateInput,
    "CheckoutCustomerFields": CheckoutCustomerFields,
    "CheckoutCustomerFieldsInput": CheckoutCustomerFieldsInput,
    "CheckoutCustomerFieldsUpdateInput": CheckoutCustomerFieldsUpdateInput,
    "CheckoutGooglePaySettings": CheckoutGooglePaySettings,
    "CheckoutGooglePaySettingsInput": CheckoutGooglePaySettingsInput,
    "CheckoutGooglePaySettingsUpdateInput": CheckoutGooglePaySettingsUpdateInput,
    "CheckoutKlarnaSettings": CheckoutKlarnaSettings,
    "CheckoutKlarnaSettingsInput": CheckoutKlarnaSettingsInput,
    "CheckoutKlarnaSettingsUpdateInput": CheckoutKlarnaSettingsUpdateInput,
    "CheckoutPage": CheckoutPage,
    "CheckoutPayByBankSettings": CheckoutPayByBankSettings,
    "CheckoutPayByBankSettingsInput": CheckoutPayByBankSettingsInput,
    "CheckoutPayByBankSettingsUpdateInput": CheckoutPayByBankSettingsUpdateInput,
    "CheckoutPaymentMethodLimit": CheckoutPaymentMethodLimit,
    "CheckoutPaymentMethodLimitInput": CheckoutPaymentMethodLimitInput,
    "CheckoutPaymentMethodLimitUpdateInput": CheckoutPaymentMethodLimitUpdateInput,
    "CheckoutPaymentMethodSettings": CheckoutPaymentMethodSettings,
    "CheckoutPaymentMethodSettingsInput": CheckoutPaymentMethodSettingsInput,
    "CheckoutPaymentMethodSettingsUpdateInput": CheckoutPaymentMethodSettingsUpdateInput,
    "CheckoutPaymentMethodTotalLimit": CheckoutPaymentMethodTotalLimit,
    "CheckoutTemplate": CheckoutTemplate,
    "CheckoutTemplateCreateInput": CheckoutTemplateCreateInput,
    "CheckoutTemplatePage": CheckoutTemplatePage,
    "CheckoutTemplateUpdateInput": CheckoutTemplateUpdateInput,
    "CheckoutZopaRetailFinanceSettings": CheckoutZopaRetailFinanceSettings,
    "CheckoutZopaRetailFinanceSettingsInput": CheckoutZopaRetailFinanceSettingsInput,
    "CheckoutZopaRetailFinanceSettingsUpdateInput": CheckoutZopaRetailFinanceSettingsUpdateInput,
    "ConfirmationOfPayeeCheckInput": ConfirmationOfPayeeCheckInput,
    "ConfirmationOfPayeeResult": ConfirmationOfPayeeResult,
    "Connection": Connection,
    "ConnectionCreateInput": ConnectionCreateInput,
    "ConnectionData": ConnectionData,
    "ConnectionDataInput": ConnectionDataInput,
    "ConnectionPage": ConnectionPage,
    "CreditNote": CreditNote,
    "CreditNoteCreateInput": CreditNoteCreateInput,
    "CreditNoteDownload": CreditNoteDownload,
    "CreditNoteItem": CreditNoteItem,
    "CreditNoteItemCreateInput": CreditNoteItemCreateInput,
    "CreditNotePage": CreditNotePage,
    "CreditNoteUpdateInput": CreditNoteUpdateInput,
    "Customer": Customer,
    "CustomerAccount": CustomerAccount,
    "CustomerAccountAddress": CustomerAccountAddress,
    "CustomerAccountAddressCreateInput": CustomerAccountAddressCreateInput,
    "CustomerAccountCreateInput": CustomerAccountCreateInput,
    "CustomerAccountPage": CustomerAccountPage,
    "CustomerInput": CustomerInput,
    "DisbursementBatch": DisbursementBatch,
    "DisbursementFee": DisbursementFee,
    "DisbursementPayment": DisbursementPayment,
    "DisbursementRefund": DisbursementRefund,
    "ExternalPayee": ExternalPayee,
    "ExternalPayeeCreateInput": ExternalPayeeCreateInput,
    "ExternalPayeePage": ExternalPayeePage,
    "GooglePayConnectionData": GooglePayConnectionData,
    "GooglePayConnectionDataInput": GooglePayConnectionDataInput,
    "Invoice": Invoice,
    "InvoiceCreateInput": InvoiceCreateInput,
    "InvoiceCustomerAccount": InvoiceCustomerAccount,
    "InvoiceCustomerAccountAddress": InvoiceCustomerAccountAddress,
    "InvoiceDownload": InvoiceDownload,
    "InvoiceItem": InvoiceItem,
    "InvoiceItemCreateInput": InvoiceItemCreateInput,
    "InvoiceItemSupplyDateDto": InvoiceItemSupplyDateDto,
    "InvoiceItemSupplyDateInputDto": InvoiceItemSupplyDateInputDto,
    "InvoiceMerchant": InvoiceMerchant,
    "InvoiceMerchantAddress": InvoiceMerchantAddress,
    "InvoiceNotification": InvoiceNotification,
    "InvoiceNotificationInput": InvoiceNotificationInput,
    "InvoiceNotificationPage": InvoiceNotificationPage,
    "InvoiceNotificationSentBy": InvoiceNotificationSentBy,
    "InvoicePage": InvoicePage,
    "InvoiceUpdateInputDto": InvoiceUpdateInputDto,
    "Item": Item,
    "ItemInput": ItemInput,
    "KlarnaConnectionData": KlarnaConnectionData,
    "KlarnaConnectionDataInput": KlarnaConnectionDataInput,
    "KlarnaPaymentMethodSettings": KlarnaPaymentMethodSettings,
    "MagentoConnectionData": MagentoConnectionData,
    "MagentoConnectionDataInput": MagentoConnectionDataInput,
    "MagentoProxyConnectionData": MagentoProxyConnectionData,
    "MagentoProxyConnectionDataInput": MagentoProxyConnectionDataInput,
    "MerchantDomains": MerchantDomains,
    "MerchantDomainsCreateInput": MerchantDomainsCreateInput,
    "MerchantDomainsPage": MerchantDomainsPage,
    "MerchantLogoWithUrls": MerchantLogoWithUrls,
    "Money": Money,
    "MoneyInput": MoneyInput,
    "NonNegativeMoneyInput": NonNegativeMoneyInput,
    "NotificationSubscription": NotificationSubscription,
    "NotificationSubscriptionConfiguration": NotificationSubscriptionConfiguration,
    "NotificationSubscriptionConfigurationInput": NotificationSubscriptionConfigurationInput,
    "NotificationSubscriptionCreateInput": NotificationSubscriptionCreateInput,
    "NotificationSubscriptionPage": NotificationSubscriptionPage,
    "NotificationSubscriptionRecipient": NotificationSubscriptionRecipient,
    "NotificationSubscriptionRecipientInput": NotificationSubscriptionRecipientInput,
    "Order": Order,
    "OrdersPage": OrdersPage,
    "Pageable": Pageable,
    "Payee": Payee,
    "PayeePage": PayeePage,
    "Payment": Payment,
    "PaymentAction": PaymentAction,
    "PaymentLink": PaymentLink,
    "PaymentLinkCreateInput": PaymentLinkCreateInput,
    "PaymentLinkPage": PaymentLinkPage,
    "PaymentMethodAsset": PaymentMethodAsset,
    "PaymentMethodDetail": PaymentMethodDetail,
    "PaymentMethodDetailsPage": PaymentMethodDetailsPage,
    "PaymentMethodLimit": PaymentMethodLimit,
    "PaymentMethodSettings": PaymentMethodSettings,
    "PaymentMethodTokenDto": PaymentMethodTokenDto,
    "PaymentMethodTotalLimit": PaymentMethodTotalLimit,
    "PaymentSession": PaymentSession,
    "PaymentSessionCreateInput": PaymentSessionCreateInput,
    "PaymentSettings": PaymentSettings,
    "PaymentSettingsContext": PaymentSettingsContext,
    "PaymentSettingsMerchant": PaymentSettingsMerchant,
    "PaymentSummary": PaymentSummary,
    "Refund": Refund,
    "RefundCreateInput": RefundCreateInput,
    "ShipmentTracking": ShipmentTracking,
    "ShipmentTrackingCreateInput": ShipmentTrackingCreateInput,
    "ShipmentTrackingDetail": ShipmentTrackingDetail,
    "ShipmentTrackingDetailInput": ShipmentTrackingDetailInput,
    "ShipmentTrackingItem": ShipmentTrackingItem,
    "ShipmentTrackingItemInput": ShipmentTrackingItemInput,
    "ShippingMethod": ShippingMethod,
    "ShippingMethodInput": ShippingMethodInput,
    "StartEnd": StartEnd,
    "StatementExportRequest": StatementExportRequest,
    "Theme": Theme,
    "ThemeBackgroundImage": ThemeBackgroundImage,
    "ThemeBackgroundImageCreateInput": ThemeBackgroundImageCreateInput,
    "ThemeBackgroundImageUpdateInput": ThemeBackgroundImageUpdateInput,
    "ThemeColors": ThemeColors,
    "ThemeColorsCreateInput": ThemeColorsCreateInput,
    "ThemeColorsUpdateInput": ThemeColorsUpdateInput,
    "ThemeCreateInput": ThemeCreateInput,
    "ThemeDesktopBackgroundImage": ThemeDesktopBackgroundImage,
    "ThemeImageCreateInput": ThemeImageCreateInput,
    "ThemeImageUpdateInput": ThemeImageUpdateInput,
    "ThemeMobileBackgroundImage": ThemeMobileBackgroundImage,
    "ThemePage": ThemePage,
    "ThemePaymentMethodSelector": ThemePaymentMethodSelector,
    "ThemePaymentMethodSelectorColors": ThemePaymentMethodSelectorColors,
    "ThemePaymentMethodSelectorColorsCreateInput": ThemePaymentMethodSelectorColorsCreateInput,
    "ThemePaymentMethodSelectorColorsUpdateInput": ThemePaymentMethodSelectorColorsUpdateInput,
    "ThemePaymentMethodSelectorCreateInput": ThemePaymentMethodSelectorCreateInput,
    "ThemePaymentMethodSelectorUpdateInput": ThemePaymentMethodSelectorUpdateInput,
    "ThemeUpdateInput": ThemeUpdateInput,
    "Transfer": Transfer,
    "TransferCreateInput": TransferCreateInput,
    "TransferPage": TransferPage,
    "Webhook": Webhook,
    "WebhookCreateInput": WebhookCreateInput,
    "WebhookPage": WebhookPage,
    "WebhookUpdateInput": WebhookUpdateInput,
    "WoocommerceConnectionData": WoocommerceConnectionData,
    "WoocommerceConnectionDataInput": WoocommerceConnectionDataInput,
    "ZopaRetailFinanceConnectionData": ZopaRetailFinanceConnectionData,
    "ZopaRetailFinanceConnectionDataInput": ZopaRetailFinanceConnectionDataInput,
    "ZopaRetailFinanceFulfilRequest": ZopaRetailFinanceFulfilRequest,
    "ZopaRetailFinanceFulfilResponse": ZopaRetailFinanceFulfilResponse,
    "ZopaRetailFinanceLoanTerm": ZopaRetailFinanceLoanTerm,
    "ZopaRetailFinanceLoanTerms": ZopaRetailFinanceLoanTerms,
    "ZopaRetailFinancePageSettings": ZopaRetailFinancePageSettings,
    "ZopaRetailFinancePaymentDetails": ZopaRetailFinancePaymentDetails,
    "ZopaRetailFinancePaymentMethodSettings": ZopaRetailFinancePaymentMethodSettings,
    "ZopaRetailFinancePlanSummary": ZopaRetailFinancePlanSummary,
    "ZopaRetailFinanceQuote": ZopaRetailFinanceQuote,
    "ZopaRetailFinanceQuoteAddress": ZopaRetailFinanceQuoteAddress,
    "ZopaRetailFinanceQuoteCustomer": ZopaRetailFinanceQuoteCustomer,
    "ZopaRetailFinanceQuoteOrder": ZopaRetailFinanceQuoteOrder,
    "ZopaRetailFinanceQuoteRequest": ZopaRetailFinanceQuoteRequest,
    "ZopaRetailFinanceQuoteResponse": ZopaRetailFinanceQuoteResponse,
    "ZopaRetailFinanceRepresentativeExample": ZopaRetailFinanceRepresentativeExample,
    "ZopaRetailFinanceWidgetSettings": ZopaRetailFinanceWidgetSettings,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
