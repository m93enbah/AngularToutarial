//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace CompanyAPI.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Skill
    {
        public int Id { get; set; }
        public string skillName { get; set; }
        public string experienceOfYear { get; set; }
        public string proffeicency { get; set; }
        public Nullable<int> empId { get; set; }
    
        public virtual Employee Employee { get; set; }
    }
}