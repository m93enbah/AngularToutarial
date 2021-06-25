using System;
using System.Collections.Generic;
using SharedComponents.Domain.Common;
namespace SharedComponents.Domain.Models
{
    public partial class SstIntegrationsSettings : BaseModel
    {
        public SstIntegrationsSettings()
        {
            SstIntegrationsApiMapping = new HashSet<SstIntegrationsApiMapping>();
            SstIntegrationsDbMapping = new HashSet<SstIntegrationsDbMapping>();
        }

        public int? DbType { get; set; }
        public string DbSchema { get; set; }
        public string DbHost { get; set; }
        public int? DbPort { get; set; }
        public string DbService { get; set; }
        public string DbUser { get; set; }
        public string DbPassword { get; set; }
        public string ApiUrl { get; set; }
        public byte? ApiType { get; set; }
        public byte? ApiSourceType { get; set; }
        public byte? UrlType { get; set; }
        public string ServiceMethod { get; set; }
        public byte? AuthType { get; set; }
        public string ApiName { get; set; }
        public byte? HttpType { get; set; }
        public byte[] XmlStructure { get; set; }
        public long? IntegrationId { get; set; }
        public long? ProductId { get; set; }
        public long? ModuleCode { get; set; }

        public virtual SstIntegrations Integration { get; set; }
        public virtual SpdProducts Product { get; set; }
        public virtual ICollection<SstIntegrationsApiMapping> SstIntegrationsApiMapping { get; set; }
        public virtual ICollection<SstIntegrationsDbMapping> SstIntegrationsDbMapping { get; set; }
    }
}
