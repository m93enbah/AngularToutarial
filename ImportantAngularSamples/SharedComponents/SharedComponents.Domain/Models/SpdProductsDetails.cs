using SharedComponents.Domain.Common;
using System;
using System.Collections.Generic;

namespace SharedComponents.Domain.Models
{
    public partial class SpdProductsDetails : BaseModel
    {
        public long SystemId { get; set; }
        public long ClassId { get; set; }
        public long PolicyType { get; set; }
        public long? RiskCategory { get; set; }
        public DateTime ValidFrom { get; set; }
        public DateTime? ValidTo { get; set; }
        public long ProductId { get; set; }


        public virtual SpdProducts Product { get; set; }
    }
}
