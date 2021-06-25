using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using SharedComponents.Domain.Models;
using SharedComponents.Domain.Interfaces.Services;
using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Models.SearchCriteria;
using SharedComponents.Api.Filters;

namespace SharedComponents.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //   [ApiLogger]
    public class ConditionsController : ControllerBase
    {
        private readonly IServiceUnitOfWork _serviceUnitOfWork;

        public ConditionsController(IServiceUnitOfWork serviceUnitOfWork)
        {
            _serviceUnitOfWork = serviceUnitOfWork;
        }

        [HttpGet]
        public IResponseResult<IEnumerable<SstConditions>> GetAll()
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Condition.Value.GetAll();
        }

        [HttpGet("{id}")]
        public IResponseResult<SstConditions> Get(long id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Condition.Value.Get(id);
        }

        [HttpGet("GetByCriteria")]
        public IResponseResult<IEnumerable<SstConditions>> GetByCriteria([FromQuery] SearchConditions search)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Condition.Value.GetByCriteria(search);
        }

        [HttpPut]
        public IResponseResult<SstConditions> Update(SstConditions Condition)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Condition.Value.Update(Condition);
        }

        [HttpPost]
        public IResponseResult<SstConditions> Add(SstConditions Condition)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Condition.Value.Add(Condition);
        }

        [HttpDelete("{id}")]
        public IResponseResult<SstConditions> Delete(int id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Condition.Value.Remove(new SstConditions() { Id = id });
        }

        [HttpPut]
        [Route("GetValidate")]
        public bool GetValidate(string text)
        {
            if (text == null || text == "")
                return false;
            return true;

        }

        [HttpPost("InsertBulk")]
        public IResponseResult<IEnumerable<SstConditions>> AddRange(List<SstConditions> items)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Condition.Value.AddRange(items);
        }

        [HttpPost("UpdateBulk")]
        public IResponseResult<IEnumerable<SstConditions>> UpdateBulk(List<SstConditions> items)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Condition.Value.UpdateBulk(items);
        }
    }
}