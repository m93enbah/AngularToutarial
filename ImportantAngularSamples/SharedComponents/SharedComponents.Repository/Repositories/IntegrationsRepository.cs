
using DOMAIN.Context;
using Microsoft.EntityFrameworkCore;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Models;
using SharedComponents.Domain.Models.SearchCriteria;
using SharedComponents.Repository.Common;
using System.Linq;

namespace SharedComponents.Repository.Repositories
{
    public class IntegrationsRepository : Repository<SstIntegrations>, IIntegrationRepository
    {
        private readonly SharedComponentsDBContext _context;
        public IntegrationsRepository(SharedComponentsDBContext context) : base(context)
        {
            _context = context;
        }

        public IQueryable<SstIntegrations> GetByCriteria(SearchIntegration search)
        {
            IQueryable<SstIntegrations> query = Context.Set<SstIntegrations>().AsNoTracking();
            if (search.ApiSourceType.HasValue)
            {
                query = query.Where(integration => integration.SstIntegrationsSettings
                .Any(setting => ((int)setting.ApiSourceType) == search.ApiSourceType.Value))
                .Include(integration => integration.SstIntegrationsSettings);
            }

            return query;
        }

        public override SstIntegrations Get(long id)
        {
            return Context.Set<SstIntegrations>().AsNoTracking()
             .Where(x => x.Id == id)
             .Include(x => x.SstIntegrationsSettings)
             .First();
        }
    }
}