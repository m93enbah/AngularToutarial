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
    public class ProductsController : ControllerBase
    {
        private readonly IServiceUnitOfWork _serviceUnitOfWork;

        public ProductsController(IServiceUnitOfWork serviceUnitOfWork)
        {
            _serviceUnitOfWork = serviceUnitOfWork;
        }

        [HttpGet]
        public IResponseResult<IEnumerable<SpdProducts>> GetAll()
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Products.Value.GetAll();
        }

        [HttpGet("{id}")]
        public IResponseResult<SpdProducts> Get(long id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Products.Value.Get(id);
        }

        [HttpPut]
        public IResponseResult<SpdProducts> Update(SpdProducts Products)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Products.Value.Update(Products);
        }

        [HttpPost]
        public IResponseResult<SpdProducts> Add(SpdProducts Products)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Products.Value.Add(Products);
        }

        [HttpPost("Clone")]
        public IResponseResult<SpdProducts> DeepAdd(SpdProducts Products)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Products.Value.Clone(Products);
        }

        [HttpDelete("{id}")]
        public IResponseResult<SpdProducts> Delete(int id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Products.Value.Remove(new SpdProducts() { Id = id });
        }

        [HttpGet("DeepGet")]
        public IResponseResult<SpdProducts> DeepGet([FromQuery] long id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Products.Value.DeepGet(id);
        }

        //[HttpGet("GetByCriteria")]
        //public IResponseResult<IEnumerable<SstProductss>> GetByCriteria([FromQuery] SearchProductss search)
        //{
        //    using (_serviceUnitOfWork)
        //        return _serviceUnitOfWork.Products.Value.GetByCriteria(search);
        //}

    }
}