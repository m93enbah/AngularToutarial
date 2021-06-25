using DOMAIN.Context;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Models;
using SharedComponents.Repository.Common;

namespace SharedComponents.Repository.Repositories
{
    public class NotificationRepository : Repository<SstNotifications>, INotificationRepository
    {
        private SharedComponentsDBContext _context;
        public NotificationRepository(SharedComponentsDBContext context) : base(context)
        {
            _context = context;
        }
    }
}