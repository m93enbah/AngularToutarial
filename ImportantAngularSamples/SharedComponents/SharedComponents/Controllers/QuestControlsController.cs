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
    public class QuestControlsController : ControllerBase
    {
        private readonly IServiceUnitOfWork _serviceUnitOfWork;

        public QuestControlsController(IServiceUnitOfWork serviceUnitOfWork)
        {
            _serviceUnitOfWork = serviceUnitOfWork;
        }

        [HttpGet]
        public IResponseResult<IEnumerable<SstQuestControls>> GetAll()
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.QuestControls.Value.GetAll();
        }

        [HttpGet("{id}")]
        public IResponseResult<SstQuestControls> Get(long id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.QuestControls.Value.Get(id);
        }

        [HttpPut]
        public IResponseResult<SstQuestControls> Update(SstQuestControls QuestControls)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.QuestControls.Value.Update(QuestControls);
        }

        [HttpPost]
        public IResponseResult<SstQuestControls> Add(SstQuestControls QuestControls)
        {

            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.QuestControls.Value.Add(QuestControls);
        }

        [HttpPost("InsertBulk")]
        public IResponseResult<IEnumerable<SstQuestControls>> AddRange(List<SstQuestControls> QuestControlss)
        {

            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.QuestControls.Value.AddRange(QuestControlss);
        }


        [HttpDelete("{id}")]
        [Route("Delete")]
        public IResponseResult<SstQuestControls> Delete(int id)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.QuestControls.Value.Remove(new SstQuestControls() { Id = id });
        }


        [HttpPost]
        [Route("DeleteBulk")]

        public ActionResult DeleteBulk(int[] QuestControlsID)
        {
            try
            {
                foreach (var ID in QuestControlsID)
                {

                    using (_serviceUnitOfWork)
                        _serviceUnitOfWork.QuestControls.Value.Remove(new SstQuestControls() { Id = ID });

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
        public ActionResult RemoveRange(SstQuestControls[] entity)
        {
            try
            {
                using (_serviceUnitOfWork)
                {
                    _serviceUnitOfWork.QuestControls.Value.RemoveRange(entity);
                    // _serviceUnitOfWork.Questionnaire.Value.SaveChanges();
                }

                return Ok();
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }


        [HttpGet("GetByCriteria")]
        public IResponseResult<IEnumerable<SstQuestControls>> GetByCriteria([FromQuery] SearchQuestControls search)
        {
            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.QuestControls.Value.GetByCriteria(search);
        }
    }
}