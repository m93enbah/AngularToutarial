using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace SharedComponents.Domain.Interfaces.Services
{
    public interface INotificationTemplatesService : IService<SstNotificationsTemplates>
    {
        IResponseResult<IEnumerable<SstNotificationsTemplates>> Find(long notificationId, long templateType);
    }
}