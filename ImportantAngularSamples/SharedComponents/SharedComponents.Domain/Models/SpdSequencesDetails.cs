using SharedComponents.Domain.Common;
using System;
using System.Collections.Generic;

namespace SharedComponents.Domain.Models
{
    public partial class SpdSequencesDetails : BaseModel
    {
        public byte? Order { get; set; }
        public long? IntegrationId { get; set; }
        public long? SequenceId { get; set; }

        public virtual SstIntegrations Integration { get; set; }
        public virtual SpdSequences Sequence { get; set; }
    }
}
