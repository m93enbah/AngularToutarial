using System;
using System.Collections.Generic;
using SharedComponents.Domain.Common;
namespace SharedComponents.Domain.Models
{
    public partial class SstEpaymentDetails : BaseModel
    {
        public string Currency { get; set; }
        public string MerchantId { get; set; }
        public string MerchantReference { get; set; }
        public string ApiId { get; set; }
        public string TransactionId { get; set; }
        public string TransactionPassword { get; set; }
        public byte? AuthenticationType { get; set; }
        public long PaymentId { get; set; }
        public string Registration { get; set; }
        public string Customer { get; set; }
        public string Address { get; set; }
        public string CertificatePath { get; set; }
        public string CertificatePass { get; set; }
        public int? Port { get; set; }
        public long? Timeout { get; set; }
        public byte? IsSecure { get; set; }
        public string Channel { get; set; }
        public string Language { get; set; }
        public double? Amount { get; set; }
        public string Store { get; set; }
        public string Terminal { get; set; }
        public string OrderInfo { get; set; }
        public string OrderDescription { get; set; }
        public string ReturnPath { get; set; }
        public string AccessCode { get; set; }
        public string Command { get; set; }
        public string CustomerEmail { get; set; }
        public string PaymentOption { get; set; }

        public virtual SstEpaymentMethods Payment { get; set; }
    }
}
