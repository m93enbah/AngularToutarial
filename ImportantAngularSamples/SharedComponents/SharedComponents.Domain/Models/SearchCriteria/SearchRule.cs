
using System;
using System.Collections.Generic;
using System.Text;

namespace SharedComponents.Domain.Models.SearchCriteria
{
    public class SearchRule
    {
        public long ComponentId { get; set; }
        public int? Count { get; set; }
        public string Query { get; set; }
    }
}
