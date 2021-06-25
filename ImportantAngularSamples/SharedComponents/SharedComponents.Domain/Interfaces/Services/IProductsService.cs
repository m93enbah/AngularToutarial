using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Models;

namespace SharedComponents.Domain.Interfaces.Services
{
    public interface IProductsService : IService<SpdProducts>
    {
        IResponseResult<SpdProducts> DeepGet(long id);
        IResponseResult<SpdProducts> Clone(SpdProducts entity);
    }
}