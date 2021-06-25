

using System.Linq;
using DOMAIN.Context;
using Microsoft.EntityFrameworkCore;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Models;
using SharedComponents.Domain.Models.SearchCriteria;
using SharedComponents.Repository.Common;

namespace SharedComponents.Repository.Repositories
{
    public class ProductsComponentsRepository : Repository<SpdComponents>, IProductsComponentsRepository
    {
        private SharedComponentsDBContext _context;
        public ProductsComponentsRepository(SharedComponentsDBContext context) : base(context)
        {
            _context = context;
        }

        public IQueryable<SpdComponents> GetByCriteria(SearchProductComponents search)
        {
            var query = _context.SpdComponents.Include(x => x.SpdContainers).Include("SpdContainers.SpdFormControls").AsNoTracking();

            if (search.StepId.HasValue)
                query = query.Where(component => component.StepId == search.StepId.Value);

            return query;
        }
    }
}