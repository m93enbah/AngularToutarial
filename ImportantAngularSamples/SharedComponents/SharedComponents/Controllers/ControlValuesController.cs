using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SharedComponents.Domain.Interfaces.Services;
using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Models;

namespace SharedComponents.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ControlValuesController : ControllerBase
    {
        private readonly IServiceUnitOfWork _serviceUnitOfWork;

        public ControlValuesController(IServiceUnitOfWork serviceUnitOfWork)
        {
            _serviceUnitOfWork = serviceUnitOfWork;
        }

        [HttpGet]
        public IResponseResult<IEnumerable<SpdControlValues>> GetAll()
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.ControlValue.Value.GetAll();
        }

        [HttpGet("{id}")]
        public IResponseResult<SpdControlValues> Get(long id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.ControlValue.Value.Get(id);
        }

        [HttpGet("GetByCriteria")]
        public IResponseResult<IEnumerable<SpdControlValues>> GetByCriteria([FromQuery] SearchControlValues search)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.ControlValue.Value.GetByCriteria(search);
        }

        [HttpPut]
        public IResponseResult<SpdControlValues> Update(SpdControlValues ControlValue)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.ControlValue.Value.Update(ControlValue);
        }

        [HttpPost]
        public IResponseResult<SpdControlValues> Add(SpdControlValues ControlValue)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.ControlValue.Value.Add(ControlValue);
        }

        [HttpDelete("{id}")]
        public IResponseResult<SpdControlValues> Delete(int id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.ControlValue.Value.Remove(new SpdControlValues() { Id = id });
        }
    }
}