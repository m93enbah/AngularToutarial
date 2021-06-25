using SharedComponents.Domain.Common;
using System;
using System.Collections.Generic;

namespace SharedComponents.Domain.Models
{
    public partial class SstChannelTypes : BaseModel
    {
        public long BusinessChannel { get; set; }
        public long CustomerType { get; set; }

        public virtual SstBusinessChannels BusinessChannelNavigation { get; set; }
        public virtual SstCustomerTypes CustomerTypeNavigation { get; set; }
    }
}
