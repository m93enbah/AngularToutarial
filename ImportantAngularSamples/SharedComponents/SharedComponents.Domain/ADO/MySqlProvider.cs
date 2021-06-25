using MySql.Data.MySqlClient;
using System.Data.Common;

namespace SharedComponents.Domain.ADO
{
   public class MySqlProvider : DbProviderFactory
   {
       public static MySqlProvider Instance = new MySqlProvider();
       public override bool CanCreateDataSourceEnumerator => false;
       public override DbConnectionStringBuilder CreateConnectionStringBuilder() => new MySqlConnectionStringBuilder();
       public override DbConnection CreateConnection() => new MySqlConnection();
       public override DbCommandBuilder CreateCommandBuilder() => new MySqlCommandBuilder();
       public override DbCommand CreateCommand() => new MySqlCommand();
       public override DbParameter CreateParameter() => new MySqlParameter();
       public override DbDataAdapter CreateDataAdapter() => new MySqlDataAdapter();
   }
}      
