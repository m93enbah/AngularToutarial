using System;
using System.Collections.Generic;
using SharedComponents.Domain.Common;
namespace SharedComponents.Domain.Models
{
    public partial class SstNotificationsLogs : BaseModel
    {
        public byte? Status { get; set; }
        public string Request { get; set; }
        public DateTime? RequestDate { get; set; }
        public string Response { get; set; }
        public DateTime? ResponseDate { get; set; }
        public byte? KeyType { get; set; }
        public string KeyValue { get; set; }
        public long? NotificationId { get; set; }
    }
}
