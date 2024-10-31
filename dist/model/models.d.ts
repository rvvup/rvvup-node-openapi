import localVarRequest from 'request';
export * from './accountStatement';
export * from './accountStatementConnection';
export * from './accountStatementConnectionInput';
export * from './accountStatementConnectionType';
export * from './accountStatementCreateInput';
export * from './accountStatementCreditNote';
export * from './accountStatementCreditNoteCreateInput';
export * from './accountStatementInvoice';
export * from './accountStatementInvoiceCreateInput';
export * from './accountStatementInvoiceStatus';
export * from './accountStatementMagentoProxyConnection';
export * from './accountStatementMagentoProxyConnectionInput';
export * from './accountStatementStatus';
export * from './actionType';
export * from './actionTypeInput';
export * from './actorType';
export * from './address';
export * from './addressInput';
export * from './applicationSource';
export * from './checkout';
export * from './checkoutAmountType';
export * from './checkoutApplePaySettings';
export * from './checkoutApplePaySettingsInput';
export * from './checkoutApplePaySettingsUpdateInput';
export * from './checkoutCardSettings';
export * from './checkoutCardSettingsInput';
export * from './checkoutCardSettingsUpdateInput';
export * from './checkoutCreateInput';
export * from './checkoutCustomerFieldType';
export * from './checkoutCustomerFields';
export * from './checkoutCustomerFieldsInput';
export * from './checkoutCustomerFieldsUpdateInput';
export * from './checkoutGooglePaySettings';
export * from './checkoutGooglePaySettingsInput';
export * from './checkoutGooglePaySettingsUpdateInput';
export * from './checkoutMode';
export * from './checkoutPage';
export * from './checkoutPayByBankSettings';
export * from './checkoutPayByBankSettingsInput';
export * from './checkoutPayByBankSettingsUpdateInput';
export * from './checkoutPaymentMethodSettings';
export * from './checkoutPaymentMethodSettingsInput';
export * from './checkoutPaymentMethodSettingsUpdateInput';
export * from './checkoutReferenceType';
export * from './checkoutStatus';
export * from './checkoutTemplate';
export * from './checkoutTemplateCreateInput';
export * from './checkoutTemplatePage';
export * from './checkoutTemplateUpdateInput';
export * from './connection';
export * from './connectionCreateInput';
export * from './connectionData';
export * from './connectionDataInput';
export * from './connectionOauthSignatureMethod';
export * from './connectionPage';
export * from './connectionStatus';
export * from './connectionType';
export * from './customer';
export * from './customerInput';
export * from './googlePayConnectionData';
export * from './googlePayConnectionDataInput';
export * from './item';
export * from './itemInput';
export * from './itemRestriction';
export * from './logCreateInput';
export * from './logRecord';
export * from './magentoProxyConnectionData';
export * from './magentoProxyConnectionDataInput';
export * from './money';
export * from './moneyInput';
export * from './notificationSubscription';
export * from './notificationSubscriptionConfiguration';
export * from './notificationSubscriptionConfigurationInput';
export * from './notificationSubscriptionCreateInput';
export * from './notificationSubscriptionPage';
export * from './notificationSubscriptionRecipient';
export * from './notificationSubscriptionRecipientInput';
export * from './notificationType';
export * from './pageCheckout';
export * from './pageCheckoutTemplate';
export * from './pageConnection';
export * from './pageNotificationSubscription';
export * from './pagePaymentLink';
export * from './pagePaymentMethodDetail';
export * from './pageTheme';
export * from './pageWebhook';
export * from './pageable';
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
export * from './paymentMethodTotalLimit';
export * from './paymentSession';
export * from './paymentSessionCreateInput';
export * from './paymentSessionStatus';
export * from './paymentSettlementStatus';
export * from './paymentStatus';
export * from './paymentSummary';
export * from './paymentVoidReason';
export * from './refund';
export * from './refundCreateInput';
export * from './refundFailureReason';
export * from './refundStatus';
export * from './resourceType';
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
export * from './webhook';
export * from './webhookCreateInput';
export * from './webhookEventType';
export * from './webhookPage';
export * from './webhookStatus';
export * from './webhookUpdateInput';
import * as fs from 'fs';
export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    };
}
export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;
export declare class ObjectSerializer {
    static findCorrectType(data: any, expectedType: string): any;
    static serialize(data: any, type: string): any;
    static deserialize(data: any, type: string): any;
}
export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}
export declare class HttpBasicAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class HttpBearerAuth implements Authentication {
    accessToken: string | (() => string);
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class ApiKeyAuth implements Authentication {
    private location;
    private paramName;
    apiKey: string;
    constructor(location: string, paramName: string);
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class OAuth implements Authentication {
    accessToken: string;
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class VoidAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(_: localVarRequest.Options): void;
}
export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
