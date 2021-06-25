using SharedComponents.Domain.Common;
using System;
using System.Collections.Generic;

namespace SharedComponents.Domain.Models
{
    public partial class CpEpaymentTransactions : BaseModel
    {
        public decimal Amount { get; set; }
        public int CustomerType { get; set; }
        public int? CustomerId { get; set; }
        public DateTime? RequestDate { get; set; }
        public DateTime? ResponseDate { get; set; }
        public int? Status { get; set; }
        public string StatusMessage { get; set; }
        public string ConfirmationId { get; set; }
        public string Version { get; set; }
        public string AutoLogId { get; set; }
        public string LogId { get; set; }
        public string AcquirerId { get; set; }
        public int? OrderId { get; set; }
        public int? PaymentStore { get; set; }
        public int? Source { get; set; }
        public string ResponseId { get; set; }
        public string Note { get; set; }
    }
}
