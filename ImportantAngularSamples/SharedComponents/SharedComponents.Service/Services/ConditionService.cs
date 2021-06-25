using SharedComponents.Domain.Common;
using SharedComponents.Domain.Enums;
using SharedComponents.Domain.Interfaces.Services;
using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Models;
using System.Collections.Generic;
using System.Linq;
using SharedComponents.Domain.Models.SearchCriteria;
using System;

namespace SharedComponents.Service.Services
{
    public class ConditionService : IConditionService
    {
        private IRepositoryUnitOfWork _repositoryUnitOfWork;
        public ConditionService(IRepositoryUnitOfWork repositoryUnitOfWork)
        {
            _repositoryUnitOfWork = repositoryUnitOfWork;
        }
        public IResponseResult<SstConditions> Add(SstConditions entity)
        {
            _repositoryUnitOfWork.Condition.Value.Add(entity);
            return new ResponseResult<SstConditions>() { Status = ResultStatus.Success, Data = entity };
        }


        public IResponseResult<SstConditions> Get(long id, int companyId)
        {
            var result = _repositoryUnitOfWork.Condition.Value.Get(id, companyId);
            return new ResponseResult<SstConditions>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SstConditions> Get(long id)
        {
            var result = _repositoryUnitOfWork.Condition.Value.Get(id);
            return new ResponseResult<SstConditions>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<IEnumerable<SstConditions>> GetAll()
        {
            var result = _repositoryUnitOfWork.Condition.Value.GetAll().ToList();
            return new ResponseResult<IEnumerable<SstConditions>>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SstConditions> Remove(SstConditions entity)
        {
            var result = _repositoryUnitOfWork.Condition.Value.Remove(entity);
            return new ResponseResult<SstConditions>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<SstConditions> Update(SstConditions entity)
        {
            _repositoryUnitOfWork.Condition.Value.Update(entity);
            return new ResponseResult<SstConditions>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<IEnumerable<SstConditions>> AddRange(IEnumerable<SstConditions> entities)
        {
            _repositoryUnitOfWork.Condition.Value.AddRange(entities);
            return new ResponseResult<IEnumerable<SstConditions>>() { Status = ResultStatus.Success, Data = entities };
        }

        public IResponseResult<IEnumerable<SstConditions>> RemoveRange(IEnumerable<SstConditions> models)
        {
            var result = _repositoryUnitOfWork.Condition.Value.RemoveRange(models);
            return new ResponseResult<IEnumerable<SstConditions>>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<IEnumerable<SstConditions>> UpdateBulk(List<SstConditions> entities)
        {
            var result = _repositoryUnitOfWork.Condition.Value.Find(x => x.RuleId == entities.First().RuleId && x.ConditionType == entities.First().ConditionType);
            _repositoryUnitOfWork.Condition.Value.RemoveRange(result); // Delete Old  
            _repositoryUnitOfWork.Condition.Value.AddRange(entities); // insert new 
            return new ResponseResult<IEnumerable<SstConditions>>() { Status = ResultStatus.Success, Data = entities };
        }

        public IResponseResult<IEnumerable<SstConditions>> GetByCriteria(SearchConditions search)
        {
            var result = _repositoryUnitOfWork.Condition.Value.GetByCriteria(search).ToList();
            return new ResponseResult<IEnumerable<SstConditions>>() { Status = ResultStatus.Success, Data = result };
        }
    }
}