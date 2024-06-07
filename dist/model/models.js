"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoidAuth = exports.OAuth = exports.ApiKeyAuth = exports.HttpBearerAuth = exports.HttpBasicAuth = exports.ObjectSerializer = void 0;
__exportStar(require("./address"), exports);
__exportStar(require("./addressInput"), exports);
__exportStar(require("./applicationSource"), exports);
__exportStar(require("./checkout"), exports);
__exportStar(require("./checkoutAmountType"), exports);
__exportStar(require("./checkoutApplePaySettings"), exports);
__exportStar(require("./checkoutApplePaySettingsInput"), exports);
__exportStar(require("./checkoutApplePaySettingsUpdateInput"), exports);
__exportStar(require("./checkoutCardSettings"), exports);
__exportStar(require("./checkoutCardSettingsInput"), exports);
__exportStar(require("./checkoutCardSettingsUpdateInput"), exports);
__exportStar(require("./checkoutCreateInput"), exports);
__exportStar(require("./checkoutCustomerFieldType"), exports);
__exportStar(require("./checkoutCustomerFields"), exports);
__exportStar(require("./checkoutCustomerFieldsInput"), exports);
__exportStar(require("./checkoutCustomerFieldsUpdateInput"), exports);
__exportStar(require("./checkoutPage"), exports);
__exportStar(require("./checkoutPayByBankSettings"), exports);
__exportStar(require("./checkoutPayByBankSettingsInput"), exports);
__exportStar(require("./checkoutPayByBankSettingsUpdateInput"), exports);
__exportStar(require("./checkoutPaymentMethodSettings"), exports);
__exportStar(require("./checkoutPaymentMethodSettingsInput"), exports);
__exportStar(require("./checkoutPaymentMethodSettingsUpdateInput"), exports);
__exportStar(require("./checkoutStatus"), exports);
__exportStar(require("./checkoutTemplate"), exports);
__exportStar(require("./checkoutTemplateCreateInput"), exports);
__exportStar(require("./checkoutTemplatePage"), exports);
__exportStar(require("./checkoutTemplateUpdateInput"), exports);
__exportStar(require("./customer"), exports);
__exportStar(require("./customerInput"), exports);
__exportStar(require("./item"), exports);
__exportStar(require("./itemInput"), exports);
__exportStar(require("./itemRestriction"), exports);
__exportStar(require("./money"), exports);
__exportStar(require("./moneyInput"), exports);
__exportStar(require("./pageCheckout"), exports);
__exportStar(require("./pageCheckoutTemplate"), exports);
__exportStar(require("./pagePaymentLink"), exports);
__exportStar(require("./pagePaymentMethodDetail"), exports);
__exportStar(require("./pageTheme"), exports);
__exportStar(require("./pageWebhook"), exports);
__exportStar(require("./pageable"), exports);
__exportStar(require("./payment"), exports);
__exportStar(require("./paymentAction"), exports);
__exportStar(require("./paymentActionMethod"), exports);
__exportStar(require("./paymentActionType"), exports);
__exportStar(require("./paymentCaptureType"), exports);
__exportStar(require("./paymentDeclineReason"), exports);
__exportStar(require("./paymentLink"), exports);
__exportStar(require("./paymentLinkCreateInput"), exports);
__exportStar(require("./paymentLinkPage"), exports);
__exportStar(require("./paymentLinkStatus"), exports);
__exportStar(require("./paymentMethod"), exports);
__exportStar(require("./paymentMethodAsset"), exports);
__exportStar(require("./paymentMethodAssetType"), exports);
__exportStar(require("./paymentMethodDetail"), exports);
__exportStar(require("./paymentMethodDetailsPage"), exports);
__exportStar(require("./paymentMethodLimit"), exports);
__exportStar(require("./paymentMethodSettings"), exports);
__exportStar(require("./paymentMethodStatus"), exports);
__exportStar(require("./paymentMethodTotalLimit"), exports);
__exportStar(require("./paymentSession"), exports);
__exportStar(require("./paymentSessionCreateInput"), exports);
__exportStar(require("./paymentSessionStatus"), exports);
__exportStar(require("./paymentSettlementStatus"), exports);
__exportStar(require("./paymentStatus"), exports);
__exportStar(require("./paymentSummary"), exports);
__exportStar(require("./paymentVoidReason"), exports);
__exportStar(require("./startEnd"), exports);
__exportStar(require("./statementExportRequest"), exports);
__exportStar(require("./theme"), exports);
__exportStar(require("./themeColors"), exports);
__exportStar(require("./themeColorsCreateInput"), exports);
__exportStar(require("./themeColorsUpdateInput"), exports);
__exportStar(require("./themeCreateInput"), exports);
__exportStar(require("./themePage"), exports);
__exportStar(require("./themePaymentMethodSelector"), exports);
__exportStar(require("./themePaymentMethodSelectorColors"), exports);
__exportStar(require("./themePaymentMethodSelectorColorsCreateInput"), exports);
__exportStar(require("./themePaymentMethodSelectorColorsUpdateInput"), exports);
__exportStar(require("./themePaymentMethodSelectorCreateInput"), exports);
__exportStar(require("./themePaymentMethodSelectorUpdateInput"), exports);
__exportStar(require("./themeUpdateInput"), exports);
__exportStar(require("./webhook"), exports);
__exportStar(require("./webhookCreateInput"), exports);
__exportStar(require("./webhookEventType"), exports);
__exportStar(require("./webhookPage"), exports);
__exportStar(require("./webhookStatus"), exports);
__exportStar(require("./webhookUpdateInput"), exports);
const address_1 = require("./address");
const addressInput_1 = require("./addressInput");
const applicationSource_1 = require("./applicationSource");
const checkout_1 = require("./checkout");
const checkoutAmountType_1 = require("./checkoutAmountType");
const checkoutApplePaySettings_1 = require("./checkoutApplePaySettings");
const checkoutApplePaySettingsInput_1 = require("./checkoutApplePaySettingsInput");
const checkoutApplePaySettingsUpdateInput_1 = require("./checkoutApplePaySettingsUpdateInput");
const checkoutCardSettings_1 = require("./checkoutCardSettings");
const checkoutCardSettingsInput_1 = require("./checkoutCardSettingsInput");
const checkoutCardSettingsUpdateInput_1 = require("./checkoutCardSettingsUpdateInput");
const checkoutCreateInput_1 = require("./checkoutCreateInput");
const checkoutCustomerFieldType_1 = require("./checkoutCustomerFieldType");
const checkoutCustomerFields_1 = require("./checkoutCustomerFields");
const checkoutCustomerFieldsInput_1 = require("./checkoutCustomerFieldsInput");
const checkoutCustomerFieldsUpdateInput_1 = require("./checkoutCustomerFieldsUpdateInput");
const checkoutPage_1 = require("./checkoutPage");
const checkoutPayByBankSettings_1 = require("./checkoutPayByBankSettings");
const checkoutPayByBankSettingsInput_1 = require("./checkoutPayByBankSettingsInput");
const checkoutPayByBankSettingsUpdateInput_1 = require("./checkoutPayByBankSettingsUpdateInput");
const checkoutPaymentMethodSettings_1 = require("./checkoutPaymentMethodSettings");
const checkoutPaymentMethodSettingsInput_1 = require("./checkoutPaymentMethodSettingsInput");
const checkoutPaymentMethodSettingsUpdateInput_1 = require("./checkoutPaymentMethodSettingsUpdateInput");
const checkoutStatus_1 = require("./checkoutStatus");
const checkoutTemplate_1 = require("./checkoutTemplate");
const checkoutTemplateCreateInput_1 = require("./checkoutTemplateCreateInput");
const checkoutTemplatePage_1 = require("./checkoutTemplatePage");
const checkoutTemplateUpdateInput_1 = require("./checkoutTemplateUpdateInput");
const customer_1 = require("./customer");
const customerInput_1 = require("./customerInput");
const item_1 = require("./item");
const itemInput_1 = require("./itemInput");
const itemRestriction_1 = require("./itemRestriction");
const money_1 = require("./money");
const moneyInput_1 = require("./moneyInput");
const pageCheckout_1 = require("./pageCheckout");
const pageCheckoutTemplate_1 = require("./pageCheckoutTemplate");
const pagePaymentLink_1 = require("./pagePaymentLink");
const pagePaymentMethodDetail_1 = require("./pagePaymentMethodDetail");
const pageTheme_1 = require("./pageTheme");
const pageWebhook_1 = require("./pageWebhook");
const pageable_1 = require("./pageable");
const payment_1 = require("./payment");
const paymentAction_1 = require("./paymentAction");
const paymentActionMethod_1 = require("./paymentActionMethod");
const paymentActionType_1 = require("./paymentActionType");
const paymentCaptureType_1 = require("./paymentCaptureType");
const paymentDeclineReason_1 = require("./paymentDeclineReason");
const paymentLink_1 = require("./paymentLink");
const paymentLinkCreateInput_1 = require("./paymentLinkCreateInput");
const paymentLinkPage_1 = require("./paymentLinkPage");
const paymentLinkStatus_1 = require("./paymentLinkStatus");
const paymentMethod_1 = require("./paymentMethod");
const paymentMethodAsset_1 = require("./paymentMethodAsset");
const paymentMethodAssetType_1 = require("./paymentMethodAssetType");
const paymentMethodDetail_1 = require("./paymentMethodDetail");
const paymentMethodDetailsPage_1 = require("./paymentMethodDetailsPage");
const paymentMethodLimit_1 = require("./paymentMethodLimit");
const paymentMethodSettings_1 = require("./paymentMethodSettings");
const paymentMethodStatus_1 = require("./paymentMethodStatus");
const paymentMethodTotalLimit_1 = require("./paymentMethodTotalLimit");
const paymentSession_1 = require("./paymentSession");
const paymentSessionCreateInput_1 = require("./paymentSessionCreateInput");
const paymentSessionStatus_1 = require("./paymentSessionStatus");
const paymentSettlementStatus_1 = require("./paymentSettlementStatus");
const paymentStatus_1 = require("./paymentStatus");
const paymentSummary_1 = require("./paymentSummary");
const paymentVoidReason_1 = require("./paymentVoidReason");
const startEnd_1 = require("./startEnd");
const statementExportRequest_1 = require("./statementExportRequest");
const theme_1 = require("./theme");
const themeColors_1 = require("./themeColors");
const themeColorsCreateInput_1 = require("./themeColorsCreateInput");
const themeColorsUpdateInput_1 = require("./themeColorsUpdateInput");
const themeCreateInput_1 = require("./themeCreateInput");
const themePage_1 = require("./themePage");
const themePaymentMethodSelector_1 = require("./themePaymentMethodSelector");
const themePaymentMethodSelectorColors_1 = require("./themePaymentMethodSelectorColors");
const themePaymentMethodSelectorColorsCreateInput_1 = require("./themePaymentMethodSelectorColorsCreateInput");
const themePaymentMethodSelectorColorsUpdateInput_1 = require("./themePaymentMethodSelectorColorsUpdateInput");
const themePaymentMethodSelectorCreateInput_1 = require("./themePaymentMethodSelectorCreateInput");
const themePaymentMethodSelectorUpdateInput_1 = require("./themePaymentMethodSelectorUpdateInput");
const themeUpdateInput_1 = require("./themeUpdateInput");
const webhook_1 = require("./webhook");
const webhookCreateInput_1 = require("./webhookCreateInput");
const webhookEventType_1 = require("./webhookEventType");
const webhookPage_1 = require("./webhookPage");
const webhookStatus_1 = require("./webhookStatus");
const webhookUpdateInput_1 = require("./webhookUpdateInput");
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
let enumsMap = {
    "ApplicationSource": applicationSource_1.ApplicationSource,
    "CheckoutAmountType": checkoutAmountType_1.CheckoutAmountType,
    "CheckoutCustomerFieldType": checkoutCustomerFieldType_1.CheckoutCustomerFieldType,
    "CheckoutStatus": checkoutStatus_1.CheckoutStatus,
    "ItemRestriction": itemRestriction_1.ItemRestriction,
    "MoneyInput.CurrencyEnum": moneyInput_1.MoneyInput.CurrencyEnum,
    "PaymentActionMethod": paymentActionMethod_1.PaymentActionMethod,
    "PaymentActionType": paymentActionType_1.PaymentActionType,
    "PaymentCaptureType": paymentCaptureType_1.PaymentCaptureType,
    "PaymentDeclineReason": paymentDeclineReason_1.PaymentDeclineReason,
    "PaymentLinkStatus": paymentLinkStatus_1.PaymentLinkStatus,
    "PaymentMethod": paymentMethod_1.PaymentMethod,
    "PaymentMethodAssetType": paymentMethodAssetType_1.PaymentMethodAssetType,
    "PaymentMethodStatus": paymentMethodStatus_1.PaymentMethodStatus,
    "PaymentSessionStatus": paymentSessionStatus_1.PaymentSessionStatus,
    "PaymentSettlementStatus": paymentSettlementStatus_1.PaymentSettlementStatus,
    "PaymentStatus": paymentStatus_1.PaymentStatus,
    "PaymentVoidReason": paymentVoidReason_1.PaymentVoidReason,
    "StatementExportRequest.ExportFormatEnum": statementExportRequest_1.StatementExportRequest.ExportFormatEnum,
    "WebhookEventType": webhookEventType_1.WebhookEventType,
    "WebhookStatus": webhookStatus_1.WebhookStatus,
};
let typeMap = {
    "Address": address_1.Address,
    "AddressInput": addressInput_1.AddressInput,
    "Checkout": checkout_1.Checkout,
    "CheckoutApplePaySettings": checkoutApplePaySettings_1.CheckoutApplePaySettings,
    "CheckoutApplePaySettingsInput": checkoutApplePaySettingsInput_1.CheckoutApplePaySettingsInput,
    "CheckoutApplePaySettingsUpdateInput": checkoutApplePaySettingsUpdateInput_1.CheckoutApplePaySettingsUpdateInput,
    "CheckoutCardSettings": checkoutCardSettings_1.CheckoutCardSettings,
    "CheckoutCardSettingsInput": checkoutCardSettingsInput_1.CheckoutCardSettingsInput,
    "CheckoutCardSettingsUpdateInput": checkoutCardSettingsUpdateInput_1.CheckoutCardSettingsUpdateInput,
    "CheckoutCreateInput": checkoutCreateInput_1.CheckoutCreateInput,
    "CheckoutCustomerFields": checkoutCustomerFields_1.CheckoutCustomerFields,
    "CheckoutCustomerFieldsInput": checkoutCustomerFieldsInput_1.CheckoutCustomerFieldsInput,
    "CheckoutCustomerFieldsUpdateInput": checkoutCustomerFieldsUpdateInput_1.CheckoutCustomerFieldsUpdateInput,
    "CheckoutPage": checkoutPage_1.CheckoutPage,
    "CheckoutPayByBankSettings": checkoutPayByBankSettings_1.CheckoutPayByBankSettings,
    "CheckoutPayByBankSettingsInput": checkoutPayByBankSettingsInput_1.CheckoutPayByBankSettingsInput,
    "CheckoutPayByBankSettingsUpdateInput": checkoutPayByBankSettingsUpdateInput_1.CheckoutPayByBankSettingsUpdateInput,
    "CheckoutPaymentMethodSettings": checkoutPaymentMethodSettings_1.CheckoutPaymentMethodSettings,
    "CheckoutPaymentMethodSettingsInput": checkoutPaymentMethodSettingsInput_1.CheckoutPaymentMethodSettingsInput,
    "CheckoutPaymentMethodSettingsUpdateInput": checkoutPaymentMethodSettingsUpdateInput_1.CheckoutPaymentMethodSettingsUpdateInput,
    "CheckoutTemplate": checkoutTemplate_1.CheckoutTemplate,
    "CheckoutTemplateCreateInput": checkoutTemplateCreateInput_1.CheckoutTemplateCreateInput,
    "CheckoutTemplatePage": checkoutTemplatePage_1.CheckoutTemplatePage,
    "CheckoutTemplateUpdateInput": checkoutTemplateUpdateInput_1.CheckoutTemplateUpdateInput,
    "Customer": customer_1.Customer,
    "CustomerInput": customerInput_1.CustomerInput,
    "Item": item_1.Item,
    "ItemInput": itemInput_1.ItemInput,
    "Money": money_1.Money,
    "MoneyInput": moneyInput_1.MoneyInput,
    "PageCheckout": pageCheckout_1.PageCheckout,
    "PageCheckoutTemplate": pageCheckoutTemplate_1.PageCheckoutTemplate,
    "PagePaymentLink": pagePaymentLink_1.PagePaymentLink,
    "PagePaymentMethodDetail": pagePaymentMethodDetail_1.PagePaymentMethodDetail,
    "PageTheme": pageTheme_1.PageTheme,
    "PageWebhook": pageWebhook_1.PageWebhook,
    "Pageable": pageable_1.Pageable,
    "Payment": payment_1.Payment,
    "PaymentAction": paymentAction_1.PaymentAction,
    "PaymentLink": paymentLink_1.PaymentLink,
    "PaymentLinkCreateInput": paymentLinkCreateInput_1.PaymentLinkCreateInput,
    "PaymentLinkPage": paymentLinkPage_1.PaymentLinkPage,
    "PaymentMethodAsset": paymentMethodAsset_1.PaymentMethodAsset,
    "PaymentMethodDetail": paymentMethodDetail_1.PaymentMethodDetail,
    "PaymentMethodDetailsPage": paymentMethodDetailsPage_1.PaymentMethodDetailsPage,
    "PaymentMethodLimit": paymentMethodLimit_1.PaymentMethodLimit,
    "PaymentMethodSettings": paymentMethodSettings_1.PaymentMethodSettings,
    "PaymentMethodTotalLimit": paymentMethodTotalLimit_1.PaymentMethodTotalLimit,
    "PaymentSession": paymentSession_1.PaymentSession,
    "PaymentSessionCreateInput": paymentSessionCreateInput_1.PaymentSessionCreateInput,
    "PaymentSummary": paymentSummary_1.PaymentSummary,
    "StartEnd": startEnd_1.StartEnd,
    "StatementExportRequest": statementExportRequest_1.StatementExportRequest,
    "Theme": theme_1.Theme,
    "ThemeColors": themeColors_1.ThemeColors,
    "ThemeColorsCreateInput": themeColorsCreateInput_1.ThemeColorsCreateInput,
    "ThemeColorsUpdateInput": themeColorsUpdateInput_1.ThemeColorsUpdateInput,
    "ThemeCreateInput": themeCreateInput_1.ThemeCreateInput,
    "ThemePage": themePage_1.ThemePage,
    "ThemePaymentMethodSelector": themePaymentMethodSelector_1.ThemePaymentMethodSelector,
    "ThemePaymentMethodSelectorColors": themePaymentMethodSelectorColors_1.ThemePaymentMethodSelectorColors,
    "ThemePaymentMethodSelectorColorsCreateInput": themePaymentMethodSelectorColorsCreateInput_1.ThemePaymentMethodSelectorColorsCreateInput,
    "ThemePaymentMethodSelectorColorsUpdateInput": themePaymentMethodSelectorColorsUpdateInput_1.ThemePaymentMethodSelectorColorsUpdateInput,
    "ThemePaymentMethodSelectorCreateInput": themePaymentMethodSelectorCreateInput_1.ThemePaymentMethodSelectorCreateInput,
    "ThemePaymentMethodSelectorUpdateInput": themePaymentMethodSelectorUpdateInput_1.ThemePaymentMethodSelectorUpdateInput,
    "ThemeUpdateInput": themeUpdateInput_1.ThemeUpdateInput,
    "Webhook": webhook_1.Webhook,
    "WebhookCreateInput": webhookCreateInput_1.WebhookCreateInput,
    "WebhookPage": webhookPage_1.WebhookPage,
    "WebhookUpdateInput": webhookUpdateInput_1.WebhookUpdateInput,
};
class ObjectSerializer {
    static findCorrectType(data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
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
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType; // use the type given in the discriminator
                    }
                    else {
                        return expectedType; // discriminator did not map to a type
                    }
                }
                else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }
    static serialize(data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return data.toISOString();
        }
        else {
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
            let instance = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }
    static deserialize(data, type) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap[type]) { // is Enum
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
exports.ObjectSerializer = ObjectSerializer;
class HttpBasicAuth {
    username = '';
    password = '';
    applyToRequest(requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    }
}
exports.HttpBasicAuth = HttpBasicAuth;
class HttpBearerAuth {
    accessToken = '';
    applyToRequest(requestOptions) {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                ? this.accessToken()
                : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}
exports.HttpBearerAuth = HttpBearerAuth;
class ApiKeyAuth {
    location;
    paramName;
    apiKey = '';
    constructor(location, paramName) {
        this.location = location;
        this.paramName = paramName;
    }
    applyToRequest(requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
        else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}
exports.ApiKeyAuth = ApiKeyAuth;
class OAuth {
    accessToken = '';
    applyToRequest(requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}
exports.OAuth = OAuth;
class VoidAuth {
    username = '';
    password = '';
    applyToRequest(_) {
        // Do nothing
    }
}
exports.VoidAuth = VoidAuth;
//# sourceMappingURL=models.js.map