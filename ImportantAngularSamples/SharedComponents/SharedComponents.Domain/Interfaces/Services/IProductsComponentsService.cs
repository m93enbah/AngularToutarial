using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Models;
using SharedComponents.Domain.Models.SearchCriteria;
using System.Collections.Generic;

namespace SharedComponents.Domain.Interfaces.Services
{
    public interface IProductsComponentsService : IService<SpdComponents>
    {
        IResponseResult<IEnumerable<SpdComponents>> GetByCriteria(SearchProductComponents search);
        IResponseResult<IEnumerable<SpdComponents>> DeleteByStepId(SpdComponents spdComponents);
    }
}