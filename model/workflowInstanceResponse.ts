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
import { WorkflowStepInstanceResponse } from './workflowStepInstanceResponse';


export interface WorkflowInstanceResponse { 
    /**
     * Workflow Instance ID
     */
    id: string;
    /**
     * Organization ID
     */
    orgId: string;
    /**
     * Organization ID
     */
    siteId: string;
    /**
     * Workflow Definition ID
     */
    workflowDefinitionId: string;
    /**
     * The ID of the event that triggered this workflow
     */
    triggeringEventId: string;
    /**
     * The start time of this workflow
     */
    startedAt?: string;
    /**
     * The start time of this workflow
     */
    finishedAt?: string;
    /**
     * The status of this workflow
     */
    workflowStatusId: number;
    /**
     * The steps of this workflow instance.
     */
    steps: Array<WorkflowStepInstanceResponse>;
    /**
     * Data
     */
    data: object;
}

