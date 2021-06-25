
using DOMAIN.Context;
using Microsoft.EntityFrameworkCore;
using SharedComponents.Domain.Enums;
using SharedComponents.Domain.Interfaces;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Models;
using SharedComponents.Domain.Models.SearchCriteria;
using SharedComponents.Repository.Common;
using SharedComponents.Repository.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
namespace SharedComponents.Repository.Repositories
{
    class StepTransactionsRespository : Repository<SpdStepsTransactions>, IStepTransactionsRepsotiry
    {
        private SharedComponentsDBContext _context;

        public StepTransactionsRespository(SharedComponentsDBContext context) : base(context)
        {
            _context = context;
        }

        public IQueryable<SpdStepsTransactions> GetByCriteria(SearchStepTransactions search)
        {
            var query = Context.Set<SpdStepsTransactions>().AsNoTracking();
            if (search.StepId.HasValue)
                query = query.Where(transaction => transaction.StepId == search.StepId.Value);

            if (search.TransactionType.HasValue)
            {
                if (search.TransactionType.Value == 1)
                    query = query.Where(transaction => transaction.TransactionType == (int)TransactionType.Submit);

                if (search.TransactionType.Value == 2)
                    query = query.Where(transaction => transaction.TransactionType == (int)TransactionType.Load);
            }
            return query;
        }
    }
}