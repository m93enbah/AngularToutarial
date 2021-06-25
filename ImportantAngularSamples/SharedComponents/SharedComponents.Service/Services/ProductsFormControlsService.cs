using SharedComponents.Domain.Common;
using SharedComponents.Domain.Enums;
using SharedComponents.Domain.Interfaces.Services;
using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Models;
using System.Collections.Generic;
using System.Linq;
using System;

namespace SharedComponents.Service.Services
{
    public class ProductsFormControlsService : IProductsFormControlsService
    {
        private IRepositoryUnitOfWork _repositoryUnitOfWork;
        public ProductsFormControlsService(IRepositoryUnitOfWork repositoryUnitOfWork)
        {
            _repositoryUnitOfWork = repositoryUnitOfWork;
        }
        public IResponseResult<SpdFormControls> Add(SpdFormControls entity)
        {
            _repositoryUnitOfWork.ProductsFormControls.Value.Add(entity);
            return new ResponseResult<SpdFormControls>() { Status = ResultStatus.Success, Data = entity };
        }
        public IResponseResult<IEnumerable<SpdFormControls>> AddRange(IEnumerable<SpdFormControls> entities)
        {
            _repositoryUnitOfWork.ProductsFormControls.Value.AddRange(entities);
            return new ResponseResult<IEnumerable<SpdFormControls>>() { Status = ResultStatus.Success, Data = entities };
        }

        public IResponseResult<SpdFormControls> Get(long id, int companyId)
        {
            var result = _repositoryUnitOfWork.ProductsFormControls.Value.Get(id, companyId);
            return new ResponseResult<SpdFormControls>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SpdFormControls> Get(long id)
        {
            var result = _repositoryUnitOfWork.ProductsFormControls.Value.Get(id);
            return new ResponseResult<SpdFormControls>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<IEnumerable<SpdFormControls>> GetAll()
        {
            var result = _repositoryUnitOfWork.ProductsFormControls.Value.GetAll().ToList();
            return new ResponseResult<IEnumerable<SpdFormControls>>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SpdFormControls> Remove(SpdFormControls entity)
        {
            var result = _repositoryUnitOfWork.ProductsFormControls.Value.Remove(entity);
            return new ResponseResult<SpdFormControls>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<SpdFormControls> Update(SpdFormControls entity)
        {
            _repositoryUnitOfWork.ProductsFormControls.Value.Update(entity);
            return new ResponseResult<SpdFormControls>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<IEnumerable<SpdFormControls>> RemoveRange(IEnumerable<SpdFormControls> models)
        {
            throw new NotImplementedException();
        }
    }
}