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
    public class ActionRepository : Repository<SstActions>, IActionRepository
    {
        private SharedComponentsDBContext _context;
        public ActionRepository(SharedComponentsDBContext context) : base(context)
        {
            _context = context;
        }

        public IQueryable<SstActions> GetByCriteria(SearchActions search)
        {
            var query = _context.SstActions.AsNoTracking();

            query = query.Where(actions => actions.TargetParent == search.ComponentId && actions.RuleId == search.RuleId);
            return query;
        }
    }
}