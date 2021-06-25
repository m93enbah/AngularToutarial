using DOMAIN.Context;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Models;
using SharedComponents.Repository.Common;

namespace SharedComponents.Repository.Repositories
{
    public class MailerRepository : Repository<SstMailer>, IMailerRepository
    {
        private SharedComponentsDBContext _context;
        public MailerRepository(SharedComponentsDBContext context) : base(context)
        {
            _context = context;
        }
    }
}