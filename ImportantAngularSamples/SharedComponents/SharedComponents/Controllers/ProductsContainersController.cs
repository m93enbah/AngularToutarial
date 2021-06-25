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
    public class ProductsContainersController : ControllerBase
    {
        private readonly IServiceUnitOfWork _serviceUnitOfWork;

        public ProductsContainersController(IServiceUnitOfWork serviceUnitOfWork)
        {
            _serviceUnitOfWork = serviceUnitOfWork;
        }

        [HttpGet]
        public IResponseResult<IEnumerable<SpdContainers>> GetAll()
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.ProductsContainers.Value.GetAll();
        }

        [HttpGet("{id}")]
        public IResponseResult<SpdContainers> Get(long id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.ProductsContainers.Value.Get(id);
        }

        [HttpPut]
        public IResponseResult<SpdContainers> Update(SpdContainers SpdContainers)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.ProductsContainers.Value.Update(SpdContainers);
        }

        [HttpPost]
        public IResponseResult<SpdContainers> Add(SpdContainers SpdContainers)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.ProductsContainers.Value.Add(SpdContainers);
        }

        [HttpDelete("{id}")]
        public IResponseResult<SpdContainers> Delete(int id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.ProductsContainers.Value.Remove(new SpdContainers() { Id = id });
        }

        [HttpGet("GetByCriteria")]
        public IResponseResult<IEnumerable<SpdContainers>> GetByCriteria([FromQuery] SearchProductContainers search)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.ProductsContainers.Value.GetByCriteria(search);
        }

        [HttpPost("InsertBulk")]
        public IResponseResult<IEnumerable<SpdContainers>> AddRange(List<SpdContainers> productContainers)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.ProductsContainers.Value.AddRange(productContainers);
        }
    }
}