using System;
using System.Collections.Generic;
using SharedComponents.Domain.Common;
namespace SharedComponents.Domain.Models
{
    public partial class SstFeesTiersDetails : BaseModel
    {
        public long? Branch { get; set; }
        public long FeeTierId { get; set; }
        public byte? BusinessType { get; set; }
        public byte? Inclusion { get; set; }
        public long? CoverId { get; set; }
        public long? Tpa { get; set; }

        public virtual SstCoverTypes Cover { get; set; }
        public virtual SstFeesTiers FeeTier { get; set; }
    }
}
