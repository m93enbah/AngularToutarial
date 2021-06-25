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
    public class RulesController : ControllerBase
    {
        private readonly IServiceUnitOfWork _serviceUnitOfWork;

        public RulesController(IServiceUnitOfWork serviceUnitOfWork)
        {
            _serviceUnitOfWork = serviceUnitOfWork;
        }

        [HttpGet]
        public IResponseResult<IEnumerable<SstRules>> GetAll()
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Rule.Value.GetAll();
        }

        [HttpGet("{id}")]
        public IResponseResult<SstRules> Get(long id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Rule.Value.Get(id);
        }

        [HttpPut]
        public IResponseResult<SstRules> Update(SstRules Rule)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Rule.Value.Update(Rule);
        }

        [HttpPost]
        public IResponseResult<SstRules> Add(SstRules Rule)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Rule.Value.Add(Rule);
        }

        [HttpDelete("{id}")]
        public IResponseResult<SstRules> Delete(int id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Rule.Value.Remove(new SstRules() { Id = id });
        }

        [HttpGet]
        [Route("GetRulesByComponentId/{componentId}")]
        public IResponseResult<IEnumerable<SstRules>> GetRuleByComponentId(int componentId)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Rule.Value.GetRuleByComponentId(componentId);
        }

        [HttpGet("GetByCriteria")]
        public IResponseResult<IEnumerable<SstRules>> GetByCriteria([FromQuery] SearchRule search)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Rule.Value.GetByCriteria(search);
        }
    }
}