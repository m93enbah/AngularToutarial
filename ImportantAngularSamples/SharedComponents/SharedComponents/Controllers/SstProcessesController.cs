using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using SharedComponents.Domain.Interfaces.Services;
using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SharedComponents.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SstProcessesController : ControllerBase
    {

        private readonly IServiceUnitOfWork _serviceUnitOfWork;

        public SstProcessesController(IServiceUnitOfWork serviceUnitOfWork)
        {
            _serviceUnitOfWork = serviceUnitOfWork;
        }


        [HttpGet]
        [Route("GetAll")]
        public IResponseResult<IEnumerable<SstProcesses>> GetAll()
        {

            using (_serviceUnitOfWork)
                return _serviceUnitOfWork.Processes.Value.GetAll();

        }

        [HttpGet]
        [Route("LoadProcessWithDetails/{id}")]
        public IActionResult LoadProcessWithDetails(long? id)
        {
            var model = _serviceUnitOfWork.Processes.Value.LoadProcessStepsWithParentShapesByProcessID(id);
            if (model != null)
            {
                return Ok(model);
            }
            return NotFound();
        }

        [HttpPut]
        [Route("UpdateProcessSteps/{procID}")]
        public IActionResult UpdateProcessWithProcessStepsAndParentObject(long? procID, IEnumerable<SstProcessSteps> procsteps)
        {
            var model = _serviceUnitOfWork.Processes.Value.UpdateProcessWithProcessStepsAndParentObject(procID, procsteps);
            if (model != null)
            {
                return Ok(model);
            }
            return NotFound();
        }

        [HttpPost]
        public IResponseResult<SstProcesses> Post([FromBody] SstProcesses Process)
        {
            IResponseResult<SstProcesses> processesResult;

            using (_serviceUnitOfWork)
            {
                processesResult = _serviceUnitOfWork.Processes.Value.Add(Process);
                return processesResult;
            }
        }


        [HttpPut]
        public IResponseResult<SstProcesses> Put([FromBody]  SstProcesses process)
        {
            using (_serviceUnitOfWork)
            {
                return _serviceUnitOfWork.Processes.Value.Update(process);
            }
        }


        [HttpDelete("{id}")]
        public IResponseResult<SstProcesses> Delete(long? id)
        {
            SstProcesses process = new SstProcesses();

            using (_serviceUnitOfWork)
            {
                return _serviceUnitOfWork.Processes.Value.DeleteProcesStepsAndParents(id);
            }
        }


        [HttpGet("{Id}")]
        public JsonResult GetId(int Id)
        {
            try
            {
                var model = _serviceUnitOfWork.ProcessesSystems.Value.Find(x => x.ProcessId == Id);
                return new JsonResult(model);
            }
            catch (Exception ex)
            {
                return new JsonResult(BadRequest(ex.Message));
            }
        }


        [HttpPost]
        [Route("RemoveRange")]
        public ActionResult RemoveRange(SstProcessSystems[] entity)
        {
            try
            {
                using (_serviceUnitOfWork)
                {
                    _serviceUnitOfWork.ProcessesSystems.Value.RemoveRange(entity);
                    // _serviceUnitOfWork.Questionnaire.Value.SaveChanges();
                }

                return Ok();
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }


        [Route("copyProcess/{id}")]
        public ActionResult copyProcess(int id)
        {
            try
            {
                using (_serviceUnitOfWork)
                {
                    _serviceUnitOfWork.Processes.Value.copyProcesses(id);
                }
                return Ok();
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }


        [HttpPost("Search")]
        public IResponseResult<IEnumerable<SstProcesses>> Search(SearchProcess search)
        {
            using (_serviceUnitOfWork)
            {
                return _serviceUnitOfWork.Processes.Value.Search(search);
            }
        }

    }
}