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
import { ExcludeCodeMetaData } from './excludeCodeMetaData';


export interface WorkflowStepDefinitionResponse { 
    /**
     * Workflow Step Definition ID
     */
    id: string;
    /**
     * Workflow Definition ID of this step
     */
    workflowDefinitionId: string;
    /**
     * Step position
     */
    stepPosition: number;
    /**
     * The number of times this step can run.
     */
    maxCount: number;
    /**
     * Ports
     */
    ports?: object;
    /**
     * The name of the step the metaData is linked to.
     */
    metaData: ExcludeCodeMetaData;
}

