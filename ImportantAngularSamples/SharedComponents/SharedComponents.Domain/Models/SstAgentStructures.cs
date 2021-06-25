using SharedComponents.Domain.Common;
using System;
using System.Collections.Generic;

namespace SharedComponents.Domain.Models
{
    public partial class SstAgentStructures : BaseModel
    {
        public SstAgentStructures()
        {
            InverseParent = new HashSet<SstAgentStructures>();
        }

        public string Name { get; set; }
        public string Name2 { get; set; }
        public DateTime ValidFrom { get; set; }
        public DateTime? ValidTo { get; set; }
        public long? ParentId { get; set; }
        public long? BusinessChannel { get; set; }
        public long CompanyId { get; set; }

        public virtual SstBusinessChannels BusinessChannelNavigation { get; set; }
        public virtual SstAgentStructures Parent { get; set; }
        public virtual ICollection<SstAgentStructures> InverseParent { get; set; }
    }
}
