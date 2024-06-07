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
import { Money } from './money';
import { PaymentCaptureType } from './paymentCaptureType';
import { PaymentDeclineReason } from './paymentDeclineReason';
import { PaymentMethod } from './paymentMethod';
import { PaymentSettlementStatus } from './paymentSettlementStatus';
import { PaymentStatus } from './paymentStatus';
import { PaymentSummary } from './paymentSummary';
import { PaymentVoidReason } from './paymentVoidReason';
/**
* List of payments that have been made for the payment session.
*/
export declare class Payment {
    'amount': Money;
    /**
    * The datetime when the payment\'s authorization expires.
    */
    'authorizationExpiresAt'?: Date;
    'captureType': PaymentCaptureType;
    /**
    * The datetime when the payment was created.
    */
    'createdAt': Date;
    'declineReason'?: PaymentDeclineReason;
    /**
    * The unique ID for the payment.
    */
    'id': string;
    'method': PaymentMethod;
    /**
    * The ID of the payment session that the payment was created in.
    */
    'paymentSessionId': string;
    'settlementStatus': PaymentSettlementStatus;
    'status': PaymentStatus;
    'summary': PaymentSummary;
    /**
    * The datetime when the payment was last updated.
    */
    'updatedAt': Date;
    'voidReason'?: PaymentVoidReason;
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
export declare namespace Payment {
}