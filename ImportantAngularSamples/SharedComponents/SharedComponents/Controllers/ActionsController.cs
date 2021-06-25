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
    [ApiLogger]
    public class ActionsController : ControllerBase
    {
        private readonly IServiceUnitOfWork _serviceUnitOfWork;

        public ActionsController(IServiceUnitOfWork serviceUnitOfWork)
        {
            _serviceUnitOfWork = serviceUnitOfWork;
        }

        [HttpGet]
        public IResponseResult<IEnumerable<SstActions>> GetAll()
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Action.Value.GetAll();
        }

        [HttpGet("{id}")]
        public IResponseResult<SstActions> Get(long id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Action.Value.Get(id);
        }

        [HttpGet("GetByCriteria")]
        public IResponseResult<IEnumerable<SstActions>> GetByCriteria([FromQuery] SearchActions search)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Action.Value.GetByCriteria(search);
        }

        [HttpPut]
        public IResponseResult<SstActions> Update(SstActions Action)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Action.Value.Update(Action);
        }

        [HttpPost]
        public IResponseResult<SstActions> Add(SstActions Action)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Action.Value.Add(Action);
        }

        [HttpDelete("{id}")]
        public IResponseResult<SstActions> Delete(int id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Action.Value.Remove(new SstActions() { Id = id });
        }

        [HttpPost("InsertBulk")]
        public IResponseResult<IEnumerable<SstActions>> AddRange(List<SstActions> items)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Action.Value.AddRange(items);
        }

        [HttpPost("UpdateBulk")]
        public IResponseResult<IEnumerable<SstActions>> UpdateBulk(List<SstActions> items)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Action.Value.UpdateBulk(items);
        }
    }
}