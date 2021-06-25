using Microsoft.AspNetCore.Mvc;
using SharedComponents.Api.Filters;
using SharedComponents.Domain.Interfaces.Services;
using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Models;
using System.Collections.Generic;

namespace SharedComponents.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [ApiLogger]
    public class CpEpaymentTransactionsController : ControllerBase
    {
        private readonly IServiceUnitOfWork _serviceUnitOfWork;

        public CpEpaymentTransactionsController(IServiceUnitOfWork serviceUnitOfWork)
        {
            _serviceUnitOfWork = serviceUnitOfWork;
        }

        [HttpGet]
        public IResponseResult<IEnumerable<CpEpaymentTransactions>> GetAll()
        {
            using (_serviceUnitOfWork)
            {
                return _serviceUnitOfWork.CpEpaymentTransactions.Value.GetAll();
            }
        }

        [HttpGet("{id}")]
        public IResponseResult<CpEpaymentTransactions> Get(long id)
        {
            return _serviceUnitOfWork.CpEpaymentTransactions.Value.Get(id);
        }

        [HttpPut]
        public IResponseResult<CpEpaymentTransactions> Add(CpEpaymentTransactions component)
        {
            using (_serviceUnitOfWork)
            {
                return _serviceUnitOfWork.CpEpaymentTransactions.Value.Update(component);
            }
        }

        [HttpPost]
        public IResponseResult<CpEpaymentTransactions> Update(CpEpaymentTransactions component)
        {
            using (_serviceUnitOfWork)
            {
                return _serviceUnitOfWork.CpEpaymentTransactions.Value.Add(component);
            }
        }

        [HttpDelete("{id}")]
        public IResponseResult<CpEpaymentTransactions> Delete(int id)
        {
            using (_serviceUnitOfWork)
            {
                return _serviceUnitOfWork.CpEpaymentTransactions.Value.Remove(new CpEpaymentTransactions() { Id = id });
            }
        }


        [HttpPost("RemoveRange")]
        public IResponseResult<IEnumerable<CpEpaymentTransactions>> RemoveRange(CpEpaymentTransactions[] entities)
        {
            using (_serviceUnitOfWork)
            {
                return _serviceUnitOfWork.CpEpaymentTransactions.Value.RemoveRange(entities);
            }
        }
    }
}