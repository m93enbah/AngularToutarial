using System;
using System.Collections.Generic;
using SharedComponents.Domain.Common;
namespace SharedComponents.Domain.Models
{
    public partial class SstDomains : BaseModel
    { 
        public SstDomains()
        {
            SstDomainValues = new HashSet<SstDomainValues>();
        }

        public long Code { get; set; }
        public string Name { get; set; }
        public string Name2 { get; set; }
        public long DefaultValue { get; set; }
        public long? SystemId { get; set; }
        public string ModuleCode { get; set; }
        public long CompanyId { get; set; }
        public string Notes { get; set; }

        public virtual SstSystems System { get; set; }
        public virtual ICollection<SstDomainValues> SstDomainValues { get; set; }
    }
}
