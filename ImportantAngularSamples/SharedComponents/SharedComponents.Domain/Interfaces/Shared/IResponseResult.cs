
using SharedComponents.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace SharedComponents.Domain.Interfaces.Shared
{
    public interface IResponseResult<T>
    {
        List<string> Errors { get; set; }
        ResultStatus Status { get; set; }
        T Data { get; set; }
    }
}


