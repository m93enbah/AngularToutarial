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
    public class QuestionnaireRepository : Repository<SstQuestionnaires>, IQuestionnaireRepository
    {
        private SharedComponentsDBContext _context;
        public QuestionnaireRepository(SharedComponentsDBContext context) : base(context)
        {
            _context = context;
        }

        public IQueryable<SstQuestionnaires> GetByCriteria(SearchQuestionnaire search)
        {
            var query = Context.Set<SstQuestionnaires>().AsNoTracking();

            if (!string.IsNullOrEmpty(search.name))
                query = query.Where(ques => ques.Name == search.name);

            if (!string.IsNullOrEmpty(search.name2))
                query = query.Where(ques => ques.Name2 == search.name2);

            //    if (search.systemId.HasValue)
            //    {
            //    query = query.Where(ques => ques.SystemID == search.CompanyId.Value);
            //}
            return query;
        }

        public IQueryable<SstQuestionnaires> CopyQuestionnaire(SstQuestionnaires questionnaire)
        {
            var query = Context.Set<SstQuestionnaires>().AsNoTracking();

            if (!string.IsNullOrEmpty(questionnaire.Name))
                query = query.Where(ques => ques.Name == questionnaire.Name);

            if (!string.IsNullOrEmpty(questionnaire.Name2))
                query = query.Where(ques => ques.Name2 == questionnaire.Name2);

            //    if (search.systemId.HasValue)
            //    {
            //    query = query.Where(ques => ques.SystemID == search.CompanyId.Value);
            //}
            return query;
        }
    }
}