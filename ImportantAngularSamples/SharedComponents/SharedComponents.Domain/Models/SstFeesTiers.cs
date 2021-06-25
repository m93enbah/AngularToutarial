using System;
using System.Collections.Generic;
using SharedComponents.Domain.Common;
namespace SharedComponents.Domain.Models
{
    public partial class SstFeesTiers : BaseModel
    {
        public SstFeesTiers()
        {
            SstFeesTiersDetails = new HashSet<SstFeesTiersDetails>();
        }

        public long SystemId { get; set; }
        public long ClassId { get; set; }
        public long? PolicyType { get; set; }
        public decimal AmountFrom { get; set; }
        public decimal AmountTo { get; set; }
        public byte TierType { get; set; }
        public decimal FeePercent { get; set; }
        public decimal? FeeAmount { get; set; }
        public decimal? MinAmount { get; set; }
        public decimal? MaxAmount { get; set; }
        public string Currency { get; set; }
        public byte VoucherSide { get; set; }
        public byte? RoundTo { get; set; }
        public int? Location { get; set; }
        public string TaxCode { get; set; }
        public long? MultipleOf { get; set; }
        public short? TermFrom { get; set; }
        public short? TermTo { get; set; }
        public short? YearFrom { get; set; }
        public short? YearTo { get; set; }
        public byte? AutoAdd { get; set; }
        public long FeeId { get; set; }
        public byte? CalculationMethod { get; set; }

        public virtual SstClasses Class { get; set; }
        public virtual SstFees Fee { get; set; }
        public virtual SstPolicyTypes PolicyTypeNavigation { get; set; }
        public virtual SstSystems System { get; set; }
        public virtual ICollection<SstFeesTiersDetails> SstFeesTiersDetails { get; set; }
    }
}
