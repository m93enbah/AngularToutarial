using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Models;
using SharedComponents.Domain.Models.SearchCriteria;
using System.Collections.Generic;

namespace SharedComponents.Domain.Interfaces.Services
{
    public interface IProductsDetailsService : IService<SpdProductsDetails>
    {
        IResponseResult<IEnumerable<SpdProductsDetails>> GetByCriteria(SearchProductDetails search);
    }
}