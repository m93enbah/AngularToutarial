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
    public class ContainerRepository : Repository<SstContainers>, IContainerRepository
    {
        private SharedComponentsDBContext _context;
        public ContainerRepository(SharedComponentsDBContext context) : base(context)
        {
            _context = context;
        }

        public IQueryable<SstContainers> GetByCriteria(SearchContainers search)
        {
            var query = _context.SstContainers.AsNoTracking();

            query = query.Where(containers => containers.ComponentId == search.ComponentId).Include(x => x.SstFormControls);
            return query;
        }
    }
}