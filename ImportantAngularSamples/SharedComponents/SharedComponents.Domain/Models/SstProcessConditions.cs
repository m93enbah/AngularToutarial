using SharedComponents.Domain.Common;
using System;
using System.Collections.Generic;

namespace SharedComponents.Domain.Models
{
    public partial class SstProcessConditions : BaseModel
    {
        public byte ConditionType { get; set; }
        public byte? ReferenceType { get; set; }
        public long? ReferenceParent { get; set; }
        public long? ReferenceId { get; set; }
        public long? ReferenceKey { get; set; }
        public byte? Validator { get; set; }
        public string ValidatorValue { get; set; }
        public string ValidatorValue2 { get; set; }
        public byte? Operator { get; set; }
        public byte Order { get; set; }
        public string Formula { get; set; }
        public long RuleId { get; set; }
    }
}
