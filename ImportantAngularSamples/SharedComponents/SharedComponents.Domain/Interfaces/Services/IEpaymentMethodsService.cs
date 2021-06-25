using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Models;

namespace SharedComponents.Domain.Interfaces.Services
{
    public interface IEpaymentMethodsService : IService<SstEpaymentMethods>
    {
        IResponseResult<CpEpaymentTransactions> ExecuteEtisalatPayment(int transactionId);
    }
}