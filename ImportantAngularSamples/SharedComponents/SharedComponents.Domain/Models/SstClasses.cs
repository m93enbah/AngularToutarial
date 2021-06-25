using SharedComponents.Domain.Common;
using System;
using System.Collections.Generic;

namespace SharedComponents.Domain.Models
{
    public partial class SstClasses : BaseModel
    {
        public SstClasses()
        {
            SstClaimDiscounts = new HashSet<SstClaimDiscounts>();
            SstClauses = new HashSet<SstClauses>();
            SstClosingPeriods = new HashSet<SstClosingPeriods>();
            SstCoverTypes = new HashSet<SstCoverTypes>();
            SstEndorsements = new HashSet<SstEndorsements>();
            SstFeesTiers = new HashSet<SstFeesTiers>();
            SstPolicyDiscounts = new HashSet<SstPolicyDiscounts>();
            SstPolicyTypes = new HashSet<SstPolicyTypes>();
            SstShortPeriods = new HashSet<SstShortPeriods>();
        }

        public string Code { get; set; }
        public string Name { get; set; }
        public string Name2 { get; set; }
        public byte BusinessType { get; set; }
        public long SystemId { get; set; }
        public long CompanyId { get; set; }

        public virtual SstSystems System { get; set; }
        public virtual ICollection<SstClaimDiscounts> SstClaimDiscounts { get; set; }
        public virtual ICollection<SstClauses> SstClauses { get; set; }
        public virtual ICollection<SstClosingPeriods> SstClosingPeriods { get; set; }
        public virtual ICollection<SstCoverTypes> SstCoverTypes { get; set; }
        public virtual ICollection<SstEndorsements> SstEndorsements { get; set; }
        public virtual ICollection<SstFeesTiers> SstFeesTiers { get; set; }
        public virtual ICollection<SstPolicyDiscounts> SstPolicyDiscounts { get; set; }
        public virtual ICollection<SstPolicyTypes> SstPolicyTypes { get; set; }
        public virtual ICollection<SstShortPeriods> SstShortPeriods { get; set; }
    }
}
