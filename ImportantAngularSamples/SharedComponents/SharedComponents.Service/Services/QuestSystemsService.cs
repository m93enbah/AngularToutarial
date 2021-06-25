using SharedComponents.Domain.Common;
using SharedComponents.Domain.Enums;
using SharedComponents.Domain.Interfaces.Services;
using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using DOMAIN.Context;
using SharedComponents.Repository.UnitOfWork;
using System.Linq;
using SharedComponents.Domain.Models.SearchCriteria;

namespace SharedComponents.Service.Services
{
    public class QuestSystemsService : IQuestSystemsService
    {

        private IRepositoryUnitOfWork _repositoryUnitOfWork;
        public QuestSystemsService(IRepositoryUnitOfWork repositoryUnitOfWork)
        {
            _repositoryUnitOfWork = repositoryUnitOfWork;
        }

        public IResponseResult<SstQuestSystems> Add(SstQuestSystems entity)
        {
            _repositoryUnitOfWork.QuestSystems.Value.Add(entity);
            return new ResponseResult<SstQuestSystems>() { Status = ResultStatus.Success, Data = entity };

        }

        public IResponseResult<IEnumerable<SstQuestSystems>> AddRange(IEnumerable<SstQuestSystems> models)
        {
            throw new NotImplementedException();
        }

        public IResponseResult<SstQuestSystems> Get(long Id, int companyId)
        {
            var result = _repositoryUnitOfWork.QuestSystems.Value.Get(Id, companyId);
            return new ResponseResult<SstQuestSystems>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SstQuestSystems> Get(long Id)
        {
            var result = _repositoryUnitOfWork.QuestSystems.Value.Get(Id);
            return new ResponseResult<SstQuestSystems>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<IEnumerable<SstQuestSystems>> GetAll()
        {
            var result = _repositoryUnitOfWork.QuestSystems.Value.GetAll().ToList();
            return new ResponseResult<IEnumerable<SstQuestSystems>>() { Status = ResultStatus.Success, Data = result };

        }

        //public IResponseResult<IEnumerable<SstQuestSystems>> GetByCriteria(SearchQuestionnaire search)
        //{
        //    var result = _repositoryUnitOfWork.QuestSystems.Value.GetByCriteria(search).ToList();
        //    return new ResponseResult<IEnumerable<SstQuestSystems>>() { Status = ResultStatus.Success, Data = result };
        //}

        public IResponseResult<SstQuestSystems> Remove(SstQuestSystems entity)
        {
            _repositoryUnitOfWork.QuestSystems.Value.Remove(entity);
            return new ResponseResult<SstQuestSystems>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<SstQuestSystems> Update(SstQuestSystems entity)
        {
            _repositoryUnitOfWork.QuestSystems.Value.Update(entity);
            return new ResponseResult<SstQuestSystems>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<IEnumerable<SstQuestSystems>> RemoveRange(IEnumerable<SstQuestSystems> entities)
        {
            _repositoryUnitOfWork.QuestSystems.Value.RemoveRange(entities);
            return new ResponseResult<IEnumerable<SstQuestSystems>>() { Status = ResultStatus.Success, Data = entities };
        }
    }
}