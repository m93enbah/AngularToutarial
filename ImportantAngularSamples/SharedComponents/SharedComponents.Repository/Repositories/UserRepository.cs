


using DOMAIN.Context;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Models;
using SharedComponents.Repository.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace SharedComponents.Repository.Repositories
{
    public class UserRepository : Repository<SstUsers>, IUserRepository
    {
        private SharedComponentsDBContext _context;
        public UserRepository(SharedComponentsDBContext context) : base(context)
        {
            _context = context;
        }
    }
}