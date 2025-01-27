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
export * from './expressCheckoutDisplayIntent';
export * from './googlePayConnectionData';
export * from './googlePayConnectionDataInput';
export * from './item';
export * from './itemInput';
export * from './itemRestriction';
export * from './klarnaConnectionData';
export * from './klarnaConnectionDataInput';
export * from './logCreateInput';
export * from './logRecord';
export * from './magentoProxyConnectionData';
export * from './magentoProxyConnectionDataInput';
export * from './merchantLogoWithUrls';
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
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AccountStatement } from './accountStatement';
import { AccountStatementConnection } from './accountStatementConnection';
import { AccountStatementConnectionInput } from './accountStatementConnectionInput';
import { AccountStatementConnectionType } from './accountStatementConnectionType';
import { AccountStatementCreateInput } from './accountStatementCreateInput';
import { AccountStatementCreditNote } from './accountStatementCreditNote';
import { AccountStatementCreditNoteCreateInput } from './accountStatementCreditNoteCreateInput';
import { AccountStatementInvoice } from './accountStatementInvoice';
import { AccountStatementInvoiceCreateInput } from './accountStatementInvoiceCreateInput';
import { AccountStatementInvoiceStatus } from './accountStatementInvoiceStatus';
import { AccountStatementMagentoProxyConnection } from './accountStatementMagentoProxyConnection';
import { AccountStatementMagentoProxyConnectionInput } from './accountStatementMagentoProxyConnectionInput';
import { AccountStatementStatus } from './accountStatementStatus';
import { ActionType } from './actionType';
import { ActionTypeInput } from './actionTypeInput';
import { ActorType } from './actorType';
import { Address } from './address';
import { AddressInput } from './addressInput';
import { ApplicationSource } from './applicationSource';
import { Checkout } from './checkout';
import { CheckoutAmountType } from './checkoutAmountType';
import { CheckoutApplePaySettings } from './checkoutApplePaySettings';
import { CheckoutApplePaySettingsInput } from './checkoutApplePaySettingsInput';
import { CheckoutApplePaySettingsUpdateInput } from './checkoutApplePaySettingsUpdateInput';
import { CheckoutCardSettings } from './checkoutCardSettings';
import { CheckoutCardSettingsInput } from './checkoutCardSettingsInput';
import { CheckoutCardSettingsUpdateInput } from './checkoutCardSettingsUpdateInput';
import { CheckoutCreateInput } from './checkoutCreateInput';
import { CheckoutCustomerFieldType } from './checkoutCustomerFieldType';
import { CheckoutCustomerFields } from './checkoutCustomerFields';
import { CheckoutCustomerFieldsInput } from './checkoutCustomerFieldsInput';
import { CheckoutCustomerFieldsUpdateInput } from './checkoutCustomerFieldsUpdateInput';
import { CheckoutGooglePaySettings } from './checkoutGooglePaySettings';
import { CheckoutGooglePaySettingsInput } from './checkoutGooglePaySettingsInput';
import { CheckoutGooglePaySettingsUpdateInput } from './checkoutGooglePaySettingsUpdateInput';
import { CheckoutMode } from './checkoutMode';
import { CheckoutPage } from './checkoutPage';
import { CheckoutPayByBankSettings } from './checkoutPayByBankSettings';
import { CheckoutPayByBankSettingsInput } from './checkoutPayByBankSettingsInput';
import { CheckoutPayByBankSettingsUpdateInput } from './checkoutPayByBankSettingsUpdateInput';
import { CheckoutPaymentMethodSettings } from './checkoutPaymentMethodSettings';
import { CheckoutPaymentMethodSettingsInput } from './checkoutPaymentMethodSettingsInput';
import { CheckoutPaymentMethodSettingsUpdateInput } from './checkoutPaymentMethodSettingsUpdateInput';
import { CheckoutReferenceType } from './checkoutReferenceType';
import { CheckoutStatus } from './checkoutStatus';
import { CheckoutTemplate } from './checkoutTemplate';
import { CheckoutTemplateCreateInput } from './checkoutTemplateCreateInput';
import { CheckoutTemplatePage } from './checkoutTemplatePage';
import { CheckoutTemplateUpdateInput } from './checkoutTemplateUpdateInput';
import { Connection } from './connection';
import { ConnectionCreateInput } from './connectionCreateInput';
import { ConnectionData } from './connectionData';
import { ConnectionDataInput } from './connectionDataInput';
import { ConnectionOauthSignatureMethod } from './connectionOauthSignatureMethod';
import { ConnectionPage } from './connectionPage';
import { ConnectionStatus } from './connectionStatus';
import { ConnectionType } from './connectionType';
import { Customer } from './customer';
import { CustomerInput } from './customerInput';
import { ExpressCheckoutDisplayIntent } from './expressCheckoutDisplayIntent';
import { GooglePayConnectionData } from './googlePayConnectionData';
import { GooglePayConnectionDataInput } from './googlePayConnectionDataInput';
import { Item } from './item';
import { ItemInput } from './itemInput';
import { ItemRestriction } from './itemRestriction';
import { KlarnaConnectionData } from './klarnaConnectionData';
import { KlarnaConnectionDataInput } from './klarnaConnectionDataInput';
import { LogCreateInput } from './logCreateInput';
import { LogRecord } from './logRecord';
import { MagentoProxyConnectionData } from './magentoProxyConnectionData';
import { MagentoProxyConnectionDataInput } from './magentoProxyConnectionDataInput';
import { MerchantLogoWithUrls } from './merchantLogoWithUrls';
import { Money } from './money';
import { MoneyInput } from './moneyInput';
import { NotificationSubscription } from './notificationSubscription';
import { NotificationSubscriptionConfiguration } from './notificationSubscriptionConfiguration';
import { NotificationSubscriptionConfigurationInput } from './notificationSubscriptionConfigurationInput';
import { NotificationSubscriptionCreateInput } from './notificationSubscriptionCreateInput';
import { NotificationSubscriptionPage } from './notificationSubscriptionPage';
import { NotificationSubscriptionRecipient } from './notificationSubscriptionRecipient';
import { NotificationSubscriptionRecipientInput } from './notificationSubscriptionRecipientInput';
import { NotificationType } from './notificationType';
import { PageCheckout } from './pageCheckout';
import { PageCheckoutTemplate } from './pageCheckoutTemplate';
import { PageConnection } from './pageConnection';
import { PageNotificationSubscription } from './pageNotificationSubscription';
import { PagePaymentLink } from './pagePaymentLink';
import { PagePaymentMethodDetail } from './pagePaymentMethodDetail';
import { PageTheme } from './pageTheme';
import { PageWebhook } from './pageWebhook';
import { Pageable } from './pageable';
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
import { ResourceType } from './resourceType';
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
import { Webhook } from './webhook';
import { WebhookCreateInput } from './webhookCreateInput';
import { WebhookEventType } from './webhookEventType';
import { WebhookPage } from './webhookPage';
import { WebhookStatus } from './webhookStatus';
import { WebhookUpdateInput } from './webhookUpdateInput';

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
        "ActionType": ActionType,
        "ActionTypeInput": ActionTypeInput,
        "ActorType": ActorType,
        "ApplicationSource": ApplicationSource,
        "CheckoutAmountType": CheckoutAmountType,
        "CheckoutCustomerFieldType": CheckoutCustomerFieldType,
        "CheckoutMode": CheckoutMode,
        "CheckoutReferenceType": CheckoutReferenceType,
        "CheckoutStatus": CheckoutStatus,
        "CheckoutTemplateCreateInput.EnabledPaymentMethodsEnum": CheckoutTemplateCreateInput.EnabledPaymentMethodsEnum,
        "CheckoutTemplateUpdateInput.EnabledPaymentMethodsEnum": CheckoutTemplateUpdateInput.EnabledPaymentMethodsEnum,
        "ConnectionOauthSignatureMethod": ConnectionOauthSignatureMethod,
        "ConnectionStatus": ConnectionStatus,
        "ConnectionType": ConnectionType,
        "ExpressCheckoutDisplayIntent": ExpressCheckoutDisplayIntent,
        "ItemRestriction": ItemRestriction,
        "MoneyInput.CurrencyEnum": MoneyInput.CurrencyEnum,
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
        "ResourceType": ResourceType,
        "StatementExportRequest.ExportFormatEnum": StatementExportRequest.ExportFormatEnum,
        "WebhookEventType": WebhookEventType,
        "WebhookStatus": WebhookStatus,
}

let typeMap: {[index: string]: any} = {
    "AccountStatement": AccountStatement,
    "AccountStatementConnection": AccountStatementConnection,
    "AccountStatementConnectionInput": AccountStatementConnectionInput,
    "AccountStatementCreateInput": AccountStatementCreateInput,
    "AccountStatementCreditNote": AccountStatementCreditNote,
    "AccountStatementCreditNoteCreateInput": AccountStatementCreditNoteCreateInput,
    "AccountStatementInvoice": AccountStatementInvoice,
    "AccountStatementInvoiceCreateInput": AccountStatementInvoiceCreateInput,
    "AccountStatementMagentoProxyConnection": AccountStatementMagentoProxyConnection,
    "AccountStatementMagentoProxyConnectionInput": AccountStatementMagentoProxyConnectionInput,
    "Address": Address,
    "AddressInput": AddressInput,
    "Checkout": Checkout,
    "CheckoutApplePaySettings": CheckoutApplePaySettings,
    "CheckoutApplePaySettingsInput": CheckoutApplePaySettingsInput,
    "CheckoutApplePaySettingsUpdateInput": CheckoutApplePaySettingsUpdateInput,
    "CheckoutCardSettings": CheckoutCardSettings,
    "CheckoutCardSettingsInput": CheckoutCardSettingsInput,
    "CheckoutCardSettingsUpdateInput": CheckoutCardSettingsUpdateInput,
    "CheckoutCreateInput": CheckoutCreateInput,
    "CheckoutCustomerFields": CheckoutCustomerFields,
    "CheckoutCustomerFieldsInput": CheckoutCustomerFieldsInput,
    "CheckoutCustomerFieldsUpdateInput": CheckoutCustomerFieldsUpdateInput,
    "CheckoutGooglePaySettings": CheckoutGooglePaySettings,
    "CheckoutGooglePaySettingsInput": CheckoutGooglePaySettingsInput,
    "CheckoutGooglePaySettingsUpdateInput": CheckoutGooglePaySettingsUpdateInput,
    "CheckoutPage": CheckoutPage,
    "CheckoutPayByBankSettings": CheckoutPayByBankSettings,
    "CheckoutPayByBankSettingsInput": CheckoutPayByBankSettingsInput,
    "CheckoutPayByBankSettingsUpdateInput": CheckoutPayByBankSettingsUpdateInput,
    "CheckoutPaymentMethodSettings": CheckoutPaymentMethodSettings,
    "CheckoutPaymentMethodSettingsInput": CheckoutPaymentMethodSettingsInput,
    "CheckoutPaymentMethodSettingsUpdateInput": CheckoutPaymentMethodSettingsUpdateInput,
    "CheckoutTemplate": CheckoutTemplate,
    "CheckoutTemplateCreateInput": CheckoutTemplateCreateInput,
    "CheckoutTemplatePage": CheckoutTemplatePage,
    "CheckoutTemplateUpdateInput": CheckoutTemplateUpdateInput,
    "Connection": Connection,
    "ConnectionCreateInput": ConnectionCreateInput,
    "ConnectionData": ConnectionData,
    "ConnectionDataInput": ConnectionDataInput,
    "ConnectionPage": ConnectionPage,
    "Customer": Customer,
    "CustomerInput": CustomerInput,
    "GooglePayConnectionData": GooglePayConnectionData,
    "GooglePayConnectionDataInput": GooglePayConnectionDataInput,
    "Item": Item,
    "ItemInput": ItemInput,
    "KlarnaConnectionData": KlarnaConnectionData,
    "KlarnaConnectionDataInput": KlarnaConnectionDataInput,
    "LogCreateInput": LogCreateInput,
    "LogRecord": LogRecord,
    "MagentoProxyConnectionData": MagentoProxyConnectionData,
    "MagentoProxyConnectionDataInput": MagentoProxyConnectionDataInput,
    "MerchantLogoWithUrls": MerchantLogoWithUrls,
    "Money": Money,
    "MoneyInput": MoneyInput,
    "NotificationSubscription": NotificationSubscription,
    "NotificationSubscriptionConfiguration": NotificationSubscriptionConfiguration,
    "NotificationSubscriptionConfigurationInput": NotificationSubscriptionConfigurationInput,
    "NotificationSubscriptionCreateInput": NotificationSubscriptionCreateInput,
    "NotificationSubscriptionPage": NotificationSubscriptionPage,
    "NotificationSubscriptionRecipient": NotificationSubscriptionRecipient,
    "NotificationSubscriptionRecipientInput": NotificationSubscriptionRecipientInput,
    "PageCheckout": PageCheckout,
    "PageCheckoutTemplate": PageCheckoutTemplate,
    "PageConnection": PageConnection,
    "PageNotificationSubscription": PageNotificationSubscription,
    "PagePaymentLink": PagePaymentLink,
    "PagePaymentMethodDetail": PagePaymentMethodDetail,
    "PageTheme": PageTheme,
    "PageWebhook": PageWebhook,
    "Pageable": Pageable,
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
    "PaymentMethodTotalLimit": PaymentMethodTotalLimit,
    "PaymentSession": PaymentSession,
    "PaymentSessionCreateInput": PaymentSessionCreateInput,
    "PaymentSettings": PaymentSettings,
    "PaymentSettingsContext": PaymentSettingsContext,
    "PaymentSettingsMerchant": PaymentSettingsMerchant,
    "PaymentSummary": PaymentSummary,
    "Refund": Refund,
    "RefundCreateInput": RefundCreateInput,
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
    "Webhook": Webhook,
    "WebhookCreateInput": WebhookCreateInput,
    "WebhookPage": WebhookPage,
    "WebhookUpdateInput": WebhookUpdateInput,
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
