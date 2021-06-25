using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Models;
using System.Collections.Generic;

namespace SharedComponents.Domain.Interfaces.Services
{
    public interface IIntegrationsApiMappingService : IService<SstIntegrationsApiMapping>
    {
        IResponseResult<IEnumerable<SstIntegrationsApiMapping>> UpdateBulk(List<SstIntegrationsApiMapping> entities);
    }
}