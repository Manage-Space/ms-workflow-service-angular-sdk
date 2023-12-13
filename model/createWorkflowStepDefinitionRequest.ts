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
import { NameOnlyMetaDataRequest } from './nameOnlyMetaDataRequest';


export interface CreateWorkflowStepDefinitionRequest { 
    /**
     * The number of minutes after finishing the previous step that this step should execute by.
     */
    delay?: number;
    /**
     * Step position
     */
    stepPosition: number;
    /**
     * Step position
     */
    previousStep?: number;
    /**
     * Step position
     */
    nextStep?: number;
    /**
     * Max run count of a step
     */
    maxRunCount?: number;
    /**
     * Ports
     */
    ports?: object | null;
    /**
     * The port that starts this step.
     */
    triggerPort?: string;
    metaData: NameOnlyMetaDataRequest;
}

