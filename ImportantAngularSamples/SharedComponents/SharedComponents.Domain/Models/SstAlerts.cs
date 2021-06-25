using SharedComponents.Domain.Common;
using System;
using System.Collections.Generic;

namespace SharedComponents.Domain.Models
{
    public partial class SstAlerts : BaseModel
    {
        public SstAlerts()
        {
            SstUserAlerts = new HashSet<SstUserAlerts>();
        }

        public string Name { get; set; }
        public string Name2 { get; set; }
        public byte Type { get; set; }
        public string Icon { get; set; }
        public string Image { get; set; }
        public string Color { get; set; }
        public DateTime? Date { get; set; }
        public string Notes { get; set; }
        public long SystemId { get; set; }
        public long CompanyId { get; set; }

        public virtual SstSystems System { get; set; }
        public virtual ICollection<SstUserAlerts> SstUserAlerts { get; set; }
    }
}
