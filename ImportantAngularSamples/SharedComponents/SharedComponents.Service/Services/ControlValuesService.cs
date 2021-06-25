using SharedComponents.Domain.Common;
using SharedComponents.Domain.Enums;
using SharedComponents.Domain.Extension;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Interfaces.Services;
using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Models;
using System.Collections.Generic;
using System.Linq;

namespace SharedComponents.Service.Services
{
    public class ControlValuesService : IControlValuesService
    {
        private IRepositoryUnitOfWork _repositoryUnitOfWork;
        public ControlValuesService(IRepositoryUnitOfWork repositoryUnitOfWork)
        {
            _repositoryUnitOfWork = repositoryUnitOfWork;
        }
        public IResponseResult<SpdControlValues> Add(SpdControlValues entity)
        {
            _repositoryUnitOfWork.ControlValues.Value.Add(entity);
            return new ResponseResult<SpdControlValues>() { Status = ResultStatus.Success, Data = entity };
        }
        public IResponseResult<IEnumerable<SpdControlValues>> AddRange(IEnumerable<SpdControlValues> entities)
        {
            _repositoryUnitOfWork.ControlValues.Value.AddRange(entities);
            return new ResponseResult<IEnumerable<SpdControlValues>>() { Status = ResultStatus.Success, Data = entities };
        }

        public IResponseResult<SpdControlValues> Get(long id, int companyId)
        {
            SpdControlValues result = _repositoryUnitOfWork.ControlValues.Value.Get(id, companyId);
            return new ResponseResult<SpdControlValues>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SpdControlValues> Get(long id)
        {
            SpdControlValues result = _repositoryUnitOfWork.ControlValues.Value.Get(id);
            return new ResponseResult<SpdControlValues>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<IEnumerable<SpdControlValues>> GetAll()
        {
            List<SpdControlValues> result = _repositoryUnitOfWork.ControlValues.Value.GetAll().ToList();
            return new ResponseResult<IEnumerable<SpdControlValues>>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SpdControlValues> Remove(SpdControlValues entity)
        {
            SpdControlValues result = _repositoryUnitOfWork.ControlValues.Value.Remove(entity);
            return new ResponseResult<SpdControlValues>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<SpdControlValues> Update(SpdControlValues entity)
        {
            _repositoryUnitOfWork.ControlValues.Value.Update(entity);
            return new ResponseResult<SpdControlValues>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<IEnumerable<SpdControlValues>> RemoveRange(IEnumerable<SpdControlValues> models)
        {
            _repositoryUnitOfWork.ControlValues.Value.RemoveRange(models);
            return new ResponseResult<IEnumerable<SpdControlValues>>() { Status = ResultStatus.Success, Data = models };
        }

        public IResponseResult<IEnumerable<SpdControlValues>> GetByCriteria(SearchControlValues search)
        {
            List<SpdControlValues> result = _repositoryUnitOfWork.ControlValues.Value.GetByCriteria(search).GetList();
            return new ResponseResult<IEnumerable<SpdControlValues>>() { Status = ResultStatus.Success, Data = result };
        }
    }
}