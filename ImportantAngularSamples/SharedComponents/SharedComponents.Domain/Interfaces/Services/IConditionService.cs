using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Models;
using SharedComponents.Domain.Models.SearchCriteria;
using System;
using System.Collections.Generic;
using System.Text;

namespace SharedComponents.Domain.Interfaces.Services
{
    public interface IConditionService : IService<SstConditions>
    {
        IResponseResult<IEnumerable<SstConditions>> GetByCriteria(SearchConditions search);
        IResponseResult<IEnumerable<SstConditions>> UpdateBulk(List<SstConditions> entities);

    }
}