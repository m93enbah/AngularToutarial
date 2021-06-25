
using DOMAIN.Context;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Models;
using SharedComponents.Repository.Common;

namespace SharedComponents.Repository.Repositories
{
    public class ProductsFormControlsRepository : Repository<SpdFormControls>, IProductsFormControlsRepository
    {
        private SharedComponentsDBContext _context;
        public ProductsFormControlsRepository(SharedComponentsDBContext context) : base(context)
        {
            _context = context;
        }
    }
}