
using DOMAIN.Context;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Models;
using SharedComponents.Repository.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace SharedComponents.Repository.Repositories
{
    public class NotificationsLogsRepository : Repository<SstNotificationsLogs>, INotificationsLogsRepository
    {
        private SharedComponentsDBContext _context;
        public NotificationsLogsRepository(SharedComponentsDBContext context) : base(context)
        {
            _context = context;
        }
    }
}