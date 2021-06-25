using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Models;
using SharedComponents.Domain.Models.SearchCriteria;
using System.Collections.Generic;

namespace SharedComponents.Domain.Interfaces.Services
{
    public interface IProductsContainersService : IService<SpdContainers>
    {
        IResponseResult<IEnumerable<SpdContainers>> GetByCriteria(SearchProductContainers search);
    }
}