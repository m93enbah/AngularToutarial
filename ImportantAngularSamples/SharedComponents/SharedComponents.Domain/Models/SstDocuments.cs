using System;
using System.Collections.Generic;
using SharedComponents.Domain.Common;
namespace SharedComponents.Domain.Models
{
    public partial class SstDocuments : BaseModel
    { 
        public string Name { get; set; }
        public string Name2 { get; set; }
        public long GroupId { get; set; }
        public byte? IsRequired { get; set; }
        public string Notes { get; set; }

        public virtual SstDocumentGroups Group { get; set; }
    }
}
