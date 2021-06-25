using SharedComponents.Domain.Common;
using System;
using System.Collections.Generic;

namespace SharedComponents.Domain.Models
{
    public partial class SstCodes : BaseModel
    {
        public SstCodes()
        {
            InverseCode = new HashSet<SstCodes>();
        }

        public long MajorCode { get; set; }
        public long MinorCode { get; set; }
        public string Name { get; set; }
        public string Name2 { get; set; }
        public long SystemId { get; set; }
        public string ModuleCode { get; set; }
        public long? CodeId { get; set; }
        public long? DomainId { get; set; }
        public long CompanyId { get; set; }
        public string Notes { get; set; }

        public virtual SstCodes Code { get; set; }
        public virtual SstModules ModuleCodeNavigation { get; set; }
        public virtual SstSystems System { get; set; }
        public virtual ICollection<SstCodes> InverseCode { get; set; }
    }
}
