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
    public class NotificationParametersController : ControllerBase
    {
        private readonly IServiceUnitOfWork _serviceUnitOfWork;

        public NotificationParametersController(IServiceUnitOfWork serviceUnitOfWork)
        {
            _serviceUnitOfWork = serviceUnitOfWork;
        }

        // GET:  api/NotificationParameters
        [HttpGet]
        public IResponseResult<IEnumerable<SstNotificationsParameters>> GetAll()
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.NotificationParameters.Value.GetAll();
        }

        // GET:  api/NotificationParameters/5
        [HttpGet("{id}")]
        public IResponseResult<SstNotificationsParameters> Get(long id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.NotificationParameters.Value.Get(id);
        }

        // PUT:  api/NotificationParameters/5
        [HttpPut("{id}")]
        public IResponseResult<SstNotificationsParameters> Put(SstNotificationsParameters model)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.NotificationParameters.Value.Update(model);
        }

        // POST:  api/NotificationParameters
        [HttpPost]
        public IResponseResult<SstNotificationsParameters> Post(SstNotificationsParameters model)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.NotificationParameters.Value.Add(model);
        }

        // DELETE:  api/NotificationParameters/5
        [HttpDelete("{id}")]
        public IResponseResult<SstNotificationsParameters> Delete(long id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.NotificationParameters.Value.Remove(new SstNotificationsParameters() { Id = id });
        }
    }
}