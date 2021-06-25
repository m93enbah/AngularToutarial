using SharedComponents.Domain.Common;
using System;
using System.Collections.Generic;

namespace SharedComponents.Domain.Models
{
    public partial class SstUserAlerts : BaseModel
    {
        public long AlertId { get; set; }
        public long UserId { get; set; }
        public byte? ReadFlag { get; set; }
        public DateTime? ReadDate { get; set; }
        public long SystemId { get; set; }


        public virtual SstAlerts Alert { get; set; }
        public virtual SstUsers User { get; set; }
    }
}
