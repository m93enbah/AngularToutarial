using SharedComponents.Domain.Models;
using SharedComponents.Domain.Models.SearchCriteria;
using System.Linq;

namespace SharedComponents.Domain.Interfaces.Repositories
{
    public interface IProductsStepsRepository : IRepository<SpdProductsSteps>
    {
        IQueryable<SpdProductsSteps> GetByCriteria(SearchProductSteps search);
    }
}  