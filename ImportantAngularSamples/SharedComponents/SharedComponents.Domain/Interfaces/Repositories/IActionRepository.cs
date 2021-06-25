using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Models;
using SharedComponents.Domain.Models.SearchCriteria;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SharedComponents.Domain.Interfaces.Repositories
{
   public interface IActionRepository : IRepository<SstActions>
    {
        IQueryable<SstActions> GetByCriteria(SearchActions search);

    }
}     