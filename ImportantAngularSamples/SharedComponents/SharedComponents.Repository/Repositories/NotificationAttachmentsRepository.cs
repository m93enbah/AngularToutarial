using DOMAIN.Context;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Models;
using SharedComponents.Repository.Common;

namespace SharedComponents.Repository.Repositories
{
    public class NotificationAttachmentsRepository : Repository<SstNotificationsAttachments>, INotificationAttachmentsRepository
    {
        private SharedComponentsDBContext _context;
        public NotificationAttachmentsRepository(SharedComponentsDBContext context) : base(context)
        {
            _context = context;
        }
    }
}