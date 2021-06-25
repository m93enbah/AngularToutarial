using SharedComponents.Domain.Common;
using System;
using System.Collections.Generic;

namespace SharedComponents.Domain.Models
{
    public partial class SpdContainers : BaseModel
    {
        public SpdContainers()
        {
            InverseRefContainer = new HashSet<SpdContainers>();
            SpdFormControls = new HashSet<SpdFormControls>();
        }

        public string Key { get; set; }
        public byte? Type { get; set; }
        public string Name { get; set; }
        public string Name2 { get; set; }
        public byte? Order { get; set; }
        public long? ComponentId { get; set; }
        public long? RefContainerId { get; set; }
        public string Notes { get; set; }

        public virtual SpdComponents Component { get; set; }
        public virtual SpdContainers RefContainer { get; set; }
        public virtual ICollection<SpdContainers> InverseRefContainer { get; set; }
        public virtual ICollection<SpdFormControls> SpdFormControls { get; set; }
    }
}
