using System;
using System.Collections.Generic;
using SharedComponents.Domain.Common;
namespace SharedComponents.Domain.Models
{
    public partial class SstIntegrations : BaseModel
    {
        public SstIntegrations()
        {
            SpdSequencesDetails = new HashSet<SpdSequencesDetails>();
            SpdStepsTransactions = new HashSet<SpdStepsTransactions>();
            SstIntegrationsSettings = new HashSet<SstIntegrationsSettings>();
        }

        public string Name { get; set; }
        public string Name2 { get; set; }
        public byte? SourceType { get; set; }
        public string Notes { get; set; }
        public long? SystemId { get; set; }
        public long CompanyId { get; set; }

        public virtual SstSystems System { get; set; }
        public virtual ICollection<SpdSequencesDetails> SpdSequencesDetails { get; set; }
        public virtual ICollection<SpdStepsTransactions> SpdStepsTransactions { get; set; }
        public virtual ICollection<SstIntegrationsSettings> SstIntegrationsSettings { get; set; }
    }
}
