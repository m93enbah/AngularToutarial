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
    public class ProductsStepsService : IProductsStepsService
    {
        private IRepositoryUnitOfWork _repositoryUnitOfWork;
        public ProductsStepsService(IRepositoryUnitOfWork repositoryUnitOfWork)
        {
            _repositoryUnitOfWork = repositoryUnitOfWork;
        }
        public IResponseResult<SpdProductsSteps> Add(SpdProductsSteps entity)
        {
            _repositoryUnitOfWork.ProductsStep.Value.Add(entity);
            return new ResponseResult<SpdProductsSteps>() { Status = ResultStatus.Success, Data = entity };
        }
        public IResponseResult<IEnumerable<SpdProductsSteps>> AddRange(IEnumerable<SpdProductsSteps> entities)
        {
            _repositoryUnitOfWork.ProductsStep.Value.AddRange(entities);
            return new ResponseResult<IEnumerable<SpdProductsSteps>>() { Status = ResultStatus.Success, Data = entities };
        }

        public IResponseResult<SpdProductsSteps> Get(long id, int companyId)
        {
            var result = _repositoryUnitOfWork.ProductsStep.Value.Get(id, companyId);
            return new ResponseResult<SpdProductsSteps>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SpdProductsSteps> Get(long id)
        {
            var result = _repositoryUnitOfWork.ProductsStep.Value.Get(id);
            return new ResponseResult<SpdProductsSteps>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<IEnumerable<SpdProductsSteps>> GetAll()
        {
            var result = _repositoryUnitOfWork.ProductsStep.Value.GetAll().ToList();
            return new ResponseResult<IEnumerable<SpdProductsSteps>>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SpdProductsSteps> Remove(SpdProductsSteps entity)
        {
            var result = _repositoryUnitOfWork.ProductsStep.Value.Remove(entity);
            return new ResponseResult<SpdProductsSteps>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<SpdProductsSteps> Update(SpdProductsSteps entity)
        {
            _repositoryUnitOfWork.ProductsStep.Value.Update(entity);
            return new ResponseResult<SpdProductsSteps>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<IEnumerable<SpdProductsSteps>> RemoveRange(IEnumerable<SpdProductsSteps> models)
        {
            throw new NotImplementedException();
        }

        public IResponseResult<IEnumerable<SpdProductsSteps>> GetByCriteria(SearchProductSteps search)
        {
            var result = _repositoryUnitOfWork.ProductsStep.Value.GetByCriteria(search).ToList();
            return new ResponseResult<IEnumerable<SpdProductsSteps>>() { Status = ResultStatus.Success, Data = result };
        }
    }
}