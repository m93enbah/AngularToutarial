using SharedComponents.Domain.Common;
using System;
using System.Collections.Generic;

namespace SharedComponents.Domain.Models
{
    public partial class SstClosingPeriods : BaseModel
    {
        public long SystemId { get; set; }
        public long? ClassId { get; set; }
        public long? PolicyType { get; set; }
        public string ModuleCode { get; set; }
        public int? BranchId { get; set; }
        public DateTime? ClosingDate { get; set; }
        public long CompanyId { get; set; }


        public virtual SstClasses Class { get; set; }
        public virtual SstPolicyTypes PolicyTypeNavigation { get; set; }
        public virtual SstSystems System { get; set; }
    }
}
