using SharedComponents.Domain.Common;
using System;
using System.Collections.Generic;

namespace SharedComponents.Domain.Models
{
    public partial class SstSystems : BaseModel
    {
        public SstSystems()
        {
            SpdProducts = new HashSet<SpdProducts>();
            SstAlerts = new HashSet<SstAlerts>();
            SstBusinessChannels = new HashSet<SstBusinessChannels>();
            SstClasses = new HashSet<SstClasses>();
            SstClauses = new HashSet<SstClauses>();
            SstClosingPeriods = new HashSet<SstClosingPeriods>();
            SstCodes = new HashSet<SstCodes>();
            SstCoverTypes = new HashSet<SstCoverTypes>();
            SstDiscounts = new HashSet<SstDiscounts>();
            SstDocumentGroups = new HashSet<SstDocumentGroups>();
            SstDomains = new HashSet<SstDomains>();
            SstEndorsements = new HashSet<SstEndorsements>();
            SstEpaymentMethods = new HashSet<SstEpaymentMethods>();
            SstFees = new HashSet<SstFees>();
            SstFeesTiers = new HashSet<SstFeesTiers>();
            SstFormSystems = new HashSet<SstFormSystems>();
            SstIntegrations = new HashSet<SstIntegrations>();
            SstMailer = new HashSet<SstMailer>();
            SstModules = new HashSet<SstModules>();
            SstNotifications = new HashSet<SstNotifications>();
            SstPages = new HashSet<SstPages>();
            SstPaymentCycles = new HashSet<SstPaymentCycles>();
            SstProcessSystems = new HashSet<SstProcessSystems>();
            SstQuestSystems = new HashSet<SstQuestSystems>();
            SstResources = new HashSet<SstResources>();
            SstRules = new HashSet<SstRules>();
            SstShortPeriods = new HashSet<SstShortPeriods>();
            SstSmsProviders = new HashSet<SstSmsProviders>();
        }

        public string Name { get; set; }
        public string Name2 { get; set; }
        public string Abbreviation { get; set; }
        public string Notes { get; set; }
        public int? ApplicationId { get; set; }
    

        public virtual ICollection<SpdProducts> SpdProducts { get; set; }
        public virtual ICollection<SstAlerts> SstAlerts { get; set; }
        public virtual ICollection<SstBusinessChannels> SstBusinessChannels { get; set; }
        public virtual ICollection<SstClasses> SstClasses { get; set; }
        public virtual ICollection<SstClauses> SstClauses { get; set; }
        public virtual ICollection<SstClosingPeriods> SstClosingPeriods { get; set; }
        public virtual ICollection<SstCodes> SstCodes { get; set; }
        public virtual ICollection<SstCoverTypes> SstCoverTypes { get; set; }
        public virtual ICollection<SstDiscounts> SstDiscounts { get; set; }
        public virtual ICollection<SstDocumentGroups> SstDocumentGroups { get; set; }
        public virtual ICollection<SstDomains> SstDomains { get; set; }
        public virtual ICollection<SstEndorsements> SstEndorsements { get; set; }
        public virtual ICollection<SstEpaymentMethods> SstEpaymentMethods { get; set; }
        public virtual ICollection<SstFees> SstFees { get; set; }
        public virtual ICollection<SstFeesTiers> SstFeesTiers { get; set; }
        public virtual ICollection<SstFormSystems> SstFormSystems { get; set; }
        public virtual ICollection<SstIntegrations> SstIntegrations { get; set; }
        public virtual ICollection<SstMailer> SstMailer { get; set; }
        public virtual ICollection<SstModules> SstModules { get; set; }
        public virtual ICollection<SstNotifications> SstNotifications { get; set; }
        public virtual ICollection<SstPages> SstPages { get; set; }
        public virtual ICollection<SstPaymentCycles> SstPaymentCycles { get; set; }
        public virtual ICollection<SstProcessSystems> SstProcessSystems { get; set; }
        public virtual ICollection<SstQuestSystems> SstQuestSystems { get; set; }
        public virtual ICollection<SstResources> SstResources { get; set; }
        public virtual ICollection<SstRules> SstRules { get; set; }
        public virtual ICollection<SstShortPeriods> SstShortPeriods { get; set; }
        public virtual ICollection<SstSmsProviders> SstSmsProviders { get; set; }
    }
}
