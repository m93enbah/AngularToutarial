using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;

namespace SharedComponents.Domain.Dtos
{
 public class ExecuteSequance
 {
     public int SequenceId { get; set; }
     public int UserPropertiesId { get; set; }
     public List<StepFormValue> StepFormValues { get; set; }
     public ICollection<IFormFile> Files { get; set; }
 }
}   