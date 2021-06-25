using SharedComponents.Domain.Common;
using System;
using System.Collections.Generic;

namespace SharedComponents.Domain.Models
{
    public partial class SpdStepsTransactions : BaseModel
    {
        public byte? TransactionType { get; set; }
        public byte? Order { get; set; }
        public long? IntegrationId { get; set; }
        public long? StepId { get; set; }

        public virtual SstIntegrations Integration { get; set; }
        public virtual SpdProductsSteps Step { get; set; }
    }
}
