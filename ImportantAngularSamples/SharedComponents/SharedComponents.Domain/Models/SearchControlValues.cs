using System;
using System.Collections.Generic;
using System.Text;
using SharedComponents.Domain.Common;
namespace SharedComponents.Domain.Models
{
    public class SearchControlValues
    {
        public long? ComponentId { get; set; }
        public long? StepId { get; set; }
        public long? ProductId { get; set; }
        public long? UserpropertiesId { get; set; }
        public string ControlKey { get; set; }

    }
}
