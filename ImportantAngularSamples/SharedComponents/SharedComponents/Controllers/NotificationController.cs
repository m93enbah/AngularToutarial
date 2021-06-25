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

namespace SharedComponents.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotificationController : ControllerBase
    {
        private readonly IServiceUnitOfWork _serviceUnitOfWork;

        public NotificationController(IServiceUnitOfWork serviceUnitOfWork)
        {
            _serviceUnitOfWork = serviceUnitOfWork;
        }

        // GET:  api/Notification
        [HttpGet]
        public IResponseResult<IEnumerable<SstNotifications>> GetAll()
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Notification.Value.GetAll();
        }

        // GET:  api/Notification/5
        [HttpGet("{id}")]
        public IResponseResult<SstNotifications> Get(long id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Notification.Value.Get(id);
        }

        // PUT:  api/Notification/5
        [HttpPut("{id}")]
        public IResponseResult<SstNotifications> Put(SstNotifications model)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Notification.Value.Update(model);
        }

        // POST:  api/Notification
        [HttpPost]
        public IResponseResult<SstNotifications> Post(SstNotifications model)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Notification.Value.Add(model);
        }

        // DELETE:  api/Notification/5
        [HttpDelete("{id}")]
        public IResponseResult<SstNotifications> Delete(long id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Notification.Value.Remove(new SstNotifications() { Id = id });
        }

        [HttpGet]
        [Route("SendNotification")]
        public void SendNotification(long notificationId, byte templateType)
        {
            using (_serviceUnitOfWork)
                _serviceUnitOfWork.Notification.Value.SendNotification(notificationId, templateType);
        }

        [HttpGet]
        [Route("SendSMS")]
        public void SendSMS(long notificationId, string mobile, Languages language, string from, string subject, string subject2, string body, string body2)
        {
            using (_serviceUnitOfWork)
                _serviceUnitOfWork.Notification.Value.SendSMS(notificationId, mobile, language, from, subject, subject2, body, body2);
        }

        [HttpPost]
        [Route("SendEmail")]
        public void SendEmail([FromBody] List<SstNotificationsAttachments> attachments, long notificationId, string toEmailAddresses, string ccEmailAddresses, string bccEmailAddresses, Languages language, string from, string subject, string subject2,
           string body, string body2, string username, int systemId, int companyId)
        {
            using (_serviceUnitOfWork)
                _serviceUnitOfWork.Notification.Value.SendEmail(notificationId, toEmailAddresses, ccEmailAddresses, bccEmailAddresses, language, from, subject, subject2, body, body2,
                    attachments, username, systemId, companyId);
        }
    }
}