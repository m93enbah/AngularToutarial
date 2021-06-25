
using SharedComponents.Domain.Common;
using SharedComponents.Domain.Enums;
using SharedComponents.Domain.Extension;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Interfaces.Services;
using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Models;
using System.Collections.Generic;
using System.Linq;


namespace SharedIntegrations.Service.Services
{
    public class IntegrationsApiMappingService : IIntegrationsApiMappingService
    {
        private IRepositoryUnitOfWork _repositoryUnitOfWork;
        public IntegrationsApiMappingService(IRepositoryUnitOfWork repositoryUnitOfWork)
        {
            _repositoryUnitOfWork = repositoryUnitOfWork;
        }
        public IResponseResult<SstIntegrationsApiMapping> Add(SstIntegrationsApiMapping entity)
        {
            _repositoryUnitOfWork.IntegrationsApiMapping.Value.Add(entity);
            return new ResponseResult<SstIntegrationsApiMapping>() { Status = ResultStatus.Success, Data = entity };
        }
        public IResponseResult<IEnumerable<SstIntegrationsApiMapping>> AddRange(IEnumerable<SstIntegrationsApiMapping> entities)
        {
            _repositoryUnitOfWork.IntegrationsApiMapping.Value.AddRange(entities);
            return new ResponseResult<IEnumerable<SstIntegrationsApiMapping>>() { Status = ResultStatus.Success, Data = entities };
        }

        public IResponseResult<SstIntegrationsApiMapping> Get(long id, int companyId)
        {
            SstIntegrationsApiMapping result = _repositoryUnitOfWork.IntegrationsApiMapping.Value.Get(id, companyId);
            return new ResponseResult<SstIntegrationsApiMapping>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SstIntegrationsApiMapping> Get(long id)
        {
            SstIntegrationsApiMapping result = _repositoryUnitOfWork.IntegrationsApiMapping.Value.Get(id);
            return new ResponseResult<SstIntegrationsApiMapping>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<IEnumerable<SstIntegrationsApiMapping>> GetAll()
        {
            List<SstIntegrationsApiMapping> result = _repositoryUnitOfWork.IntegrationsApiMapping.Value.GetAll().GetList();
            return new ResponseResult<IEnumerable<SstIntegrationsApiMapping>>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SstIntegrationsApiMapping> Remove(SstIntegrationsApiMapping entity)
        {
            SstIntegrationsApiMapping result = _repositoryUnitOfWork.IntegrationsApiMapping.Value.Remove(entity);
            return new ResponseResult<SstIntegrationsApiMapping>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<SstIntegrationsApiMapping> Update(SstIntegrationsApiMapping entity)
        {
            _repositoryUnitOfWork.IntegrationsApiMapping.Value.Update(entity);
            return new ResponseResult<SstIntegrationsApiMapping>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<IEnumerable<SstIntegrationsApiMapping>> RemoveRange(IEnumerable<SstIntegrationsApiMapping> models)
        {
            _repositoryUnitOfWork.IntegrationsApiMapping.Value.RemoveRange(models);
            return new ResponseResult<IEnumerable<SstIntegrationsApiMapping>>() { Status = ResultStatus.Success, Data = models };
        }

        public IResponseResult<IEnumerable<SstIntegrationsApiMapping>> UpdateBulk(List<SstIntegrationsApiMapping> entities)
        {
            _repositoryUnitOfWork.IntegrationsApiMapping.Value.RemoveRange(_repositoryUnitOfWork.IntegrationsApiMapping.Value.Find(x => x.SettingId == entities.First().SettingId && x.TransactionType == entities.First().TransactionType)); // Delete Old  
            _repositoryUnitOfWork.IntegrationsApiMapping.Value.AddRange(entities); // insert new 
            return new ResponseResult<IEnumerable<SstIntegrationsApiMapping>>() { Status = ResultStatus.Success, Data = entities };
        }

    }
}
