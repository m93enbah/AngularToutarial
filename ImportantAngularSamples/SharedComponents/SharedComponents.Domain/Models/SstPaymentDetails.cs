using SharedComponents.Domain.Common;
using System;
using System.Collections.Generic;

namespace SharedComponents.Domain.Models
{
    public partial class SstPaymentDetails : BaseModel
    {
        public decimal? Share { get; set; }
        public byte Unit { get; set; }
        public int Period { get; set; }
        public byte Method { get; set; }
        public long CycleId { get; set; }

        public virtual SstPaymentCycles Cycle { get; set; }
    }
}
