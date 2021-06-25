using SharedComponents.Domain.Common;
using System;
using System.Collections.Generic;

namespace SharedComponents.Domain.Models
{
    public partial class SstClausesDetails : BaseModel
    {
        public byte ClauseType { get; set; }
        public byte? Order { get; set; }
        public long? CoverType { get; set; }
        public long DiscountType { get; set; }
        public DateTime EffectiveDate { get; set; }
        public DateTime? ExpiryDate { get; set; }
        public string Description { get; set; }
        public string Description2 { get; set; }
        public long ClauseId { get; set; }

        public virtual SstClauses Clause { get; set; }
    }
}
