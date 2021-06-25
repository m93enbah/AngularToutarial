using SharedComponents.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace SharedComponents.Domain.Dtos
{
   public class ReportData
   {
       public static string REPORT_SESSION_ID { get; }
       public Applications Application { get; set; }
       public int CompanyID { get; set; }
       public int IsWritableReport { get; set; }
       public string PrinterName { get; set; }
       public string ReportCode { get; set; }
       public ReportExportTypes ReportExportType { get; set; }
       public ReportGeneration ReportGenerationType { get; set; }
       public Languages ReportLanguage { get; set; }
       public List<RepParams> ReportParams { get; set; }
       public string UserID { get; set; }
   }
}   