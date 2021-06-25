using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using SharedComponents.Domain.Models;
using SharedComponents.Domain.Interfaces.Services;
using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Enums;
using System.Data;
using System;
using SharedComponents.Api.Filters;
using SharedComponents.Domain.Enum;

namespace SharedComponents.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IntegrationsDbMappingController : ControllerBase
    {
        private readonly IServiceUnitOfWork _serviceUnitOfWork;

        public IntegrationsDbMappingController(IServiceUnitOfWork serviceUnitOfWork)
        {
            _serviceUnitOfWork = serviceUnitOfWork;
        }

        [HttpGet]
        public IResponseResult<IEnumerable<SstIntegrationsDbMapping>> GetAll()
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.IntegrationsDbMapping.Value.GetAll();
        }

        [HttpGet("{id}")]
        public IResponseResult<SstIntegrationsDbMapping> Get(long id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.IntegrationsDbMapping.Value.Get(id);
        }

        [HttpPut]
        public IResponseResult<SstIntegrationsDbMapping> Update(SstIntegrationsDbMapping Integrations)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.IntegrationsDbMapping.Value.Update(Integrations);
        }

        [HttpPost]
        public IResponseResult<SstIntegrationsDbMapping> Add(SstIntegrationsDbMapping Integrations)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.IntegrationsDbMapping.Value.Add(Integrations);
        }

        [HttpDelete("{id}")]
        public IResponseResult<SstIntegrationsDbMapping> Delete(int id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.IntegrationsDbMapping.Value.Remove(new SstIntegrationsDbMapping() { Id = id });
        }

        [HttpGet("ExecuteSql")]
        public IResponseResult<DataRowCollection> ExecuteSql(long integrationSettingId, Dictionary<string, string> controlValues, DDLSqlType sqlType, int? id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.IntegrationsDbMapping.Value.ExecuteSql(integrationSettingId, controlValues, sqlType, id);
        }

        [HttpGet("GetTableColumns")]
        public IResponseResult<DataRowCollection> GetTableColumns(long integrationSettingId, string tableName)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.IntegrationsDbMapping.Value.GetTableColumns(integrationSettingId, tableName);
        }

        [HttpGet("GetTables")]
        public IResponseResult<DataRowCollection> GetSchemaTables(long integrationSettingId)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.IntegrationsDbMapping.Value.GetSchemaTables(integrationSettingId);
        }



        [HttpPost("InsertBulk")]
        public IResponseResult<IEnumerable<SstIntegrationsDbMapping>> AddRange(List<SstIntegrationsDbMapping> items)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.IntegrationsDbMapping.Value.AddRange(items);
        }
    }
}