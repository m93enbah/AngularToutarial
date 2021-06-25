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
    public class ProductsContainersService : IProductsContainersService
    {
        private IRepositoryUnitOfWork _repositoryUnitOfWork;
        public ProductsContainersService(IRepositoryUnitOfWork repositoryUnitOfWork)
        {
            _repositoryUnitOfWork = repositoryUnitOfWork;
        }
        public IResponseResult<SpdContainers> Add(SpdContainers entity)
        {
            _repositoryUnitOfWork.ProductsContainers.Value.Add(entity);
            return new ResponseResult<SpdContainers>() { Status = ResultStatus.Success, Data = entity };
        }
        public IResponseResult<IEnumerable<SpdContainers>> AddRange(IEnumerable<SpdContainers> entities)
        {
            var components = _repositoryUnitOfWork.ProductsContainers.Value.Find(item => item.ComponentId == entities.First().ComponentId).ToList();

            _repositoryUnitOfWork.ProductsContainers.Value.AddRange(entities, (x) => _repositoryUnitOfWork.ProductsContainers.Value.RemoveRange(components));
            return new ResponseResult<IEnumerable<SpdContainers>>() { Status = ResultStatus.Success, Data = entities };
        }

        public IResponseResult<SpdContainers> Get(long id, int companyId)
        {
            var result = _repositoryUnitOfWork.ProductsContainers.Value.Get(id, companyId);
            return new ResponseResult<SpdContainers>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SpdContainers> Get(long id)
        {
            var result = _repositoryUnitOfWork.ProductsContainers.Value.Get(id);
            return new ResponseResult<SpdContainers>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<IEnumerable<SpdContainers>> GetAll()
        {
            var result = _repositoryUnitOfWork.ProductsContainers.Value.GetAll().ToList();
            return new ResponseResult<IEnumerable<SpdContainers>>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SpdContainers> Remove(SpdContainers entity)
        {
            var result = _repositoryUnitOfWork.ProductsContainers.Value.Remove(entity);
            return new ResponseResult<SpdContainers>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<SpdContainers> Update(SpdContainers entity)
        {
            _repositoryUnitOfWork.ProductsContainers.Value.Update(entity);
            return new ResponseResult<SpdContainers>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<IEnumerable<SpdContainers>> RemoveRange(IEnumerable<SpdContainers> models)
        {
            throw new NotImplementedException();
        }

        public IResponseResult<IEnumerable<SpdContainers>> GetByCriteria(SearchProductContainers search)
        {
            var result = _repositoryUnitOfWork.ProductsContainers.Value.GetByCriteria(search).ToList();
            return new ResponseResult<IEnumerable<SpdContainers>>() { Status = ResultStatus.Success, Data = result };
        }
    }
}
