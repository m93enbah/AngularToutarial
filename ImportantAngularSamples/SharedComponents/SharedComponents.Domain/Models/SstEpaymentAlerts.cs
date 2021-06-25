using System;
using System.Collections.Generic;
using SharedComponents.Domain.Common;
namespace SharedComponents.Domain.Models
{
    public partial class SstEpaymentAlerts : BaseModel
    {
        public byte? PaymentSuccess { get; set; }
        public byte? PaymentRecurring { get; set; }
        public byte? PaymentExpiry { get; set; }
        public byte? CardPreExpiry { get; set; }
        public byte? CardExpiry { get; set; }
        public byte? PaymentRenewal { get; set; }
        public byte? PaymentFailure { get; set; }
        public long PaymentId { get; set; }

        public virtual SstEpaymentMethods Payment { get; set; }
    }
}
