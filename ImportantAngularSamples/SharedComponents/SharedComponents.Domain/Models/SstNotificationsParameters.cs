using System;
using System.Collections.Generic;
using SharedComponents.Domain.Common;
namespace SharedComponents.Domain.Models
{
    public partial class SstNotificationsParameters : BaseModel
    {
        public byte? ParameterType { get; set; }
        public long? ParameterRef { get; set; }
        public long NotificationId { get; set; }

        public virtual SstNotifications Notification { get; set; }
    }
}
