using SharedComponents.Domain.Common;
using System;
using System.Collections.Generic;

namespace SharedComponents.Domain.Models
{
    public partial class SstChannelPlans : BaseModel
    {
        public long BusinessChannel { get; set; }
        public long PolicyType { get; set; }

        public virtual SstBusinessChannels BusinessChannelNavigation { get; set; }
        public virtual SstPolicyTypes PolicyTypeNavigation { get; set; }
    }
}
