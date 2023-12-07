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
import { CreateWorkflowStepDefinitionRequest } from './createWorkflowStepDefinitionRequest';


export interface CreateWorkflowDefinitionRequest { 
    /**
     * A description of what the step does.
     */
    description: string;
    /**
     * The event that triggers this workflow.
     */
    triggerEventSchemaCodeName: CreateWorkflowDefinitionRequest.TriggerEventSchemaCodeNameEnum;
    /**
     * The steps of the workflow.
     */
    steps: Array<CreateWorkflowStepDefinitionRequest>;
}
export namespace CreateWorkflowDefinitionRequest {
    export type TriggerEventSchemaCodeNameEnum = 'AuditEntryRequired' | 'MoveOutCreated' | 'ReservationCreated' | 'ReservationUpdated' | 'ReservationCancelled' | 'ReservationExpired' | 'SpaceReservationCreated' | 'LeaseCreated' | 'RentalCreated' | 'DiaryEntryRequired' | 'DiaryEntryActioned' | 'DocumentReady' | 'DocumentRequired' | 'DocumentCompleted' | 'CommunicationRequired' | 'CartLeaseItemPurchased' | 'InvoiceRequired' | 'InvoiceV2Required' | 'InvoiceStateChanged' | 'InvoiceV2LineItemRequired' | 'ImportCompleted' | 'SmartSearchCompleted' | 'PaymentRequested' | 'PaymentAttempted' | 'UpdateUnit';
    export const TriggerEventSchemaCodeNameEnum = {
        AuditEntryRequired: 'AuditEntryRequired' as TriggerEventSchemaCodeNameEnum,
        MoveOutCreated: 'MoveOutCreated' as TriggerEventSchemaCodeNameEnum,
        ReservationCreated: 'ReservationCreated' as TriggerEventSchemaCodeNameEnum,
        ReservationUpdated: 'ReservationUpdated' as TriggerEventSchemaCodeNameEnum,
        ReservationCancelled: 'ReservationCancelled' as TriggerEventSchemaCodeNameEnum,
        ReservationExpired: 'ReservationExpired' as TriggerEventSchemaCodeNameEnum,
        SpaceReservationCreated: 'SpaceReservationCreated' as TriggerEventSchemaCodeNameEnum,
        LeaseCreated: 'LeaseCreated' as TriggerEventSchemaCodeNameEnum,
        RentalCreated: 'RentalCreated' as TriggerEventSchemaCodeNameEnum,
        DiaryEntryRequired: 'DiaryEntryRequired' as TriggerEventSchemaCodeNameEnum,
        DiaryEntryActioned: 'DiaryEntryActioned' as TriggerEventSchemaCodeNameEnum,
        DocumentReady: 'DocumentReady' as TriggerEventSchemaCodeNameEnum,
        DocumentRequired: 'DocumentRequired' as TriggerEventSchemaCodeNameEnum,
        DocumentCompleted: 'DocumentCompleted' as TriggerEventSchemaCodeNameEnum,
        CommunicationRequired: 'CommunicationRequired' as TriggerEventSchemaCodeNameEnum,
        CartLeaseItemPurchased: 'CartLeaseItemPurchased' as TriggerEventSchemaCodeNameEnum,
        InvoiceRequired: 'InvoiceRequired' as TriggerEventSchemaCodeNameEnum,
        InvoiceV2Required: 'InvoiceV2Required' as TriggerEventSchemaCodeNameEnum,
        InvoiceStateChanged: 'InvoiceStateChanged' as TriggerEventSchemaCodeNameEnum,
        InvoiceV2LineItemRequired: 'InvoiceV2LineItemRequired' as TriggerEventSchemaCodeNameEnum,
        ImportCompleted: 'ImportCompleted' as TriggerEventSchemaCodeNameEnum,
        SmartSearchCompleted: 'SmartSearchCompleted' as TriggerEventSchemaCodeNameEnum,
        PaymentRequested: 'PaymentRequested' as TriggerEventSchemaCodeNameEnum,
        PaymentAttempted: 'PaymentAttempted' as TriggerEventSchemaCodeNameEnum,
        UpdateUnit: 'UpdateUnit' as TriggerEventSchemaCodeNameEnum
    };
}


