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
    public class ComponentRepository : Repository<SstComponents>, IComponentRepository
    {
        private SharedComponentsDBContext _context;
        public ComponentRepository(SharedComponentsDBContext context) : base(context)
        {
            _context = context;
        }

        public IQueryable<SstComponents> GetByCriteria(SearchComponents search)
        {
            var query = Context.Set<SstComponents>().AsNoTracking();

            if (search.CompanyId.HasValue)
                query = query.Where(component => component.CompanyId == search.CompanyId.Value);

            if (!string.IsNullOrEmpty(search.UserName))
                query = query.Where(component => component.CreationUser == search.UserName);

            if (search.FormType.HasValue)
            {
                if (search.FormType.Value == 1)
                    query = query.Where(component => component.FormType == (int)FormType.FormBuilder);

                if (search.FormType.Value == 2)
                    query = query.Where(component => component.FormType == (int)FormType.QuestionaireBuilder);
            }

            if (search.Global.HasValue)
            {
                if (search.Global.Value)
                    query = query.Where(component => component.Global == 1);

                if (!search.Global.Value)
                    query = query.Where(component => component.Global == 0);
            }

            if (search.IsField.HasValue)
            {
                if (search.IsField.Value)
                {
                    query = query.Where(component => component.SstContainers.Count() == 1 && component.SstContainers.First().SstFormControls.Count() == 1);
                }

                if (!search.IsField.Value)
                {
                    query = query.Where(component => component.SstContainers.Count() > 1 || (component.SstContainers.Count() == 1 && component.SstContainers.First().SstFormControls.Count() > 1));
                }
            }

            if (!string.IsNullOrEmpty(search.Name))
                query = query.Where(component => component.Name == search.Name);

            if (!string.IsNullOrEmpty(search.Name2))
                query = query.Where(component => component.Name2 == search.Name2);


            return query;
        }
    }
}