using SharedComponents.Domain.Common;
using System;
using System.Collections.Generic;

namespace SharedComponents.Domain.Models
{
    public partial class SstPolicyTypes : BaseModel
    {
        public SstPolicyTypes()
        {
            SstChannelPlans = new HashSet<SstChannelPlans>();
            SstClaimDiscounts = new HashSet<SstClaimDiscounts>();
            SstClauses = new HashSet<SstClauses>();
            SstClosingPeriods = new HashSet<SstClosingPeriods>();
            SstCoverTypes = new HashSet<SstCoverTypes>();
            SstFeesTiers = new HashSet<SstFeesTiers>();
            SstPolicyDiscounts = new HashSet<SstPolicyDiscounts>();
            SstShortPeriods = new HashSet<SstShortPeriods>();
        }

        public string Code { get; set; }
        public string Name { get; set; }
        public string Name2 { get; set; }
        public byte? BusinessType { get; set; }
        public byte? UnearnedBasis { get; set; }
        public decimal? EarnedPercent { get; set; }
        public DateTime? EffectiveDate { get; set; }
        public DateTime? ExpiryDate { get; set; }
        public byte? TreatyType { get; set; }
        public byte? LongTerm { get; set; }
        public byte? RateBasis { get; set; }
        public byte? RateType { get; set; }
        public byte? RatePer { get; set; }
        public byte? AgeDecrease { get; set; }
        public byte? MinCustomerAge { get; set; }
        public byte? MaxCustomerAge { get; set; }
        public byte? MinMemberAge { get; set; }
        public byte? MaxMemberAge { get; set; }
        public byte? MinTerm { get; set; }
        public byte? MaxTerm { get; set; }
        public byte? BasicCover { get; set; }
        public byte? TargetGender { get; set; }
        public byte? TermBasis { get; set; }
        public long ClassId { get; set; }
        public byte? MaturityAge { get; set; }

        public virtual SstClasses Class { get; set; }
        public virtual ICollection<SstChannelPlans> SstChannelPlans { get; set; }
        public virtual ICollection<SstClaimDiscounts> SstClaimDiscounts { get; set; }
        public virtual ICollection<SstClauses> SstClauses { get; set; }
        public virtual ICollection<SstClosingPeriods> SstClosingPeriods { get; set; }
        public virtual ICollection<SstCoverTypes> SstCoverTypes { get; set; }
        public virtual ICollection<SstFeesTiers> SstFeesTiers { get; set; }
        public virtual ICollection<SstPolicyDiscounts> SstPolicyDiscounts { get; set; }
        public virtual ICollection<SstShortPeriods> SstShortPeriods { get; set; }
    }
}
