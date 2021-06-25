
using System;

namespace SharedComponents.Domain.Interfaces.Services
{
    public interface IServiceUnitOfWork : IDisposable
    {
        Lazy<IRuleService> Rule { get; set; }
        Lazy<IContainerService> Container { get; set; }
        Lazy<IComponentService> Component { get; set; }
        //Lazy<IFormControlService> FormControl { get; set; }
        Lazy<IConditionService> Condition { get; set; }
        Lazy<IQuestionnaireService> Questionnaire { get; set; }
        Lazy<IQuestSystemsService> QuestSystems { get; set; }
        Lazy<IQuestControlsService> QuestControls { get; set; }
        Lazy<IActionService> Action { get; set; }
        Lazy<IUserService> User { get; set; }
       // Lazy<IEpaymentMethodsService> EpaymentMethods { get; set; }
        Lazy<IEpaymentDetailsService> EpaymentDetails { get; set; }

        Lazy<ISstProcessesService> Processes { get; set; }
        Lazy<ISstProcessesSystemsService> ProcessesSystems { get; set; }
        Lazy<ISstProcessStepsService> ProcessSteps { get; set; }
        Lazy<ISstProcessParentStepsService> ProcessParentSteps { get; set; }

       // Lazy<IIntegrationsService> Integrations { get; set; }
        Lazy<IIntegrationsSettingsService> IntegrationsSettings { get; set; }
        Lazy<IIntegrationsApiMappingService> IntegrationsApiMapping { get; set; }
        Lazy<IIntegrationsDbMappingService> IntegrationsDbMapping { get; set; }
        Lazy<ILogService> Log { get; set; }
        Lazy<IProductsStepsService> ProductsSteps { get; set; }
        Lazy<IStepTransactionsServices> StepTransactions { get; set; }
        Lazy<IProductsService> Products { get; set; }
        Lazy<IProductsDetailsService> ProductsDetails { get; set; }
        Lazy<IProductsComponentsService> ProductsComponents { get; set; }
        Lazy<IProductsContainersService> ProductsContainers { get; set; }
        Lazy<IProductsFormControlsService> ProductsFormControls { get; set; }
        Lazy<IMailerService> Mailer { get; set; }
        Lazy<INotificationService> Notification { get; set; }
        Lazy<INotificationAttachmentsService> NotificationAttachments { get; set; }
        Lazy<INotificationContactsService> NotificationContacts { get; set; }
        Lazy<INotificationParametersService> NotificationParameters { get; set; }
        Lazy<INotificationTemplatesService> NotificationTemplates { get; set; }
        Lazy<ISmsProviderService> SmsProvider { get; set; }
        Lazy<IUserPropertiesService> UserProperties { get; set; }
        Lazy<ISequenceService> Sequence { get; set; }
        Lazy<IControlValuesService> ControlValue { get; set; }
        Lazy<ICpEpaymentTransactionsService> CpEpaymentTransactions { get; set; }

    }
}