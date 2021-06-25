using System;
using System.Collections.Generic;
using SharedComponents.Domain.Common;
namespace SharedComponents.Domain.Models
{
    public partial class SstNotificationsAttachments : BaseModel
    {
        public byte? Order { get; set; }
        public byte Type { get; set; }
        public string AttachPath { get; set; }
        public string ReportCode { get; set; }
        public byte? Status { get; set; }
        public long NotificationId { get; set; }

        public virtual SstNotifications Notification { get; set; }
    }
}
