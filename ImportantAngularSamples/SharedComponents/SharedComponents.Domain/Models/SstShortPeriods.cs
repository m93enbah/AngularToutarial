using SharedComponents.Domain.Common;
using System;
using System.Collections.Generic;

namespace SharedComponents.Domain.Models
{
    public partial class SstShortPeriods : BaseModel
    {
        public SstShortPeriods()
        {
            SstShortPeriodsDetails = new HashSet<SstShortPeriodsDetails>();
        }

        public string Name { get; set; }
        public string Name2 { get; set; }
        public byte Unit { get; set; }
        public short? FrequencyFrom { get; set; }
        public short? FrequencyTo { get; set; }
        public byte RateFraction { get; set; }
        public decimal AdjustPercent { get; set; }
        public byte ApplyOn { get; set; }
        public string Notes { get; set; }
        public long SystemId { get; set; }
        public long CompanyId { get; set; }
        public long ClassId { get; set; }
        public long PolicyType { get; set; }

        public virtual SstClasses Class { get; set; }
        public virtual SstPolicyTypes PolicyTypeNavigation { get; set; }
        public virtual SstSystems System { get; set; }
        public virtual ICollection<SstShortPeriodsDetails> SstShortPeriodsDetails { get; set; }
    }
}
