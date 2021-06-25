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
    public class QuestSystemsController : ControllerBase
    {
        private readonly IServiceUnitOfWork _serviceUnitOfWork;

        public QuestSystemsController(IServiceUnitOfWork serviceUnitOfWork)
        {
            _serviceUnitOfWork = serviceUnitOfWork;
        }

        [HttpGet]
        [Route("GetAll")]
        public IResponseResult<IEnumerable<SstQuestSystems>> GetAll()
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.QuestSystems.Value.GetAll();
        }

        [HttpGet("{id}")]
        [Route("Get")]
        public IResponseResult<SstQuestSystems> Get(long id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.QuestSystems.Value.Get(id);
        }

        [HttpPut]
        [Route("Update")]
        public IResponseResult<SstQuestSystems> Update(SstQuestSystems QuestSystems)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.QuestSystems.Value.Update(QuestSystems);
        }

        [HttpPost]
        [Route("Add")]
        public IResponseResult<SstQuestSystems> Add(SstQuestSystems QuestSystems)
        {

            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.QuestSystems.Value.Add(QuestSystems);
        }

        [HttpDelete("{id}")]
        [Route("Delete")]
        public IResponseResult<SstQuestSystems> Delete(int id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.QuestSystems.Value.Remove(new SstQuestSystems() { Id = id });
        }


        [HttpPost]
        [Route("DeleteBulk")]

        public ActionResult DeleteBulk(int[] QuestSystemsID)
        {
            try
            {
                foreach (var ID in QuestSystemsID)
                {

                    using (_serviceUnitOfWork)
                        _serviceUnitOfWork.QuestSystems.Value.Remove(new SstQuestSystems() { Id = ID });

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
        public ActionResult RemoveRange(SstQuestSystems[] entity)
        {
            try
            {
                using (_serviceUnitOfWork)
                {
                    _serviceUnitOfWork.QuestSystems.Value.RemoveRange(entity);
                    // _serviceUnitOfWork.Questionnaire.Value.SaveChanges();
                }

                return Ok();
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }
    }
}