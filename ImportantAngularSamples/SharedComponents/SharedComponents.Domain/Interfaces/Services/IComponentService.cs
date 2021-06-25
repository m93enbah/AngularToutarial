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
    public interface IComponentService : IService<SstComponents>
    {
        IResponseResult<IEnumerable<SstComponents>> GetByCriteria(SearchComponents search);
    }
}