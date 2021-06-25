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
    public class QuestionnaireService : IQuestionnaireService
    {

        private IRepositoryUnitOfWork _repositoryUnitOfWork;
        public QuestionnaireService(IRepositoryUnitOfWork repositoryUnitOfWork)
        {
            _repositoryUnitOfWork = repositoryUnitOfWork;
        }

        public IResponseResult<SstQuestionnaires> Add(SstQuestionnaires entity)
        {
            _repositoryUnitOfWork.Questionnaire.Value.Add(entity);
            return new ResponseResult<SstQuestionnaires>() { Status = ResultStatus.Success, Data = entity };

        }

        public IResponseResult<IEnumerable<SstQuestionnaires>> AddRange(IEnumerable<SstQuestionnaires> models)
        {
            throw new NotImplementedException();
        }

        public IResponseResult<SstQuestionnaires> Get(long Id, int companyId)
        {
            var result = _repositoryUnitOfWork.Questionnaire.Value.Get(Id, companyId);
            return new ResponseResult<SstQuestionnaires>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SstQuestionnaires> Get(long Id)
        {
            var result = _repositoryUnitOfWork.Questionnaire.Value.Get(Id);
            return new ResponseResult<SstQuestionnaires>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<IEnumerable<SstQuestionnaires>> GetAll()
        {
            var result = _repositoryUnitOfWork.Questionnaire.Value.GetAll().ToList();
            return new ResponseResult<IEnumerable<SstQuestionnaires>>() { Status = ResultStatus.Success, Data = result };

        }

        public IResponseResult<IEnumerable<SstQuestionnaires>> GetByCriteria(SearchQuestionnaire search)
        {
            var result = _repositoryUnitOfWork.Questionnaire.Value.GetByCriteria(search).ToList();
            return new ResponseResult<IEnumerable<SstQuestionnaires>>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SstQuestionnaires> Remove(SstQuestionnaires entity)
        {
            _repositoryUnitOfWork.Questionnaire.Value.Remove(entity);
            return new ResponseResult<SstQuestionnaires>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<SstQuestionnaires> Update(SstQuestionnaires entity)
        {
            _repositoryUnitOfWork.Questionnaire.Value.Update(entity);
            return new ResponseResult<SstQuestionnaires>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<IEnumerable<SstQuestionnaires>> RemoveRange(IEnumerable<SstQuestionnaires> entities)
        {
            _repositoryUnitOfWork.Questionnaire.Value.RemoveRange(entities);
            return new ResponseResult<IEnumerable<SstQuestionnaires>>() { Status = ResultStatus.Success, Data = entities };
        }

        public IResponseResult<IEnumerable<SstQuestionnaires>> CopyQuestionnaire(SstQuestionnaires questionnaire)
        {
            var result = _repositoryUnitOfWork.Questionnaire.Value.CopyQuestionnaire(questionnaire).ToList();
            return new ResponseResult<IEnumerable<SstQuestionnaires>>() { Status = ResultStatus.Success, Data = result };
        }

    }
}