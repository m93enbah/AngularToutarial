using System;
using System.Collections.Generic;
using System.Data;
using System.Text;
using SharedComponents.Domain.Enum;
using SharedComponents.Domain.Enums;
using SharedComponents.Domain.Models;

namespace SharedComponents.Domain.Interfaces.Repositories
{
    public interface IIntegrationsDbMappingRepository : IRepository<SstIntegrationsDbMapping>
    {
        DataRowCollection GetSchemaTables(long integrationSettingId);
        DataRowCollection GetTableColumns(long integrationSettingId, string tableName);
        DataRowCollection ExecuteSql(long integrationSettingId, Dictionary<string, string> controlValues, DDLSqlType sqlType, int? id);
    }
}    