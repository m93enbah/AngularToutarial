using SharedComponents.Domain.Models;
using SharedComponents.Domain.Models.SearchCriteria;
using System.Linq;

namespace SharedComponents.Domain.Interfaces.Repositories
{
    public interface IProductsDetailsRepository : IRepository<SpdProductsDetails>
    {
        IQueryable<SpdProductsDetails> GetByCriteria(SearchProductDetails search);
    }
}