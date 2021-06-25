//using Comtrust.Payment.IPG.SPInet;
using SharedComponents.Domain.Common;
using SharedComponents.Domain.Enums;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Interfaces.Services;
using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace SharedComponents.Service.Services
{
    //public class EpaymentMethodsService : IEpaymentMethodsService
    //{
    //    private IRepositoryUnitOfWork _repositoryUnitOfWork;
    //    public EpaymentMethodsService(IRepositoryUnitOfWork repositoryUnitOfWork)
    //    {
    //        _repositoryUnitOfWork = repositoryUnitOfWork;
    //    }
    //    public IResponseResult<SstEpaymentMethods> Add(SstEpaymentMethods entity)
    //    {
    //        SstEpaymentMethods result = _repositoryUnitOfWork.EpaymentMethods.Value.Add(entity);
    //        return new ResponseResult<SstEpaymentMethods>()
    //        {
    //            Status = ResultStatus.Success,
    //            Data = result,
    //        };
    //    }
    //    public IResponseResult<IEnumerable<SstEpaymentMethods>> AddRange(IEnumerable<SstEpaymentMethods> models)
    //    {
    //        IEnumerable<SstEpaymentMethods> result = _repositoryUnitOfWork.EpaymentMethods.Value.AddRange(models);
    //        return new ResponseResult<IEnumerable<SstEpaymentMethods>>()
    //        {
    //            Status = ResultStatus.Success,
    //            Data = null,
    //        };
    //    }
    //    public IResponseResult<SstEpaymentMethods> Get(long Id, int companyId)
    //    {
    //        SstEpaymentMethods result = _repositoryUnitOfWork.EpaymentMethods.Value.Get(Id, companyId);
    //        return new ResponseResult<SstEpaymentMethods>()
    //        {
    //            Status = ResultStatus.Success,
    //            Data = result,
    //        };
    //    }
    //    public IResponseResult<SstEpaymentMethods> Get(long Id)
    //    {
    //        SstEpaymentMethods result = _repositoryUnitOfWork.EpaymentMethods.Value.Get(Id);
    //        return new ResponseResult<SstEpaymentMethods>()
    //        {
    //            Status = ResultStatus.Success,
    //            Data = result,
    //        };
    //    }
    //    public IResponseResult<IEnumerable<SstEpaymentMethods>> GetAll()
    //    {
    //        List<SstEpaymentMethods> result = _repositoryUnitOfWork.EpaymentMethods.Value.GetAll().ToList();
    //        return new ResponseResult<IEnumerable<SstEpaymentMethods>>()
    //        {
    //            Status = ResultStatus.Success,
    //            Data = null,
    //        };
    //    }
    //    public IResponseResult<SstEpaymentMethods> Remove(SstEpaymentMethods entity)
    //    {
    //        SstEpaymentMethods result = _repositoryUnitOfWork.EpaymentMethods.Value.Remove(entity);
    //        return new ResponseResult<SstEpaymentMethods>()
    //        {
    //            Status = ResultStatus.Success,
    //            Data = result,
    //        };
    //    }
    //    public IResponseResult<SstEpaymentMethods> Update(SstEpaymentMethods entity)
    //    {
    //        SstEpaymentMethods result = _repositoryUnitOfWork.EpaymentMethods.Value.Update(entity);
    //        return new ResponseResult<SstEpaymentMethods>()
    //        {
    //            Status = ResultStatus.Success,
    //            Data = result,
    //        };
    //    }
    //    public IResponseResult<IEnumerable<SstEpaymentMethods>> RemoveRange(IEnumerable<SstEpaymentMethods> models)
    //    {
    //        return new ResponseResult<IEnumerable<SstEpaymentMethods>>()
    //        {
    //            Status = ResultStatus.Success,
    //            Data = _repositoryUnitOfWork.EpaymentMethods.Value.RemoveRange(models),
    //        };
    //    }
    //    public IResponseResult<CpEpaymentTransactions> ExecuteEtisalatPayment(int transactionId)
    //    {
    //        CpEpaymentTransactions transaction = _repositoryUnitOfWork.CpEpaymentTransactions.Value
    //            .Find(transactionItem => transactionItem.Id == transactionId, transactionInclude => transactionInclude.EpaymentDetails)
    //            .First();

    //        if (transaction != null)
    //        {
    //            string merchTxnRef = transaction.SegmentCode + "_" + DateTime.Now.ToString("yyMMddHHmmss");

    //            transaction.Status = (int)PaymentTransactionStatus.Initialized;
    //            _repositoryUnitOfWork.CpEpaymentTransactions.Value.Update(transaction);

    //            //To Do : Check If etisalat or Payfort Later on.
    //            Transaction etisalatPaymentTrasaction = new Transaction(false);
    //            etisalatPaymentTrasaction.Initialize("Registration", "1.0"); // This will initiate the transaction object with Registration call.
    //            etisalatPaymentTrasaction.Customer = transaction.EpaymentDetails.Customer;

    //            etisalatPaymentTrasaction.Connection = new Connection
    //            {
    //                Address = transaction.EpaymentDetails.Address,
    //                CertificatePath = transaction.EpaymentDetails.CertificatePath,
    //                CertificatePassword = transaction.EpaymentDetails.CertificatePass,
    //                Port = transaction.EpaymentDetails.Port.Value,
    //                IsSecure = transaction.EpaymentDetails.IsSecure == 1 ? true : false,
    //                TimeOut = Convert.ToInt32(transaction.EpaymentDetails.Timeout)
    //            };

    //            etisalatPaymentTrasaction.Channel = transaction.EpaymentDetails.Channel;
    //            etisalatPaymentTrasaction.Language = transaction.EpaymentDetails.Language;
    //            etisalatPaymentTrasaction.SetProperty("Amount", transaction.Amount.ToString()); // Will Create a transaction to get amount from it
    //            etisalatPaymentTrasaction.SetProperty("Currency", transaction.EpaymentDetails.Currency);
    //            etisalatPaymentTrasaction.SetProperty("OrderName", transaction.ProductName); //productNameForEsitalatPayment Get The Product Name such as Travel
    //            etisalatPaymentTrasaction.SetProperty("OrderInfo", transaction.SegmentCode); //optional (quotationUserObject.Description: Segment_code)  will get value from user_properties.
    //            etisalatPaymentTrasaction.SetProperty("OrderID", transaction.EpaymentDetails.Id.ToString()); // (oCCTransaction.ID.ToString() : is the transaction id), optional but highly recommended to send unique Order ID
    //            etisalatPaymentTrasaction.SetProperty("TransactionHint", "CPT:Y"); // optional parameter
    //            etisalatPaymentTrasaction.SetProperty("Recurrence/Type", "M"); // Parameter to indicate EPG to save Credit Card for sebsequent Recurrence
    //            etisalatPaymentTrasaction.SetProperty("ReturnPath", transaction.EpaymentDetails.ReturnPath + "?TransactionID=" + transaction.EpaymentDetails.Id);// (Send Finalaization Api path with LocalTansactionID instead of webform finalization) // At this point the registration request will sent to payment gateway with the above configrations.

    //            etisalatPaymentTrasaction.Execute();

    //            transaction.AutoLogId = etisalatPaymentTrasaction.GetProperty("TransactionID");
    //            transaction.AcquirerId = etisalatPaymentTrasaction.GetProperty("PaymentPage");
    //            _repositoryUnitOfWork.CpEpaymentTransactions.Value.Update(transaction);

    //            return new ResponseResult<CpEpaymentTransactions>()
    //            {
    //                Status = ResultStatus.Success,
    //                Data = transaction,
    //            };
    //        }

    //        throw new Exception("Transaction Not Found");
    //    }
    //    // need review
    //    /// <summary>
    //    /// This Called When Return From Payment GateWay To Complete The Payment
    //    /// For Now Used For Etisalat Merchant GateWay
    //    /// Params:
    //    //TransactionID : Is The TransactionID For CustomerPortal
    //    /// </summary>
    //    /// <returns></returns>
    //    public IResponseResult<object> FinalizePayment(int LocalTransactionID)
    //    {
    //        string AccountNumber, AccountBrand, RecurrenceID, UniqeID, ApprovalCode, OrderID, TransactionID;

    //        CpEpaymentTransactions _cpEpaymentTransactions = new CpEpaymentTransactions();
    //        _cpEpaymentTransactions = _repositoryUnitOfWork.CpEpaymentTransactions.Value.Get(LocalTransactionID);
    //        SstEpaymentDetails _EpaymentDetails = _repositoryUnitOfWork.EpaymentDetails.Value.Get(1);

    //        Transaction _oPayment = new Transaction(false);
    //        _oPayment.Initialize("Finalization", "1.0");

    //        _oPayment.Customer = _EpaymentDetails.Customer;
    //        _oPayment.Connection = new Connection
    //        {
    //            Address = _EpaymentDetails.Address,
    //            CertificatePath = _EpaymentDetails.CertificatePath,
    //            CertificatePassword = _EpaymentDetails.CertificatePass,
    //            Port = _EpaymentDetails.Port.Value,
    //            IsSecure = _EpaymentDetails.IsSecure == 1 ? true : false,
    //            TimeOut = Convert.ToInt32(_EpaymentDetails.Timeout)
    //        };
    //        _oPayment.Channel = _EpaymentDetails.Channel;
    //        _oPayment.Language = _EpaymentDetails.Language;

    //        _oPayment.SetProperty("TransactionID", _cpEpaymentTransactions.AutoLogId.ToString());
    //        _oPayment.Execute();


    //        if (_oPayment.ResponseCode == 0)//Success
    //        {
    //            ApprovalCode = _oPayment.GetProperty("ApprovalCode");
    //            UniqeID = _oPayment.GetProperty("ApprovalCode");
    //            RecurrenceID = _oPayment.GetProperty("RecurrenceID");
    //            AccountBrand = _oPayment.GetProperty("AccountBrand");
    //            AccountNumber = _oPayment.GetProperty("AccountNumber");
    //            OrderID = _oPayment.GetProperty("OrderID");
    //            TransactionID = _oPayment.GetProperty("TransactionID");
    //        }
    //        else//Failed
    //        {
    //            return new ResponseResult<object>()
    //            {
    //                Status = ResultStatus.Failed,
    //                Data = null,
    //                Errors = new List<string>() { "ErrorPaymentServiceApi" }
    //            };
    //        }



    //        _cpEpaymentTransactions.LogId = ApprovalCode;
    //        _cpEpaymentTransactions.ResponseId = TransactionID;
    //        _cpEpaymentTransactions.Status = (int)PaymentTransactionStatus.Completed;
    //        _repositoryUnitOfWork.CpEpaymentTransactions.Value.Update(_cpEpaymentTransactions);

    //        return new ResponseResult<object>()
    //        {
    //            Status = ResultStatus.Success,
    //            Data = _cpEpaymentTransactions,
    //        };
    //    }
    //}
}