using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using SharedComponents.Domain.Models;
using SharedComponents.Domain.Interfaces.Services;
using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Models.SearchCriteria;
using SharedComponents.Api.Filters;

namespace SharedComponents.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [ApiLogger]
    public class SequenceController : ControllerBase
    {
        private readonly IServiceUnitOfWork _serviceUnitOfWork;

        public SequenceController(IServiceUnitOfWork serviceUnitOfWork)
        {
            _serviceUnitOfWork = serviceUnitOfWork;
        }

        [HttpGet]
        public IResponseResult<IEnumerable<SpdSequences>> GetAll()
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Sequence.Value.GetAll();
        }

        [HttpGet("{id}")]
        public IResponseResult<SpdSequences> Get(long id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Sequence.Value.Get(id);
        }

        [HttpPut]
        public IResponseResult<SpdSequences> Update(SpdSequences Action)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Sequence.Value.Update(Action);
        }

        [HttpPost]
        public IResponseResult<SpdSequences> Add(SpdSequences Action)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Sequence.Value.Add(Action);
        }

        [HttpDelete("{id}")]
        public IResponseResult<SpdSequences> Delete(int id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Sequence.Value.Remove(new SpdSequences() { Id = id });
        }
    }
}