using System;
using System.Collections.Generic;
using System.Text;

namespace SharedComponents.Domain.Models.SearchCriteria
{
    public class SearchLog
    {
        public bool? Success { get; set; }
        public int? TransactionType { get; set; }
        public int? IOType { get; set; }
        public DateTime? FromData { get; set; }
        public DateTime? ToData { get; set; }
        public int PageNumber { get; set; }
        public int PageSize { get; set; }

    }
}