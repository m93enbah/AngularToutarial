
using SharedComponents.Domain.Common;
using SharedComponents.Domain.Enums;
using SharedComponents.Domain.Interfaces.Services;
using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using DOMAIN.Context;
using SharedComponents.Repository.UnitOfWork;
using System.Linq;
using SharedComponents.Domain.Models.SearchCriteria;

namespace SharedComponents.Service.Services
{
    public class RuleService : IRuleService
    {
        private IRepositoryUnitOfWork _repositoryUnitOfWork;
        public RuleService(IRepositoryUnitOfWork repositoryUnitOfWork)
        {
            _repositoryUnitOfWork = repositoryUnitOfWork;
        }
        public IResponseResult<IEnumerable<SstRules>> GetAll()
        {
            var result = _repositoryUnitOfWork.Rule.Value.GetAll().ToList();
            return new ResponseResult<IEnumerable<SstRules>>() { Status = ResultStatus.Success, Data = result };
        }
        public IResponseResult<SstRules> Add(SstRules entity)
        {
            _repositoryUnitOfWork.Rule.Value.Add(entity);
            return new ResponseResult<SstRules>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<IEnumerable<SstRules>> AddRange(IEnumerable<SstRules> entities)
        {
            _repositoryUnitOfWork.Rule.Value.RemoveRange(entities);
            return new ResponseResult<IEnumerable<SstRules>>() { Status = ResultStatus.Success, Data = entities };
        }

        public IResponseResult<SstRules> Get(long id, int companyId)
        {
            var result = _repositoryUnitOfWork.Rule.Value.Get(id, companyId);
            return new ResponseResult<SstRules>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SstRules> Get(long id)
        {
            var result = _repositoryUnitOfWork.Rule.Value.Get(id);
            return new ResponseResult<SstRules>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SstRules> Remove(SstRules entity)
        {
            _repositoryUnitOfWork.Rule.Value.Remove(entity);
            return new ResponseResult<SstRules>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<SstRules> Update(SstRules entity)
        {
            _repositoryUnitOfWork.Rule.Value.Update(entity);
            return new ResponseResult<SstRules>() { Status = ResultStatus.Success, Data = entity };
        }
        public IResponseResult<IEnumerable<SstRules>> RemoveRange(IEnumerable<SstRules> models)
        {
            throw new NotImplementedException();
        }

        public IResponseResult<IEnumerable<SstRules>> GetRuleByComponentId(int componentId)
        {
            //var actions = _repositoryUnitOfWork.Action.Value.GetByCriteria(new SearchActions() { ComponentId = componentId }).ToList();
            //var conditions = _repositoryUnitOfWork.Condition.Value.GetByCriteria(new SearchConditions() { ComponentId = componentId }).ToList();
            var result = _repositoryUnitOfWork.Rule.Value.GetRuleByComponentId(new SearchRule() { ComponentId = componentId }).ToList();

            foreach (var x in result)
            {
                var actions = _repositoryUnitOfWork.Action.Value.GetByCriteria(new SearchActions() { ComponentId = componentId, RuleId = x.Id }).ToList();
                var conditions = _repositoryUnitOfWork.Condition.Value.GetByCriteria(new SearchConditions() { ComponentId = componentId, RuleId = x.Id }).ToList();
                x.SstActions = actions;
                x.SstConditions = conditions;
            }

            return new ResponseResult<IEnumerable<SstRules>>() { Status = ResultStatus.Success, Data = result };

        }

        public IResponseResult<IEnumerable<SstRules>> GetByCriteria(SearchRule search)
        {
            var result = _repositoryUnitOfWork.Rule.Value.GetByCriteria(search).ToList();

            return new ResponseResult<IEnumerable<SstRules>>() { Status = ResultStatus.Success, Data = result };
        }
    }
}
