using System;
using System.Collections.Generic;
using SharedComponents.Domain.Common;
namespace SharedComponents.Domain.Models
{
    public partial class SstContainers : BaseModel
    {
        public SstContainers()
        {
            SstFormControls = new HashSet<SstFormControls>();
        }

        public string Key { get; set; }
        public byte? Type { get; set; }
        public string Name { get; set; }
        public string Name2 { get; set; }
        public byte? Order { get; set; }
        public long? ComponentId { get; set; }
        public long? RefContainerId { get; set; }
        public string Notes { get; set; }

        public virtual SstComponents Component { get; set; }
        public virtual ICollection<SstFormControls> SstFormControls { get; set; }
    }
}
