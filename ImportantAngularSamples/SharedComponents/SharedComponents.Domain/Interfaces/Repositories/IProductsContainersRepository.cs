using SharedComponents.Domain.Models;
using SharedComponents.Domain.Models.SearchCriteria;
using System.Linq;

namespace SharedComponents.Domain.Interfaces.Repositories
{
    public interface IProductsContainersRepository : IRepository<SpdContainers>
    {
        IQueryable<SpdContainers> GetByCriteria(SearchProductContainers search);
    }
} 