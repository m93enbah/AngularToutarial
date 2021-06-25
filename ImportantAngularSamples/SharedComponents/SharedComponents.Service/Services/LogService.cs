
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
    public class LogService : ILogService
    {
        private IRepositoryUnitOfWork _repositoryUnitOfWork;
        public LogService(IRepositoryUnitOfWork repositoryUnitOfWork)
        {
            _repositoryUnitOfWork = repositoryUnitOfWork;
        }
        public IResponseResult<SstLogs> Add(SstLogs entity)
        {
            _repositoryUnitOfWork.Log.Value.Add(entity);
            return new ResponseResult<SstLogs>() { Status = ResultStatus.Success, Data = entity };
        }
        public IResponseResult<IEnumerable<SstLogs>> AddRange(IEnumerable<SstLogs> entities)
        {
            _repositoryUnitOfWork.Log.Value.AddRange(entities);
            return new ResponseResult<IEnumerable<SstLogs>>() { Status = ResultStatus.Success, Data = entities };
        }

        public IResponseResult<SstLogs> Get(long id, int companyId)
        {
            var result = _repositoryUnitOfWork.Log.Value.Get(id, companyId);
            return new ResponseResult<SstLogs>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SstLogs> Get(long id)
        {
            var result = _repositoryUnitOfWork.Log.Value.Get(id);
            return new ResponseResult<SstLogs>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<IEnumerable<SstLogs>> GetAll()
        {
            var result = _repositoryUnitOfWork.Log.Value.GetAll().ToList();
            return new ResponseResult<IEnumerable<SstLogs>>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SstLogs> Remove(SstLogs entity)
        {
            var result = _repositoryUnitOfWork.Log.Value.Remove(entity);
            return new ResponseResult<SstLogs>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<SstLogs> Update(SstLogs entity)
        {
            _repositoryUnitOfWork.Log.Value.Update(entity);
            return new ResponseResult<SstLogs>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<IEnumerable<SstLogs>> RemoveRange(IEnumerable<SstLogs> models)
        {
            _repositoryUnitOfWork.Log.Value.RemoveRange(models);
            return new ResponseResult<IEnumerable<SstLogs>>() { Status = ResultStatus.Success, Data = models };
        }

        public IResponseResult<IEnumerable<SstLogs>> GetByCriteria(SearchLog search)
        {
            var result = _repositoryUnitOfWork.Log.Value.GetByCriteria(search).ToList();
            return new ResponseResult<IEnumerable<SstLogs>>() { Status = ResultStatus.Success, Data = result };
        }
    }
}