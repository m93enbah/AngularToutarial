using SharedComponents.Domain.Common;
using System;
using System.Collections.Generic;

namespace SharedComponents.Domain.Models
{
    public partial class SpdProducts :BaseModel
    {
        public SpdProducts()
        {
            SpdControlValues = new HashSet<SpdControlValues>();
            SpdProductsDetails = new HashSet<SpdProductsDetails>();
            SstIntegrationsSettings = new HashSet<SstIntegrationsSettings>();
        }

        public string Name { get; set; }
        public string Name2 { get; set; }
        public DateTime LaunchDate { get; set; }
        public DateTime? TerminationDate { get; set; }
        public byte[] Logo { get; set; }
        public string Notes { get; set; }
        public long? SystemId { get; set; }
        public long CompanyId { get; set; }

        public virtual SstSystems System { get; set; }
        public virtual ICollection<SpdControlValues> SpdControlValues { get; set; }
        public virtual ICollection<SpdProductsDetails> SpdProductsDetails { get; set; }
        public virtual ICollection<SstIntegrationsSettings> SstIntegrationsSettings { get; set; }
    }
}
