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
    public class EpaymentDetailsService : IEpaymentDetailsService
    {
        private IRepositoryUnitOfWork _repositoryUnitOfWork;
        public EpaymentDetailsService(IRepositoryUnitOfWork repositoryUnitOfWork)
        {
            _repositoryUnitOfWork = repositoryUnitOfWork;
        }

        public IResponseResult<SstEpaymentDetails> Add(SstEpaymentDetails entity)
        {
            SstEpaymentDetails result = _repositoryUnitOfWork.EpaymentDetails.Value.Add(entity);

            return new ResponseResult<SstEpaymentDetails>()
            {
                Status = ResultStatus.Success,
                Data = result
            };
        }

        public IResponseResult<IEnumerable<SstEpaymentDetails>> AddRange(IEnumerable<SstEpaymentDetails> models)
        {
            IEnumerable<SstEpaymentDetails> result = _repositoryUnitOfWork.EpaymentDetails.Value.AddRange(models);

            return new ResponseResult<IEnumerable<SstEpaymentDetails>>()
            {
                Status = ResultStatus.Success,
                Data = result
            };
        }

        public IResponseResult<SstEpaymentDetails> Get(long Id, int companyId)
        {
            SstEpaymentDetails result = _repositoryUnitOfWork.EpaymentDetails.Value.Get(Id, companyId);
            return new ResponseResult<SstEpaymentDetails>()
            {
                Status = ResultStatus.Success,
                Data = result
            };
        }

        public IResponseResult<SstEpaymentDetails> Get(long Id)
        {
            SstEpaymentDetails result = _repositoryUnitOfWork.EpaymentDetails.Value.Get(Id);
            return new ResponseResult<SstEpaymentDetails>()
            {
                Status = ResultStatus.Success,
                Data = result
            };
        }

        public IResponseResult<IEnumerable<SstEpaymentDetails>> GetAll()
        {
            List<SstEpaymentDetails> result = _repositoryUnitOfWork.EpaymentDetails.Value.GetAll().ToList();
            return new ResponseResult<IEnumerable<SstEpaymentDetails>>()
            {
                Status = ResultStatus.Success,
                Data = result,
            };
        }

        public IResponseResult<SstEpaymentDetails> Remove(SstEpaymentDetails entity)
        {
            SstEpaymentDetails result = _repositoryUnitOfWork.EpaymentDetails.Value.Remove(entity);
            return new ResponseResult<SstEpaymentDetails>()
            {
                Status = ResultStatus.Success,
                Data = result,
                Errors = null
            };
        }

        public IResponseResult<SstEpaymentDetails> Update(SstEpaymentDetails entity)
        {
            SstEpaymentDetails result = _repositoryUnitOfWork.EpaymentDetails.Value.Update(entity);
            return new ResponseResult<SstEpaymentDetails>()
            {
                Status = ResultStatus.Success,
                Data = result,
                Errors = null
            };
        }

        public IResponseResult<IEnumerable<SstEpaymentDetails>> RemoveRange(IEnumerable<SstEpaymentDetails> entities)
        {
            IEnumerable<SstEpaymentDetails> result = _repositoryUnitOfWork.EpaymentDetails.Value.RemoveRange(entities);
            return new ResponseResult<IEnumerable<SstEpaymentDetails>>()
            {
                Status = ResultStatus.Success,
                Data = result,
            };
        }
    }
}
