using SharedComponents.Domain.Common;
using SharedComponents.Domain.Enums;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Interfaces.Services;
using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SharedComponents.Service.Services
{
    public class NotificationsLogsService : INotificationsLogsService
    {
        private IRepositoryUnitOfWork _repositoryUnitOfWork;
        public NotificationsLogsService(IRepositoryUnitOfWork repositoryUnitOfWork)
        {
            _repositoryUnitOfWork = repositoryUnitOfWork;
        }
        public IResponseResult<SstNotificationsLogs> Add(SstNotificationsLogs entity)
        {
            _repositoryUnitOfWork.NotificationsLogs.Value.Add(entity);
            return new ResponseResult<SstNotificationsLogs>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<IEnumerable<SstNotificationsLogs>> AddRange(IEnumerable<SstNotificationsLogs> entities)
        {
            _repositoryUnitOfWork.NotificationsLogs.Value.AddRange(entities);
            return new ResponseResult<IEnumerable<SstNotificationsLogs>>() { Status = ResultStatus.Success, Data = entities };
        }

        public IResponseResult<SstNotificationsLogs> Get(long id, int companyId)
        {
            var result = _repositoryUnitOfWork.NotificationsLogs.Value.Get(id, companyId);
            return new ResponseResult<SstNotificationsLogs>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SstNotificationsLogs> Get(long id)
        {
            var result = _repositoryUnitOfWork.NotificationsLogs.Value.Get(id);
            return new ResponseResult<SstNotificationsLogs>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<IEnumerable<SstNotificationsLogs>> GetAll()
        {
            var result = _repositoryUnitOfWork.NotificationsLogs.Value.GetAll().ToList();
            return new ResponseResult<IEnumerable<SstNotificationsLogs>>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SstNotificationsLogs> Remove(SstNotificationsLogs entity)
        {
            var result = _repositoryUnitOfWork.NotificationsLogs.Value.Remove(entity);
            return new ResponseResult<SstNotificationsLogs>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<IEnumerable<SstNotificationsLogs>> RemoveRange(IEnumerable<SstNotificationsLogs> entities)
        {
            _repositoryUnitOfWork.NotificationsLogs.Value.RemoveRange(entities);
            return new ResponseResult<IEnumerable<SstNotificationsLogs>>() { Status = ResultStatus.Success, Data = entities };
        }

        public IResponseResult<SstNotificationsLogs> Update(SstNotificationsLogs entity)
        {
            _repositoryUnitOfWork.NotificationsLogs.Value.Update(entity);
            return new ResponseResult<SstNotificationsLogs>() { Status = ResultStatus.Success, Data = entity };
        }
    }
}
