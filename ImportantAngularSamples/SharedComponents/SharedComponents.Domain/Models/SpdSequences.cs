using SharedComponents.Domain.Common;
using System;
using System.Collections.Generic;

namespace SharedComponents.Domain.Models
{
    public partial class SpdSequences : BaseModel
    {
        public SpdSequences()
        {
            SpdSequencesDetails = new HashSet<SpdSequencesDetails>();
        }

        public string Name { get; set; }
        public string Name2 { get; set; }

        public virtual ICollection<SpdSequencesDetails> SpdSequencesDetails { get; set; }
    }
}
