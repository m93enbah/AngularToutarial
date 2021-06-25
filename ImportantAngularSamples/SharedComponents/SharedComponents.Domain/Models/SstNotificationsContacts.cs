using System;
using System.Collections.Generic;
using SharedComponents.Domain.Common;
namespace SharedComponents.Domain.Models
{
    public partial class SstNotificationsContacts : BaseModel
    {
        public byte Type { get; set; }
        public string Username { get; set; }
        public long? GroupId { get; set; }
        public long TemplateId { get; set; }

        public virtual SstNotificationsTemplates Template { get; set; }
    }
}
