using SharedComponents.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SharedComponents.Domain.Interfaces.Repositories
{
    public interface IControlValuesRepository : IRepository<SpdControlValues>
    {
        IQueryable<SpdControlValues> GetByCriteria(SearchControlValues search);
    }
} 