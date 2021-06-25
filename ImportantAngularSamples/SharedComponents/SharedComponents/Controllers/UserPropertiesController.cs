
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
    public class UserPropertiesController : ControllerBase
    {
        private readonly IServiceUnitOfWork _serviceUnitOfWork;

        public UserPropertiesController(IServiceUnitOfWork serviceUnitOfWork)
        {
            _serviceUnitOfWork = serviceUnitOfWork;
        }

        [HttpGet]
        public IResponseResult<IEnumerable<CpUserProperties>> GetAll()
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.UserProperties.Value.GetAll();
        }

        [HttpGet("{id}")]
        public IResponseResult<CpUserProperties> Get(long id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.UserProperties.Value.Get(id);
        }

        [HttpPut]
        public IResponseResult<CpUserProperties> Update(CpUserProperties UserProperties)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.UserProperties.Value.Update(UserProperties);
        }

        [HttpPost]
        public IResponseResult<CpUserProperties> Add(CpUserProperties UserProperties)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.UserProperties.Value.Add(UserProperties);
        }

        [HttpDelete("{id}")]
        public IResponseResult<CpUserProperties> Delete(int id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.UserProperties.Value.Remove(new CpUserProperties() { Id = id });
        }
    }
}
//...This class created by ESKADENIA Code Generator V3 -Date:5/15/2019 11:45:08 AM
