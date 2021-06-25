using SharedComponents.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SharedComponents.Domain.Interfaces.Repositories
{
    public interface ISstProcessesRepository: IRepository<SstProcesses>
    {

        IEnumerable<SstProcessSteps> LoadProcessStepsWithParentShapesByProcessID(long? Id);
        IEnumerable<SstProcessSteps> LoadProcessStepsByProcessID(long? Id);
        ICollection<SstProcessParentSteps> GetParentShapesByStepID(long? Id);
        IEnumerable<SstProcesses> Search(SearchProcess search);
    }
}   
