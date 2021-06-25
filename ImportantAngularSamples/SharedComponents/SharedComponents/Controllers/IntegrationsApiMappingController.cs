using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using SharedComponents.Domain.Models;
using SharedComponents.Domain.Interfaces.Services;
using SharedComponents.Domain.Interfaces.Shared;

namespace SharedComponents.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IntegrationsApiMappingController : ControllerBase
    {
        private readonly IServiceUnitOfWork _serviceUnitOfWork;

        public IntegrationsApiMappingController(IServiceUnitOfWork serviceUnitOfWork)
        {
            _serviceUnitOfWork = serviceUnitOfWork;
        }

        [HttpGet]
        public IResponseResult<IEnumerable<SstIntegrationsApiMapping>> GetAll()
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.IntegrationsApiMapping.Value.GetAll();
        }

        [HttpGet("{id}")]
        public IResponseResult<SstIntegrationsApiMapping> Get(long id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.IntegrationsApiMapping.Value.Get(id);
        }

        [HttpPut]
        public IResponseResult<SstIntegrationsApiMapping> Update(SstIntegrationsApiMapping Integrations)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.IntegrationsApiMapping.Value.Update(Integrations);
        }

        [HttpPost]
        public IResponseResult<SstIntegrationsApiMapping> Add(SstIntegrationsApiMapping Integrations)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.IntegrationsApiMapping.Value.Add(Integrations);
        }

        [HttpDelete("{id}")]
        public IResponseResult<SstIntegrationsApiMapping> Delete(int id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.IntegrationsApiMapping.Value.Remove(new SstIntegrationsApiMapping() { Id = id });
        }

        [HttpPost("InsertBulk")]
        public IResponseResult<IEnumerable<SstIntegrationsApiMapping>> AddRange(List<SstIntegrationsApiMapping> items)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.IntegrationsApiMapping.Value.AddRange(items);
        }

        [HttpPost("CallApi")]
        public IResponseResult<IEnumerable<SstIntegrationsApiMapping>> CallApi(List<SstIntegrationsApiMapping> items)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.IntegrationsApiMapping.Value.AddRange(items);
        }


        [HttpPost("UpdateBulk")]
        public IResponseResult<IEnumerable<SstIntegrationsApiMapping>> UpdateBulk(List<SstIntegrationsApiMapping> items)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.IntegrationsApiMapping.Value.UpdateBulk(items);
        }
    }
}