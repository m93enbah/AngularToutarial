using DOMAIN.Context;
using Microsoft.EntityFrameworkCore;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Models;
using SharedComponents.Domain.Models.SearchCriteria;
using SharedComponents.Repository.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SharedComponents.Repository.Repositories
{
    public class LogRepository : Repository<SstLogs>, ILogRepository
    {
        private SharedComponentsDBContext _context;
        public LogRepository(SharedComponentsDBContext context) : base(context)
        {
            _context = context;
        }
        public IQueryable<SstLogs> GetByCriteria(SearchLog search)
        {
            var query = Context.Set<SstLogs>().AsNoTracking().Include(log => log.SstLogsDetails).AsQueryable();

            if (search.Success.HasValue)
                query = query.Where(log => log.Status.ToString() == search.Success.ToString());

            if (search.IOType.HasValue)
                query = query.Where(log => log.IoType.ToString() == search.IOType.ToString());

            if (search.FromData.HasValue)
                query = query.Where(log => log.CreationDate >= search.FromData);

            if (search.ToData.HasValue)
                query = query.Where(log => log.CreationDate <= search.ToData);

            if (search.TransactionType.HasValue)
                query = query.Where(log => log.TransactionType.ToString() == search.TransactionType.ToString());

            return query.Skip(search.PageSize * (search.PageNumber - 1)).Take(search.PageSize);
        }
    }
}