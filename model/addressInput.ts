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

/**
* The address details.
*/
export class AddressInput {
    /**
    * City.
    */
    'city': string;
    /**
    * Company name.
    */
    'company'?: string;
    /**
    * Two letter ISO 3166-1 alpha-2 country code.
    */
    'countryCode': string;
    /**
    * Address line 1.
    */
    'line1': string;
    /**
    * Address line 2.
    */
    'line2'?: string;
    /**
    * Name.
    */
    'name': string;
    /**
    * Phone number.
    */
    'phoneNumber'?: string;
    /**
    * Postcode.
    */
    'postcode': string;
    /**
    * State.
    */
    'state'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "city",
            "baseName": "city",
            "type": "string"
        },
        {
            "name": "company",
            "baseName": "company",
            "type": "string"
        },
        {
            "name": "countryCode",
            "baseName": "countryCode",
            "type": "string"
        },
        {
            "name": "line1",
            "baseName": "line1",
            "type": "string"
        },
        {
            "name": "line2",
            "baseName": "line2",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "phoneNumber",
            "baseName": "phoneNumber",
            "type": "string"
        },
        {
            "name": "postcode",
            "baseName": "postcode",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AddressInput.attributeTypeMap;
    }
}

