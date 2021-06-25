using SharedComponents.Domain.Common;
using SharedComponents.Domain.Enums;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Interfaces.Services;
using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;

namespace SharedComponents.Service.Services
{
    public class SstProcessParentStepsService : ISstProcessParentStepsService
    {

        private IRepositoryUnitOfWork _repositoryUnitOfWork;
        public SstProcessParentStepsService(IRepositoryUnitOfWork repositoryUnitOfWork)
        {
            _repositoryUnitOfWork = repositoryUnitOfWork;
        }

        public IResponseResult<SstProcessParentSteps> Add(SstProcessParentSteps entity)
        {
            throw new NotImplementedException();
        }

        public IResponseResult<IEnumerable<SstProcessParentSteps>> AddRange(IEnumerable<SstProcessParentSteps> entities)
        {
            throw new NotImplementedException();
        }

        public IResponseResult<SstProcessParentSteps> Get(long id, int companyId)
        {
            throw new NotImplementedException();
        }

        public IResponseResult<SstProcessParentSteps> Get(long id)
        {
            throw new NotImplementedException();
        }

        public IResponseResult<IEnumerable<SstProcessParentSteps>> GetAll()
        {
            throw new NotImplementedException();
        }

        public IResponseResult<SstProcessParentSteps> Remove(SstProcessParentSteps entity)
        {
            throw new NotImplementedException();
        }

        public IResponseResult<IEnumerable<SstProcessParentSteps>> RemoveRange(IEnumerable<SstProcessParentSteps> entities)
        {
            throw new NotImplementedException();
        }

        public IResponseResult<SstProcessParentSteps> Update(SstProcessParentSteps entity)
        {
            throw new NotImplementedException();
        }
    }
}