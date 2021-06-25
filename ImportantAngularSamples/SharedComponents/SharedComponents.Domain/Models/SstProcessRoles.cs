using SharedComponents.Domain.Common;
using System;
using System.Collections.Generic;

namespace SharedComponents.Domain.Models
{
    public partial class SstProcessRoles : BaseModel
    {
        public string Name { get; set; }
        public string Name2 { get; set; }
        public string Username { get; set; }
        public long? GroupId { get; set; }
        public string Notes { get; set; }
        public long ProcessId { get; set; }
    }
}
