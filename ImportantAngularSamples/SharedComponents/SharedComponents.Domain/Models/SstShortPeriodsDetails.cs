using SharedComponents.Domain.Common;
using System;
using System.Collections.Generic;

namespace SharedComponents.Domain.Models
{
    public partial class SstShortPeriodsDetails : BaseModel
    {
        public long? EndorsementType { get; set; }
        public long ShortPeriodId { get; set; }


        public virtual SstShortPeriods ShortPeriod { get; set; }
    }
}
