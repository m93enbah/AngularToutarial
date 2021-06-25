using SharedComponents.Domain.Common;
using System;
using System.Collections.Generic;

namespace SharedComponents.Domain.Models
{
    public partial class SstPagesControlsParams : BaseModel
    {
        public string Name { get; set; }
        public long Type { get; set; }
        public string DependOnKey { get; set; }
        public long ControlId { get; set; }

        public virtual SstPagesControls Control { get; set; }
    }
}
