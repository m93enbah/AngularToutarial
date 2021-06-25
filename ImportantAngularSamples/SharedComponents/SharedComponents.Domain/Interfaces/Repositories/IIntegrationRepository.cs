using SharedComponents.Domain.Models;
using SharedComponents.Domain.Models.SearchCriteria;
using System.Linq;

namespace SharedComponents.Domain.Interfaces.Repositories
{
    public interface IIntegrationRepository : IRepository<SstIntegrations>
    {
        IQueryable<SstIntegrations> GetByCriteria(SearchIntegration search);
    }
}  
