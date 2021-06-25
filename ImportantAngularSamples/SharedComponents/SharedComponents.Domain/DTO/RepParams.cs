using System;
using System.Collections.Generic;
using System.Text;

namespace SharedComponents.Domain.Dtos
{
    public class RepParams
    {
        public int iD { get; set; }
        public string cOLUMN_NAME { get; set; }
        public int cOLUMN_TYPE { get; set; }
        public string cOLUMN_TYPE_NAME { get; set; }
        public int pARAM_ORDER { get; set; }
        public string pARAM_FROM { get; set; }
        public object pARAM_TO { get; set; }
        public string lABEL1 { get; set; }
        public object lABEL2 { get; set; }
        public string p1_QUERY { get; set; }
        public object p2_QUERY { get; set; }
        public object dEFAULT_FROM { get; set; }
        public object dEFAULT_TO { get; set; }
        public int p1_MANDATORY { get; set; }
        public int p2_MANDATORY { get; set; }
        public object cAM_RPM_ID { get; set; }
        public string cAM_RPT_CODE { get; set; }
        public object pARAM_NAME { get; set; }
        public int cRG_COM_ID { get; set; }
    }
}   