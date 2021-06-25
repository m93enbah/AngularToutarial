using System;
using System.Collections.Generic;
using SharedComponents.Domain.Common;
namespace SharedComponents.Domain.Models
{
    public partial class SstFormGrid : BaseModel
    {
        public long FormId { get; set; }
        public string GridField { get; set; }
        public string GridHeader { get; set; }
        public int FieldOrder { get; set; }
        public int Language { get; set; }
 
        public virtual SstForms Form { get; set; }
    }
}
