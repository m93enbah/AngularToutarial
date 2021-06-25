using System;
using System.Collections.Generic;
using SharedComponents.Domain.Common;
namespace SharedComponents.Domain.Models
{
    public partial class SstFormSystems : BaseModel
    {
        public long SystemId { get; set; }
        public long FormId { get; set; }

        public virtual SstForms Form { get; set; }
        public virtual SstSystems System { get; set; }
    }
}
