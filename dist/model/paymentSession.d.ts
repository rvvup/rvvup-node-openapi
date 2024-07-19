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
import { Address } from './address';
import { CheckoutMode } from './checkoutMode';
import { Customer } from './customer';
import { Item } from './item';
import { Money } from './money';
import { Payment } from './payment';
import { PaymentSessionStatus } from './paymentSessionStatus';
export declare class PaymentSession {
    'billingAddress'?: Address;
    /**
    * The ID of the checkout that the payment session was created from.
    */
    'checkoutId'?: string;
    'checkoutMode': CheckoutMode;
    /**
    * The datetime when the payment session was created.
    */
    'createdAt': Date;
    'customer'?: Customer;
    /**
    * The URL to the merchant dashboard for the payment session.
    */
    'dashboardUrl': string;
    'discountTotal'?: Money;
    /**
    * Your reference to identify the payment session.
    */
    'externalReference'?: string;
    /**
    * The unique ID for the payment session.
    */
    'id': string;
    /**
    * List of items that the customer is purchasing.
    */
    'items': Array<Item>;
    /**
    * The ID of the merchant that the payment session was created for.
    */
    'merchantId': string;
    /**
    * The ID of the payment link that the payment session was created from.
    */
    'paymentLinkId'?: string;
    /**
    * List of payments that have been made for the payment session.
    */
    'payments': Array<Payment>;
    /**
    * Whether the customer is required to provide a shipping address.
    */
    'requiresShipping'?: boolean;
    'shippingAddress'?: Address;
    'shippingTotal'?: Money;
    'status': PaymentSessionStatus;
    'taxTotal'?: Money;
    'total': Money;
    /**
    * The datetime when the payment session was last updated.
    */
    'updatedAt': Date;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace PaymentSession {
}
