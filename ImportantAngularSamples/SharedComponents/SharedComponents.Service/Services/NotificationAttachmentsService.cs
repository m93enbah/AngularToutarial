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
    public class NotificationAttachmentsService : INotificationAttachmentsService
    {
        private IRepositoryUnitOfWork _repositoryUnitOfWork;
        public NotificationAttachmentsService(IRepositoryUnitOfWork repositoryUnitOfWork)
        {
            _repositoryUnitOfWork = repositoryUnitOfWork;
        }

        public IResponseResult<SstNotificationsAttachments> Add(SstNotificationsAttachments entity)
        {
            _repositoryUnitOfWork.NotificationAttachments.Value.Add(entity);
            return new ResponseResult<SstNotificationsAttachments>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<IEnumerable<SstNotificationsAttachments>> AddRange(IEnumerable<SstNotificationsAttachments> entities)
        {
            _repositoryUnitOfWork.NotificationAttachments.Value.AddRange(entities);
            return new ResponseResult<IEnumerable<SstNotificationsAttachments>>() { Status = ResultStatus.Success, Data = entities };
        }

        public IResponseResult<SstNotificationsAttachments> Get(long id, int companyId)
        {
            var result = _repositoryUnitOfWork.NotificationAttachments.Value.Get(id, companyId);
            return new ResponseResult<SstNotificationsAttachments>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SstNotificationsAttachments> Get(long id)
        {
            var result = _repositoryUnitOfWork.NotificationAttachments.Value.Get(id);
            return new ResponseResult<SstNotificationsAttachments>() { Status = ResultStatus.Success, Data = result };
        }


        public IResponseResult<IEnumerable<SstNotificationsAttachments>> GetAll()
        {
            var result = _repositoryUnitOfWork.NotificationAttachments.Value.GetAll().ToList();
            return new ResponseResult<IEnumerable<SstNotificationsAttachments>>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SstNotificationsAttachments> Remove(SstNotificationsAttachments entity)
        {
            var result = _repositoryUnitOfWork.NotificationAttachments.Value.Remove(entity);
            return new ResponseResult<SstNotificationsAttachments>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<IEnumerable<SstNotificationsAttachments>> RemoveRange(IEnumerable<SstNotificationsAttachments> entities)
        {
            _repositoryUnitOfWork.NotificationAttachments.Value.RemoveRange(entities);
            return new ResponseResult<IEnumerable<SstNotificationsAttachments>>() { Status = ResultStatus.Success, Data = entities };
        }

        public IResponseResult<SstNotificationsAttachments> Update(SstNotificationsAttachments entity)
        {
            _repositoryUnitOfWork.NotificationAttachments.Value.Update(entity);
            return new ResponseResult<SstNotificationsAttachments>() { Status = ResultStatus.Success, Data = entity };
        }
    }
}
