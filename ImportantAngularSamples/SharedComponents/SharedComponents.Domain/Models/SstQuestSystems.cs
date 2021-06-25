using SharedComponents.Domain.Common;
using System;
using System.Collections.Generic;

namespace SharedComponents.Domain.Models
{
    public partial class SstQuestSystems : BaseModel
    {
        public long SystemId { get; set; }
        public long QuiestionnaireId { get; set; }

        public virtual SstQuestionnaires Quiestionnaire { get; set; }
        public virtual SstSystems System { get; set; }
    }
}
