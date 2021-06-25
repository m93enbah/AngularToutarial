using SharedComponents.Domain.Common;
using System;
using System.Collections.Generic;

namespace SharedComponents.Domain.Models
{
    public partial class CpUserProperties : BaseModel
    {
        public CpUserProperties()
        {
            InverseUser = new HashSet<CpUserProperties>();
            SpdControlValues = new HashSet<SpdControlValues>();
        }

        public string Property { get; set; }
        public byte[] PropertyValue { get; set; }
        public long? UserId { get; set; }


        public virtual CpUserProperties User { get; set; }
        public virtual ICollection<CpUserProperties> InverseUser { get; set; }
        public virtual ICollection<SpdControlValues> SpdControlValues { get; set; }
    }
}
