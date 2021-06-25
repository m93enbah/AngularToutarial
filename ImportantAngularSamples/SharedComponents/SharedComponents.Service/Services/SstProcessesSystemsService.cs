using SharedComponents.Domain.Common;
using SharedComponents.Domain.Enums;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Interfaces.Services;
using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;

namespace SharedComponents.Service.Services
{
    public class SstProcessesSystemsService : ISstProcessesSystemsService
    {
        private IRepositoryUnitOfWork _repositoryUnitOfWork;
        public SstProcessesSystemsService(IRepositoryUnitOfWork repositoryUnitOfWork)
        {
            _repositoryUnitOfWork = repositoryUnitOfWork;
        }
        public IResponseResult<SstProcessSystems> Add(SstProcessSystems entity)
        {
            _repositoryUnitOfWork.ProcessesSystems.Value.Add(entity);
            return new ResponseResult<SstProcessSystems>() { Status = ResultStatus.Success, Data = entity };

        }

        public IResponseResult<IEnumerable<SstProcessSystems>> AddRange(IEnumerable<SstProcessSystems> models)
        {
            _repositoryUnitOfWork.ProcessesSystems.Value.AddRange(models);
            return new ResponseResult<IEnumerable<SstProcessSystems>>() { Status = ResultStatus.Success, Data = models };
        }

        public IResponseResult<SstProcessSystems> Get(long Id, int companyId)
        {
            var result = _repositoryUnitOfWork.ProcessesSystems.Value.Get(Id, companyId);
            return new ResponseResult<SstProcessSystems>() { Status = ResultStatus.Success, Data = result };

        }

        public IResponseResult<SstProcessSystems> Get(long Id)
        {
            var result = _repositoryUnitOfWork.ProcessesSystems.Value.Get(Id);
            return new ResponseResult<SstProcessSystems>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<IEnumerable<SstProcessSystems>> GetAll()
        {

            var result = _repositoryUnitOfWork.ProcessesSystems.Value.GetAll().ToList();
            return new ResponseResult<IEnumerable<SstProcessSystems>>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SstProcessSystems> Remove(SstProcessSystems entity)
        {
            _repositoryUnitOfWork.ProcessesSystems.Value.Remove(entity);
            return new ResponseResult<SstProcessSystems>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<IEnumerable<SstProcessSystems>> RemoveRange(IEnumerable<SstProcessSystems> models)
        {

            _repositoryUnitOfWork.ProcessesSystems.Value.RemoveRange(models);
            return new ResponseResult<IEnumerable<SstProcessSystems>>() { Status = ResultStatus.Success, Data = models };
        }

        public IResponseResult<SstProcessSystems> Update(SstProcessSystems entity)
        {
            _repositoryUnitOfWork.ProcessesSystems.Value.Update(entity);
            return new ResponseResult<SstProcessSystems>() { Status = ResultStatus.Success, Data = entity };
        }
        public IQueryable<SstProcessSystems> Find(Expression<Func<SstProcessSystems, bool>> predicate, params Expression<Func<SstProcessSystems, object>>[] navigationProperties)
        {
            return _repositoryUnitOfWork.ProcessesSystems.Value.Find(predicate, navigationProperties);
        }


        public ICollection<SstProcessSystems> LoadProcessSystemByProcessID(Int64? procID)
        {
            return _repositoryUnitOfWork.ProcessesSystems.Value.LoadProcessSystemsByProcessID(procID);
        }

    }
}