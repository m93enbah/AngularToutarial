
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
    public class NotificationTemplatesService : INotificationTemplatesService
    {
        private IRepositoryUnitOfWork _repositoryUnitOfWork;
        public NotificationTemplatesService(IRepositoryUnitOfWork repositoryUnitOfWork)
        {
            _repositoryUnitOfWork = repositoryUnitOfWork;
        }

        public IResponseResult<SstNotificationsTemplates> Add(SstNotificationsTemplates entity)
        {
            _repositoryUnitOfWork.NotificationTemplates.Value.Add(entity);
            return new ResponseResult<SstNotificationsTemplates>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<IEnumerable<SstNotificationsTemplates>> AddRange(IEnumerable<SstNotificationsTemplates> entities)
        {
            _repositoryUnitOfWork.NotificationTemplates.Value.AddRange(entities);
            return new ResponseResult<IEnumerable<SstNotificationsTemplates>>() { Status = ResultStatus.Success, Data = entities };
        }

        public IResponseResult<SstNotificationsTemplates> Get(long id, int companyId)
        {
            var result = _repositoryUnitOfWork.NotificationTemplates.Value.Get(id, companyId);
            return new ResponseResult<SstNotificationsTemplates>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SstNotificationsTemplates> Get(long id)
        {
            var result = _repositoryUnitOfWork.NotificationTemplates.Value.Get(id);
            return new ResponseResult<SstNotificationsTemplates>() { Status = ResultStatus.Success, Data = result };
        }


        public IResponseResult<IEnumerable<SstNotificationsTemplates>> GetAll()
        {
            var result = _repositoryUnitOfWork.NotificationTemplates.Value.GetAll().ToList();
            return new ResponseResult<IEnumerable<SstNotificationsTemplates>>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SstNotificationsTemplates> Remove(SstNotificationsTemplates entity)
        {
            var result = _repositoryUnitOfWork.NotificationTemplates.Value.Remove(entity);
            return new ResponseResult<SstNotificationsTemplates>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<IEnumerable<SstNotificationsTemplates>> RemoveRange(IEnumerable<SstNotificationsTemplates> entities)
        {
            _repositoryUnitOfWork.NotificationTemplates.Value.RemoveRange(entities);
            return new ResponseResult<IEnumerable<SstNotificationsTemplates>>() { Status = ResultStatus.Success, Data = entities };
        }

        public IResponseResult<SstNotificationsTemplates> Update(SstNotificationsTemplates entity)
        {
            _repositoryUnitOfWork.NotificationTemplates.Value.Update(entity);
            return new ResponseResult<SstNotificationsTemplates>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<IEnumerable<SstNotificationsTemplates>> Find(long notificationId, long templateType)
        {
            Expression<Func<SstNotificationsTemplates, object>> expression = i => i.SstNotificationsContacts;
            var result = _repositoryUnitOfWork.NotificationTemplates.Value.Find(template => template.NotificationId == notificationId && template.Type == templateType, expression).ToList();
            return new ResponseResult<IEnumerable<SstNotificationsTemplates>>() { Status = ResultStatus.Success, Data = result };
        }
    }
}