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

import { RequestFile } from './models';
import { Money } from './money';
import { PaymentAction } from './paymentAction';

export class PaymentSummary {
    /**
    * Whether the payment can be captured manually later.
    */
    'isManuallyCapturable': boolean;
    /**
    * Whether the payment is refundable.
    */
    'isRefundable': boolean;
    /**
    * Whether the payment is voidable.
    */
    'isVoidable': boolean;
    /**
    * The list of actions that can be performed on the payment.
    */
    'paymentActions': Array<PaymentAction>;
    'refundableAmount': Money;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "isManuallyCapturable",
            "baseName": "isManuallyCapturable",
            "type": "boolean"
        },
        {
            "name": "isRefundable",
            "baseName": "isRefundable",
            "type": "boolean"
        },
        {
            "name": "isVoidable",
            "baseName": "isVoidable",
            "type": "boolean"
        },
        {
            "name": "paymentActions",
            "baseName": "paymentActions",
            "type": "Array<PaymentAction>"
        },
        {
            "name": "refundableAmount",
            "baseName": "refundableAmount",
            "type": "Money"
        }    ];

    static getAttributeTypeMap() {
        return PaymentSummary.attributeTypeMap;
    }
}
