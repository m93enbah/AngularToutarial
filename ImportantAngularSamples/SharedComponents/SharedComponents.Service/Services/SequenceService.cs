using SharedComponents.Domain.Common;
using SharedComponents.Domain.Enums;
using SharedComponents.Domain.Interfaces.Services;
using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Models;
using System.Collections.Generic;
using System.Linq;
using System;

namespace SharedComponents.Service.Services
{
    public class SequenceService : ISequenceService
    {
        private IRepositoryUnitOfWork _repositoryUnitOfWork;
        public SequenceService(IRepositoryUnitOfWork repositoryUnitOfWork)
        {
            _repositoryUnitOfWork = repositoryUnitOfWork;
        }
        public IResponseResult<SpdSequences> Add(SpdSequences entity)
        {
            _repositoryUnitOfWork.SequenceRepository.Value.Add(entity);
            return new ResponseResult<SpdSequences>() { Status = ResultStatus.Success, Data = entity };
        }
        public IResponseResult<IEnumerable<SpdSequences>> AddRange(IEnumerable<SpdSequences> entities)
        {
            _repositoryUnitOfWork.SequenceRepository.Value.AddRange(entities);
            return new ResponseResult<IEnumerable<SpdSequences>>() { Status = ResultStatus.Success, Data = entities };
        }

        public IResponseResult<SpdSequences> Get(long id, int companyId)
        {
            var result = _repositoryUnitOfWork.SequenceRepository.Value.Get(id, companyId);
            return new ResponseResult<SpdSequences>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SpdSequences> Get(long id)
        {
            var result = _repositoryUnitOfWork.SequenceRepository.Value.Get(id);
            return new ResponseResult<SpdSequences>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<IEnumerable<SpdSequences>> GetAll()
        {
            var result = _repositoryUnitOfWork.SequenceRepository.Value.GetAll().ToList();
            return new ResponseResult<IEnumerable<SpdSequences>>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SpdSequences> Remove(SpdSequences entity)
        {
            var result = _repositoryUnitOfWork.SequenceRepository.Value.Remove(entity);
            return new ResponseResult<SpdSequences>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<IEnumerable<SpdSequences>> RemoveRange(IEnumerable<SpdSequences> entities)
        {
            throw new NotImplementedException();
        }

        public IResponseResult<SpdSequences> Update(SpdSequences entity)
        {
            _repositoryUnitOfWork.SequenceRepository.Value.Update(entity);
            return new ResponseResult<SpdSequences>() { Status = ResultStatus.Success, Data = entity };
        }

    }
}