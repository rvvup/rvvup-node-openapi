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
import { ApplicationSource } from './applicationSource';
import { CheckoutStatus } from './checkoutStatus';
import { Customer } from './customer';
import { Money } from './money';
/**
* Checkout object
*/
export declare class Checkout {
    'amount'?: Money;
    'billingAddress'?: Address;
    /**
    * The ID of the checkout template to use for this checkout.
    */
    'checkoutTemplateId': string;
    /**
    * The datetime when the checkout was created.
    */
    'createdAt': Date;
    'customer'?: Customer;
    /**
    * The datetime when the checkout will expire.
    */
    'expiresAt': Date;
    /**
    * The unique ID of the checkout.
    */
    'id': string;
    /**
    * The ID of the merchant that owns this checkout.
    */
    'merchantId': string;
    /**
    * Key value pairs to store additional information about the checkout.
    */
    'metadata': {
        [key: string]: string;
    };
    /**
    * The ID of the payment link that was used to create this checkout.
    */
    'paymentLinkId'?: string;
    /**
    * The IDs of the payment sessions that were created for this checkout.
    */
    'paymentSessionIds': Array<string>;
    /**
    * Your reference to identify the checkout and the subsequently created payment sessions.
    */
    'reference'?: string;
    'source': ApplicationSource;
    'status': CheckoutStatus;
    /**
    * The URL to redirect the customer to after the checkout is completed successfully.
    */
    'successUrl'?: string;
    /**
    * The datetime when the checkout was last updated.
    */
    'updatedAt': Date;
    /**
    * The URL to the hosted checkout page.
    */
    'url': string;
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
export declare namespace Checkout {
}