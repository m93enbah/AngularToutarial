using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using SharedComponents.Domain.Models;
using SharedComponents.Domain.Interfaces.Services;
using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Models.SearchCriteria;
using System;

namespace SharedComponents.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionnairesController : ControllerBase
    {
        private readonly IServiceUnitOfWork _serviceUnitOfWork;

        public QuestionnairesController(IServiceUnitOfWork serviceUnitOfWork)
        {
            _serviceUnitOfWork = serviceUnitOfWork;
        }

        [HttpGet]
        public IResponseResult<IEnumerable<SstQuestionnaires>> GetAll()
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Questionnaire.Value.GetAll();
        }

        [HttpGet("{id}")]
        [Route("Get")]
        public IResponseResult<SstQuestionnaires> Get(long id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Questionnaire.Value.Get(id);
        }

        [HttpPut]
        [Route("Update")]
        public IResponseResult<SstQuestionnaires> Update(SstQuestionnaires Questionnaire)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Questionnaire.Value.Update(Questionnaire);
        }

        [HttpPost]
        [Route("Add")]
        public IResponseResult<SstQuestionnaires> Add(SstQuestionnaires Questionnaire)
        {

            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Questionnaire.Value.Add(Questionnaire);
        }

        [HttpDelete("{id}")]
        [Route("Delete")]
        public IResponseResult<SstQuestionnaires> Delete(int id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Questionnaire.Value.Remove(new SstQuestionnaires() { Id = id });
        }


        [HttpGet("GetByCriteria")]
        public IResponseResult<IEnumerable<SstQuestionnaires>> GetByCriteria([FromQuery] SearchQuestionnaire search)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Questionnaire.Value.GetByCriteria(search);
        }
        [HttpPost]
        [Route("DeleteBulk")]

        public ActionResult DeleteBulk(int[] QuestionnairesID)
        {
            try
            {
                foreach (var ID in QuestionnairesID)
                {

                    using (_serviceUnitOfWork)
                        _serviceUnitOfWork.Questionnaire.Value.Remove(new SstQuestionnaires() { Id = ID });

                }
                return Ok();
            }

            catch (Exception ex)
            {
                return BadRequest(ex.Message);

            }



        }



        //remove range

        [HttpPost]
        [Route("RemoveRange")]
        public ActionResult RemoveRange(SstQuestionnaires[] entity)
        {
            try
            {
                using (_serviceUnitOfWork)
                {
                    _serviceUnitOfWork.Questionnaire.Value.RemoveRange(entity);
                    // _serviceUnitOfWork.Questionnaire.Value.SaveChanges();
                }

                return Ok();
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }


        [HttpPost]
        [Route("CopyQuestionnaire")]

        public IResponseResult<IEnumerable<SstQuestionnaires>> CopyQuestionnaire(SstQuestionnaires Questionnaire)
        {

            return null;

            //using (_serviceUnitOfWork)
            //  return _serviceUnitOfWork.Questionnaire.Value.CopyQuestionnaire(Questionnaire);

        }
    }
}