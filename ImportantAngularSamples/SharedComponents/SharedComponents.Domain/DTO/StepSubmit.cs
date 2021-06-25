using System;
using System.Collections.Generic;
using System.Text;

namespace SharedComponents.Domain.Dtos
{
    public class StepSubmit
    {
        public long UserPropertiesId { get; set; }
        public int CurrentStepId { get; set; }
        public List<StepFormValue> StepFormValues { get; set; }
    }
}