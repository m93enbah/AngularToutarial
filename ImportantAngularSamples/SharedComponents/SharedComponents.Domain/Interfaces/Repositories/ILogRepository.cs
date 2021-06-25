using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SharedComponents.Domain.Models;
using SharedComponents.Domain.Models.SearchCriteria;

namespace SharedComponents.Domain.Interfaces.Repositories
{
    public interface ILogRepository : IRepository<SstLogs>
    {
        IQueryable<SstLogs> GetByCriteria(SearchLog search);
    }
}