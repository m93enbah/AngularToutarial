using System.Linq;
using DOMAIN.Context;
using Microsoft.EntityFrameworkCore;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Models;
using SharedComponents.Domain.Models.SearchCriteria;
using SharedComponents.Repository.Common;

namespace SharedComponents.Repository.Repositories
{
    public class ProductsDetailsRepository : Repository<SpdProductsDetails>, IProductsDetailsRepository
    {
        private SharedComponentsDBContext _context;
        public ProductsDetailsRepository(SharedComponentsDBContext context) : base(context)
        {
            _context = context;
        }

        public IQueryable<SpdProductsDetails> GetByCriteria(SearchProductDetails search)
        {
            var query = Context.Set<SpdProductsDetails>().AsNoTracking();

            if (search.ProductId.HasValue)
                query = query.Where(productDt => productDt.ProductId == search.ProductId.Value);

            return query;
        }
    }
}