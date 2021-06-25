using SharedComponents.Domain.Common;
using System;
using System.Collections.Generic;

namespace SharedComponents.Domain.Models
{
    public partial class SstRules : BaseModel
    {
        public SstRules()
        {
            SstActions = new HashSet<SstActions>();
            SstConditions = new HashSet<SstConditions>();
        }

        public string Name { get; set; }
        public string Name2 { get; set; }
        public byte? RuleType { get; set; }
        public long? RuleTarget { get; set; }
        public string Notes { get; set; }
        public long SystemId { get; set; }
        public long CompanyId { get; set; }

        public virtual SstSystems System { get; set; }
        public virtual ICollection<SstActions> SstActions { get; set; }
        public virtual ICollection<SstConditions> SstConditions { get; set; }
    }
}
