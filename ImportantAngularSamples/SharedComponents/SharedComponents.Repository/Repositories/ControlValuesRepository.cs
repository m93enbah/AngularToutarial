using DOMAIN.Context;
using Microsoft.EntityFrameworkCore;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Models;
using SharedComponents.Repository.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SharedComponents.Repository.Repositories
{
    public class ControlValuesRepository : Repository<SpdControlValues>, IControlValuesRepository
    {
        private SharedComponentsDBContext _context;
        public ControlValuesRepository(SharedComponentsDBContext context) : base(context)
        {
            _context = context;
        }

        public IQueryable<SpdControlValues> GetByCriteria(SearchControlValues search)
        {
            var query = Context.Set<SpdControlValues>().AsNoTracking();

            if (search.ComponentId.HasValue)
                query = query.Where(component => component.ComponentId == search.ComponentId.Value);

            if (search.ProductId.HasValue)
                query = query.Where(component => component.ProductId == search.ProductId.Value);

            if (search.StepId.HasValue)
                query = query.Where(component => component.StepId == search.StepId.Value);

            if (search.UserpropertiesId.HasValue)
                query = query.Where(component => component.UserPropertyId == search.UserpropertiesId.Value);

            if (!(string.IsNullOrEmpty(search.ControlKey)))
                query = query.Where(component => component.ControlKey == search.ControlKey);

            return query;
        }
    }
}
