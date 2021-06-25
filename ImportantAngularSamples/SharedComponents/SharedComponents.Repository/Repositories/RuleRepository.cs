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

namespace SharedComponents.Repository.Repositories
{
    public class RuleRepository : Repository<SstRules>, IRuleRepository
    {
        private SharedComponentsDBContext _context;
        public RuleRepository(SharedComponentsDBContext context) : base(context)
        {
            _context = context;
        }

        public IQueryable<SstRules> GetByCriteria(SearchRule search)
        {
            var query = _context.SstRules.AsNoTracking();

            if (search.Count.HasValue)
            {
                query = query.OrderByDescending(x => x.CreationDate).Take(search.Count.Value)
               .Include(rule => rule.SstActions)
               .Include(rule => rule.SstConditions);

            }

            if (!string.IsNullOrEmpty(search.Query))
            {
                query = query.Where(x => x.Name.Contains(search.Query))
                    .Include(rule => rule.SstActions)
                    .Include(rule => rule.SstConditions);
            }

            return query;

        }

        public override SstRules Get(long id)
        {
            return Context.Set<SstRules>().AsNoTracking()
            .Where(x => x.Id == id)
            .Include(rule => rule.SstActions)
            .Include(rule => rule.SstConditions)
            .First();
        }

        public IQueryable<SstRules> GetRuleByComponentId(SearchRule search)
        {
            var query = _context.SstRules.AsNoTracking();

            query = query.Where(rules => rules.SstConditions.Any(x => x.ReferenceParent == search.ComponentId) || rules.SstActions.Any(x => x.TargetParent == search.ComponentId));
            return query;
        }
    }
}