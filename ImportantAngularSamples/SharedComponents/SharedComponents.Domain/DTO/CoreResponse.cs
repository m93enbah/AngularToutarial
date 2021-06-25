using System;
using System.Collections.Generic;
using System.Text;

namespace SharedComponents.Domain.Dtos
{
    public class CoreResponse<T> where T : class
    {
        public T data { get; set; }
        public bool isError { get; set; }
        public object errorCode { get; set; }
        public object aPIVersion { get; set; }
        public object error { get; set; }
    }
}    
