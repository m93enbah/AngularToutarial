using SharedComponents.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;

namespace SharedComponents.Domain.Interfaces.Services
{
    public interface ISstProcessesSystemsService : IService<SstProcessSystems>
    {
        IQueryable<SstProcessSystems> Find(Expression<Func<SstProcessSystems, bool>> predicate, params Expression<Func<SstProcessSystems, object>>[] navigationProperties);

        ICollection<SstProcessSystems> LoadProcessSystemByProcessID(Int64? procID);
    }
}