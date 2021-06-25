using System;
using System.Collections.Generic;
using SharedComponents.Domain.Common;
namespace SharedComponents.Domain.Models
{
    public partial class SstModules : BaseModel
    {
        public SstModules()
        {
            SstCodes = new HashSet<SstCodes>();
            SstPages = new HashSet<SstPages>();
        }

        public string Code { get; set; }
        public string Name { get; set; }
        public string Name2 { get; set; }
        public string Notes { get; set; }
        public long SystemId { get; set; }

        public virtual SstSystems System { get; set; }
        public virtual ICollection<SstCodes> SstCodes { get; set; }
        public virtual ICollection<SstPages> SstPages { get; set; }
    }
}
