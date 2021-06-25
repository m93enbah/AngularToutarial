
using DOMAIN.Context;
using Microsoft.EntityFrameworkCore;
using SharedComponents.Domain.Enums;
using SharedComponents.Domain.Interfaces;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Models;
using SharedComponents.Domain.Models.SearchCriteria;
using SharedComponents.Repository.Common;
using SharedComponents.Repository.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SharedComponents.Repository.Repositories
{
    public class ConditionRepository : Repository<SstConditions>, IConditionRepository
    {
        private SharedComponentsDBContext _context;
        public ConditionRepository(SharedComponentsDBContext context) : base(context)
        {
            _context = context;
        }

        public IQueryable<SstConditions> GetByCriteria(SearchConditions search)
        {
            var query = _context.SstConditions.AsNoTracking();

            query = query.Where(conditions => conditions.ReferenceParent == search.ComponentId && conditions.RuleId == search.RuleId);
            return query;
        }
    }
}