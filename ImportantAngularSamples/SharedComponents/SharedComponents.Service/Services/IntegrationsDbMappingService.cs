using SharedComponents.Domain.Common;
using SharedComponents.Domain.Enum;
using SharedComponents.Domain.Enums;
using SharedComponents.Domain.Extension;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Interfaces.Services;
using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Models;
using System.Collections.Generic;
using System.Data;


namespace SharedIntegrations.Service.Services
{
    public class IntegrationsDbMappingService : IIntegrationsDbMappingService
    {
        private IRepositoryUnitOfWork _repositoryUnitOfWork;
        public IntegrationsDbMappingService(IRepositoryUnitOfWork repositoryUnitOfWork)
        {
            _repositoryUnitOfWork = repositoryUnitOfWork;
        }
        public IResponseResult<SstIntegrationsDbMapping> Add(SstIntegrationsDbMapping entity)
        {
            _repositoryUnitOfWork.IntegrationsDbMapping.Value.Add(entity);
            return new ResponseResult<SstIntegrationsDbMapping>() { Status = ResultStatus.Success, Data = entity };
        }
        public IResponseResult<IEnumerable<SstIntegrationsDbMapping>> AddRange(IEnumerable<SstIntegrationsDbMapping> entities)
        {
            _repositoryUnitOfWork.IntegrationsDbMapping.Value.AddRange(entities);
            return new ResponseResult<IEnumerable<SstIntegrationsDbMapping>>() { Status = ResultStatus.Success, Data = entities };
        }

        public IResponseResult<SstIntegrationsDbMapping> Get(long id, int companyId)
        {
            SstIntegrationsDbMapping result = _repositoryUnitOfWork.IntegrationsDbMapping.Value.Get(id, companyId);
            return new ResponseResult<SstIntegrationsDbMapping>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SstIntegrationsDbMapping> Get(long id)
        {
            SstIntegrationsDbMapping result = _repositoryUnitOfWork.IntegrationsDbMapping.Value.Get(id);
            return new ResponseResult<SstIntegrationsDbMapping>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<IEnumerable<SstIntegrationsDbMapping>> GetAll()
        {
            List<SstIntegrationsDbMapping> result = _repositoryUnitOfWork.IntegrationsDbMapping.Value.GetAll().GetList();
            return new ResponseResult<IEnumerable<SstIntegrationsDbMapping>>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SstIntegrationsDbMapping> Remove(SstIntegrationsDbMapping entity)
        {
            SstIntegrationsDbMapping result = _repositoryUnitOfWork.IntegrationsDbMapping.Value.Remove(entity);
            return new ResponseResult<SstIntegrationsDbMapping>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<SstIntegrationsDbMapping> Update(SstIntegrationsDbMapping entity)
        {
            _repositoryUnitOfWork.IntegrationsDbMapping.Value.Update(entity);
            return new ResponseResult<SstIntegrationsDbMapping>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<IEnumerable<SstIntegrationsDbMapping>> RemoveRange(IEnumerable<SstIntegrationsDbMapping> models)
        {
            _repositoryUnitOfWork.IntegrationsDbMapping.Value.RemoveRange(models);
            return new ResponseResult<IEnumerable<SstIntegrationsDbMapping>>() { Status = ResultStatus.Success, Data = models };
        }


        public IResponseResult<DataRowCollection> ExecuteSql(long integrationSettingId, Dictionary<string, string> controlValues, DDLSqlType sqlType, int? id)
        {
            DataRowCollection result = _repositoryUnitOfWork.IntegrationsDbMapping.Value.ExecuteSql(integrationSettingId, controlValues, sqlType, id);
            return new ResponseResult<DataRowCollection>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<DataRowCollection> GetSchemaTables(long integrationSettingId)
        {
            DataRowCollection result = _repositoryUnitOfWork.IntegrationsDbMapping.Value.GetSchemaTables(integrationSettingId);
            return new ResponseResult<DataRowCollection>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<DataRowCollection> GetTableColumns(long integrationSettingId, string tableName)
        {
            DataRowCollection result = _repositoryUnitOfWork.IntegrationsDbMapping.Value.GetTableColumns(integrationSettingId, tableName);
            return new ResponseResult<DataRowCollection>() { Status = ResultStatus.Success, Data = result };
        }
    }
}