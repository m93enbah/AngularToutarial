using System;
using System.Collections.Generic;
using System.Text;

namespace SharedComponents.Domain.Common
{
    public class SharedSettings
    {
        public string CoreApiUrl { get; set; }
        public string ReportManagerApiUrl { get; set; }
        public string NotificationLogPath { get; set; }
        public string NotificationAttachmentPath { get; set; }
        public string ErrorLogRecepients { get; set; }       
    }
}    