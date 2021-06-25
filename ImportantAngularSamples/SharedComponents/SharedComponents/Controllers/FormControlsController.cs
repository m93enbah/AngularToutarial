using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using SharedComponents.Domain.Models;
using SharedComponents.Domain.Interfaces.Services;
using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Api.Filters;

namespace SharedComponents.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[ApiLogger]
    public class FormControlsController : ControllerBase
    {
        //private readonly IServiceUnitOfWork _serviceUnitOfWork;

        //public FormControlsController(IServiceUnitOfWork serviceUnitOfWork)
        //{
        //    _serviceUnitOfWork = serviceUnitOfWork;
        //}

        //[HttpGet]
        //public IResponseResult<IEnumerable<SstFormControls>> GetAll()
        //{
        //    using (_serviceUnitOfWork)
        //        return _serviceUnitOfWork.FormControl.Value.GetAll();
        //}

        //[HttpGet("{id}")]
        //public IResponseResult<SstFormControls> Get(long id)
        //{
        //    using (_serviceUnitOfWork)
        //        return _serviceUnitOfWork.FormControl.Value.Get(id);
        //}

        //[HttpPut]
        //public IResponseResult<SstFormControls> Update(SstFormControls formControl)
        //{
        //    using (_serviceUnitOfWork)
        //        return _serviceUnitOfWork.FormControl.Value.Update(formControl);
        //}

        //[HttpPost]
        //public IResponseResult<SstFormControls> Add(SstFormControls formControl)
        //{
        //    using (_serviceUnitOfWork)
        //        return _serviceUnitOfWork.FormControl.Value.Add(formControl);
        //}

        //[HttpDelete("{id}")]
        //public IResponseResult<SstFormControls> Delete(int id)
        //{
        //    using (_serviceUnitOfWork)
        //        return _serviceUnitOfWork.FormControl.Value.Remove(new SstFormControls() { Id = id });
        //}
    }
}