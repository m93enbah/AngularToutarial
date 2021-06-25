using SharedComponents.Domain.Common;
using System;
using System.Collections.Generic;

namespace SharedComponents.Domain.Models
{
    public partial class SstClaimDiscounts : BaseModel
    {
        public long Id { get; set; }
        public long ClassId { get; set; }
        public long? PolicyType { get; set; }
        public decimal Amount { get; set; }
        public decimal Percent { get; set; }
        public decimal AfterClaimPercent { get; set; }
        public byte ClaimYearsFrom { get; set; }
        public byte ClaimYearsTo { get; set; }
        public long DiscountId { get; set; }

        public virtual SstClasses Class { get; set; }
        public virtual SstDiscounts Discount { get; set; }
        public virtual SstPolicyTypes PolicyTypeNavigation { get; set; }
    }
}
