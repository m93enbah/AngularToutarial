using DOMAIN.Context;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Models;
using SharedComponents.Repository.Common;

namespace SharedComponents.Repository.Repositories
{
    public class NotificationContactsRepository : Repository<SstNotificationsContacts>, INotificationContactsRepository
    {
        private SharedComponentsDBContext _context;
        public NotificationContactsRepository(SharedComponentsDBContext context) : base(context)
        {
            _context = context;
        }
    }
}