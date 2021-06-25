using SharedComponents.Domain.Common;
using System;
using System.Collections.Generic;

namespace SharedComponents.Domain.Models
{
    public partial class SstClauses : BaseModel
    {
        public SstClauses()
        {
            SstClausesDetails = new HashSet<SstClausesDetails>();
        }

        public string Code { get; set; }
        public string Name { get; set; }
        public string Name2 { get; set; }
        public long ClassId { get; set; }
        public long PolicyType { get; set; }
        public long? MarineClause { get; set; }
        public byte? Status { get; set; }
        public long SystemId { get; set; }
        public long CompanyId { get; set; }

        public virtual SstClasses Class { get; set; }
        public virtual SstPolicyTypes PolicyTypeNavigation { get; set; }
        public virtual SstSystems System { get; set; }
        public virtual ICollection<SstClausesDetails> SstClausesDetails { get; set; }
    }
}
