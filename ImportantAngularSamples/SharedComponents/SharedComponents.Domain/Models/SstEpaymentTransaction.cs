using System;
using System.Collections.Generic;
using SharedComponents.Domain.Common;
namespace SharedComponents.Domain.Models
{
    public partial class SstEpaymentTransaction : BaseModel
    {
        public decimal Amount { get; set; }
        public int? CustomerId { get; set; }
        public string RequestDate { get; set; }
        public string ResponseDate { get; set; }
        public string TransactionStatus { get; set; }
        public string TransactionStatusMessage { get; set; }
        public string ConfirmationId { get; set; }
        public string Version { get; set; }
        public string AutoNotifyLogId { get; set; }
        public string TransactionLogId { get; set; }
        public string AcquirerId { get; set; }
        public int? OrderId { get; set; }
        public int? LanguageId { get; set; }
        public int? PortalId { get; set; }
        public int? PaymentStore { get; set; }
        public string Note { get; set; }
        public int? SourceOfTheTransaction { get; set; }
        public string ReturnedTransactionId { get; set; }
    }
}
