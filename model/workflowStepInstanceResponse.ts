/**
 * ManageSpace Workflow API
 * ManageSpace Workflow API Documentation
 *
 * The version of the OpenAPI document: 0.0.11-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface WorkflowStepInstanceResponse { 
    /**
     * Workflow Step Instance ID
     */
    id: string;
    /**
     * Workflow Step Instance Description
     */
    description: string;
    /**
     * Workflow Instance ID of this step
     */
    workflowInstanceId: string;
    /**
     * Workflow Step Definition ID of this step
     */
    workflowStepDefinitionId: string;
    /**
     * The type of this step
     */
    stepTypeId: number;
    /**
     * The start time of this workflow step
     */
    startedAt?: string;
    /**
     * The start time of this workflow step
     */
    finishedAt?: string;
    /**
     * The status of this workflow
     */
    stepStatusId: number;
    /**
     * The event the step will raise.
     */
    raiseEventSchemaCodeName?: string;
    /**
     * The name of a custom function.
     */
    externalStepName?: string;
    /**
     * Ports
     */
    ports?: object;
    /**
     * The port that starts this step.
     */
    triggerPort?: string;
    /**
     * The event that will trigger this step.
     */
    executionTriggerValue?: string;
    /**
     * The number of minutes after finishing the previous step that this step should execute by.
     */
    delay?: number;
    /**
     * The time at which this step should begin executing
     */
    executeBy?: string;
    /**
     * Step position
     */
    stepPosition: number;
    /**
     * Previous step position
     */
    previousStep?: number;
    /**
     * Next step position
     */
    nextStep?: number;
    /**
     * The number of times this step has run.
     */
    runCount: number;
    /**
     * The number of times this step can run.
     */
    maxRunCount: number;
    /**
     * Mappings
     */
    mappings: object;
    /**
     * Literals
     */
    literals: object;
    /**
     * Templates
     */
    templates: object;
}

