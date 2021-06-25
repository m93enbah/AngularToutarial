using System;
using System.Collections.Generic;
using SharedComponents.Domain.Common;
namespace SharedComponents.Domain.Models
{
    public partial class SstIntegrationsApiObject : BaseModel
    {
        public SstIntegrationsApiObject()
        {
            SstIntegrationsObjectControls = new HashSet<SstIntegrationsObjectControls>();
        }

        public string ParamType { get; set; }
        public string ParamName { get; set; }
        public int? ElementType { get; set; }
        public long? ElementParent { get; set; }
        public long? ElementId { get; set; }
        public string ElementKey { get; set; }
        public string DefaultValue { get; set; }
        public int? Order { get; set; }
        public long? MappingId { get; set; }
        public long? StepId { get; set; }

        public virtual SstIntegrationsApiMapping Mapping { get; set; }
        public virtual SpdProductsSteps Step { get; set; }
        public virtual ICollection<SstIntegrationsObjectControls> SstIntegrationsObjectControls { get; set; }
    }
}
