using DOMAIN.Context;
using Microsoft.EntityFrameworkCore;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Models;
using SharedComponents.Repository.Common;
using System.Linq;

namespace SharedComponents.Repository.Repositories
{
    public class ProductsRepository : Repository<SpdProducts>, IProductsRepository
    {
        private SharedComponentsDBContext _context;
        public ProductsRepository(SharedComponentsDBContext context) : base(context)
        {
            _context = context;
        }

        public SpdProducts DeepGet(long id)
        {
            return Context.Set<SpdProducts>()
             .Include("System")
             .Include("SpdProductsDetails")
             .Include("SpdControlValues")
             .Include("SpdProductsSteps")
                .Include("SpdProductsSteps.SpdComponents")
                    .Include("SpdProductsSteps.SpdComponents.SpdContainers")
                        .Include("SpdProductsSteps.SpdComponents.SpdContainers.SpdFormControls")
                .Include("SpdProductsSteps.SpdStepsTransactions")
                .Include("SpdProductsSteps.SstIntegrationsApiMapping.InverseMapping")
                .Include("SpdProductsSteps.SstIntegrationsApiMapping.SstIntegrationsObjectControls")
             .Include("SstIntegrationsSettings")
             .Include("SstIntegrationsSettings.Integration")
             .Include("SstIntegrationsSettings.SstIntegrationsApiMapping.InverseMapping")
             .Include("SstIntegrationsSettings.SstIntegrationsApiMapping.SstIntegrationsObjectControls")
             .AsNoTracking()
             .FirstOrDefault(x => x.Id == id);

        }

        public override SpdProducts Get(long id)
        {
            return Context.Set<SpdProducts>().AsNoTracking()
             .Where(x => x.Id == id)
             .Include(x => x.SpdProductsDetails)
             .First();
        }
    }
}