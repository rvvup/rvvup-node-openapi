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
import { PaymentMethod } from './paymentMethod';
import { PaymentMethodLimit } from './paymentMethodLimit';
import { PaymentMethodSettings } from './paymentMethodSettings';
import { PaymentMethodStatus } from './paymentMethodStatus';
/**
* Payment method object
*/
export declare class PaymentMethodDetail {
    'limits'?: PaymentMethodLimit;
    'logoUrl': string;
    'name': PaymentMethod;
    'settings': PaymentMethodSettings;
    'status': PaymentMethodStatus;
    'summaryUrl': string;
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
export declare namespace PaymentMethodDetail {
}
