using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using SharedComponents.Domain.Models;
using SharedComponents.Domain.Interfaces.Services;
using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Api.Filters;

namespace SharedComponents.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [ApiLogger]

    public class IntegrationsSettingsController : ControllerBase
    {
        private readonly IServiceUnitOfWork _serviceUnitOfWork;

        public IntegrationsSettingsController(IServiceUnitOfWork serviceUnitOfWork)
        {
            _serviceUnitOfWork = serviceUnitOfWork;
        }

        [HttpGet]
        public IResponseResult<IEnumerable<SstIntegrationsSettings>> GetAll()
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.IntegrationsSettings.Value.GetAll();
        }

        [HttpGet("{id}")]
        public IResponseResult<SstIntegrationsSettings> Get(long id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.IntegrationsSettings.Value.Get(id);
        }

        [HttpPut]
        public IResponseResult<SstIntegrationsSettings> Update(SstIntegrationsSettings Integrations)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.IntegrationsSettings.Value.Update(Integrations);
        }

        [HttpPost]
        public IResponseResult<SstIntegrationsSettings> Add(SstIntegrationsSettings Integrations)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.IntegrationsSettings.Value.Add(Integrations);
        }

        [HttpDelete("{id}")]
        public IResponseResult<SstIntegrationsSettings> Delete(int id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.IntegrationsSettings.Value.Remove(new SstIntegrationsSettings() { Id = id });
        }

    }
}