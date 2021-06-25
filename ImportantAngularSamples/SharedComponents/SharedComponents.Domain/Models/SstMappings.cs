using System;
using System.Collections.Generic;
using SharedComponents.Domain.Common;
namespace SharedComponents.Domain.Models
{
    public partial class SstMappings : BaseModel
    {
        public string Name { get; set; }
        public string Name2 { get; set; }
        public byte? SourceType { get; set; }
        public byte? DbType { get; set; }
        public string DbHost { get; set; }
        public byte? DbPort { get; set; }
        public string DbService { get; set; }
        public string DbUser { get; set; }
        public string DbPassword { get; set; }
        public byte[] ApiUrl { get; set; }
        public byte? ApiType { get; set; }
        public byte? AuthType { get; set; }
        public string Notes { get; set; }
        public long ModuleCode { get; set; }
        public long IntegrationId { get; set; }
    }
}
