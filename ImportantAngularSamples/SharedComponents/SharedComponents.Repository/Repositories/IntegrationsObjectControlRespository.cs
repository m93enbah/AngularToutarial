
using DOMAIN.Context;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Models;
using SharedComponents.Repository.Common;

namespace SharedComponents.Repository.Repositories
{
    public class IntegrationsObjectControlRespository : Repository<SstIntegrationsObjectControls>, IIntegrationsObjectControlRespository
    {
        private readonly SharedComponentsDBContext _context;
        public IntegrationsObjectControlRespository(SharedComponentsDBContext context) : base(context)
        {
            _context = context;
        }
    }
}