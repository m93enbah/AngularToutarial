using System;
using System.Collections.Generic;
using SharedComponents.Domain.Common;
namespace SharedComponents.Domain.Models
{
    public partial class SstEndorsements : BaseModel
    {
        public string Name { get; set; }
        public string Name2 { get; set; }
        public byte? Type { get; set; }
        public long SystemId { get; set; }
        public long? ClassId { get; set; }
        public long CompanyId { get; set; }


        public virtual SstClasses Class { get; set; }
        public virtual SstSystems System { get; set; }
    }
}
