using SharedComponents.Domain.Common;
using SharedComponents.Domain.Enums;
using SharedComponents.Domain.Interfaces.Services;
using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using DOMAIN.Context;
using SharedComponents.Repository.UnitOfWork;
using System.Linq;

namespace SharedComponents.Service.Services
{
    public class SmsProviderService : ISmsProviderService
    {
        private IRepositoryUnitOfWork _repositoryUnitOfWork;
        public SmsProviderService(IRepositoryUnitOfWork repositoryUnitOfWork)
        {
            _repositoryUnitOfWork = repositoryUnitOfWork;
        }

        public IResponseResult<SstSmsProviders> Add(SstSmsProviders entity)
        {
            _repositoryUnitOfWork.SmsProvider.Value.Add(entity);
            return new ResponseResult<SstSmsProviders>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<IEnumerable<SstSmsProviders>> AddRange(IEnumerable<SstSmsProviders> entities)
        {
            _repositoryUnitOfWork.SmsProvider.Value.AddRange(entities);
            return new ResponseResult<IEnumerable<SstSmsProviders>>() { Status = ResultStatus.Success, Data = entities };
        }

        public IResponseResult<SstSmsProviders> Get(long id, int companyId)
        {
            var result = _repositoryUnitOfWork.SmsProvider.Value.Get(id, companyId);
            return new ResponseResult<SstSmsProviders>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SstSmsProviders> Get(long id)
        {
            var result = _repositoryUnitOfWork.SmsProvider.Value.Get(id);
            return new ResponseResult<SstSmsProviders>() { Status = ResultStatus.Success, Data = result };
        }


        public IResponseResult<IEnumerable<SstSmsProviders>> GetAll()
        {
            var result = _repositoryUnitOfWork.SmsProvider.Value.GetAll().ToList();
            return new ResponseResult<IEnumerable<SstSmsProviders>>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SstSmsProviders> Remove(SstSmsProviders entity)
        {
            var result = _repositoryUnitOfWork.SmsProvider.Value.Remove(entity);
            return new ResponseResult<SstSmsProviders>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<IEnumerable<SstSmsProviders>> RemoveRange(IEnumerable<SstSmsProviders> entities)
        {
            _repositoryUnitOfWork.SmsProvider.Value.RemoveRange(entities);
            return new ResponseResult<IEnumerable<SstSmsProviders>>() { Status = ResultStatus.Success, Data = entities };
        }

        public IResponseResult<SstSmsProviders> Update(SstSmsProviders entity)
        {
            _repositoryUnitOfWork.SmsProvider.Value.Update(entity);
            return new ResponseResult<SstSmsProviders>() { Status = ResultStatus.Success, Data = entity };
        }
    }
}