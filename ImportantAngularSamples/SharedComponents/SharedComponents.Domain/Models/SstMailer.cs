using System;
using System.Collections.Generic;
using SharedComponents.Domain.Common;
namespace SharedComponents.Domain.Models
{
    public partial class SstMailer : BaseModel
    {
        public byte? Type { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Host { get; set; }
        public int? Port { get; set; }
        public byte? Security { get; set; }
        public long? SystemId { get; set; }
        public long CompanyId { get; set; }


        public virtual SstSystems System { get; set; }
    }
}
