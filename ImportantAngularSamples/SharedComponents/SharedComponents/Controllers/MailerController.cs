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
using SharedComponents.Api.Filters;

namespace SharedComponents.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [ApiLogger]
    public class MailerController : ControllerBase
    {
        private readonly IServiceUnitOfWork _serviceUnitOfWork;

        public MailerController(IServiceUnitOfWork serviceUnitOfWork)
        {
            _serviceUnitOfWork = serviceUnitOfWork;
        }

        // GET: api/Mailer
        [HttpGet]
        public IResponseResult<IEnumerable<SstMailer>> GetAll()
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Mailer.Value.GetAll();
        }

        // GET: api/Mailer/5
        [HttpGet("{id}")]
        public IResponseResult<SstMailer> Get(long id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Mailer.Value.Get(id);
        }

        // PUT: api/Mailer/5
        [HttpPut("{id}")]
        public IResponseResult<SstMailer> Put(SstMailer model)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Mailer.Value.Update(model);
        }

        // POST: api/Mailer
        [HttpPost]
        public IResponseResult<SstMailer> Post(SstMailer model)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Mailer.Value.Add(model);
        }

        // DELETE: api/Mailer/5
        [HttpDelete("{id}")]
        public IResponseResult<SstMailer> Delete(long id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Mailer.Value.Remove(new SstMailer() { Id = id });
        }
    }
}