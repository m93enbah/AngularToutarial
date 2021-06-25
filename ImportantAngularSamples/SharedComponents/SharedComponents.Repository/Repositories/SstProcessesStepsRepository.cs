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
    public class SstProcessesStepsRepository : Repository<SstProcessSteps>, ISstProcessStepsRepository
    {
        private SharedComponentsDBContext _context;
        public SstProcessesStepsRepository(SharedComponentsDBContext context) : base(context)
        {
            _context = context;
        }
    }
}
