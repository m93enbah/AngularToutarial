using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Models;
using SharedComponents.Domain.Models.SearchCriteria;
using System;
using System.Collections.Generic;
using System.Text;

namespace SharedComponents.Domain.Interfaces.Services
{
    public interface IActionService : IService<SstActions>
    {
        IResponseResult<IEnumerable<SstActions>> GetByCriteria(SearchActions search);
        IResponseResult<IEnumerable<SstActions>> UpdateBulk(List<SstActions> entities);
    }
}