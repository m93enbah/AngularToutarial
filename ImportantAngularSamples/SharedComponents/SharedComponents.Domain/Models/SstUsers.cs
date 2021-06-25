using SharedComponents.Domain.Common;
using System;
using System.Collections.Generic;

namespace SharedComponents.Domain.Models
{
    public partial class SstUsers : BaseModel
    {
        public SstUsers()
        {
            SstUserAlerts = new HashSet<SstUserAlerts>();
        }

        public string Name { get; set; }
        public string Name2 { get; set; }
        public string Email { get; set; }
        public DateTime? BirthDate { get; set; }
        public string Username { get; set; }
        public int? Department { get; set; }
        public string Country { get; set; }
        public short? City { get; set; }
        public int? Occupation { get; set; }
        public string PhoneNo { get; set; }
        public string MobileNo { get; set; }
        public string PoBox { get; set; }
        public string ZipCode { get; set; }
        public string Address { get; set; }
        public string Image { get; set; }
        public string ImageStyle { get; set; }
        public long CompanyId { get; set; }


        public virtual ICollection<SstUserAlerts> SstUserAlerts { get; set; }
    }
}
