/**
 * ManageSpace Workflow API
 * ManageSpace Workflow API Documentation
 *
 * The version of the OpenAPI document: 0.0.12-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface CreateMetaDataRequest { 
    /**
     * The name of the executable code.
     */
    name: string;
    /**
     * The code that will run for steps with this external name.
     */
    code: string;
    /**
     * Object version
     */
    versionId?: string;
    /**
     * The description of the executable code.
     */
    description: string;
    /**
     * Is the code public or private.
     */
    isPublic: boolean;
}

