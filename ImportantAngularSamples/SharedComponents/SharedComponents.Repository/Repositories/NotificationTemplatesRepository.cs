
using DOMAIN.Context;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Models;
using SharedComponents.Repository.Common;

namespace SharedComponents.Repository.Repositories
{
    public class NotificationTemplatesRepository : Repository<SstNotificationsTemplates>, INotificationTemplatesRepository
    {
        private SharedComponentsDBContext _context;
        public NotificationTemplatesRepository(SharedComponentsDBContext context) : base(context)
        {
            _context = context;
        }
    }
}