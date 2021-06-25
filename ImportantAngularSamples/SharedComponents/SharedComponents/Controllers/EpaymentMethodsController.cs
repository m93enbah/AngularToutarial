using Microsoft.AspNetCore.Mvc;
using SharedComponents.Api.Filters;
using SharedComponents.Domain.Common;
using SharedComponents.Domain.Enums;
using SharedComponents.Domain.Interfaces.Services;
using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Models;
using System.Collections.Generic;

namespace SharedComponents.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [ApiLogger]
    public class EpaymentMethodsController : ControllerBase
    {
        //private readonly IServiceUnitOfWork _serviceUnitOfWork;

        //public EpaymentMethodsController(IServiceUnitOfWork serviceUnitOfWork)
        //{
        //    _serviceUnitOfWork = serviceUnitOfWork;
        //}
        ////[HttpGet]
        ////public IResponseResult<IEnumerable<SstEpaymentMethods>> Get()
        ////{
        ////    using (_serviceUnitOfWork)
        ////    {
        ////        return _serviceUnitOfWork.EpaymentMethods.Value.GetAll();
        ////    }

        ////}
        //[HttpGet("{id}")]
        //public IResponseResult<SstEpaymentMethods> Get(int id)
        //{
        //    using (_serviceUnitOfWork)
        //    {
        //        return _serviceUnitOfWork.EpaymentMethods.Value.Get(id);
        //    }
        //}
        //[HttpPost]
        //public IResponseResult<SstEpaymentMethods> Add(SstEpaymentMethods entity)
        //{
        //    using (_serviceUnitOfWork)
        //    {
        //        return _serviceUnitOfWork.EpaymentMethods.Value.Add(entity);
        //    }
        //}
        //public IResponseResult<SstEpaymentMethods> Put(SstEpaymentMethods entity)
        //{
        //    using (_serviceUnitOfWork)
        //    {
        //        return _serviceUnitOfWork.EpaymentMethods.Value.Update(entity);
        //    }
        //}
        //[HttpDelete("{id}")]
        //public IResponseResult<SstEpaymentMethods> Delete(int id)
        //{
        //    using (_serviceUnitOfWork)
        //    {
        //        return _serviceUnitOfWork.EpaymentMethods.Value.Remove(new SstEpaymentMethods() { Id = id });
        //    }
        //}
        //[HttpPost("ExecuteEtisalatPayment")]
        //public IResponseResult<CpEpaymentTransactions> ExecuteEtisalatPayment(int transactionId)
        //{
        //    using (_serviceUnitOfWork)
        //    {
        //        //return _serviceUnitOfWork.EpaymentMethods.Value.ExecuteEtisalatPayment(transactionId);
        //    }
        //}

        ////[HttpGet("FinalizePayment")]
        ////public IResponseResult<object> FinalizePayment(int LocalTransactionID)
        ////{
        ////    using (_serviceUnitOfWork)
        ////    {
        ////        return _serviceUnitOfWork.EpaymentMethods.Value.FinalizePayment(LocalTransactionID);
        ////    }
        ////}
    }
}