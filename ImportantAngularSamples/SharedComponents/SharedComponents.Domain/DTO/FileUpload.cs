 using Microsoft.AspNetCore.Http;
 using System;
 using System.Collections.Generic;
 using System.Text;

 namespace SharedComponents.Domain.Dtos
 {
     public class FileUpload
     {
         public int SequenceId { get; set; }
         public int UserPropertiesId { get; set; }
         public object StepFormValue { get; set; }
         public ICollection<IFormFile> Files { get; set; }
     }
 }     