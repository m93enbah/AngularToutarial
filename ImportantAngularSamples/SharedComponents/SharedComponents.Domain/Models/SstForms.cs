using System;
using System.Collections.Generic;
using SharedComponents.Domain.Common;
namespace SharedComponents.Domain.Models
{
    public partial class SstForms : BaseModel
    {
        public SstForms()
        {
            SstFormElements = new HashSet<SstFormElements>();
            SstFormGrid = new HashSet<SstFormGrid>();
            SstFormSystems = new HashSet<SstFormSystems>();
        }

        public int PageId { get; set; }
        public string FormHeader { get; set; }
        public string FormGroupName { get; set; }
        public string FormActionType { get; set; }
        public string FormActionLabel { get; set; }
        public int FromOrder { get; set; }
        public long CompanyId { get; set; }
        public int Language { get; set; }

        public virtual ICollection<SstFormElements> SstFormElements { get; set; }
        public virtual ICollection<SstFormGrid> SstFormGrid { get; set; }
        public virtual ICollection<SstFormSystems> SstFormSystems { get; set; }
    }
}
