using SharedComponents.Domain.Common;
using SharedComponents.Domain.Enums;
using SharedComponents.Domain.Interfaces.Services;
using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Models;
using System.Collections.Generic;
using System.Linq;
using System;
using SharedComponents.Domain.Models.SearchCriteria;

namespace SharedComponents.Service.Services
{
    public class ProductsDetailsService : IProductsDetailsService
    {
        private IRepositoryUnitOfWork _repositoryUnitOfWork;
        public ProductsDetailsService(IRepositoryUnitOfWork repositoryUnitOfWork)
        {
            _repositoryUnitOfWork = repositoryUnitOfWork;
        }
        public IResponseResult<SpdProductsDetails> Add(SpdProductsDetails entity)
        {
            _repositoryUnitOfWork.ProductsDetails.Value.Add(entity);
            return new ResponseResult<SpdProductsDetails>() { Status = ResultStatus.Success, Data = entity };
        }
        public IResponseResult<IEnumerable<SpdProductsDetails>> AddRange(IEnumerable<SpdProductsDetails> entities)
        {
            _repositoryUnitOfWork.ProductsDetails.Value.AddRange(entities);
            return new ResponseResult<IEnumerable<SpdProductsDetails>>() { Status = ResultStatus.Success, Data = entities };
        }

        public IResponseResult<SpdProductsDetails> Get(long id, int companyId)
        {
            var result = _repositoryUnitOfWork.ProductsDetails.Value.Get(id, companyId);
            return new ResponseResult<SpdProductsDetails>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SpdProductsDetails> Get(long id)
        {
            var result = _repositoryUnitOfWork.ProductsDetails.Value.Get(id);
            return new ResponseResult<SpdProductsDetails>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<IEnumerable<SpdProductsDetails>> GetAll()
        {
            var result = _repositoryUnitOfWork.ProductsDetails.Value.GetAll().ToList();
            return new ResponseResult<IEnumerable<SpdProductsDetails>>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SpdProductsDetails> Remove(SpdProductsDetails entity)
        {
            var result = _repositoryUnitOfWork.ProductsDetails.Value.Remove(entity);
            return new ResponseResult<SpdProductsDetails>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<SpdProductsDetails> Update(SpdProductsDetails entity)
        {
            _repositoryUnitOfWork.ProductsDetails.Value.Update(entity);
            return new ResponseResult<SpdProductsDetails>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<IEnumerable<SpdProductsDetails>> RemoveRange(IEnumerable<SpdProductsDetails> models)
        {
            throw new NotImplementedException();
        }

        public IResponseResult<IEnumerable<SpdProductsDetails>> GetByCriteria(SearchProductDetails search)
        {
            var result = _repositoryUnitOfWork.ProductsDetails.Value.GetByCriteria(search).ToList();
            return new ResponseResult<IEnumerable<SpdProductsDetails>>() { Status = ResultStatus.Success, Data = result };
        }
    }
}

