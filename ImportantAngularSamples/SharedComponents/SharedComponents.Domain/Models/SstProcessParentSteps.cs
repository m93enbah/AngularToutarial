using SharedComponents.Domain.Common;
using System;
using System.Collections.Generic;

namespace SharedComponents.Domain.Models
{
    public partial class SstProcessParentSteps : BaseModel
    {
        public long? ShapeId { get; set; }
        public string EdgeDescription { get; set; }
        public long? ParentShapeId { get; set; }
        public long? ProcessStepId { get; set; }
        public int EdgeType { get; set; }
        public long ProcessId { get; set; }

        public virtual SstProcessSteps ProcessStep { get; set; }
    }
}
