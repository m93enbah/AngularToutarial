using SharedComponents.Domain.Common;
using System;
using System.Collections.Generic;

namespace SharedComponents.Domain.Models
{
    public partial class SpdFormControls : BaseModel
    {
        public SpdFormControls()
        {
            InverseRefControl = new HashSet<SpdFormControls>();
            SpdControlValues = new HashSet<SpdControlValues>();
        }

        public string Key { get; set; }
        public byte? Type { get; set; }
        public string Name { get; set; }
        public string Name2 { get; set; }
        public byte? Value { get; set; }
        public byte? Order { get; set; }
        public string Icon { get; set; }
        public byte? Width { get; set; }
        public byte? Required { get; set; }
        public byte? Disabled { get; set; }
        public string Options { get; set; }
        public byte? HasSubformControls { get; set; }
        public long? ContainerId { get; set; }
        public long? RefControlId { get; set; }
        public string Notes { get; set; }


        public virtual SpdContainers Container { get; set; }
        public virtual SpdFormControls RefControl { get; set; }
        public virtual ICollection<SpdFormControls> InverseRefControl { get; set; }
        public virtual ICollection<SpdControlValues> SpdControlValues { get; set; }
    }
}
