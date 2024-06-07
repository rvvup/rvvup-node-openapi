import localVarRequest from 'request';

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
export * from './checkoutPage';
export * from './checkoutPayByBankSettings';
export * from './checkoutPayByBankSettingsInput';
export * from './checkoutPayByBankSettingsUpdateInput';
export * from './checkoutPaymentMethodSettings';
export * from './checkoutPaymentMethodSettingsInput';
export * from './checkoutPaymentMethodSettingsUpdateInput';
export * from './checkoutStatus';
export * from './checkoutTemplate';
export * from './checkoutTemplateCreateInput';
export * from './checkoutTemplatePage';
export * from './checkoutTemplateUpdateInput';
export * from './customer';
export * from './customerInput';
export * from './item';
export * from './itemInput';
export * from './itemRestriction';
export * from './money';
export * from './moneyInput';
export * from './pageCheckout';
export * from './pageCheckoutTemplate';
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
export * from './startEnd';
export * from './statementExportRequest';
export * from './theme';
export * from './themeColors';
export * from './themeColorsCreateInput';
export * from './themeColorsUpdateInput';
export * from './themeCreateInput';
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
import { CheckoutPage } from './checkoutPage';
import { CheckoutPayByBankSettings } from './checkoutPayByBankSettings';
import { CheckoutPayByBankSettingsInput } from './checkoutPayByBankSettingsInput';
import { CheckoutPayByBankSettingsUpdateInput } from './checkoutPayByBankSettingsUpdateInput';
import { CheckoutPaymentMethodSettings } from './checkoutPaymentMethodSettings';
import { CheckoutPaymentMethodSettingsInput } from './checkoutPaymentMethodSettingsInput';
import { CheckoutPaymentMethodSettingsUpdateInput } from './checkoutPaymentMethodSettingsUpdateInput';
import { CheckoutStatus } from './checkoutStatus';
import { CheckoutTemplate } from './checkoutTemplate';
import { CheckoutTemplateCreateInput } from './checkoutTemplateCreateInput';
import { CheckoutTemplatePage } from './checkoutTemplatePage';
import { CheckoutTemplateUpdateInput } from './checkoutTemplateUpdateInput';
import { Customer } from './customer';
import { CustomerInput } from './customerInput';
import { Item } from './item';
import { ItemInput } from './itemInput';
import { ItemRestriction } from './itemRestriction';
import { Money } from './money';
import { MoneyInput } from './moneyInput';
import { PageCheckout } from './pageCheckout';
import { PageCheckoutTemplate } from './pageCheckoutTemplate';
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
import { PaymentSettlementStatus } from './paymentSettlementStatus';
import { PaymentStatus } from './paymentStatus';
import { PaymentSummary } from './paymentSummary';
import { PaymentVoidReason } from './paymentVoidReason';
import { StartEnd } from './startEnd';
import { StatementExportRequest } from './statementExportRequest';
import { Theme } from './theme';
import { ThemeColors } from './themeColors';
import { ThemeColorsCreateInput } from './themeColorsCreateInput';
import { ThemeColorsUpdateInput } from './themeColorsUpdateInput';
import { ThemeCreateInput } from './themeCreateInput';
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
        "ApplicationSource": ApplicationSource,
        "CheckoutAmountType": CheckoutAmountType,
        "CheckoutCustomerFieldType": CheckoutCustomerFieldType,
        "CheckoutStatus": CheckoutStatus,
        "ItemRestriction": ItemRestriction,
        "MoneyInput.CurrencyEnum": MoneyInput.CurrencyEnum,
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
        "PaymentVoidReason": PaymentVoidReason,
        "StatementExportRequest.ExportFormatEnum": StatementExportRequest.ExportFormatEnum,
        "WebhookEventType": WebhookEventType,
        "WebhookStatus": WebhookStatus,
}

let typeMap: {[index: string]: any} = {
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
    "Customer": Customer,
    "CustomerInput": CustomerInput,
    "Item": Item,
    "ItemInput": ItemInput,
    "Money": Money,
    "MoneyInput": MoneyInput,
    "PageCheckout": PageCheckout,
    "PageCheckoutTemplate": PageCheckoutTemplate,
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
    "PaymentSummary": PaymentSummary,
    "StartEnd": StartEnd,
    "StatementExportRequest": StatementExportRequest,
    "Theme": Theme,
    "ThemeColors": ThemeColors,
    "ThemeColorsCreateInput": ThemeColorsCreateInput,
    "ThemeColorsUpdateInput": ThemeColorsUpdateInput,
    "ThemeCreateInput": ThemeCreateInput,
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
