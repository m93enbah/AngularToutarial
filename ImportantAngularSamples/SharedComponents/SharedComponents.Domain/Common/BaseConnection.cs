using System;
using System.Collections.Generic;
using System.Text;

namespace SharedComponents.Domain.Common
{
    public class BaseConnection
    {
        public static string ConnectionString { get; set; }
        public static string SchemName { get; set; }
    }
}   
