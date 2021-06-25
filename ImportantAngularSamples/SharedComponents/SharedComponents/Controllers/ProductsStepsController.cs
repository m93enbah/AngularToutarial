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
    public class ProductsStepsController : ControllerBase
    {
        private readonly IServiceUnitOfWork _serviceUnitOfWork;

        public ProductsStepsController(IServiceUnitOfWork serviceUnitOfWork)
        {
            _serviceUnitOfWork = serviceUnitOfWork;
        }

        [HttpGet]
        public IResponseResult<IEnumerable<SpdProductsSteps>> GetAll()
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.ProductsSteps.Value.GetAll();
        }

        [HttpGet("{id}")]
        public IResponseResult<SpdProductsSteps> Get(long id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.ProductsSteps.Value.Get(id);
        }

        [HttpPut]
        public IResponseResult<SpdProductsSteps> Update(SpdProductsSteps ProductsSteps)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.ProductsSteps.Value.Update(ProductsSteps);
        }

        [HttpPost]
        public IResponseResult<SpdProductsSteps> Add(SpdProductsSteps ProductsSteps)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.ProductsSteps.Value.Add(ProductsSteps);
        }

        [HttpDelete("{id}")]
        public IResponseResult<SpdProductsSteps> Delete(int id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.ProductsSteps.Value.Remove(new SpdProductsSteps() { Id = id });
        }

        [HttpGet("GetByCriteria")]
        public IResponseResult<IEnumerable<SpdProductsSteps>> GetByCriteria([FromQuery] SearchProductSteps search)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.ProductsSteps.Value.GetByCriteria(search);
        }

    }
}