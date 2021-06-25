using DOMAIN.Context;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Models;
using SharedComponents.Repository.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace SharedComponents.Repository.Repositories
{
    public class EpaymentDetailsRepository : Repository<SstEpaymentDetails>, IEpaymentDetailsRepository
    {
        private SharedComponentsDBContext _context;
        public EpaymentDetailsRepository(SharedComponentsDBContext context) : base(context)
        {
            _context = context;
        }
    }
}