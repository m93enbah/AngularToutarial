using SharedComponents.Domain.Common;
using System;
using System.Collections.Generic;

namespace SharedComponents.Domain.Models
{
    public partial class SstSmsProviders : BaseModel
    {
        public string Name { get; set; }
        public string Name2 { get; set; }
        public byte? Order { get; set; }
        public byte? Status { get; set; }
        public string Api { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public byte? Unicode { get; set; }
        public long? SystemId { get; set; }
        public long CompanyId { get; set; }

        public virtual SstSystems System { get; set; }
    }
}
