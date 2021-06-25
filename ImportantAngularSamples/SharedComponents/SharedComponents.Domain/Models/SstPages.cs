using System;
using System.Collections.Generic;
using SharedComponents.Domain.Common;
namespace SharedComponents.Domain.Models
{
    public partial class SstPages : BaseModel
    {
        public SstPages()
        {
            SstPagesControls = new HashSet<SstPagesControls>();
        }

        public string Key { get; set; }
        public string Name { get; set; }
        public string Name2 { get; set; }
        public int Order { get; set; }
        public string PageUrl { get; set; }
        public string Notes { get; set; }
        public long? PageId { get; set; }
        public long SystemId { get; set; }
        public string ModuleCode { get; set; }
        public long CompanyId { get; set; }

        public virtual SstModules ModuleCodeNavigation { get; set; }
        public virtual SstSystems System { get; set; }
        public virtual ICollection<SstPagesControls> SstPagesControls { get; set; }
    }
}
