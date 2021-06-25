using System.Collections.Generic;
using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Models;

namespace SharedComponents.Domain.Interfaces.Services
{
    public interface IControlValuesService : IService<SpdControlValues>
    {
        IResponseResult<IEnumerable<SpdControlValues>> GetByCriteria(SearchControlValues search);
    }
}