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
exports.Customer = void 0;
class Customer {
    /**
    * The customer\'s email address.
    */
    'email';
    /**
    * The customer\'s given name.
    */
    'givenName';
    /**
    * The customer\'s phone number.
    */
    'phoneNumber';
    /**
    * The customer\'s surname.
    */
    'surname';
    static discriminator = undefined;
    static attributeTypeMap = [
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
        }
    ];
    static getAttributeTypeMap() {
        return Customer.attributeTypeMap;
    }
}
exports.Customer = Customer;
//# sourceMappingURL=customer.js.map