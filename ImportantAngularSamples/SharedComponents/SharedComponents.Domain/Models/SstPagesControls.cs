using SharedComponents.Domain.Common;
using System;
using System.Collections.Generic;

namespace SharedComponents.Domain.Models
{
    public partial class SstPagesControls : BaseModel
    {
        public SstPagesControls()
        {
            InverseControl = new HashSet<SstPagesControls>();
            SstPagesControlsParams = new HashSet<SstPagesControlsParams>();
        }

        public string Key { get; set; }
        public string Form { get; set; }
        public string LabelKey { get; set; }
        public byte? AllowEditLabel { get; set; }
        public byte? AllowRequired { get; set; }
        public byte? IsRequired { get; set; }
        public byte? AllowHidden { get; set; }
        public byte? IsHidden { get; set; }
        public byte? AllowDisabled { get; set; }
        public byte? IsDisabled { get; set; }
        public long? Order { get; set; }
        public string ControlType { get; set; }
        public string TextType { get; set; }
        public long? ParamsType { get; set; }
        public string ClassName { get; set; }
        public string ServiceUrl { get; set; }
        public byte? IsDynamic { get; set; }
        public long? FormType { get; set; }
        public long PageId { get; set; }
        public long? ControlId { get; set; }

        public virtual SstPagesControls Control { get; set; }
        public virtual SstPages Page { get; set; }
        public virtual ICollection<SstPagesControls> InverseControl { get; set; }
        public virtual ICollection<SstPagesControlsParams> SstPagesControlsParams { get; set; }
    }
}
