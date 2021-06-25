using SharedComponents.Domain.Common;
using SharedComponents.Domain.Enums;
using SharedComponents.Domain.Interfaces.Services;
using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Models;
using System.Collections.Generic;
using System.Linq;
using SharedComponents.Domain.Models.SearchCriteria;
using System;

namespace SharedComponents.Service.Services
{
    public class ProductsService : IProductsService
    {
        private IRepositoryUnitOfWork _repositoryUnitOfWork;
        public ProductsService(IRepositoryUnitOfWork repositoryUnitOfWork)
        {
            _repositoryUnitOfWork = repositoryUnitOfWork;
        }
        public IResponseResult<SpdProducts> Add(SpdProducts entity)
        {
            _repositoryUnitOfWork.Products.Value.Add(entity);
            return new ResponseResult<SpdProducts>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<SpdProducts> Clone(SpdProducts entity)
        {
            var cloneObject = (SpdProducts)entity.DeepClone();
            var result = _repositoryUnitOfWork.Products.Value.Add(cloneObject);
            return new ResponseResult<SpdProducts>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<IEnumerable<SpdProducts>> AddRange(IEnumerable<SpdProducts> entities)
        {
            _repositoryUnitOfWork.Products.Value.AddRange(entities);
            return new ResponseResult<IEnumerable<SpdProducts>>() { Status = ResultStatus.Success, Data = entities };
        }

        public IResponseResult<SpdProducts> Get(long id, int companyId)
        {
            var result = _repositoryUnitOfWork.Products.Value.Get(id, companyId);
            return new ResponseResult<SpdProducts>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SpdProducts> Get(long id)
        {
            var result = _repositoryUnitOfWork.Products.Value.Get(id);
            return new ResponseResult<SpdProducts>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<IEnumerable<SpdProducts>> GetAll()
        {
            var result = _repositoryUnitOfWork.Products.Value.GetAll().ToList();
            return new ResponseResult<IEnumerable<SpdProducts>>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SpdProducts> Remove(SpdProducts entity)
        {
            var result = _repositoryUnitOfWork.Products.Value.Remove(entity);
            return new ResponseResult<SpdProducts>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<SpdProducts> Update(SpdProducts entity)
        {
            _repositoryUnitOfWork.Products.Value.Update(entity);
            return new ResponseResult<SpdProducts>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<IEnumerable<SpdProducts>> RemoveRange(IEnumerable<SpdProducts> models)
        {
            throw new NotImplementedException();
        }

        public IResponseResult<SpdProducts> DeepGet(long id)
        {
            var result = _repositoryUnitOfWork.Products.Value.DeepGet(id);
            return new ResponseResult<SpdProducts>() { Status = ResultStatus.Success, Data = result };
        }
    }
}