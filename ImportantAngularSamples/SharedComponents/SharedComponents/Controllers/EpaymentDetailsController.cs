using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SharedComponents.Api.Filters;
using SharedComponents.Domain.Interfaces.Services;
using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Models;

namespace SharedComponents.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    // [ApiLogger]
    public class EpaymentDetailsController : ControllerBase
    {
        private readonly IServiceUnitOfWork _serviceUnitOfWork;

        public EpaymentDetailsController(IServiceUnitOfWork serviceUnitOfWork)
        {
            _serviceUnitOfWork = serviceUnitOfWork;
        }

        [HttpGet]
        public IResponseResult<IEnumerable<SstEpaymentDetails>> Get()
        {
            using (_serviceUnitOfWork)
            {
                return _serviceUnitOfWork.EpaymentDetails.Value.GetAll();
            }

        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public IResponseResult<SstEpaymentDetails> Get(int id)
        {
            using (_serviceUnitOfWork)
            {
                return _serviceUnitOfWork.EpaymentDetails.Value.Get(id);
            }
        }

        [HttpPost]
        public IResponseResult<SstEpaymentDetails> Add(SstEpaymentDetails entity)
        {
            using (_serviceUnitOfWork)
            {
                return _serviceUnitOfWork.EpaymentDetails.Value.Add(entity);
            }
        }

        [HttpPut]
        public IResponseResult<SstEpaymentDetails> Put(SstEpaymentDetails entity)
        {
            using (_serviceUnitOfWork)
            {
                return _serviceUnitOfWork.EpaymentDetails.Value.Update(entity);
            }
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public IResponseResult<SstEpaymentDetails> Delete(int id)
        {
            using (_serviceUnitOfWork)
            {
                return _serviceUnitOfWork.EpaymentDetails.Value.Remove(new SstEpaymentDetails() { Id = id });
            }
        }

    }
}