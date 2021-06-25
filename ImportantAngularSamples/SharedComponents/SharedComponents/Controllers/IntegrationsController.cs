using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using SharedComponents.Domain.Models;
using SharedComponents.Domain.Interfaces.Services;
using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Api.Filters;
using SharedComponents.Domain.Dtos;
using SharedComponents.Domain.Models.SearchCriteria;
using Microsoft.AspNetCore.Http;

namespace SharedComponents.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [ApiLogger]
    public class IntegrationsController : ControllerBase
    {
        //private readonly IServiceUnitOfWork _serviceUnitOfWork;

        //public IntegrationsController(IServiceUnitOfWork serviceUnitOfWork)
        //{
        //    _serviceUnitOfWork = serviceUnitOfWork;
        //}

        //[HttpGet]
        //public IResponseResult<IEnumerable<SstIntegrations>> GetAll()
        //{
        //    using (_serviceUnitOfWork)
        //        return _serviceUnitOfWork.Integrations.Value.GetAll();
        //}

        //[HttpGet("{id}")]
        //public IResponseResult<SstIntegrations> Get(long id)
        //{
        //    using (_serviceUnitOfWork)
        //        return _serviceUnitOfWork.Integrations.Value.Get(id);
        //}

        //[HttpPut]
        //public IResponseResult<SstIntegrations> Update(SstIntegrations Integrations)
        //{
        //    using (_serviceUnitOfWork)
        //        return _serviceUnitOfWork.Integrations.Value.Update(Integrations);
        //}

        //[HttpPost]
        //public IResponseResult<SstIntegrations> Add(SstIntegrations Integrations)
        //{
        //    using (_serviceUnitOfWork)
        //        return _serviceUnitOfWork.Integrations.Value.Add(Integrations);
        //}

        //[HttpDelete("{id}")]
        //public IResponseResult<SstIntegrations> Delete(int id)
        //{
        //    using (_serviceUnitOfWork)
        //        return _serviceUnitOfWork.Integrations.Value.Remove(new SstIntegrations() { Id = id });
        //}

        //[HttpGet("StepLoad")]
        //public IResponseResult<object> ExecuteStepLoadTransactions(long userPropertiesId, long stepId)
        //{
        //    using (_serviceUnitOfWork)
        //    {
        //        return _serviceUnitOfWork.Integrations.Value.ExecuteStepLoadTransactions(userPropertiesId, stepId);
        //    }
        //}

        //[HttpPost("StepSubmit")]
        //public IResponseResult<object> ExecuteStepSubmitTransactions(StepSubmit StepSubmit)
        //{
        //    using (_serviceUnitOfWork)
        //    {
        //        return _serviceUnitOfWork.Integrations.Value.ExecuteStepSubmitTransactions(StepSubmit.UserPropertiesId, StepSubmit.CurrentStepId, StepSubmit.StepFormValues);
        //    }
        //}

        //[HttpPost("ExecuteDataTableTransaction")]
        //public IResponseResult<IEnumerable<object>> ExecuteDataTableTransaction(DataTableTransactionLoad data)
        //{
        //    using (_serviceUnitOfWork)
        //    {
        //        return _serviceUnitOfWork.Integrations.Value.ExecuteDataTableTransaction(data);
        //    }
        //}

        //[HttpGet("LoadDataSource")]
        //public IResponseResult<List<DataSourceItem>> LoadDataSource(long userPropertiesId, long integrationSetttingId)
        //{
        //    using (_serviceUnitOfWork)
        //    {
        //        return _serviceUnitOfWork.Integrations.Value.LoadDataSource(userPropertiesId, integrationSetttingId);
        //    }

        //}

        //[HttpGet("GetByCriteria")]
        //public IResponseResult<IEnumerable<SstIntegrations>> GetByCriteria([FromQuery] SearchIntegration search)
        //{
        //    using (_serviceUnitOfWork)
        //        return _serviceUnitOfWork.Integrations.Value.GetByCriteria(search);
        //}

        //[HttpPost("ExecuteUploadTransaction")]
        //public IResponseResult<string> ExecuteUploadTransaction([FromForm] ExecuteSequance fileUpload)
        //{
        //    var sequenceId = int.Parse(HttpContext.Request.Form["sequenceId"]);
        //    var userPropertiesId = int.Parse(HttpContext.Request.Form["userPropertiesId"]);
        //    var stepFormValue = (object)HttpContext.Request.Form["stepFormValue"];

        //    using (_serviceUnitOfWork)
        //        return _serviceUnitOfWork.Integrations.Value.ExecuteUploadTransaction(sequenceId, fileUpload.Files, userPropertiesId, stepFormValue);
        //}


        //[HttpPost("ExecuteSequanceTransaction")]
        //public IResponseResult<object> ExecuteSequanceTransaction(ExecuteSequance dto)
        //{
        //    using (_serviceUnitOfWork)
        //        return _serviceUnitOfWork.Integrations.Value.ExecutesequenceTransaction(dto.UserPropertiesId, dto.SequenceId, dto.StepFormValues, new Dictionary<string, object>());
        //}
    }
}