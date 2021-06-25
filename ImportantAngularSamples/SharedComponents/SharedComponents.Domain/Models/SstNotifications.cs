using System;
using System.Collections.Generic;
using SharedComponents.Domain.Common;
namespace SharedComponents.Domain.Models
{
    public partial class SstNotifications : BaseModel
    {
        public SstNotifications()
        {
            SstNotificationsAttachments = new HashSet<SstNotificationsAttachments>();
            SstNotificationsParameters = new HashSet<SstNotificationsParameters>();
            SstNotificationsTemplates = new HashSet<SstNotificationsTemplates>();
        }

        public string Name { get; set; }
        public string Name2 { get; set; }
        public byte? Status { get; set; }
        public string Notes { get; set; }
        public string SessionKey { get; set; }
        public long? SystemId { get; set; }
        public long CompanyId { get; set; }

        public virtual SstSystems System { get; set; }
        public virtual ICollection<SstNotificationsAttachments> SstNotificationsAttachments { get; set; }
        public virtual ICollection<SstNotificationsParameters> SstNotificationsParameters { get; set; }
        public virtual ICollection<SstNotificationsTemplates> SstNotificationsTemplates { get; set; }
    }
}
