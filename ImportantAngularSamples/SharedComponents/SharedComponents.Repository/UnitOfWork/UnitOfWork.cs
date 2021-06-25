using DOMAIN.Context;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Repository.Repositories;
using System;

namespace SharedComponents.Repository.UnitOfWork
{
    public class RepositoryUnitOfWork : IRepositoryUnitOfWork
    {
        private SharedComponentsDBContext _context;
      //  public Lazy<ICpPortalSettingRepository> CPPortalSetting { get; set; }
        public Lazy<IComponentRepository> Component { get; set; }
        public Lazy<IContainerRepository> Container { get; set; }
        public Lazy<IFormControlRepository> FormControl { get; set; }
        public Lazy<IRuleRepository> Rule { get; set; }
        public Lazy<IConditionRepository> Condition { get; set; }
        public Lazy<IQuestionnaireRepository> Questionnaire { get; set; }
        public Lazy<IQuestSystemsRepository> QuestSystems { get; set; }
        public Lazy<IQuestControlsRepository> QuestControls { get; set; }
        public Lazy<IActionRepository> Action { get; set; }
        public Lazy<IUserRepository> User { get; set; }
        public Lazy<IEpaymentMethodsRepository> EpaymentMethods { get; set; }
        public Lazy<IEpaymentDetailsRepository> EpaymentDetails { get; set; }
        public Lazy<ISstProcessesRepository> Processes { get; set; }
        public Lazy<ISstProcessesSystemsRepository> ProcessesSystems { get; set; }
        public Lazy<ISstProcessStepsRepository> ProcessesSteps { get; set; }
        public Lazy<ISstProcessParentStepsRepository> ProcessParentSteps { get; set; }
        public Lazy<IIntegrationRepository> Integration { get; set; }
        public Lazy<IIntegrationsSettingRepository> IntegrationsSetting { get; set; }
        public Lazy<IIntegrationsApiMappingRepository> IntegrationsApiMapping { get; set; }
        public Lazy<IIntegrationsDbMappingRepository> IntegrationsDbMapping { get; set; }
        public Lazy<ILogRepository> Log { get; set; }
        public Lazy<ILogsDetailsRepository> LogDetails { get; set; }
        public Lazy<IProductsStepsRepository> ProductsStep { get; set; }
        public Lazy<IStepTransactionsRepsotiry> StepTransactions { get; set; }
        public Lazy<IProductsRepository> Products { get; set; }
        public Lazy<IProductsDetailsRepository> ProductsDetails { get; set; }
        public Lazy<IProductsComponentsRepository> ProductsComponents { get; set; }
        public Lazy<IProductsContainersRepository> ProductsContainers { get; set; }
        public Lazy<IProductsFormControlsRepository> ProductsFormControls { get; set; }
        public Lazy<IMailerRepository> Mailer { get; set; }
        public Lazy<INotificationRepository> Notification { get; set; }
        public Lazy<INotificationAttachmentsRepository> NotificationAttachments { get; set; }
        public Lazy<INotificationContactsRepository> NotificationContacts { get; set; }
        public Lazy<INotificationParametersRepository> NotificationParameters { get; set; }
        public Lazy<INotificationTemplatesRepository> NotificationTemplates { get; set; }
        public Lazy<ISmsProviderRepository> SmsProvider { get; set; }
        public Lazy<IUserPropertiesRepository> UserProperties { get; set; }
        public Lazy<ISequenceRepository> SequenceRepository { get; set; }
        public Lazy<IControlValuesRepository> ControlValues { get; set; }
        public Lazy<INotificationsLogsRepository> NotificationsLogs { get; set; }
        public Lazy<IIntegrationsObjectControlRespository> IntegrationsObjectControl { get; set; }
        public Lazy<ICpEpaymentTransactionsRepository> CpEpaymentTransactions { get; set; }

        public RepositoryUnitOfWork(SharedComponentsDBContext context)
        {
            _context = context;
          //  CPPortalSetting = new Lazy<ICpPortalSettingRepository>(() => new CpPortalSettingRepository(_context));
            IntegrationsObjectControl = new Lazy<IIntegrationsObjectControlRespository>(() => new IntegrationsObjectControlRespository(_context));
            ControlValues = new Lazy<IControlValuesRepository>(() => new ControlValuesRepository(_context));
            Component = new Lazy<IComponentRepository>(() => new ComponentRepository(_context));
            Container = new Lazy<IContainerRepository>(() => new ContainerRepository(_context));
            FormControl = new Lazy<IFormControlRepository>(() => new FormControlRepository(_context));
            Rule = new Lazy<IRuleRepository>(() => new RuleRepository(_context));
            Condition = new Lazy<IConditionRepository>(() => new ConditionRepository(_context));
            Action = new Lazy<IActionRepository>(() => new ActionRepository(_context));
            Questionnaire = new Lazy<IQuestionnaireRepository>(() => new QuestionnaireRepository(_context));
            User = new Lazy<IUserRepository>(() => new UserRepository(_context));
            EpaymentMethods = new Lazy<IEpaymentMethodsRepository>(() => new EpaymentMethodsRepository(_context));
            EpaymentDetails = new Lazy<IEpaymentDetailsRepository>(() => new EpaymentDetailsRepository(_context));
            Processes = new Lazy<ISstProcessesRepository>(() => new SstProcessesRepository(_context));
            ProcessesSystems = new Lazy<ISstProcessesSystemsRepository>(() => new SstProcessesSystemsRepository(_context));
            ProcessesSteps = new Lazy<ISstProcessStepsRepository>(() => new SstProcessesStepsRepository(_context));
            ProcessParentSteps = new Lazy<ISstProcessParentStepsRepository>(() => new SstProcessParentStepsRepository(_context));
            QuestControls = new Lazy<IQuestControlsRepository>(() => new QuestControlsRepository(_context));
            QuestSystems = new Lazy<IQuestSystemsRepository>(() => new QuestSystemsRepository(_context));
            Integration = new Lazy<IIntegrationRepository>(() => new IntegrationsRepository(_context));
            IntegrationsSetting = new Lazy<IIntegrationsSettingRepository>(() => new IntegrationsSettingRepository(_context));
            IntegrationsApiMapping = new Lazy<IIntegrationsApiMappingRepository>(() => new IntegrationsApiMappingRepository(_context));
            IntegrationsDbMapping = new Lazy<IIntegrationsDbMappingRepository>(() => new IntegrationsDbMappingRepository(_context));
            Log = new Lazy<ILogRepository>(() => new LogRepository(_context));
            LogDetails = new Lazy<ILogsDetailsRepository>(() => new LogsDetailsRepository(_context));
            ProductsStep = new Lazy<IProductsStepsRepository>(() => new ProductsStepsRepository(_context));
            StepTransactions = new Lazy<IStepTransactionsRepsotiry>(() => new StepTransactionsRespository(_context));
            Products = new Lazy<IProductsRepository>(() => new ProductsRepository(_context));
            ProductsDetails = new Lazy<IProductsDetailsRepository>(() => new ProductsDetailsRepository(_context));
            ProductsComponents = new Lazy<IProductsComponentsRepository>(() => new ProductsComponentsRepository(_context));
            ProductsContainers = new Lazy<IProductsContainersRepository>(() => new ProductsContainersRepository(_context));
            ProductsFormControls = new Lazy<IProductsFormControlsRepository>(() => new ProductsFormControlsRepository(_context));
            Mailer = new Lazy<IMailerRepository>(() => new MailerRepository(_context));
            Notification = new Lazy<INotificationRepository>(() => new NotificationRepository(_context));
            NotificationAttachments = new Lazy<INotificationAttachmentsRepository>(() => new NotificationAttachmentsRepository(_context));
            NotificationContacts = new Lazy<INotificationContactsRepository>(() => new NotificationContactsRepository(_context));
            NotificationParameters = new Lazy<INotificationParametersRepository>(() => new NotificationParametersRepository(_context));
            NotificationTemplates = new Lazy<INotificationTemplatesRepository>(() => new NotificationTemplatesRepository(_context));
            SmsProvider = new Lazy<ISmsProviderRepository>(() => new SmsProviderRepository(_context));
            UserProperties = new Lazy<IUserPropertiesRepository>(() => new UserPropertiesRepository(_context));
            SequenceRepository = new Lazy<ISequenceRepository>(() => new SequenceRepository(_context));
            NotificationsLogs = new Lazy<INotificationsLogsRepository>(() => new NotificationsLogsRepository(_context));
            CpEpaymentTransactions = new Lazy<ICpEpaymentTransactionsRepository>(() => new CpEpaymentTransactionsRepository(_context));
        }
        public void Dispose()
        {
            _context.Dispose();
            Component = null;
            Component = null;
            Container = null;
            FormControl = null;
            Rule = null;
            Condition = null;
            Action = null;
            Questionnaire = null;
            User = null;
            EpaymentMethods = null;
            EpaymentDetails = null;
            Processes = null;
            ProcessesSystems = null;
            ProcessesSteps = null;
            ProcessParentSteps = null;
            Mailer = null;
            Notification = null;
            NotificationAttachments = null;
            NotificationContacts = null;
            NotificationParameters = null;
            NotificationTemplates = null;
            SmsProvider = null;
            NotificationsLogs = null;
            //  CpEpaymentTransactions = null;
        }
    }
}