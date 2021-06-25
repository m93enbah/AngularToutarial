using System;
using System.Collections.Generic;
using SharedComponents.Domain.Common;
namespace SharedComponents.Domain.Models
{
    public partial class SstIntegrationsApiMapping : BaseModel
    {
        public SstIntegrationsApiMapping()
        {
            SstIntegrationsApiObject = new HashSet<SstIntegrationsApiObject>();
        }

        public byte? TransactionType { get; set; }
        public byte? MappingType { get; set; }
        public string ParamType { get; set; }
        public string ParamName { get; set; }
        public int? ElementType { get; set; }
        public long? ElementParent { get; set; }
        public long? ElementId { get; set; }
        public string ElementKey { get; set; }
        public string DefaultValue { get; set; }
        public int? Order { get; set; }
        public long? SettingId { get; set; }
        public long? StepId { get; set; }

        public virtual SstIntegrationsSettings Setting { get; set; }
        public virtual SpdProductsSteps Step { get; set; }
        public virtual ICollection<SstIntegrationsApiObject> SstIntegrationsApiObject { get; set; }
    }
}
