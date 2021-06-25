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
    public class NotificationContactsController : ControllerBase
    {
        private readonly IServiceUnitOfWork _serviceUnitOfWork;

        public NotificationContactsController(IServiceUnitOfWork serviceUnitOfWork)
        {
            _serviceUnitOfWork = serviceUnitOfWork;
        }

        // GET:  api/NotificationContacts
        [HttpGet]
        public IResponseResult<IEnumerable<SstNotificationsContacts>> GetAll()
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.NotificationContacts.Value.GetAll();
        }

        // GET:  api/NotificationContacts/5
        [HttpGet("{id}")]
        public IResponseResult<SstNotificationsContacts> Get(long id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.NotificationContacts.Value.Get(id);
        }

        // PUT:  api/NotificationContacts/5
        [HttpPut("{id}")]
        public IResponseResult<SstNotificationsContacts> Put(SstNotificationsContacts model)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.NotificationContacts.Value.Update(model);
        }

        // POST:  api/NotificationContacts
        [HttpPost]
        public IResponseResult<SstNotificationsContacts> Post(SstNotificationsContacts model)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.NotificationContacts.Value.Add(model);
        }

        // DELETE:  api/NotificationContacts/5
        [HttpDelete("{id}")]
        public IResponseResult<SstNotificationsContacts> Delete(long id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.NotificationContacts.Value.Remove(new SstNotificationsContacts() { Id = id });
        }
    }
}