using Microsoft.AspNetCore.Mvc;
using SharedComponents.Api.Filters;
using SharedComponents.Domain.Interfaces.Services;
using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Models;
using SharedComponents.Domain.Models.SearchCriteria;
using System;
using System.Collections.Generic;

namespace SharedComponents.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [ApiLogger]
    public class ComponentsController : ControllerBase
    {
        private readonly IServiceUnitOfWork _serviceUnitOfWork;

        public ComponentsController(IServiceUnitOfWork serviceUnitOfWork)
        {
            _serviceUnitOfWork = serviceUnitOfWork;
        }

        [HttpGet]
        public IResponseResult<IEnumerable<SstComponents>> GetAll()
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Component.Value.GetAll();
        }

        [HttpGet("{id}")]
        public IResponseResult<SstComponents> Get(long id)
        {
            return _serviceUnitOfWork.Component.Value.Get(id);
        }

        [HttpPut]
        public IResponseResult<SstComponents> Add(SstComponents component)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Component.Value.Update(component);
        }

        [HttpPost]
        public IResponseResult<SstComponents> Update(SstComponents component)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Component.Value.Add(component);
        }

        [HttpDelete("{id}")]
        public IResponseResult<SstComponents> Delete(int id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Component.Value.Remove(new SstComponents() { Id = id });
        }

        [HttpGet("GetByCriteria")]
        public IResponseResult<IEnumerable<SstComponents>> GetByCriteria([FromQuery] SearchComponents search)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Component.Value.GetByCriteria(search);
        }

        [HttpPost("RemoveRange")]
        public ActionResult RemoveRange(SstComponents[] entity)
        {
            try
            {
                using (_serviceUnitOfWork)
                {
                    _serviceUnitOfWork.Component.Value.RemoveRange(entity);
                }
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
