using SharedComponents.Domain.Enum;
using SharedComponents.Domain.Enums;
using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Models;
using System.Collections.Generic;
using System.Data;

namespace SharedComponents.Domain.Interfaces.Services
{
    public interface IIntegrationsDbMappingService : IService<SstIntegrationsDbMapping>
    {
        IResponseResult<DataRowCollection> ExecuteSql(long integrationSettingId, Dictionary<string, string> controlValues, DDLSqlType sqlType, int? id);
        IResponseResult<DataRowCollection> GetTableColumns(long integrationSettingId, string tableName);
        IResponseResult<DataRowCollection> GetSchemaTables(long integrationSettingId);
    }
}