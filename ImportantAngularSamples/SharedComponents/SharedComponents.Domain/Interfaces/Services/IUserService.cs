using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace SharedComponents.Domain.Interfaces.Services
{
    public interface IUserService : IService<SstUsers>
    {
        IResponseResult<SstUsers> Get(string username);
    }
}