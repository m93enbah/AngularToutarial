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
    public class SstProcessStepsService : ISstProcessStepsService
    {
        private IRepositoryUnitOfWork _repositoryUnitOfWork;
        public SstProcessStepsService(IRepositoryUnitOfWork repositoryUnitOfWork)
        {
            _repositoryUnitOfWork = repositoryUnitOfWork;
        }

        public IResponseResult<SstProcessSteps> Add(SstProcessSteps entity)
        {
            throw new NotImplementedException();
        }

        public IResponseResult<IEnumerable<SstProcessSteps>> AddRange(IEnumerable<SstProcessSteps> entities)
        {
            throw new NotImplementedException();
        }

        public IResponseResult<SstProcessSteps> Get(long id, int companyId)
        {
            throw new NotImplementedException();
        }

        public IResponseResult<SstProcessSteps> Get(long id)
        {
            throw new NotImplementedException();
        }

        public IResponseResult<IEnumerable<SstProcessSteps>> GetAll()
        {
            throw new NotImplementedException();
        }

        public IResponseResult<SstProcessSteps> Remove(SstProcessSteps entity)
        {
            throw new NotImplementedException();
        }

        public IResponseResult<IEnumerable<SstProcessSteps>> RemoveRange(IEnumerable<SstProcessSteps> entities)
        {
            throw new NotImplementedException();
        }

        public IResponseResult<SstProcessSteps> Update(SstProcessSteps entity)
        {
            throw new NotImplementedException();
        }

    }
}