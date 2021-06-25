using SharedComponents.Domain.Common;
using System;
using System.Collections.Generic;

namespace SharedComponents.Domain.Models
{
    public partial class SpdComponents : BaseModel
    {
        public SpdComponents()
        {
            SpdContainers = new HashSet<SpdContainers>();
            SpdControlValues = new HashSet<SpdControlValues>();
        }

        public string Name { get; set; }
        public string Name2 { get; set; }
        public byte? Order { get; set; }
        public string Icon { get; set; }
        public byte? FormType { get; set; }
        public byte? LayoutType { get; set; }
        public string Notes { get; set; }
        public long? StepId { get; set; }
        public long? RefComponentId { get; set; }
        public long? SystemId { get; set; }
        public long CompanyId { get; set; }

        public virtual SpdProductsSteps Step { get; set; }
        public virtual ICollection<SpdContainers> SpdContainers { get; set; }
        public virtual ICollection<SpdControlValues> SpdControlValues { get; set; }
    }
}
