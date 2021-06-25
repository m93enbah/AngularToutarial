
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

namespace SharedComponents.Service.Services
{
    public class UserPropertiesService : IUserPropertiesService
    {
        private IRepositoryUnitOfWork _repositoryUnitOfWork;
        public UserPropertiesService(IRepositoryUnitOfWork repositoryUnitOfWork)
        {
            _repositoryUnitOfWork = repositoryUnitOfWork;
        }
        public IResponseResult<IEnumerable<CpUserProperties>> GetAll()
        {
            using (_repositoryUnitOfWork)
            {
                var result = _repositoryUnitOfWork.UserProperties.Value.GetAll().ToList();
                return new ResponseResult<IEnumerable<CpUserProperties>>() { Status = ResultStatus.Success, Data = result };
            }
        }
        public IResponseResult<CpUserProperties> Add(CpUserProperties entity)
        {
            using (_repositoryUnitOfWork)
            {
                _repositoryUnitOfWork.UserProperties.Value.Add(entity);
                return new ResponseResult<CpUserProperties>() { Status = ResultStatus.Success, Data = entity };
            }
        }

        public IResponseResult<IEnumerable<CpUserProperties>> AddRange(IEnumerable<CpUserProperties> entities)
        {
            using (_repositoryUnitOfWork)
            {
                _repositoryUnitOfWork.UserProperties.Value.RemoveRange(entities);
                return new ResponseResult<IEnumerable<CpUserProperties>>() { Status = ResultStatus.Success, Data = entities };
            }
        }

        public IResponseResult<CpUserProperties> Get(long id, int companyId)
        {
            using (_repositoryUnitOfWork)
            {
                var result = _repositoryUnitOfWork.UserProperties.Value.Get(id, companyId);
                return new ResponseResult<CpUserProperties>() { Status = ResultStatus.Success, Data = result };
            }
        }

        public IResponseResult<CpUserProperties> Get(long id)
        {
            using (_repositoryUnitOfWork)
            {
                var result = _repositoryUnitOfWork.UserProperties.Value.Get(id);
                return new ResponseResult<CpUserProperties>() { Status = ResultStatus.Success, Data = result };
            }
        }

        public IResponseResult<CpUserProperties> Remove(CpUserProperties entity)
        {
            using (_repositoryUnitOfWork)
            {
                _repositoryUnitOfWork.UserProperties.Value.Remove(entity);
                return new ResponseResult<CpUserProperties>() { Status = ResultStatus.Success, Data = entity };
            }
        }

        public IResponseResult<CpUserProperties> Update(CpUserProperties entity)
        {
            using (_repositoryUnitOfWork)
            {
                _repositoryUnitOfWork.UserProperties.Value.Update(entity);
                return new ResponseResult<CpUserProperties>() { Status = ResultStatus.Success, Data = entity };
            }
        }

        public IResponseResult<IEnumerable<CpUserProperties>> RemoveRange(IEnumerable<CpUserProperties> models)
        {
            using (_repositoryUnitOfWork)
            {
                _repositoryUnitOfWork.UserProperties.Value.RemoveRange(models);
                return new ResponseResult<IEnumerable<CpUserProperties>>() { Status = ResultStatus.Success, Data = models };
            }
        }
    }
}
