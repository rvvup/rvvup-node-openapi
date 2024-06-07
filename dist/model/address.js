"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
class Address {
    /**
    * City.
    */
    'city';
    /**
    * Company name.
    */
    'company';
    /**
    * Two letter ISO 3166-1 alpha-2 country code.
    */
    'countryCode';
    /**
    * Address line 1.
    */
    'line1';
    /**
    * Address line 2.
    */
    'line2';
    /**
    * Name.
    */
    'name';
    /**
    * Phone number.
    */
    'phoneNumber';
    /**
    * Postcode.
    */
    'postcode';
    /**
    * State.
    */
    'state';
    static discriminator = undefined;
    static attributeTypeMap = [
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
        }
    ];
    static getAttributeTypeMap() {
        return Address.attributeTypeMap;
    }
}
exports.Address = Address;
//# sourceMappingURL=address.js.map