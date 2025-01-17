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
import { Checkout } from './checkout';
import { Pageable } from './pageable';

export class CheckoutPage {
    'pageable': Pageable;
    'results': Array<Checkout>;
    'total': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "pageable",
            "baseName": "pageable",
            "type": "Pageable"
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<Checkout>"
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return CheckoutPage.attributeTypeMap;
    }
}

