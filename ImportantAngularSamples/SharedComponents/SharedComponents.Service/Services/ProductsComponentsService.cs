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
    public class ProductsComponentsService : IProductsComponentsService
    {
        private IRepositoryUnitOfWork _repositoryUnitOfWork;
        public ProductsComponentsService(IRepositoryUnitOfWork repositoryUnitOfWork)
        {
            _repositoryUnitOfWork = repositoryUnitOfWork;
        }
        public IResponseResult<SpdComponents> Add(SpdComponents entity)
        {
            _repositoryUnitOfWork.ProductsComponents.Value.Add(entity);
            return new ResponseResult<SpdComponents>() { Status = ResultStatus.Success, Data = entity };
        }
        public IResponseResult<IEnumerable<SpdComponents>> AddRange(IEnumerable<SpdComponents> entities)
        {
            var components = _repositoryUnitOfWork.ProductsComponents.Value.Find(item => item.StepId == entities.FirstOrDefault().StepId).ToList();

            _repositoryUnitOfWork.ProductsComponents.Value.AddRange(entities, (x) => _repositoryUnitOfWork.ProductsComponents.Value.RemoveRange(components));
            return new ResponseResult<IEnumerable<SpdComponents>>() { Status = ResultStatus.Success, Data = entities };
        }

        public IResponseResult<SpdComponents> Get(long id, int companyId)
        {
            var result = _repositoryUnitOfWork.ProductsComponents.Value.Get(id, companyId);
            return new ResponseResult<SpdComponents>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SpdComponents> Get(long id)
        {
            var result = _repositoryUnitOfWork.ProductsComponents.Value.Get(id);
            return new ResponseResult<SpdComponents>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<IEnumerable<SpdComponents>> GetAll()
        {
            var result = _repositoryUnitOfWork.ProductsComponents.Value.GetAll().ToList();
            return new ResponseResult<IEnumerable<SpdComponents>>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SpdComponents> Remove(SpdComponents entity)
        {
            var result = _repositoryUnitOfWork.ProductsComponents.Value.Remove(entity);
            return new ResponseResult<SpdComponents>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<SpdComponents> Update(SpdComponents entity)
        {
            _repositoryUnitOfWork.ProductsComponents.Value.Update(entity);
            return new ResponseResult<SpdComponents>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<IEnumerable<SpdComponents>> RemoveRange(IEnumerable<SpdComponents> models)
        {
            throw new NotImplementedException();
        }
        public IResponseResult<IEnumerable<SpdComponents>> GetByCriteria(SearchProductComponents search)
        {
            var result = _repositoryUnitOfWork.ProductsComponents.Value.GetByCriteria(search).ToList();
            return new ResponseResult<IEnumerable<SpdComponents>>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<IEnumerable<SpdComponents>> DeleteByStepId(SpdComponents spdComponents)
        {
            var components = _repositoryUnitOfWork.ProductsComponents.Value.Find(item => item.StepId == spdComponents.StepId.Value).ToList();

            var entities = _repositoryUnitOfWork.ProductsComponents.Value.RemoveRange(_repositoryUnitOfWork.ProductsComponents.Value.RemoveRange(components));
            return new ResponseResult<IEnumerable<SpdComponents>>() { Status = ResultStatus.Success, Data = entities };
        }
    }
}
