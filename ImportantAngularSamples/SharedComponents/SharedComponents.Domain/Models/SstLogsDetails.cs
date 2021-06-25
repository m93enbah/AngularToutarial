using System;
using System.Collections.Generic;
using SharedComponents.Domain.Common;
namespace SharedComponents.Domain.Models
{
    public partial class SstLogsDetails : BaseModel
    {
        public byte? Type { get; set; }
        public string Content { get; set; }
        public DateTime? ProcessDate { get; set; }
        public long? LogId { get; set; }

        public virtual SstLogs Log { get; set; }
    }
}
