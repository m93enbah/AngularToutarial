using SharedComponents.Domain.Common;
using System;
using System.Collections.Generic;

namespace SharedComponents.Domain.Models
{
    public partial class SstProcessRules : BaseModel
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Name2 { get; set; }
        public byte? RuleType { get; set; }
        public long? RuleTarget { get; set; }
        public string Notes { get; set; }
        public long SystemId { get; set; }
        public long CompanyId { get; set; }
    }
}
