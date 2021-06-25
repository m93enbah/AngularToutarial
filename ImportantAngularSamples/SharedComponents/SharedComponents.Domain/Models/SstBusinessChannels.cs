using SharedComponents.Domain.Common;
using System;
using System.Collections.Generic;

namespace SharedComponents.Domain.Models
{
    public partial class SstBusinessChannels : BaseModel
    {
        public SstBusinessChannels()
        {
            SstAgentStructures = new HashSet<SstAgentStructures>();
            SstChannelPlans = new HashSet<SstChannelPlans>();
            SstChannelTypes = new HashSet<SstChannelTypes>();
        }

        public long Id { get; set; }
        public string Name { get; set; }
        public string Name2 { get; set; }
        public byte? Order { get; set; }
        public long SystemId { get; set; }
        public long CompanyId { get; set; }

        public virtual SstSystems System { get; set; }
        public virtual ICollection<SstAgentStructures> SstAgentStructures { get; set; }
        public virtual ICollection<SstChannelPlans> SstChannelPlans { get; set; }
        public virtual ICollection<SstChannelTypes> SstChannelTypes { get; set; }
    }
}
