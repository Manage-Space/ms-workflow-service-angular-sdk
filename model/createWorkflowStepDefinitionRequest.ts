/**
 * ManageSpace Workflow API
 * ManageSpace Workflow API Documentation
 *
 * The version of the OpenAPI document: 0.0.11-dev.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface CreateWorkflowStepDefinitionRequest { 
    /**
     * A description of what the step does.
     */
    description: string;
    /**
     * The event the step will raise.
     */
    raiseEventSchemaCodeName?: string;
    /**
     * The event the step will raise.
     */
    executionTriggerValue?: string;
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
    /**
     * Step type id
     */
    stepTypeId: number;
}

