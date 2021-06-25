using System;
using System.Collections.Generic;
using SharedComponents.Domain.Common;
namespace SharedComponents.Domain.Models
{
    public partial class SstFees : BaseModel
    {
        public SstFees()
        {
            SstFeesDetails = new HashSet<SstFeesDetails>();
            SstFeesTiers = new HashSet<SstFeesTiers>();
        }

        public long Id { get; set; }
        public string Name { get; set; }
        public string Name2 { get; set; }
        public byte? ApplyProduction { get; set; }
        public byte? ApplyClaims { get; set; }
        public byte? ApplyReinsurance { get; set; }
        public byte? ApplyInvestment { get; set; }
        public byte Category { get; set; }
        public byte Type { get; set; }
        public string Abbreviation { get; set; }
        public byte VoucherSide { get; set; }
        public byte CalculateFrom { get; set; }
        public byte ApplyOn { get; set; }
        public byte? DateType { get; set; }
        public DateTime? EffectiveDate { get; set; }
        public DateTime? ExpiryDate { get; set; }
        public byte? CommissionType { get; set; }
        public byte CalculationLevel { get; set; }
        public byte? DocumentType { get; set; }
        public long? SystemId { get; set; }
        public long CompanyId { get; set; }

        public virtual SstSystems System { get; set; }
        public virtual ICollection<SstFeesDetails> SstFeesDetails { get; set; }
        public virtual ICollection<SstFeesTiers> SstFeesTiers { get; set; }
    }
}
