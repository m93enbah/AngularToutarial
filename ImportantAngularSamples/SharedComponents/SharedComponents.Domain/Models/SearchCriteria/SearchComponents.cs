using System;
using System.Collections.Generic;
using System.Text;

namespace SharedComponents.Domain.Models.SearchCriteria
{
    public class SearchComponents
    {
        public int? CompanyId { get; set; }
        public bool? IsField { get; set; }
        public bool? Global { get; set; }
        public string UserName { get; set; }
        public int? FormType { get; set; }
        public string Name { get; set; }
        public string Name2 { get; set; }
    }
}
