using System;
using System.Collections.Generic;
using SharedComponents.Domain.Common;
namespace SharedComponents.Domain.Models
{
    public partial class SstDiscounts : BaseModel
    {
        public SstDiscounts()
        {
            SstClaimDiscounts = new HashSet<SstClaimDiscounts>();
            SstPolicyDiscounts = new HashSet<SstPolicyDiscounts>();
        }

        public string Name { get; set; }
        public string Name2 { get; set; }
        public byte? Order { get; set; }
        public byte ApplyRisk { get; set; }
        public byte ApplyCover { get; set; }
        public byte ApplyClaim { get; set; }
        public byte ApplyRenewal { get; set; }
        public long SystemId { get; set; }
        public long CompanyId { get; set; }
        public long? BranchId { get; set; }

        public virtual SstSystems System { get; set; }
        public virtual ICollection<SstClaimDiscounts> SstClaimDiscounts { get; set; }
        public virtual ICollection<SstPolicyDiscounts> SstPolicyDiscounts { get; set; }
    }
}
