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
    public class ProductsComponentsController : ControllerBase
    {
        private readonly IServiceUnitOfWork _serviceUnitOfWork;

        public ProductsComponentsController(IServiceUnitOfWork serviceUnitOfWork)
        {
            _serviceUnitOfWork = serviceUnitOfWork;
        }

        [HttpGet]
        public IResponseResult<IEnumerable<SpdComponents>> GetAll()
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.ProductsComponents.Value.GetAll();
        }

        [HttpGet("{id}")]
        public IResponseResult<SpdComponents> Get(long id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.ProductsComponents.Value.Get(id);
        }

        [HttpPut]
        public IResponseResult<SpdComponents> Update(SpdComponents SpdComponents)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.ProductsComponents.Value.Update(SpdComponents);
        }

        [HttpPost]
        public IResponseResult<SpdComponents> Add(SpdComponents SpdComponents)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.ProductsComponents.Value.Add(SpdComponents);
        }

        [HttpDelete("{id}")]
        public IResponseResult<SpdComponents> Delete(int id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.ProductsComponents.Value.Remove(new SpdComponents() { Id = id });
        }

        [HttpGet("GetByCriteria")]
        public IResponseResult<IEnumerable<SpdComponents>> GetByCriteria([FromQuery] SearchProductComponents search)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.ProductsComponents.Value.GetByCriteria(search);
        }


        [HttpDelete("DeleteByStepId")]
        public IResponseResult<IEnumerable<SpdComponents>> DeleteByStepId(int stepId)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.ProductsComponents.Value.DeleteByStepId(new SpdComponents() { StepId = stepId });
        }

        [HttpPost("InsertBulk")]
        public IResponseResult<IEnumerable<SpdComponents>> AddRange(List<SpdComponents> productComponents)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.ProductsComponents.Value.AddRange(productComponents);
        }


    }
}