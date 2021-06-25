using SharedComponents.Domain.Common;
using System;
using System.Collections.Generic;

namespace SharedComponents.Domain.Models
{
    public partial class SstPolicyDiscounts : BaseModel
    {
        public decimal Percent { get; set; }
        public decimal Amount { get; set; }
        public DateTime EffectiveDate { get; set; }
        public DateTime? ExpiryDate { get; set; }
        public byte? Order { get; set; }
        public byte? RoundTo { get; set; }
        public DateTime? RenewalFrom { get; set; }
        public DateTime? RenewalTo { get; set; }
        public byte AutoAdd { get; set; }
        public byte SeparateVoucher { get; set; }
        public long? BusinessType { get; set; }
        public long? CoverType { get; set; }
        public long? RiskType { get; set; }
        public long ClassId { get; set; }
        public long PolicyType { get; set; }
        public long DiscountId { get; set; }

        public virtual SstClasses Class { get; set; }
        public virtual SstDiscounts Discount { get; set; }
        public virtual SstPolicyTypes PolicyTypeNavigation { get; set; }
    }
}
