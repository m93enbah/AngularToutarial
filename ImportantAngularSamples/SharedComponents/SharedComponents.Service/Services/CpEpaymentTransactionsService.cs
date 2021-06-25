using SharedComponents.Domain.Common;
using SharedComponents.Domain.Enums;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Interfaces.Services;
using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Models;
using System.Collections.Generic;
using System.Linq;

namespace SharedComponents.Service.Services
{
    public class CpEpaymentTransactionsService : ICpEpaymentTransactionsService
    {
        private IRepositoryUnitOfWork _repositoryUnitOfWork;
        public CpEpaymentTransactionsService(IRepositoryUnitOfWork repositoryUnitOfWork)
        {
            _repositoryUnitOfWork = repositoryUnitOfWork;
        }
        public IResponseResult<CpEpaymentTransactions> Add(CpEpaymentTransactions entity)
        {
            CpEpaymentTransactions result = _repositoryUnitOfWork.CpEpaymentTransactions.Value.Add(entity);
            return new ResponseResult<CpEpaymentTransactions>()
            {
                Status = ResultStatus.Success,
                Data = result,
            };
        }
        public IResponseResult<IEnumerable<CpEpaymentTransactions>> AddRange(IEnumerable<CpEpaymentTransactions> models)
        {
            IEnumerable<CpEpaymentTransactions> result = _repositoryUnitOfWork.CpEpaymentTransactions.Value.AddRange(models);
            return new ResponseResult<IEnumerable<CpEpaymentTransactions>>()
            {
                Status = ResultStatus.Success,
                Data = result,
            };
        }
        public IResponseResult<CpEpaymentTransactions> Get(long id, int companyId)
        {
            CpEpaymentTransactions result = _repositoryUnitOfWork.CpEpaymentTransactions.Value.Get(id, companyId);
            return new ResponseResult<CpEpaymentTransactions>()
            {
                Status = ResultStatus.Success,
                Data = result,
            };
        }
        public IResponseResult<CpEpaymentTransactions> Get(long id)
        {
            CpEpaymentTransactions result = _repositoryUnitOfWork.CpEpaymentTransactions.Value.Get(id);
            return new ResponseResult<CpEpaymentTransactions>()
            {
                Status = ResultStatus.Success,
                Data = result,
            };
        }
        public IResponseResult<IEnumerable<CpEpaymentTransactions>> GetAll()
        {
            List<CpEpaymentTransactions> result = _repositoryUnitOfWork.CpEpaymentTransactions.Value.GetAll().ToList();
            return new ResponseResult<IEnumerable<CpEpaymentTransactions>>()
            {
                Status = ResultStatus.Success,
                Data = result
            };
        }
        public IResponseResult<CpEpaymentTransactions> Remove(CpEpaymentTransactions entity)
        {
            CpEpaymentTransactions result = _repositoryUnitOfWork.CpEpaymentTransactions.Value.Remove(entity);
            return new ResponseResult<CpEpaymentTransactions>()
            {
                Status = ResultStatus.Success,
                Data = result,
            };
        }
        public IResponseResult<CpEpaymentTransactions> Update(CpEpaymentTransactions entity)
        {
            CpEpaymentTransactions result = _repositoryUnitOfWork.CpEpaymentTransactions.Value.Update(entity);
            return new ResponseResult<CpEpaymentTransactions>()
            {
                Status = ResultStatus.Success,
                Data = result,
            };
        }
        public IResponseResult<IEnumerable<CpEpaymentTransactions>> RemoveRange(IEnumerable<CpEpaymentTransactions> entities)
        {
            IEnumerable<CpEpaymentTransactions> result = _repositoryUnitOfWork.CpEpaymentTransactions.Value.RemoveRange(entities);
            return new ResponseResult<IEnumerable<CpEpaymentTransactions>>()
            {
                Status = ResultStatus.Success,
                Data = result,
            };
        }
    }
}
