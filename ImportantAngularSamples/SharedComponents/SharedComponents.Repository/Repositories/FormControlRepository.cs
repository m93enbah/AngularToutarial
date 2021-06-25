using DOMAIN.Context;
using SharedComponents.Domain.Interfaces;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Models;
using SharedComponents.Repository.Common;
using SharedComponents.Repository.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Text;

namespace SharedComponents.Repository.Repositories
{
    public class FormControlRepository : Repository<SstFormControls>, IFormControlRepository
    {
        private SharedComponentsDBContext _context;
        public FormControlRepository(SharedComponentsDBContext context) : base(context)
        {
            _context = context;
        }
    }
}