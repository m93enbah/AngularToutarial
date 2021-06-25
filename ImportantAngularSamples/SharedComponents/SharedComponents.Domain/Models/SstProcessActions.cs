using SharedComponents.Domain.Common;
using System;
using System.Collections.Generic;

namespace SharedComponents.Domain.Models
{
    public partial class SstProcessActions : BaseModel
    {
        public byte ActionType { get; set; }
        public byte TargetType { get; set; }
        public long? TargetParent { get; set; }
        public long? TargetId { get; set; }
        public string TargetAction { get; set; }
        public long RuleId { get; set; }
        public long? TargetKey { get; set; }
    }
}
