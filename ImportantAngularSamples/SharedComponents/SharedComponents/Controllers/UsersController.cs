using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SharedComponents.Domain.Interfaces.Services;
using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Models;

namespace SharedComponents.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IServiceUnitOfWork _serviceUnitOfWork;

        public UsersController(IServiceUnitOfWork serviceUnitOfWork)
        {
            _serviceUnitOfWork = serviceUnitOfWork;
        }


        [HttpGet("{username}")]
        public IResponseResult<SstUsers> Get(string username)
        {
            using (_serviceUnitOfWork)
            {
                return _serviceUnitOfWork.User.Value.Get(username);
            }
        }

        [HttpPut]
        public IResponseResult<SstUsers> Update(SstUsers user)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.User.Value.Update(user);

        }
    }
}