using Microsoft.AspNetCore.Mvc;
using SharedComponents.Domain.Interfaces.Services;
using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Models;
using SharedComponents.Domain.Models.SearchCriteria;
using System.Collections.Generic;

namespace SharedLogs.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LogsController : ControllerBase
    {
        private readonly IServiceUnitOfWork _serviceUnitOfWork;

        public LogsController(IServiceUnitOfWork serviceUnitOfWork)
        {
            _serviceUnitOfWork = serviceUnitOfWork;
        }


        [HttpGet("{id}")]
        public IResponseResult<SstLogs> Get(long id)
        {
            return _serviceUnitOfWork.Log.Value.Get(id);
        }


        [HttpDelete("{id}")]
        public IResponseResult<SstLogs> Delete(int id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Log.Value.Remove(new SstLogs() { Id = id });
        }

        [HttpGet("GetByCriteria")]
        public IResponseResult<IEnumerable<SstLogs>> GetByCriteria([FromQuery] SearchLog search)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Log.Value.GetByCriteria(search);
        }

    }
}