﻿using SharedComponents.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;

namespace SharedComponents.Domain.Interfaces.Repositories
{
    public interface ISstProcessesSystemsRepository: IRepository<SstProcessSystems>
    {
        ICollection<SstProcessSystems> LoadProcessSystemsByProcessID(long? procId);
    }
} 