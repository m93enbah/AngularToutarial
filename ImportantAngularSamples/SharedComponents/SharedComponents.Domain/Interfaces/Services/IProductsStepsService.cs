using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Models;
using SharedComponents.Domain.Models.SearchCriteria;
using System.Collections.Generic;

namespace SharedComponents.Domain.Interfaces.Services
{
    public interface IProductsStepsService : IService<SpdProductsSteps>
    {
        IResponseResult<IEnumerable<SpdProductsSteps>> GetByCriteria(SearchProductSteps search);
    }
}