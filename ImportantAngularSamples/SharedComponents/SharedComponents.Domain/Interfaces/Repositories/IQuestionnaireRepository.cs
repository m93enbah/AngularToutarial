using SharedComponents.Domain.Models;
using SharedComponents.Domain.Models.SearchCriteria;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SharedComponents.Domain.Interfaces.Repositories
{
   public interface IQuestionnaireRepository : IRepository<SstQuestionnaires>
   {
       IQueryable<SstQuestionnaires> GetByCriteria(SearchQuestionnaire search);
       IQueryable<SstQuestionnaires> CopyQuestionnaire(SstQuestionnaires questionnaire);
   }
}