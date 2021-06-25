using System;

namespace SharedComponents.Domain.Interfaces.Repositories
{
    public interface IRepositoryUnitOfWork : IDisposable
    {
       // Lazy<ICpPortalSettingRepository> CPPortalSetting { get; set; }
        Lazy<IComponentRepository> Component { get; set; }
        Lazy<IContainerRepository> Container { get; set; }
        Lazy<IFormControlRepository> FormControl { get; set; }
        Lazy<IRuleRepository> Rule { get; set; }
        Lazy<IConditionRepository> Condition { get; set; }
        Lazy<IQuestionnaireRepository> Questionnaire { get; set; }
        Lazy<IActionRepository> Action { get; set; }
        Lazy<IUserRepository> User { get; set; }
        Lazy<IEpaymentMethodsRepository> EpaymentMethods { get; set; }
        Lazy<IEpaymentDetailsRepository> EpaymentDetails { get; set; }
        Lazy<ISstProcessesRepository> Processes { get; set; }
        Lazy<ISstProcessesSystemsRepository> ProcessesSystems { get; set; }
        Lazy<ISstProcessStepsRepository> ProcessesSteps { get; set; }
        Lazy<ISstProcessParentStepsRepository> ProcessParentSteps { get; set; }
        Lazy<IQuestSystemsRepository> QuestSystems { get; set; }
        Lazy<IQuestControlsRepository> QuestControls { get; set; }
        Lazy<IIntegrationRepository> Integration { get; set; }
        Lazy<IIntegrationsSettingRepository> IntegrationsSetting { get; set; }
        Lazy<IIntegrationsApiMappingRepository> IntegrationsApiMapping { get; set; }
        Lazy<IIntegrationsDbMappingRepository> IntegrationsDbMapping { get; set; }
        Lazy<ILogRepository> Log { get; set; }
        Lazy<ILogsDetailsRepository> LogDetails { get; set; }
        Lazy<IProductsStepsRepository> ProductsStep { get; set; }
        Lazy<IProductsRepository> Products { get; set; }
        Lazy<IProductsDetailsRepository> ProductsDetails { get; set; }
        Lazy<IProductsComponentsRepository> ProductsComponents { get; set; }
        Lazy<IProductsContainersRepository> ProductsContainers { get; set; }
        Lazy<IProductsFormControlsRepository> ProductsFormControls { get; set; }
        Lazy<IMailerRepository> Mailer { get; set; }
        Lazy<INotificationRepository> Notification { get; set; }
        Lazy<INotificationAttachmentsRepository> NotificationAttachments { get; set; }
        Lazy<INotificationContactsRepository> NotificationContacts { get; set; }
        Lazy<INotificationParametersRepository> NotificationParameters { get; set; }
        Lazy<INotificationTemplatesRepository> NotificationTemplates { get; set; }
        Lazy<ISmsProviderRepository> SmsProvider { get; set; }
        Lazy<IUserPropertiesRepository> UserProperties { get; set; }
        Lazy<IStepTransactionsRepsotiry> StepTransactions { get; set; }
        Lazy<ISequenceRepository> SequenceRepository { get; set; }
        Lazy<IControlValuesRepository> ControlValues { get; set; }
        Lazy<INotificationsLogsRepository> NotificationsLogs { get; set; }
        Lazy<ICpEpaymentTransactionsRepository> CpEpaymentTransactions { get; set; }
        Lazy<IIntegrationsObjectControlRespository> IntegrationsObjectControl { get; set; }
    }
}