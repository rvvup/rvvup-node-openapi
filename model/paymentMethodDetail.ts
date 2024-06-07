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
import { PaymentMethod } from './paymentMethod';
import { PaymentMethodLimit } from './paymentMethodLimit';
import { PaymentMethodSettings } from './paymentMethodSettings';
import { PaymentMethodStatus } from './paymentMethodStatus';

/**
* Payment method object
*/
export class PaymentMethodDetail {
    'limits'?: PaymentMethodLimit;
    'logoUrl': string;
    'name': PaymentMethod;
    'settings': PaymentMethodSettings;
    'status': PaymentMethodStatus;
    'summaryUrl': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "limits",
            "baseName": "limits",
            "type": "PaymentMethodLimit"
        },
        {
            "name": "logoUrl",
            "baseName": "logoUrl",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "PaymentMethod"
        },
        {
            "name": "settings",
            "baseName": "settings",
            "type": "PaymentMethodSettings"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "PaymentMethodStatus"
        },
        {
            "name": "summaryUrl",
            "baseName": "summaryUrl",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethodDetail.attributeTypeMap;
    }
}

export namespace PaymentMethodDetail {
}