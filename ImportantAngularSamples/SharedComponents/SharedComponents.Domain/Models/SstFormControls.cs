using System;
using System.Collections.Generic;
using SharedComponents.Domain.Common;
namespace SharedComponents.Domain.Models
{
    public partial class SstFormControls : BaseModel
    {
        public SstFormControls()
        {
            InverseRefControl = new HashSet<SstFormControls>();
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

        public virtual SstContainers Container { get; set; }
        public virtual SstFormControls RefControl { get; set; }
        public virtual ICollection<SstFormControls> InverseRefControl { get; set; }
    }
}
