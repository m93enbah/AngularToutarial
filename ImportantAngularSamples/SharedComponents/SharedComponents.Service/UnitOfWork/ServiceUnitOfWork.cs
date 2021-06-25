using DOMAIN.Context;
using Microsoft.Extensions.Options;
using SharedComponents.Domain.Common;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Interfaces.Services;
using SharedComponents.Repository.UnitOfWork;
using SharedComponents.Service.Services;
using SharedIntegrations.Service.Services;
using System;
using System.Collections.Generic;
using System.Text;

namespace SharedComponents.Service.UnitOfWork
{
    public class ServiceUnitOfWork : IServiceUnitOfWork
    {
        private IRepositoryUnitOfWork _repositoryUnitOfWork;
        public Lazy<IRuleService> Rule { get; set; }
        public Lazy<IComponentService> Component { get; set; }
        public Lazy<IContainerService> Container { get; set; }
    //    public Lazy<IFormControlService> FormControl { get; set; }
        public Lazy<IConditionService> Condition { get; set; }
        public Lazy<IActionService> Action { get; set; }
        public Lazy<IQuestionnaireService> Questionnaire { get; set; }
        public Lazy<IUserService> User { get; set; }
      //  public Lazy<IEpaymentMethodsService> EpaymentMethods { get; set; }
        public Lazy<IEpaymentDetailsService> EpaymentDetails { get; set; }
        public Lazy<ISstProcessesService> Processes { get; set; }
        public Lazy<ISstProcessesSystemsService> ProcessesSystems { get; set; }
        public Lazy<ISstProcessParentStepsService> ProcessParentSteps { get; set; }
        public Lazy<ISstProcessStepsService> ProcessSteps { get; set; }
        public Lazy<IQuestSystemsService> QuestSystems { get; set; }
        public Lazy<IQuestControlsService> QuestControls { get; set; }
      //  public Lazy<IIntegrationsService> Integrations { get; set; }
        public Lazy<IIntegrationsSettingsService> IntegrationsSettings { get; set; }
        public Lazy<IIntegrationsApiMappingService> IntegrationsApiMapping { get; set; }
        public Lazy<IIntegrationsDbMappingService> IntegrationsDbMapping { get; set; }
        public Lazy<IProductsStepsService> ProductsSteps { get; set; }
        public Lazy<IStepTransactionsServices> StepTransactions { get; set; }
        public Lazy<IProductsService> Products { get; set; }
        public Lazy<IProductsDetailsService> ProductsDetails { get; set; }
        public Lazy<IProductsComponentsService> ProductsComponents { get; set; }
        public Lazy<IProductsContainersService> ProductsContainers { get; set; }
        public Lazy<IProductsFormControlsService> ProductsFormControls { get; set; }
        public Lazy<ILogService> Log { get; set; }
        public Lazy<IMailerService> Mailer { get; set; }
        public Lazy<INotificationService> Notification { get; set; }
        public Lazy<INotificationAttachmentsService> NotificationAttachments { get; set; }
        public Lazy<INotificationContactsService> NotificationContacts { get; set; }
        public Lazy<INotificationParametersService> NotificationParameters { get; set; }
        public Lazy<INotificationTemplatesService> NotificationTemplates { get; set; }
        public Lazy<ISmsProviderService> SmsProvider { get; set; }
        public Lazy<IUserPropertiesService> UserProperties { get; set; }
        public Lazy<ISequenceService> Sequence { get; set; }
        public Lazy<IControlValuesService> ControlValue { get; set; }
        public Lazy<INotificationsLogsService> NotificationsLogs { get; set; }
        public Lazy<ICpEpaymentTransactionsService> CpEpaymentTransactions { get; set; }


        public ServiceUnitOfWork(SharedComponentsDBContext context, ICoreService coreService, IOptions<SharedSettings> sharedSettings)
        {
            _repositoryUnitOfWork = new RepositoryUnitOfWork(context);
            //ControlValue = new Lazy<IControlValuesService>(() => new ControlValuesService(_repositoryUnitOfWork));
            Component = new Lazy<IComponentService>(() => new ComponentService(_repositoryUnitOfWork));
            Container = new Lazy<IContainerService>(() => new ContainerService(_repositoryUnitOfWork));
          //  FormControl = new Lazy<IFormControlService>(() => new FormControlService(_repositoryUnitOfWork));
            Rule = new Lazy<IRuleService>(() => new RuleService(_repositoryUnitOfWork));
            Condition = new Lazy<IConditionService>(() => new ConditionService(_repositoryUnitOfWork));
            Action = new Lazy<IActionService>(() => new ActionService(_repositoryUnitOfWork));
            Questionnaire = new Lazy<IQuestionnaireService>(() => new QuestionnaireService(_repositoryUnitOfWork));
            QuestSystems = new Lazy<IQuestSystemsService>(() => new QuestSystemsService(_repositoryUnitOfWork));
            QuestControls = new Lazy<IQuestControlsService>(() => new QuestControlsService(_repositoryUnitOfWork));
            User = new Lazy<IUserService>(() => new UserService(_repositoryUnitOfWork));
           // EpaymentMethods = new Lazy<IEpaymentMethodsService>(() => new EpaymentMethodsService(_repositoryUnitOfWork));
            EpaymentDetails = new Lazy<IEpaymentDetailsService>(() => new EpaymentDetailsService(_repositoryUnitOfWork));
            Processes = new Lazy<ISstProcessesService>(() => new SstProcessesService(_repositoryUnitOfWork));
            ProcessesSystems = new Lazy<ISstProcessesSystemsService>(() => new SstProcessesSystemsService(_repositoryUnitOfWork));
            ProcessSteps = new Lazy<ISstProcessStepsService>(() => new SstProcessStepsService(_repositoryUnitOfWork));
            ProcessParentSteps = new Lazy<ISstProcessParentStepsService>(() => new SstProcessParentStepsService(_repositoryUnitOfWork));
           // Integrations = new Lazy<IIntegrationsService>(() => new IntegrationsService(_repositoryUnitOfWork));
            IntegrationsSettings = new Lazy<IIntegrationsSettingsService>(() => new IntegrationsSettingsService(_repositoryUnitOfWork));
            IntegrationsApiMapping = new Lazy<IIntegrationsApiMappingService>(() => new IntegrationsApiMappingService(_repositoryUnitOfWork));
            IntegrationsDbMapping = new Lazy<IIntegrationsDbMappingService>(() => new IntegrationsDbMappingService(_repositoryUnitOfWork));
            ProductsSteps = new Lazy<IProductsStepsService>(() => new ProductsStepsService(_repositoryUnitOfWork));
            StepTransactions = new Lazy<IStepTransactionsServices>(() => new StepTransactionsServices(_repositoryUnitOfWork));
            Products = new Lazy<IProductsService>(() => new ProductsService(_repositoryUnitOfWork));
            ProductsDetails = new Lazy<IProductsDetailsService>(() => new ProductsDetailsService(_repositoryUnitOfWork));
            ProductsComponents = new Lazy<IProductsComponentsService>(() => new ProductsComponentsService(_repositoryUnitOfWork));
            ProductsContainers = new Lazy<IProductsContainersService>(() => new ProductsContainersService(_repositoryUnitOfWork));
            ProductsFormControls = new Lazy<IProductsFormControlsService>(() => new ProductsFormControlsService(_repositoryUnitOfWork));
            Mailer = new Lazy<IMailerService>(() => new MailerService(_repositoryUnitOfWork));
            Notification = new Lazy<INotificationService>(() => new NotificationService(_repositoryUnitOfWork, coreService, sharedSettings));
            NotificationAttachments = new Lazy<INotificationAttachmentsService>(() => new NotificationAttachmentsService(_repositoryUnitOfWork));
            NotificationContacts = new Lazy<INotificationContactsService>(() => new NotificationContactsService(_repositoryUnitOfWork));
            NotificationParameters = new Lazy<INotificationParametersService>(() => new NotificationParametersService(_repositoryUnitOfWork));
            NotificationTemplates = new Lazy<INotificationTemplatesService>(() => new NotificationTemplatesService(_repositoryUnitOfWork));
            SmsProvider = new Lazy<ISmsProviderService>(() => new SmsProviderService(_repositoryUnitOfWork));
            Log = new Lazy<ILogService>(() => new LogService(_repositoryUnitOfWork));
            UserProperties = new Lazy<IUserPropertiesService>(() => new UserPropertiesService(_repositoryUnitOfWork));
            Sequence = new Lazy<ISequenceService>(() => new SequenceService(_repositoryUnitOfWork));
            NotificationsLogs = new Lazy<INotificationsLogsService>(() => new NotificationsLogsService(_repositoryUnitOfWork));
            CpEpaymentTransactions = new Lazy<ICpEpaymentTransactionsService>(() => new CpEpaymentTransactionsService(_repositoryUnitOfWork));

        }


        public void Dispose()
        {
            _repositoryUnitOfWork.Dispose();
            Component = null;
            Component = null;
            Container = null;
        //    FormControl = null;
            Rule = null;
            Condition = null;
            Action = null;
            Questionnaire = null;
            QuestSystems = null;
            User = null;
       //     EpaymentMethods = null;
            EpaymentDetails = null;
            Processes = null;
            ProcessesSystems = null;
            ProcessSteps = null;
            ProcessParentSteps = null;
            Mailer = null;
            Notification = null;
            NotificationAttachments = null;
            NotificationContacts = null;
            NotificationParameters = null;
            NotificationTemplates = null;
            SmsProvider = null;
            NotificationsLogs = null;
            //CpEpaymentTransactions = null;

        }
    }
}