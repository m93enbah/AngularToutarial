
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SharedComponents.Domain.Common;
using SharedComponents.Domain.Enums;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Interfaces.Services;
using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Models;
using SharedComponents.Service.Extension;

namespace SharedIntegrations.Service.Services
{
    public class IntegrationsSettingsService : IIntegrationsSettingsService
    {
        private IRepositoryUnitOfWork _repositoryUnitOfWork;
        public IntegrationsSettingsService(IRepositoryUnitOfWork repositoryUnitOfWork)
        {
            _repositoryUnitOfWork = repositoryUnitOfWork;
        }
        public IResponseResult<SstIntegrationsSettings> Add(SstIntegrationsSettings entity)
        {
            _repositoryUnitOfWork.IntegrationsSetting.Value.Add(entity);
            return new ResponseResult<SstIntegrationsSettings>() { Status = ResultStatus.Success, Data = entity };
        }
        public IResponseResult<IEnumerable<SstIntegrationsSettings>> AddRange(IEnumerable<SstIntegrationsSettings> entities)
        {
            _repositoryUnitOfWork.IntegrationsSetting.Value.AddRange(entities);
            return new ResponseResult<IEnumerable<SstIntegrationsSettings>>() { Status = ResultStatus.Success, Data = entities };
        }

        public IResponseResult<SstIntegrationsSettings> Get(long id, int companyId)
        {
            var result = _repositoryUnitOfWork.IntegrationsSetting.Value.Get(id, companyId);
            return new ResponseResult<SstIntegrationsSettings>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SstIntegrationsSettings> Get(long id)
        {
            var result = _repositoryUnitOfWork.IntegrationsSetting.Value.Get(id);
            return new ResponseResult<SstIntegrationsSettings>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<IEnumerable<SstIntegrationsSettings>> GetAll()
        {
            var result = _repositoryUnitOfWork.IntegrationsSetting.Value.GetAll().GetList();
            return new ResponseResult<IEnumerable<SstIntegrationsSettings>>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SstIntegrationsSettings> Remove(SstIntegrationsSettings entity)
        {
            var result = _repositoryUnitOfWork.IntegrationsSetting.Value.Remove(entity);
            return new ResponseResult<SstIntegrationsSettings>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<SstIntegrationsSettings> Update(SstIntegrationsSettings entity)
        {
            _repositoryUnitOfWork.IntegrationsSetting.Value.Update(entity);
            return new ResponseResult<SstIntegrationsSettings>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<IEnumerable<SstIntegrationsSettings>> RemoveRange(IEnumerable<SstIntegrationsSettings> models)
        {
            _repositoryUnitOfWork.IntegrationsSetting.Value.RemoveRange(models);
            return new ResponseResult<IEnumerable<SstIntegrationsSettings>>() { Status = ResultStatus.Success, Data = models };
        }
    }
}
