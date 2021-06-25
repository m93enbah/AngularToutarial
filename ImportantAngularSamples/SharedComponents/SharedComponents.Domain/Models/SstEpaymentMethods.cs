using System;
using System.Collections.Generic;
using SharedComponents.Domain.Common;
namespace SharedComponents.Domain.Models
{
    public partial class SstEpaymentMethods : BaseModel
    {
        public SstEpaymentMethods()
        {
            SstEpaymentAlerts = new HashSet<SstEpaymentAlerts>();
            SstEpaymentDetails = new HashSet<SstEpaymentDetails>();
        }

        public string Name { get; set; }
        public string Name2 { get; set; }
        public string Notes { get; set; }
        public long SystemId { get; set; }
        public long CompanyId { get; set; }

        public virtual SstSystems System { get; set; }
        public virtual ICollection<SstEpaymentAlerts> SstEpaymentAlerts { get; set; }
        public virtual ICollection<SstEpaymentDetails> SstEpaymentDetails { get; set; }
    }
}
