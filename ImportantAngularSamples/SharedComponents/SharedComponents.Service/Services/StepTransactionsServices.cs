using SharedComponents.Domain.Common;
using SharedComponents.Domain.Enums;
using SharedComponents.Domain.Extension;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Interfaces.Services;
using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Models;
using SharedComponents.Domain.Models.SearchCriteria;
using System;
using System.Collections.Generic;
using System.Linq;

namespace SharedComponents.Service.Services
{

    public class StepTransactionsServices : IStepTransactionsServices
    {
        private IRepositoryUnitOfWork _repositoryUnitOfWork;
        public StepTransactionsServices(IRepositoryUnitOfWork repositoryUnitOfWork)
        {
            _repositoryUnitOfWork = repositoryUnitOfWork;
        }
        public IResponseResult<SpdStepsTransactions> Add(SpdStepsTransactions entity)
        {
            _repositoryUnitOfWork.StepTransactions.Value.Add(entity);
            return new ResponseResult<SpdStepsTransactions>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<IEnumerable<SpdStepsTransactions>> AddRange(IEnumerable<SpdStepsTransactions> entities)
        {


            List<SpdStepsTransactions> transactions = _repositoryUnitOfWork.StepTransactions.Value.Find(item => item.StepId == entities.FirstOrDefault().StepId).GetList()
                ;
            _repositoryUnitOfWork.StepTransactions.Value.AddRange(entities, (x) => _repositoryUnitOfWork.StepTransactions.Value.RemoveRange(transactions));

            return new ResponseResult<IEnumerable<SpdStepsTransactions>>() { Status = ResultStatus.Success, Data = entities };
        }

        public IResponseResult<SpdStepsTransactions> Get(long id, int companyId)
        {
            SpdStepsTransactions result = _repositoryUnitOfWork.StepTransactions.Value.Get(id, companyId);
            return new ResponseResult<SpdStepsTransactions>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SpdStepsTransactions> Get(long id)
        {
            SpdStepsTransactions result = _repositoryUnitOfWork.StepTransactions.Value.Get(id);
            return new ResponseResult<SpdStepsTransactions>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<IEnumerable<SpdStepsTransactions>> GetAll()
        {
            List<SpdStepsTransactions> result = _repositoryUnitOfWork.StepTransactions.Value.GetAll().GetList();
            return new ResponseResult<IEnumerable<SpdStepsTransactions>>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<IEnumerable<SpdStepsTransactions>> GetByCriteria(SearchStepTransactions search)
        {
            List<SpdStepsTransactions> result = new List<SpdStepsTransactions>();
            return new ResponseResult<IEnumerable<SpdStepsTransactions>>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SpdStepsTransactions> Remove(SpdStepsTransactions entity)
        {
            _repositoryUnitOfWork.StepTransactions.Value.Remove(entity);
            return new ResponseResult<SpdStepsTransactions>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<IEnumerable<SpdStepsTransactions>> RemoveRange(IEnumerable<SpdStepsTransactions> entities)
        {
            throw new NotImplementedException();
        }

        public IResponseResult<SpdStepsTransactions> Update(SpdStepsTransactions entity)
        {
            _repositoryUnitOfWork.StepTransactions.Value.Update(entity);
            return new ResponseResult<SpdStepsTransactions>() { Status = ResultStatus.Success, Data = entity };
        }
    }
}