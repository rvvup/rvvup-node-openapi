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
/**
* Theme colors update input object
*/
export declare class ThemeColorsUpdateInput {
    /**
    * Primary color.
    */
    'primary'?: string;
    /**
    * Primary divider color.
    */
    'primaryDivider'?: string;
    /**
    * Primary hover color.
    */
    'primaryHover'?: string;
    /**
    * Primary hover light color.
    */
    'primaryHoverLight'?: string;
    /**
    * Primary light color.
    */
    'primaryLight'?: string;
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
