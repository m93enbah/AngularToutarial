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
    public class ActionService : IActionService
    {
        private IRepositoryUnitOfWork _repositoryUnitOfWork;
        public ActionService(IRepositoryUnitOfWork repositoryUnitOfWork)
        {
            _repositoryUnitOfWork = repositoryUnitOfWork;
        }
        public IResponseResult<IEnumerable<SstActions>> GetAll()
        {
            using (_repositoryUnitOfWork)
            {
                var result = _repositoryUnitOfWork.Action.Value.GetAll().ToList();
                return new ResponseResult<IEnumerable<SstActions>>() { Status = ResultStatus.Success, Data = result };
            }
        }
        public IResponseResult<SstActions> Add(SstActions entity)
        {
            _repositoryUnitOfWork.Action.Value.Add(entity);
            return new ResponseResult<SstActions>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<IEnumerable<SstActions>> AddRange(IEnumerable<SstActions> entities)
        {
            var result = _repositoryUnitOfWork.Action.Value.AddRange(entities);
            return new ResponseResult<IEnumerable<SstActions>>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SstActions> Get(long id, int companyId)
        {
            var result = _repositoryUnitOfWork.Action.Value.Get(id, companyId);
            return new ResponseResult<SstActions>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SstActions> Get(long id)
        {
            var result = _repositoryUnitOfWork.Action.Value.Get(id);
            return new ResponseResult<SstActions>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SstActions> Remove(SstActions entity)
        {
            _repositoryUnitOfWork.Action.Value.Remove(entity);
            return new ResponseResult<SstActions>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<SstActions> Update(SstActions entity)
        {
            _repositoryUnitOfWork.Action.Value.Update(entity);
            return new ResponseResult<SstActions>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<IEnumerable<SstActions>> RemoveRange(IEnumerable<SstActions> models)
        {
            var result = _repositoryUnitOfWork.Action.Value.RemoveRange(models);
            return new ResponseResult<IEnumerable<SstActions>>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<IEnumerable<SstActions>> UpdateBulk(List<SstActions> entities)
        {
            _repositoryUnitOfWork.Action.Value.RemoveRange(_repositoryUnitOfWork.Action.Value.Find(x => x.RuleId == entities.First().RuleId)); // Delete Old  
            _repositoryUnitOfWork.Action.Value.AddRange(entities); // insert new 
            return new ResponseResult<IEnumerable<SstActions>>() { Status = ResultStatus.Success, Data = entities };
        }

        public IResponseResult<IEnumerable<SstActions>> GetByCriteria(SearchActions search)
        {
            var result = _repositoryUnitOfWork.Action.Value.GetByCriteria(search).ToList();
            return new ResponseResult<IEnumerable<SstActions>>() { Status = ResultStatus.Success, Data = result };
        }


    }
}