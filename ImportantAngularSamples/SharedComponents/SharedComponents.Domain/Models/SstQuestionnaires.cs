using SharedComponents.Domain.Common;
using System;
using System.Collections.Generic;

namespace SharedComponents.Domain.Models
{
    public partial class SstQuestionnaires : BaseModel
    {
        public SstQuestionnaires()
        {
            SstQuestControls = new HashSet<SstQuestControls>();
            SstQuestSystems = new HashSet<SstQuestSystems>();
        }

        public string Name { get; set; }
        public string Name2 { get; set; }
        public byte? Usage { get; set; }
        public string Notes { get; set; }
        public long CompanyId { get; set; }
 
        public virtual ICollection<SstQuestControls> SstQuestControls { get; set; }
        public virtual ICollection<SstQuestSystems> SstQuestSystems { get; set; }
    }
}
