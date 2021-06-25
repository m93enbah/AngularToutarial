using SharedComponents.Domain.Common;
using System;
using System.Collections.Generic;

namespace SharedComponents.Domain.Models
{
    public partial class SstResources : BaseModel
    {
        public string Object { get; set; }
        public string Name { get; set; }
        public string Value { get; set; }
        public string Language { get; set; }
        public long SystemId { get; set; }
        public long CompanyId { get; set; }

        public virtual SstSystems System { get; set; }
    }
}
