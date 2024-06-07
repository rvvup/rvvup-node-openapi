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

export class Customer {
    /**
    * The customer\'s email address.
    */
    'email'?: string;
    /**
    * The customer\'s given name.
    */
    'givenName'?: string;
    /**
    * The customer\'s phone number.
    */
    'phoneNumber'?: string;
    /**
    * The customer\'s surname.
    */
    'surname'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "givenName",
            "baseName": "givenName",
            "type": "string"
        },
        {
            "name": "phoneNumber",
            "baseName": "phoneNumber",
            "type": "string"
        },
        {
            "name": "surname",
            "baseName": "surname",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Customer.attributeTypeMap;
    }
}

