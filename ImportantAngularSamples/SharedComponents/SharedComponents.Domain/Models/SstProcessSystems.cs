using SharedComponents.Domain.Common;
using System;
using System.Collections.Generic;

namespace SharedComponents.Domain.Models
{
    public partial class SstProcessSystems : BaseModel
    {
        public long ProcessId { get; set; }
        public long SystemId { get; set; }
 
        public virtual SstProcesses Process { get; set; }
        public virtual SstSystems System { get; set; }
    }
}
