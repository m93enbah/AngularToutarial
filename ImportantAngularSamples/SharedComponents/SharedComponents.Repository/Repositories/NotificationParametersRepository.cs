using DOMAIN.Context;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Models;
using SharedComponents.Repository.Common;

namespace SharedComponents.Repository.Repositories
{
    public class NotificationParametersRepository : Repository<SstNotificationsParameters>, INotificationParametersRepository
    {
        private SharedComponentsDBContext _context;
        public NotificationParametersRepository(SharedComponentsDBContext context) : base(context)
        {
            _context = context;
        }
    }
}