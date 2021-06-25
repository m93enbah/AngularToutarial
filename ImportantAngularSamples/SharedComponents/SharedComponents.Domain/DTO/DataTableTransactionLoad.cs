using System;
using System.Collections.Generic;
using System.Text;

namespace SharedComponents.Domain.Dtos
{
    public class DataTableTransactionLoad
    {
        public long IntegrationSetttingId { get; set; }
        public long UserPropertiesId { get; set; }
        public List<StepFormValue> StepFormValues { get; set; }
    }
} 