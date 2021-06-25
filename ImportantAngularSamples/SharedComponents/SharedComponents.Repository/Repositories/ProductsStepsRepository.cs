using DOMAIN.Context;
using Microsoft.EntityFrameworkCore;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Models;
using SharedComponents.Domain.Models.SearchCriteria;
using SharedComponents.Repository.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SharedComponents.Repository.Repositories
{
    public class ProductsStepsRepository : Repository<SpdProductsSteps>, IProductsStepsRepository
    {
        private SharedComponentsDBContext _context;
        public ProductsStepsRepository(SharedComponentsDBContext context) : base(context)
        {
            _context = context;
        }

        public IQueryable<SpdProductsSteps> GetByCriteria(SearchProductSteps search)
        {
            var query = Context.Set<SpdProductsSteps>().AsNoTracking();
            if (search.ProductId.HasValue)
                query = query.Where(productDt => productDt.ProductId == search.ProductId.Value);

            return query;
        }
    }
}