using DOMAIN.Context;
using Microsoft.EntityFrameworkCore;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Models;
using SharedComponents.Repository.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;

namespace SharedComponents.Repository.Repositories
{
    public class SstProcessesSystemsRepository : Repository<SstProcessSystems>, ISstProcessesSystemsRepository
    {

        private SharedComponentsDBContext _context;
        public SstProcessesSystemsRepository(SharedComponentsDBContext context) : base(context)
        {
            _context = context;
        }

        public ICollection<SstProcessSystems> LoadProcessSystemsByProcessID(long? procId)
        {

            var model = _context.SstProcessSystems.Where(i => i.ProcessId == procId).ToList();
            return model.ToList();
        }

    }
}