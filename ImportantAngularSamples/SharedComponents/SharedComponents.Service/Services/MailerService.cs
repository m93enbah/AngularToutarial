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
    public class MailerService : IMailerService
    {
        private IRepositoryUnitOfWork _repositoryUnitOfWork;
        public MailerService(IRepositoryUnitOfWork repositoryUnitOfWork)
        {
            _repositoryUnitOfWork = repositoryUnitOfWork;
        }

        public IResponseResult<SstMailer> Add(SstMailer entity)
        {
            _repositoryUnitOfWork.Mailer.Value.Add(entity);
            return new ResponseResult<SstMailer>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<IEnumerable<SstMailer>> AddRange(IEnumerable<SstMailer> entities)
        {
            _repositoryUnitOfWork.Mailer.Value.AddRange(entities);
            return new ResponseResult<IEnumerable<SstMailer>>() { Status = ResultStatus.Success, Data = entities };
        }

        public IResponseResult<SstMailer> Get(long id, int companyId)
        {
            var result = _repositoryUnitOfWork.Mailer.Value.Get(id, companyId);
            return new ResponseResult<SstMailer>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SstMailer> Get(long id)
        {
            var result = _repositoryUnitOfWork.Mailer.Value.Get(id);
            return new ResponseResult<SstMailer>() { Status = ResultStatus.Success, Data = result };
        }


        public IResponseResult<IEnumerable<SstMailer>> GetAll()
        {
            var result = _repositoryUnitOfWork.Mailer.Value.GetAll().ToList();
            return new ResponseResult<IEnumerable<SstMailer>>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SstMailer> Remove(SstMailer entity)
        {
            var result = _repositoryUnitOfWork.Mailer.Value.Remove(entity);
            return new ResponseResult<SstMailer>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<IEnumerable<SstMailer>> RemoveRange(IEnumerable<SstMailer> entities)
        {
            _repositoryUnitOfWork.Mailer.Value.RemoveRange(entities);
            return new ResponseResult<IEnumerable<SstMailer>>() { Status = ResultStatus.Success, Data = entities };
        }

        public IResponseResult<SstMailer> Update(SstMailer entity)
        {
            _repositoryUnitOfWork.Mailer.Value.Update(entity);
            return new ResponseResult<SstMailer>() { Status = ResultStatus.Success, Data = entity };
        }
    }
}