using SharedComponents.Domain.Common;
using System;
using System.Collections.Generic;

namespace SharedComponents.Domain.Models
{
    public partial class SpdProductsSteps : BaseModel
    {
        public SpdProductsSteps()
        {
            SpdComponents = new HashSet<SpdComponents>();
            SpdControlValues = new HashSet<SpdControlValues>();
            SpdStepsTransactions = new HashSet<SpdStepsTransactions>();
            SstIntegrationsApiMapping = new HashSet<SstIntegrationsApiMapping>();
            SstIntegrationsApiObject = new HashSet<SstIntegrationsApiObject>();
            SstIntegrationsObjectControls = new HashSet<SstIntegrationsObjectControls>();
        }

        public string Name { get; set; }
        public string Name2 { get; set; }
        public byte? Order { get; set; }
        public string Icon { get; set; }
        public string Load { get; set; }
        public string Submit { get; set; }
        public long ProductId { get; set; }


        public virtual ICollection<SpdComponents> SpdComponents { get; set; }
        public virtual ICollection<SpdControlValues> SpdControlValues { get; set; }
        public virtual ICollection<SpdStepsTransactions> SpdStepsTransactions { get; set; }
        public virtual ICollection<SstIntegrationsApiMapping> SstIntegrationsApiMapping { get; set; }
        public virtual ICollection<SstIntegrationsApiObject> SstIntegrationsApiObject { get; set; }
        public virtual ICollection<SstIntegrationsObjectControls> SstIntegrationsObjectControls { get; set; }
    }
}
