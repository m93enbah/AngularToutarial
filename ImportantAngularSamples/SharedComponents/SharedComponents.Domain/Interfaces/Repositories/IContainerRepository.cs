using SharedComponents.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SharedComponents.Domain.Models.SearchCriteria;

namespace SharedComponents.Domain.Interfaces.Repositories
{
   public interface IContainerRepository : IRepository<SstContainers>
    {
        IQueryable<SstContainers> GetByCriteria(SearchContainers search);
    }
}   