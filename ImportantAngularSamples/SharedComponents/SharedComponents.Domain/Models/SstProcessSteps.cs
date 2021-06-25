using SharedComponents.Domain.Common;
using System;
using System.Collections.Generic;

namespace SharedComponents.Domain.Models
{
    public partial class SstProcessSteps : BaseModel
    {
        public SstProcessSteps()
        {
            SstProcessParentSteps = new HashSet<SstProcessParentSteps>();
        }

        public string Name { get; set; }
        public long? StepId { get; set; }
        public long? ShapeType { get; set; }
        public long? XPosition { get; set; }
        public long? YPosition { get; set; }
        public long? Width { get; set; }
        public long? Height { get; set; }
        public long? ProcessId { get; set; }
        public long? ProcessStepId { get; set; }
        public string FontColor { get; set; }
        public string BackColor { get; set; }
        public int? FontSize { get; set; }

        public virtual SstProcesses Process { get; set; }
        public virtual ICollection<SstProcessParentSteps> SstProcessParentSteps { get; set; }
    }
}
