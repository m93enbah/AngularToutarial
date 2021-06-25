using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using SharedComponents.Domain.Models;
using SharedComponents.Domain.Interfaces.Services;
using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Models.SearchCriteria;

namespace SharedComponents.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StepTransactionsController : ControllerBase
    {
        private readonly IServiceUnitOfWork _serviceUnitOfWork;

        public StepTransactionsController(IServiceUnitOfWork serviceUnitOfWork)
        {
            _serviceUnitOfWork = serviceUnitOfWork;
        }

        [HttpGet]
        public IResponseResult<IEnumerable<SpdStepsTransactions>> GetAll()
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.StepTransactions.Value.GetAll();
        }

        [HttpGet("{id}")]
        public IResponseResult<SpdStepsTransactions> Get(long id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.StepTransactions.Value.Get(id);
        }

        [HttpPut]
        public IResponseResult<SpdStepsTransactions> Update(SpdStepsTransactions stepsTransactions)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.StepTransactions.Value.Update(stepsTransactions);
        }

        [HttpPost]
        public IResponseResult<SpdStepsTransactions> Add(SpdStepsTransactions stepsTransactions)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.StepTransactions.Value.Add(stepsTransactions);
        }

        [HttpDelete("{id}")]
        public IResponseResult<SpdStepsTransactions> Delete(int id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.StepTransactions.Value.Remove(new SpdStepsTransactions() { Id = id });
        }

        [HttpGet("GetByCriteria")]
        public IResponseResult<IEnumerable<SpdStepsTransactions>> GetByCriteria([FromQuery] SearchStepTransactions search)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.StepTransactions.Value.GetByCriteria(search);
        }

        [HttpPost("InsertBulk")]
        public IResponseResult<IEnumerable<SpdStepsTransactions>> InsertBulk(List<SpdStepsTransactions> transactions)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.StepTransactions.Value.AddRange(transactions);
        }

    }
}