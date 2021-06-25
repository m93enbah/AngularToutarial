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
    public class ProductsDetailsController : ControllerBase
    {
        private readonly IServiceUnitOfWork _serviceUnitOfWork;

        public ProductsDetailsController(IServiceUnitOfWork serviceUnitOfWork)
        {
            _serviceUnitOfWork = serviceUnitOfWork;
        }

        [HttpGet]
        public IResponseResult<IEnumerable<SpdProductsDetails>> GetAll()
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.ProductsDetails.Value.GetAll();
        }

        [HttpGet("{id}")]
        public IResponseResult<SpdProductsDetails> Get(long id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.ProductsDetails.Value.Get(id);
        }

        [HttpPut]
        public IResponseResult<SpdProductsDetails> Update(SpdProductsDetails Products)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.ProductsDetails.Value.Update(Products);
        }

        [HttpPost]
        public IResponseResult<SpdProductsDetails> Add(SpdProductsDetails Products)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.ProductsDetails.Value.Add(Products);
        }

        [HttpDelete("{id}")]
        public IResponseResult<SpdProductsDetails> Delete(int id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.ProductsDetails.Value.Remove(new SpdProductsDetails() { Id = id });
        }

        [HttpGet("GetByCriteria")]
        public IResponseResult<IEnumerable<SpdProductsDetails>> GetByCriteria([FromQuery] SearchProductDetails search)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.ProductsDetails.Value.GetByCriteria(search);
        }

    }
}