using System;
using System.Collections.Generic;
using SharedComponents.Domain.Common;
namespace SharedComponents.Domain.Models
{
    public partial class SstFeesDetails : BaseModel
    {
        public long Id { get; set; }
        public long FeeId { get; set; }
        public long? EndorsementId { get; set; }
        public byte? ClaimTransaction { get; set; }
        public byte? ReinsuranceTransaction { get; set; }
        public long? InvestmentTransaction { get; set; }
        public long CompanyId { get; set; }


        public virtual SstFees Fee { get; set; }
    }
}
