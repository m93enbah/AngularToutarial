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
using SharedComponents.Repository.UnitOfWork;
using DOMAIN.Context;
using System.Linq;
using SharedComponents.Domain.Models.SearchCriteria;

namespace SharedComponents.Service.Services
{
    public class ContainerService : IContainerService
    {
        private IRepositoryUnitOfWork _repositoryUnitOfWork;
        public ContainerService(IRepositoryUnitOfWork repositoryUnitOfWork)
        {
            _repositoryUnitOfWork = repositoryUnitOfWork;
        }
        public IResponseResult<IEnumerable<SstContainers>> GetAll()
        {
            var result = _repositoryUnitOfWork.Container.Value.GetAll().ToList();
            return new ResponseResult<IEnumerable<SstContainers>>() { Status = ResultStatus.Success, Data = result };
        }
        public IResponseResult<SstContainers> Add(SstContainers entity)
        {
            _repositoryUnitOfWork.Container.Value.Add(entity);
            return new ResponseResult<SstContainers>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<IEnumerable<SstContainers>> AddRange(IEnumerable<SstContainers> entities)
        {
            var containers = _repositoryUnitOfWork.Container.Value.Find(item => item.ComponentId == entities.First().ComponentId).ToList();
            _repositoryUnitOfWork.Container.Value.AddRange(entities, (x) => _repositoryUnitOfWork.Container.Value.RemoveRange(containers));
            return new ResponseResult<IEnumerable<SstContainers>>() { Status = ResultStatus.Success, Data = entities };
        }

        public IResponseResult<SstContainers> Get(long id, int companyId)
        {
            var result = _repositoryUnitOfWork.Container.Value.Get(id, companyId);
            return new ResponseResult<SstContainers>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SstContainers> Get(long id)
        {
            var result = _repositoryUnitOfWork.Container.Value.Get(id);
            return new ResponseResult<SstContainers>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SstContainers> Remove(SstContainers entity)
        {
            _repositoryUnitOfWork.Container.Value.Remove(entity);
            return new ResponseResult<SstContainers>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<SstContainers> Update(SstContainers entity)
        {
            _repositoryUnitOfWork.Container.Value.Add(entity);
            return new ResponseResult<SstContainers>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<IEnumerable<SstContainers>> GetByCriteria(SearchContainers search)
        {
            var result = _repositoryUnitOfWork.Container.Value.GetByCriteria(search).ToList();
            return new ResponseResult<IEnumerable<SstContainers>>() { Status = ResultStatus.Success, Data = result };
        }
        public IResponseResult<IEnumerable<SstContainers>> RemoveRange(IEnumerable<SstContainers> entities)
        {
            throw new NotImplementedException();
        }

    }
}
