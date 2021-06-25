using System.Collections.Generic;
using SharedComponents.Domain.Models;

namespace SharedComponents.Domain.Interfaces.Repositories
{
    public interface IIntegrationsApiMappingRepository : IRepository<SstIntegrationsApiMapping>
    {
      //  object Execute(long integrationSttingId, Dictionary<string, object> controls);
    }
}  