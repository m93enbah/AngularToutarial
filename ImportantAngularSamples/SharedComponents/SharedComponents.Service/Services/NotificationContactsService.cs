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
    public class NotificationContactsService : INotificationContactsService
    {
        private IRepositoryUnitOfWork _repositoryUnitOfWork;
        public NotificationContactsService(IRepositoryUnitOfWork repositoryUnitOfWork)
        {
            _repositoryUnitOfWork = repositoryUnitOfWork;
        }

        public IResponseResult<SstNotificationsContacts> Add(SstNotificationsContacts entity)
        {
            _repositoryUnitOfWork.NotificationContacts.Value.Add(entity);
            return new ResponseResult<SstNotificationsContacts>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<IEnumerable<SstNotificationsContacts>> AddRange(IEnumerable<SstNotificationsContacts> entities)
        {
            _repositoryUnitOfWork.NotificationContacts.Value.AddRange(entities);
            return new ResponseResult<IEnumerable<SstNotificationsContacts>>() { Status = ResultStatus.Success, Data = entities };
        }

        public IResponseResult<SstNotificationsContacts> Get(long id, int companyId)
        {
            var result = _repositoryUnitOfWork.NotificationContacts.Value.Get(id, companyId);
            return new ResponseResult<SstNotificationsContacts>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SstNotificationsContacts> Get(long id)
        {
            var result = _repositoryUnitOfWork.NotificationContacts.Value.Get(id);
            return new ResponseResult<SstNotificationsContacts>() { Status = ResultStatus.Success, Data = result };
        }


        public IResponseResult<IEnumerable<SstNotificationsContacts>> GetAll()
        {
            var result = _repositoryUnitOfWork.NotificationContacts.Value.GetAll().ToList();
            return new ResponseResult<IEnumerable<SstNotificationsContacts>>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SstNotificationsContacts> Remove(SstNotificationsContacts entity)
        {
            var result = _repositoryUnitOfWork.NotificationContacts.Value.Remove(entity);
            return new ResponseResult<SstNotificationsContacts>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<IEnumerable<SstNotificationsContacts>> RemoveRange(IEnumerable<SstNotificationsContacts> entities)
        {
            _repositoryUnitOfWork.NotificationContacts.Value.RemoveRange(entities);
            return new ResponseResult<IEnumerable<SstNotificationsContacts>>() { Status = ResultStatus.Success, Data = entities };
        }

        public IResponseResult<SstNotificationsContacts> Update(SstNotificationsContacts entity)
        {
            _repositoryUnitOfWork.NotificationContacts.Value.Update(entity);
            return new ResponseResult<SstNotificationsContacts>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<IEnumerable<SstNotificationsContacts>> Find(long templateId)
        {
            var result = _repositoryUnitOfWork.NotificationContacts.Value.Find(contact => contact.TemplateId == templateId).ToList();
            return new ResponseResult<IEnumerable<SstNotificationsContacts>>() { Status = ResultStatus.Success, Data = result };
        }
    }
}
