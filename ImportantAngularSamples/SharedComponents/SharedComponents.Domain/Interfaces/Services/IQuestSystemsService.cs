
using SharedComponents.Domain.Common;
using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Models;
using SharedComponents.Domain.Models.SearchCriteria;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;


namespace SharedComponents.Domain.Interfaces.Services
{
    public interface IQuestSystemsService : IService<SstQuestSystems>
    {
        //IResponseResult<IEnumerable<SstQuestionnaires>> GetByCriteria(SearchQuestionnaire search);
    }
}