using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Models;
using SharedComponents.Domain.Models.SearchCriteria;
using System;
using System.Collections.Generic;
using System.Text;

namespace SharedComponents.Domain.Interfaces.Services
{
    public interface ILogService : IService<SstLogs>
    {
        IResponseResult<IEnumerable<SstLogs>> GetByCriteria(SearchLog search);
    }
}