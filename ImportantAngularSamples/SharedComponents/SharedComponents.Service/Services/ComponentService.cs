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
    public class ComponentService : IComponentService
    {
        private IRepositoryUnitOfWork _repositoryUnitOfWork;
        public ComponentService(IRepositoryUnitOfWork repositoryUnitOfWork)
        {
            _repositoryUnitOfWork = repositoryUnitOfWork;
        }
        public IResponseResult<SstComponents> Add(SstComponents entity)
        {
            _repositoryUnitOfWork.Component.Value.Add(entity);
            return new ResponseResult<SstComponents>() { Status = ResultStatus.Success, Data = entity };
        }
        public IResponseResult<IEnumerable<SstComponents>> AddRange(IEnumerable<SstComponents> entities)
        {
            _repositoryUnitOfWork.Component.Value.AddRange(entities);
            return new ResponseResult<IEnumerable<SstComponents>>() { Status = ResultStatus.Success, Data = entities };
        }

        public IResponseResult<SstComponents> Get(long id, int companyId)
        {
            var result = _repositoryUnitOfWork.Component.Value.Get(id, companyId);
            return new ResponseResult<SstComponents>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SstComponents> Get(long id)
        {
            var result = _repositoryUnitOfWork.Component.Value.Get(id);
            return new ResponseResult<SstComponents>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<IEnumerable<SstComponents>> GetAll()
        {
            var result = _repositoryUnitOfWork.Component.Value.GetAll().ToList();
            return new ResponseResult<IEnumerable<SstComponents>>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<IEnumerable<SstComponents>> GetByCriteria(SearchComponents search)
        {
            var result = _repositoryUnitOfWork.Component.Value.GetByCriteria(search).ToList();
            return new ResponseResult<IEnumerable<SstComponents>>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SstComponents> Remove(SstComponents entity)
        {
            var result = _repositoryUnitOfWork.Component.Value.Remove(entity);
            return new ResponseResult<SstComponents>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<SstComponents> Update(SstComponents entity)
        {
            _repositoryUnitOfWork.Component.Value.Update(entity);
            return new ResponseResult<SstComponents>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<IEnumerable<SstComponents>> RemoveRange(IEnumerable<SstComponents> models)
        {
            _repositoryUnitOfWork.Component.Value.RemoveRange(models);
            return new ResponseResult<IEnumerable<SstComponents>>() { Status = ResultStatus.Success, Data = models };
        }
    }
}