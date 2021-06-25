using SharedComponents.Domain.Models;

namespace SharedComponents.Domain.Interfaces.Repositories
{
   public interface IProductsRepository : IRepository<SpdProducts>
   {
       SpdProducts DeepGet(long id);
   }

} 