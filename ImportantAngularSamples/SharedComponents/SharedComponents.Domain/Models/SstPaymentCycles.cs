using SharedComponents.Domain.Common;
using System;
using System.Collections.Generic;

namespace SharedComponents.Domain.Models
{
    public partial class SstPaymentCycles : BaseModel
    {
        public SstPaymentCycles()
        {
            SstPaymentDetails = new HashSet<SstPaymentDetails>();
        }

        public string Name { get; set; }
        public string Name2 { get; set; }
        public decimal? Share { get; set; }
        public byte Unit { get; set; }
        public short Frequency { get; set; }
        public short NoOfPayments { get; set; }
        public byte IsEditable { get; set; }
        public string Notes { get; set; }
        public long? SystemId { get; set; }
        public long CompanyId { get; set; }
    
        public virtual SstSystems System { get; set; }
        public virtual ICollection<SstPaymentDetails> SstPaymentDetails { get; set; }
    }
}
