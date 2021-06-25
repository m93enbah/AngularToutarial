using System;
using System.Collections.Generic;
using System.Text;
using SharedComponents.Domain.Enums;
using SharedComponents.Domain.Interfaces.Shared;

namespace SharedComponents.Domain.Common
{
    public class ResponseResult<T> : IResponseResult<T>
    {
        public List<string> Errors { get; set; }
        public ResultStatus Status { get; set; }
        public T Data { get; set; }
    }
}  
