using System;
using System.Collections.Generic;
using SharedComponents.Domain.Common;
namespace SharedComponents.Domain.Models
{
    public partial class SstCoverTypes : BaseModel
    {
        public SstCoverTypes()
        {
            InverseCover = new HashSet<SstCoverTypes>();
            SstFeesTiersDetails = new HashSet<SstFeesTiersDetails>();
        }

        public long SystemId { get; set; }
        public long ClassId { get; set; }
        public long? PolicyType { get; set; }
        public string Name { get; set; }
        public string Name2 { get; set; }
        public long? CoverId { get; set; }
        public long CompanyId { get; set; }

        public virtual SstClasses Class { get; set; }
        public virtual SstCoverTypes Cover { get; set; }
        public virtual SstPolicyTypes PolicyTypeNavigation { get; set; }
        public virtual SstSystems System { get; set; }
        public virtual ICollection<SstCoverTypes> InverseCover { get; set; }
        public virtual ICollection<SstFeesTiersDetails> SstFeesTiersDetails { get; set; }
    }
}
