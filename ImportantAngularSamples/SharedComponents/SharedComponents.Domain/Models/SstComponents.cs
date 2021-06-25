using SharedComponents.Domain.Common;
using System;
using System.Collections.Generic;

namespace SharedComponents.Domain.Models
{
    public partial class SstComponents : BaseModel
    {
        public SstComponents()
        {
            SstContainers = new HashSet<SstContainers>();
        }

        public string Name { get; set; }
        public string Name2 { get; set; }
        public string Icon { get; set; }
        public byte? Global { get; set; }
        public byte? FormType { get; set; }
        public byte? LayoutType { get; set; }
        public string Notes { get; set; }
        public long? SystemId { get; set; }
        public long CompanyId { get; set; }


        public virtual ICollection<SstContainers> SstContainers { get; set; }
    }
}
