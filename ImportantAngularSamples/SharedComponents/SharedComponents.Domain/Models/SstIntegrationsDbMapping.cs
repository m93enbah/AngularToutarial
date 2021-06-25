using System;
using System.Collections.Generic;
using SharedComponents.Domain.Common;
namespace SharedComponents.Domain.Models
{
    public partial class SstIntegrationsDbMapping : BaseModel
    {
        public string TableName { get; set; }
        public string ColumnName { get; set; }
        public string ColumnType { get; set; }
        public int? ElementType { get; set; }
        public long? ElementId { get; set; }
        public string ElementKey { get; set; }
        public string DefaultValue { get; set; }
        public long? SettingId { get; set; }
        public long? ElemenetParent { get; set; }

        public virtual SstIntegrationsSettings Setting { get; set; }
    }
}
