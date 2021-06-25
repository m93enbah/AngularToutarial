using DOMAIN.Context;
using Microsoft.EntityFrameworkCore;
using SharedComponents.Domain.ADO;
using SharedComponents.Domain.Enum;
using SharedComponents.Domain.Enums;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Models;
using SharedComponents.Repository.Common;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;

namespace SharedComponents.Repository.Repositories
{
    public class IntegrationsDbMappingRepository : Repository<SstIntegrationsDbMapping>, IIntegrationsDbMappingRepository
    {
        private SharedComponentsDBContext _context;
        public IntegrationsDbMappingRepository(SharedComponentsDBContext context) : base(context)
        {
            _context = context;
        }

        public DataRowCollection ExecuteSql(long integrationSettingId, Dictionary<string, string> controlValues, DDLSqlType sqlType, int? id)
        {
            var sqlStatment = default(string);
            var dbManger = new DBAdo();
            var integrationSettings = _context.SstIntegrationsSettings.AsNoTracking().Where(entity => entity.Id == integrationSettingId).First();

            if (sqlType == DDLSqlType.Insert)
            {
                sqlStatment = _FormatInsertStatement(integrationSettingId, controlValues);
                dbManger._ExecuteNonQuery(integrationSettings, (DataBaseType)Enum.Parse(typeof(DataBaseType), integrationSettings.DbType.ToString()), sqlStatment);
            }
            else if (sqlType == DDLSqlType.Update)
            {
                sqlStatment = _FormatUpdateStatement(integrationSettingId, controlValues, id.Value);
                dbManger._ExecuteNonQuery(integrationSettings, (DataBaseType)Enum.Parse(typeof(DataBaseType), integrationSettings.DbType.ToString()), sqlStatment);

            }
            else if (sqlType == DDLSqlType.Load)
            {
                sqlStatment = _FormatLoadStatement(integrationSettingId, controlValues, id.Value);
                return dbManger._ExecuteQuery(integrationSettings, (DataBaseType)Enum.Parse(typeof(DataBaseType), integrationSettings.DbType.ToString()), sqlStatment);
            }
            else if (sqlType == DDLSqlType.Delete)
            {
                sqlStatment = _FormatDeleteStatement(integrationSettingId, controlValues, id.Value);
                dbManger._ExecuteNonQuery(integrationSettings, (DataBaseType)Enum.Parse(typeof(DataBaseType), integrationSettings.DbType.ToString()), sqlStatment);
            }
            return null;
        }
        public DataRowCollection GetSchemaTables(long integrationSettingId)
        {
            var dbManger = new DBAdo();
            var integrationSttings = _context.SstIntegrationsSettings.AsNoTracking().Where(entity => entity.Id == integrationSettingId).FirstOrDefault();
            var sqlStatment = string.Format("SELECT Table_Name FROM information_schema.tables where table_schema ='{0}'", integrationSttings.DbSchema);
            return dbManger._ExecuteQuery(integrationSttings, (DataBaseType)Enum.Parse(typeof(DataBaseType), integrationSttings.DbType.ToString()), sqlStatment);
        }
        public DataRowCollection GetTableColumns(long integrationSettingId, string tableName)
        {
            var dbManger = new DBAdo();
            var integrationSttings = _context.SstIntegrationsSettings.AsNoTracking().Where(entity => entity.Id == integrationSettingId).FirstOrDefault();
            var sqlStatment = string.Format("SELECT COLUMN_NAME FROM information_schema.columns WHERE  table_name='{0}'", tableName);
            return dbManger._ExecuteQuery(integrationSttings, (DataBaseType)Enum.Parse(typeof(DataBaseType), integrationSttings.DbType.ToString()), sqlStatment);
        }
        private string _FormatInsertStatement(long integrationSettingId, Dictionary<string, string> controlValues)
        {
            var mappings = _context.SstIntegrationsDbMapping.AsNoTracking().Where(entity => entity.SettingId == integrationSettingId).ToList();
            var query = "INSERT INTO " + mappings.FirstOrDefault().TableName + " ( " + (string.Join(',', mappings.OrderBy(x => x.Id).Select(entity => entity.ColumnName).ToArray())) + " ) VALUES (";

            var values = new List<string>();
            for (int i = 0; i < mappings.Count(); i++)
                values.Add(controlValues[mappings[i].ElementKey.ToString()]);

            return query + (string.Join(',', values.ToArray())) + ");";
        }
        private string _FormatUpdateStatement(long integrationSettingId, Dictionary<string, string> controlValues, int id)
        {
            var mappings = _context.SstIntegrationsDbMapping.Where(entity => entity.SettingId == integrationSettingId).ToList();
            var query = "UPDATE" + mappings.FirstOrDefault().TableName + " set";

            var values = new List<string>();
            for (int i = 0; i < mappings.Count; i++)
            {
                query = query + mappings[i].ColumnName + " = " + controlValues[mappings[i].ElementKey.ToString()];
                query = (i != mappings.Count) ? query + "," : query;
            }

            return query + "WHERE Id =" + id;
        }
        private string _FormatLoadStatement(long integrationSettingId, Dictionary<string, string> controlValues, int id)
        {
            var mappings = _context.SstIntegrationsDbMapping.Where(entity => entity.SettingId == integrationSettingId).ToList();
            return "SELECT" + string.Join(',', mappings.Select(entity => entity.ColumnName).ToArray()) + "FROM" + mappings.FirstOrDefault().TableName + "WHERE Id =" + id;
        }
        private string _FormatDeleteStatement(long integrationSettingId, Dictionary<string, string> controlValues, int? id = null)
        {
            var mappings = _context.SstIntegrationsDbMapping.Where(entity => entity.SettingId == integrationSettingId).ToList();
            return "Delete" + "FROM" + mappings.FirstOrDefault().TableName + "WHERE Id =" + id;
        }
    }
}