using SharedComponents.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using SharedComponents.Domain.Interfaces.Shared;

namespace SharedComponents.Domain.Interfaces.Services
{
    public interface ISstProcessesService : IService<SstProcesses>
    {
        IQueryable<SstProcesses> Find(Expression<Func<SstProcesses, bool>> predicate, params Expression<Func<SstProcesses, object>>[] navigationProperties);

        IResponseResult<IEnumerable<SstProcessSteps>> LoadProcessStepsWithParentShapesByProcessID(long? Id);

        IResponseResult<IEnumerable<SstProcessSteps>> UpdateProcessWithProcessStepsAndParentObject(long? procID, IEnumerable<SstProcessSteps> procsteps);
        IResponseResult<SstProcesses> DeleteProcesStepsAndParents(long? procID);
        IResponseResult<SstProcesses> copyProcesses(Int64? procID);

        IResponseResult<IEnumerable<SstProcesses>> Search(SearchProcess search);
    }
}