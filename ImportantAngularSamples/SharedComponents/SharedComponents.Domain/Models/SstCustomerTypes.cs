using System;
using System.Collections.Generic;
using SharedComponents.Domain.Common;
namespace SharedComponents.Domain.Models
{
    public partial class SstCustomerTypes : BaseModel
    {
        public SstCustomerTypes()
        {
            SstChannelTypes = new HashSet<SstChannelTypes>();
        }

        public string Name { get; set; }
        public string Name2 { get; set; }
        public long CompanyId { get; set; }

        public virtual ICollection<SstChannelTypes> SstChannelTypes { get; set; }
    }
}
