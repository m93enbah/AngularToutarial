using System;
using System.Collections.Generic;
using SharedComponents.Domain.Common;
namespace SharedComponents.Domain.Models
{
    public partial class SstNotificationsTemplates : BaseModel
    {
        public SstNotificationsTemplates()
        {
            SstNotificationsContacts = new HashSet<SstNotificationsContacts>();
        }

        public byte Type { get; set; }
        public string From { get; set; }
        public string Subject { get; set; }
        public string Subject2 { get; set; }
        public byte[] Body { get; set; }
        public byte[] Body2 { get; set; }
        public long NotificationId { get; set; }

        public virtual SstNotifications Notification { get; set; }
        public virtual ICollection<SstNotificationsContacts> SstNotificationsContacts { get; set; }
    }
}
