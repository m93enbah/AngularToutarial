using SharedComponents.Domain.Models;
using SharedComponents.Domain.Models.SearchCriteria;
using System.Linq;

namespace SharedComponents.Domain.Interfaces.Repositories
{
    public interface IProductsComponentsRepository : IRepository<SpdComponents>
    {
        IQueryable<SpdComponents> GetByCriteria(SearchProductComponents search);
    }
}  