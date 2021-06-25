
using DOMAIN.Context;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Models;
using SharedComponents.Repository.Common;
using System.Linq;

namespace SharedComponents.Repository.Repositories
{
    public class UserPropertiesRepository : Repository<CpUserProperties>, IUserPropertiesRepository
    {
        private SharedComponentsDBContext _context;
        public UserPropertiesRepository(SharedComponentsDBContext context) : base(context)
        {
            _context = context;
        }
    }
}