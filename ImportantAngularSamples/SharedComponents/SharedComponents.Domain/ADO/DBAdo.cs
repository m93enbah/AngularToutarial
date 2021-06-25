using Microsoft.Practices.EnterpriseLibrary.Common.Configuration;
using Microsoft.Practices.EnterpriseLibrary.Data;
using SharedComponents.Domain.Enums;
using System.Collections.Generic;
using System.Data.Common;
using System.Linq;
using System.IO;
using Microsoft.SqlServer.TransactSql.ScriptDom;
using System.Data;
using System;
using SharedComponents.Domain.Models;

namespace SharedComponents.Domain.ADO
{
   public class DBAdo
   {
       public DataRowCollection _ExecuteQuery(SstIntegrationsSettings integrationsSettings, DataBaseType dataBaseType, string sqlStatment)
       {
           if (_ValidateSql(sqlStatment) != null)
               throw new Exception("Invalid Sql Statment");
           DataRowCollection dataset = default(DataRowCollection);
           var connectionString = _GetConnectionString(integrationsSettings);
           var db = _SetupDataBase(connectionString, dataBaseType);

           using (DbCommand cmd = db.GetSqlStringCommand(sqlStatment))
               dataset = db.ExecuteDataSet(cmd).Tables[0].Rows;

           return dataset;
       }
       public void _ExecuteNonQuery(SstIntegrationsSettings integrationsSettings, DataBaseType dbType, string sqlStatment)
       {
           if (_ValidateSql(sqlStatment) != null)
               throw new Exception("Invalid Sql Statment");

           var connectionString = _GetConnectionString(integrationsSettings);
           var db = _SetupDataBase(connectionString, dbType);
           using (DbCommand cmd = db.GetSqlStringCommand(sqlStatment))
               db.ExecuteNonQuery(cmd);
       }
       private Database _SetupDataBase(string connectionString, DataBaseType dbType)
       {
           DatabaseFactory.SetDatabaseProviderFactory(new DatabaseProviderFactory(new SystemConfigurationSource(false).GetSection), false);

           if (dbType == DataBaseType.MySql)
               return new GenericDatabase(connectionString, new MySqlProvider());

           return null;
       }
       private List<string> _ValidateSql(string sql)
       {
           var errors = new List<string>();
           TSql140Parser parser = new TSql140Parser(false);
           TSqlFragment fragment;
           IList<Microsoft.SqlServer.TransactSql.ScriptDom.ParseError> parseErrors;

           using (TextReader reader = new StringReader(sql))
           {
               fragment = parser.Parse(reader, out parseErrors);
               if (parseErrors != null && parseErrors.Count > 0)
               {
                   return parseErrors.Select(e => e.Message).ToList();
               }
           }
           return null;
       }
       private string _GetConnectionString(SstIntegrationsSettings integrationsSettings)
       {
           if (integrationsSettings.DbType == (int)DataBaseType.MySql)
               return string.Format("server={0};port={1};user={2};password={3};database={4}", integrationsSettings.DbHost, integrationsSettings.DbPort, integrationsSettings.DbUser, integrationsSettings.DbPassword, integrationsSettings.DbSchema);

           else if (integrationsSettings.DbType == (int)DataBaseType.Sql)
               return string.Format("Persist Security Info=False;Data Source={0};Database={1};Timeout=200;user id={2};password={3}", integrationsSettings.DbHost, integrationsSettings.DbSchema, integrationsSettings.DbUser, integrationsSettings.DbPassword);

           else if (integrationsSettings.DbType == (int)DataBaseType.Oracle)
               return "";

           return "";
       }
   }
}       
