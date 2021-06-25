
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
    public class QuestControlsRepository : Repository<SstQuestControls>, IQuestControlsRepository
    {
        private SharedComponentsDBContext _context;
        public QuestControlsRepository(SharedComponentsDBContext context) : base(context)
        {
            _context = context;
        }

        public IQueryable<SstQuestControls> GetByCriteria(SearchQuestControls search)
        {
            var query = Context.Set<SstQuestControls>().AsNoTracking();

            if (search.QuestionnaireId.HasValue)
                query = query.Where(ques => ques.Questionnaire.Id == search.QuestionnaireId);

            return query;
        }
    }
}