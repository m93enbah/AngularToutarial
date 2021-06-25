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

namespace SharedComponents.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotificationAttachmentsController : ControllerBase
    {
        private readonly IServiceUnitOfWork _serviceUnitOfWork;

        public NotificationAttachmentsController(IServiceUnitOfWork serviceUnitOfWork)
        {
            _serviceUnitOfWork = serviceUnitOfWork;
        }

        // GET:  api/NotificationAttachments
        [HttpGet]
        public IResponseResult<IEnumerable<SstNotificationsAttachments>> GetAll()
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.NotificationAttachments.Value.GetAll();
        }

        // GET:  api/NotificationAttachments/5
        [HttpGet("{id}")]
        public IResponseResult<SstNotificationsAttachments> Get(long id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.NotificationAttachments.Value.Get(id);
        }

        // PUT:  api/NotificationAttachments/5
        [HttpPut("{id}")]
        public IResponseResult<SstNotificationsAttachments> Put(SstNotificationsAttachments model)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.NotificationAttachments.Value.Update(model);
        }

        // POST:  api/NotificationAttachments
        [HttpPost]
        public IResponseResult<SstNotificationsAttachments> Post(SstNotificationsAttachments model)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.NotificationAttachments.Value.Add(model);
        }

        // DELETE:  api/NotificationAttachments/5
        [HttpDelete("{id}")]
        public IResponseResult<SstNotificationsAttachments> Delete(long id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.NotificationAttachments.Value.Remove(new SstNotificationsAttachments() { Id = id });
        }
    }
}