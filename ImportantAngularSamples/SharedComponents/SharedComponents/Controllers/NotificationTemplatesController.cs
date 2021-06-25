using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DOMAIN.Context;
using SharedComponents.Domain.Models;
using SharedComponents.Domain.Interfaces.Services;
using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Enums;
using SharedComponents.Domain.Common;

namespace SharedComponents.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotificationTemplatesController : ControllerBase
    {
        private readonly IServiceUnitOfWork _serviceUnitOfWork;

        public NotificationTemplatesController(IServiceUnitOfWork serviceUnitOfWork)
        {
            _serviceUnitOfWork = serviceUnitOfWork;
        }

        // GET:   api/NotificationTemplates
        [HttpGet]
        public IResponseResult<IEnumerable<SstNotificationsTemplates>> GetAll()
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.NotificationTemplates.Value.GetAll();
        }

        // GET:   api/NotificationTemplates/5
        [HttpGet("{id}")]
        public IResponseResult<SstNotificationsTemplates> Get(long id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.NotificationTemplates.Value.Get(id);
        }

        // PUT:   api/NotificationTemplates/5
        [HttpPut("{id}")]
        public IResponseResult<SstNotificationsTemplates> Put(SstNotificationsTemplates model)
        {
            using (_serviceUnitOfWork)
                if (model.SstNotificationsContacts.Count > 0)
                {
                    var contactsList = model.SstNotificationsContacts;
                    model.SstNotificationsContacts = null;
                    _serviceUnitOfWork.NotificationTemplates.Value.Update(model);

                    var lst = _serviceUnitOfWork.NotificationContacts.Value.Find(model.Id).Data;
                    _serviceUnitOfWork.NotificationContacts.Value.RemoveRange(lst);

                    model.SstNotificationsContacts = contactsList;
                    foreach (var contact in model.SstNotificationsContacts)
                    {
                        contact.TemplateId = model.Id;
                    }
                    _serviceUnitOfWork.NotificationContacts.Value.AddRange(model.SstNotificationsContacts);
                }
                else
                    _serviceUnitOfWork.NotificationTemplates.Value.Update(model);

            return new ResponseResult<SstNotificationsTemplates>() { Status = ResultStatus.Success, Data = model };
        }

        // POST:   api/NotificationTemplates
        [HttpPost]
        public IResponseResult<SstNotificationsTemplates> Post(SstNotificationsTemplates model)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.NotificationTemplates.Value.Add(model);
        }

        // DELETE:   api/NotificationTemplates/5
        [HttpDelete("{id}")]
        public IResponseResult<SstNotificationsTemplates> Delete(long id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.NotificationTemplates.Value.Remove(new SstNotificationsTemplates() { Id = id });
        }

        [HttpGet("{notificationId}/{templateType}")]
        public IResponseResult<IEnumerable<SstNotificationsTemplates>> Find(long notificationId, long templateType)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.NotificationTemplates.Value.Find(notificationId, templateType);
        }
    }
}