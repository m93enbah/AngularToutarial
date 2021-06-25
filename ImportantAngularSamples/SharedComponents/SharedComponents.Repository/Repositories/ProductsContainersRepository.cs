using System.Linq;
using DOMAIN.Context;
using Microsoft.EntityFrameworkCore;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Models;
using SharedComponents.Domain.Models.SearchCriteria;
using SharedComponents.Repository.Common;

namespace SharedComponents.Repository.Repositories
{
    public class ProductsContainersRepository : Repository<SpdContainers>, IProductsContainersRepository
    {
        private SharedComponentsDBContext _context;
        public ProductsContainersRepository(SharedComponentsDBContext context) : base(context)
        {
            _context = context;
        }

        public IQueryable<SpdContainers> GetByCriteria(SearchProductContainers search)
        {
            var query = _context.SpdContainers.Include(x => x.SpdFormControls).AsNoTracking();
            if (search.ComponentId.HasValue)
                query = query.Where(productDt => productDt.ComponentId == search.ComponentId.Value).Include(x => x.SpdFormControls);

            return query;
        }
    }
}