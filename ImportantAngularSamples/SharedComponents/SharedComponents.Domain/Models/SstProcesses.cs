using SharedComponents.Domain.Common;
using System;
using System.Collections.Generic;

namespace SharedComponents.Domain.Models
{
    public partial class SstProcesses : BaseModel
    {
        public SstProcesses()
        {
            SstProcessSteps = new HashSet<SstProcessSteps>();
            SstProcessSystems = new HashSet<SstProcessSystems>();
        }

        public string Name { get; set; }
        public string Name2 { get; set; }
        public byte? Active { get; set; }
        public string Notes { get; set; }

        public virtual ICollection<SstProcessSteps> SstProcessSteps { get; set; }
        public virtual ICollection<SstProcessSystems> SstProcessSystems { get; set; }
    }


    public class SearchProcess
    {
        public List<string> Names { get; set; }
        public List<string> filterdCols { get; set; }
    }
}
