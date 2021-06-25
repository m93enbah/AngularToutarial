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
    // [ApiLogger]
    public class ContainersController : ControllerBase
    {
        private readonly IServiceUnitOfWork _serviceUnitOfWork;

        public ContainersController(IServiceUnitOfWork serviceUnitOfWork)
        {
            _serviceUnitOfWork = serviceUnitOfWork;
        }

        [HttpGet]
        public IResponseResult<IEnumerable<SstContainers>> GetAll()
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Container.Value.GetAll();
        }

        [HttpGet("{id}")]
        public IResponseResult<SstContainers> Get(long id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Container.Value.Get(id);
        }

        [HttpPut]
        public IResponseResult<SstContainers> Update(SstContainers container)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Container.Value.Update(container);
        }

        [HttpPost]
        public IResponseResult<SstContainers> Add(SstContainers container)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Container.Value.Add(container);
        }

        [HttpDelete("{id}")]
        public IResponseResult<SstContainers> Delete(int id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Container.Value.Remove(new SstContainers() { Id = id });
        }

        [HttpGet("GetByCriteria")]
        public IResponseResult<IEnumerable<SstContainers>> GetByCriteria([FromQuery] SearchContainers search)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Container.Value.GetByCriteria(search);
        }

        [HttpPost("InsertBulk")]
        public IResponseResult<IEnumerable<SstContainers>> InsertBulk(List<SstContainers> containers)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Container.Value.AddRange(containers);
        }
    }
}