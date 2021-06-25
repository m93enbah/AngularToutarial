using DOMAIN.Context;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using SharedComponents.Domain.Enums;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Models;
using SharedComponents.Repository.Common;
using System;
using System.CodeDom;
using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Reflection;
using System.Text;
using System.Web;

namespace SharedComponents.Repository.Repositories
{
    public class IntegrationsApiMappingRepository : Repository<SstIntegrationsApiMapping>, IIntegrationsApiMappingRepository
    {
        private SharedComponentsDBContext _context;
        public IntegrationsApiMappingRepository(SharedComponentsDBContext context) : base(context)
        {
            _context = context;
        }

        //public override SstIntegrationsApiMapping Get(long id)
        //{
        //    return Context.Set<SstIntegrationsApiMapping>().AsNoTracking()
        //      .Where(entity => entity.Id == id)
        //    // .Include(entity => entity.Mapping)
        //     .ThenInclude(entity => entity.SstIntegrationsObjectControls)
        //     .Include(entity => entity.SstIntegrationsObjectControls)
        //     .First();
        //}
    }

}