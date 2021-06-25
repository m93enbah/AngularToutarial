using System;
using System.Collections.Generic;
using SharedComponents.Domain.Common;
namespace SharedComponents.Domain.Models
{
    public partial class SstDocumentGroups : BaseModel
    {
        public SstDocumentGroups()
        {
            SstDocuments = new HashSet<SstDocuments>();
        }

        public string Name { get; set; }
        public string Name2 { get; set; }
        public long SystemId { get; set; }
        public long? ClassId { get; set; }
        public long? PolicyType { get; set; }
        public string Type { get; set; }
        public string Notes { get; set; }
        public long CompanyId { get; set; }

        public virtual SstSystems System { get; set; }
        public virtual ICollection<SstDocuments> SstDocuments { get; set; }
    }
}
