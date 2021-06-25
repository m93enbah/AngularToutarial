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
    public class QuestControlsService : IQuestControlsService
    {

        private IRepositoryUnitOfWork _repositoryUnitOfWork;
        public QuestControlsService(IRepositoryUnitOfWork repositoryUnitOfWork)
        {
            _repositoryUnitOfWork = repositoryUnitOfWork;
        }

        public IResponseResult<SstQuestControls> Add(SstQuestControls entity)
        {
            _repositoryUnitOfWork.QuestControls.Value.Add(entity);
            return new ResponseResult<SstQuestControls>() { Status = ResultStatus.Success, Data = entity };

        }

        public IResponseResult<IEnumerable<SstQuestControls>> AddRange(IEnumerable<SstQuestControls> models)
        {
            _repositoryUnitOfWork.QuestControls.Value.AddRange(models);
            return new ResponseResult<IEnumerable<SstQuestControls>>() { Status = ResultStatus.Success, Data = models };
        }
        public IResponseResult<SstQuestControls> Get(long Id, int companyId)
        {
            var result = _repositoryUnitOfWork.QuestControls.Value.Get(Id, companyId);
            return new ResponseResult<SstQuestControls>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SstQuestControls> Get(long Id)
        {
            var result = _repositoryUnitOfWork.QuestControls.Value.Get(Id);
            return new ResponseResult<SstQuestControls>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<IEnumerable<SstQuestControls>> GetAll()
        {
            var result = _repositoryUnitOfWork.QuestControls.Value.GetAll().ToList();
            return new ResponseResult<IEnumerable<SstQuestControls>>() { Status = ResultStatus.Success, Data = result };

        }

        public IResponseResult<IEnumerable<SstQuestControls>> GetByCriteria(SearchQuestControls search)
        {
            var result = _repositoryUnitOfWork.QuestControls.Value.GetByCriteria(search).ToList();
            return new ResponseResult<IEnumerable<SstQuestControls>>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SstQuestControls> Remove(SstQuestControls entity)
        {
            _repositoryUnitOfWork.QuestControls.Value.Remove(entity);
            return new ResponseResult<SstQuestControls>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<SstQuestControls> Update(SstQuestControls entity)
        {
            _repositoryUnitOfWork.QuestControls.Value.Update(entity);
            return new ResponseResult<SstQuestControls>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<IEnumerable<SstQuestControls>> RemoveRange(IEnumerable<SstQuestControls> entities)
        {
            _repositoryUnitOfWork.QuestControls.Value.RemoveRange(entities);
            return new ResponseResult<IEnumerable<SstQuestControls>>() { Status = ResultStatus.Success, Data = entities };
        }
    }
}