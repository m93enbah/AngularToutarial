//...This class created by ESKADENIA Code Generator V3 -Date:5/15/2019 11:45:07 AM
using SharedComponents.Domain.Common;
using SharedComponents.Domain.Enums;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Interfaces.Services;
using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace SharedComponents.Service.Services
{
    public class UserService : IUserService
    {
        private IRepositoryUnitOfWork _repositoryUnitOfWork;

        public UserService(IRepositoryUnitOfWork repositoryUnitOfWork)
        {
            _repositoryUnitOfWork = repositoryUnitOfWork;
        }

        public IResponseResult<SstUsers> Add(SstUsers entity)
        {
            throw new NotImplementedException();
        }

        public IResponseResult<IEnumerable<SstUsers>> AddRange(IEnumerable<SstUsers> models)
        {
            throw new NotImplementedException();
        }

        public IResponseResult<SstUsers> Get(long Id, int companyId)
        {

            throw new NotImplementedException();
        }

        public IResponseResult<SstUsers> Get(string username)
        {
            var result = _repositoryUnitOfWork.User.Value.SingleOrDefault(
                entry => entry.Username.Trim().ToLower().Equals(username.Trim().ToLower()));

            if (result != null)
            {
                return new ResponseResult<SstUsers>() { Status = ResultStatus.Success, Data = result };
            }
            else
            {
                return new ResponseResult<SstUsers>() { Status = ResultStatus.Failed, Data = null };
            }

        }

        public IResponseResult<SstUsers> Get(long Id)
        {
            throw new NotImplementedException();
        }

        public IResponseResult<IEnumerable<SstUsers>> GetAll()
        {
            throw new NotImplementedException();
        }

        public IResponseResult<SstUsers> Remove(SstUsers entity)
        {
            throw new NotImplementedException();
        }

        public IResponseResult<SstUsers> Update(SstUsers entity)
        {
            var result = _repositoryUnitOfWork.User.Value.Update(entity);
            if (result == null)
            {
                return new ResponseResult<SstUsers>() { Status = ResultStatus.Failed, Data = null, Errors = new List<string>() { "#User404" } };
            }
            return new ResponseResult<SstUsers>() { Status = ResultStatus.Success, Data = result };

        }
        public IResponseResult<IEnumerable<SstUsers>> RemoveRange(IEnumerable<SstUsers> models)
        {
            throw new NotImplementedException();
        }
    }
}