using System;
using System.Collections.Generic;
using SharedComponents.Domain.Common;
namespace SharedComponents.Domain.Models
{
    public partial class SstLogs : BaseModel
    {
        public SstLogs()
        {
            SstLogsDetails = new HashSet<SstLogsDetails>();
        }

        public DateTime? Date { get; set; }
        public byte? Status { get; set; }
        public string StatusCode { get; set; }
        public string Url { get; set; }
        public byte? TransactionType { get; set; }
        public byte? IoType { get; set; }
        public string Notes { get; set; }

        public virtual ICollection<SstLogsDetails> SstLogsDetails { get; set; }
    }
}
