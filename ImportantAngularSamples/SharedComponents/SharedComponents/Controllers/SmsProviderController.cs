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
    public class SmsProviderController : ControllerBase
    {
        private readonly IServiceUnitOfWork _serviceUnitOfWork;

        public SmsProviderController(IServiceUnitOfWork serviceUnitOfWork)
        {
            _serviceUnitOfWork = serviceUnitOfWork;
        }

        // GET:  api/SmsProvider
        [HttpGet]
        public IResponseResult<IEnumerable<SstSmsProviders>> GetAll()
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.SmsProvider.Value.GetAll();
        }

        // GET:  api/SmsProvider/5
        [HttpGet("{id}")]
        public IResponseResult<SstSmsProviders> Get(long id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.SmsProvider.Value.Get(id);
        }

        // PUT:  api/SmsProvider/5
        [HttpPut("{id}")]
        public IResponseResult<SstSmsProviders> Put(SstSmsProviders model)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.SmsProvider.Value.Update(model);
        }

        // POST:  api/SmsProvider
        [HttpPost]
        public IResponseResult<SstSmsProviders> Post(SstSmsProviders model)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.SmsProvider.Value.Add(model);
        }

        // DELETE:  api/SmsProvider/5
        [HttpDelete("{id}")]
        public IResponseResult<SstSmsProviders> Delete(long id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.SmsProvider.Value.Remove(new SstSmsProviders() { Id = id });
        }
    }
}