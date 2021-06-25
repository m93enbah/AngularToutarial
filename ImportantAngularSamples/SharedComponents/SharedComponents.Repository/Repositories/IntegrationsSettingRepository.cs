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
    public class IntegrationsSettingRepository : Repository<SstIntegrationsSettings>, IIntegrationsSettingRepository
    {
        private SharedComponentsDBContext _context;
        public IntegrationsSettingRepository(SharedComponentsDBContext context) : base(context)
        {
            _context = context;
        }

        public override SstIntegrationsSettings Get(long id)
        {
            return Context.Set<SstIntegrationsSettings>().AsNoTracking()
             .Where(x => x.Id == id)
             .Include("SstIntegrationsApiMapping.InverseMapping")
             .Include("SstIntegrationsApiMapping.SstIntegrationsObjectControls")
             .First();
        }
    }
}