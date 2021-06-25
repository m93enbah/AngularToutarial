using System;
using System.Collections.Generic;
using SharedComponents.Domain.Common;
namespace SharedComponents.Domain.Models
{
    public partial class SstFormElements : BaseModel
    {
        public long FormId { get; set; }
        public string ElementLabel { get; set; }
        public string ElementControlname { get; set; }
        public string ElementType { get; set; }
        public string ElementOption { get; set; }
        public string ElementSource { get; set; }
        public int ElementOrder { get; set; }
        public byte ElementIsdisable { get; set; }
        public byte ElementIsrequeired { get; set; }
        public int Language { get; set; }

        public virtual SstForms Form { get; set; }
    }
}
