using System;
using System.Collections.Generic;
using SharedComponents.Domain.Common;
namespace SharedComponents.Domain.Models
{
    public partial class SstDomainValues : BaseModel
    {
        public string Value { get; set; }
        public string Name { get; set; }
        public string Name2 { get; set; }
        public int Order { get; set; }
        public long DomainCode { get; set; }
        public long DomainId { get; set; }
        public long? SystemId { get; set; }
        public long CompanyId { get; set; }
        public string ShortName { get; set; }

        public virtual SstDomains DomainCodeNavigation { get; set; }
    }
}
