using SharedComponents.Domain.Common;
using System;
using System.Collections.Generic;

namespace SharedComponents.Domain.Models
{
    public partial class SpdControlValues : BaseModel
    {
        public long StepId { get; set; }
        public long ProductId { get; set; }
        public long ComponentId { get; set; }
        public long? ControlId { get; set; }
        public string ControlKey { get; set; }
        public byte[] ControlValue { get; set; }
        public long? UserPropertyId { get; set; }

        public virtual SpdComponents Component { get; set; }
        public virtual SpdFormControls Control { get; set; }
        public virtual SpdProducts Product { get; set; }
        public virtual SpdProductsSteps Step { get; set; }
        public virtual CpUserProperties UserProperty { get; set; }
    }
}
