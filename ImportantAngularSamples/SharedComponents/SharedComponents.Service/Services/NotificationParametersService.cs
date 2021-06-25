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
    public class NotificationParametersService : INotificationParametersService
    {
        private IRepositoryUnitOfWork _repositoryUnitOfWork;
        public NotificationParametersService(IRepositoryUnitOfWork repositoryUnitOfWork)
        {
            _repositoryUnitOfWork = repositoryUnitOfWork;
        }

        public IResponseResult<SstNotificationsParameters> Add(SstNotificationsParameters entity)
        {
            _repositoryUnitOfWork.NotificationParameters.Value.Add(entity);
            return new ResponseResult<SstNotificationsParameters>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<IEnumerable<SstNotificationsParameters>> AddRange(IEnumerable<SstNotificationsParameters> entities)
        {
            _repositoryUnitOfWork.NotificationParameters.Value.AddRange(entities);
            return new ResponseResult<IEnumerable<SstNotificationsParameters>>() { Status = ResultStatus.Success, Data = entities };
        }

        public IResponseResult<SstNotificationsParameters> Get(long id, int companyId)
        {
            var result = _repositoryUnitOfWork.NotificationParameters.Value.Get(id, companyId);
            return new ResponseResult<SstNotificationsParameters>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SstNotificationsParameters> Get(long id)
        {
            var result = _repositoryUnitOfWork.NotificationParameters.Value.Get(id);
            return new ResponseResult<SstNotificationsParameters>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<IEnumerable<SstNotificationsParameters>> GetAll()
        {
            var result = _repositoryUnitOfWork.NotificationParameters.Value.GetAll().ToList();
            return new ResponseResult<IEnumerable<SstNotificationsParameters>>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SstNotificationsParameters> Remove(SstNotificationsParameters entity)
        {
            var result = _repositoryUnitOfWork.NotificationParameters.Value.Remove(entity);
            return new ResponseResult<SstNotificationsParameters>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<IEnumerable<SstNotificationsParameters>> RemoveRange(IEnumerable<SstNotificationsParameters> entities)
        {
            _repositoryUnitOfWork.NotificationParameters.Value.RemoveRange(entities);
            return new ResponseResult<IEnumerable<SstNotificationsParameters>>() { Status = ResultStatus.Success, Data = entities };
        }

        public IResponseResult<SstNotificationsParameters> Update(SstNotificationsParameters entity)
        {
            _repositoryUnitOfWork.NotificationParameters.Value.Update(entity);
            return new ResponseResult<SstNotificationsParameters>() { Status = ResultStatus.Success, Data = entity };
        }
    }
}