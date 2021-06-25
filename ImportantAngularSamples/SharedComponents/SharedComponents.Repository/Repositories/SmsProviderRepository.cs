
using DOMAIN.Context;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Models;
using SharedComponents.Repository.Common;

namespace SharedComponents.Repository.Repositories
{
    public class SmsProviderRepository : Repository<SstSmsProviders>, ISmsProviderRepository
    {
        private SharedComponentsDBContext _context;
        public SmsProviderRepository(SharedComponentsDBContext context) : base(context)
        {
            _context = context;
        }
    }
}