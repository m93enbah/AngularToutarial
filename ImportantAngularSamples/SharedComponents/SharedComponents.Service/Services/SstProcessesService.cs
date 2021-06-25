using SharedComponents.Domain.Common;
using SharedComponents.Domain.Enums;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Interfaces.Services;
using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using System.Text;

namespace SharedComponents.Service.Services
{
    public class SstProcessesService : ISstProcessesService
    {

        private IRepositoryUnitOfWork _repositoryUnitOfWork;
        public SstProcessesService(IRepositoryUnitOfWork repositoryUnitOfWork)
        {
            _repositoryUnitOfWork = repositoryUnitOfWork;
        }
        public IResponseResult<SstProcesses> Add(SstProcesses entity)
        {
            _repositoryUnitOfWork.Processes.Value.Add(entity);
            return new ResponseResult<SstProcesses>() { Status = ResultStatus.Success, Data = entity };

        }

        public IResponseResult<IEnumerable<SstProcesses>> AddRange(IEnumerable<SstProcesses> models)
        {
            _repositoryUnitOfWork.Processes.Value.AddRange(models);
            return new ResponseResult<IEnumerable<SstProcesses>>() { Status = ResultStatus.Success, Data = models };
        }

        public IResponseResult<SstProcesses> Get(long Id, int companyId)
        {
            var result = _repositoryUnitOfWork.Processes.Value.Get(Id, companyId);
            return new ResponseResult<SstProcesses>() { Status = ResultStatus.Success, Data = result };

        }

        public IResponseResult<SstProcesses> Get(long Id)
        {
            var result = _repositoryUnitOfWork.Processes.Value.Get(Id);
            return new ResponseResult<SstProcesses>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<IEnumerable<SstProcesses>> GetAll()
        {

            var result = _repositoryUnitOfWork.Processes.Value.GetAll().ToList();
            return new ResponseResult<IEnumerable<SstProcesses>>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SstProcesses> Remove(SstProcesses entity)
        {
            _repositoryUnitOfWork.Processes.Value.Remove(entity);
            return new ResponseResult<SstProcesses>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<IEnumerable<SstProcesses>> RemoveRange(IEnumerable<SstProcesses> models)
        {

            _repositoryUnitOfWork.Processes.Value.RemoveRange(models);
            return new ResponseResult<IEnumerable<SstProcesses>>() { Status = ResultStatus.Success, Data = models };
        }

        public IResponseResult<SstProcesses> Update(SstProcesses entity)
        {
            _repositoryUnitOfWork.Processes.Value.Update(entity);
            return new ResponseResult<SstProcesses>() { Status = ResultStatus.Success, Data = entity };
        }
        public IQueryable<SstProcesses> Find(Expression<Func<SstProcesses, bool>> predicate, params Expression<Func<SstProcesses, object>>[] navigationProperties)
        {
            return _repositoryUnitOfWork.Processes.Value.Find(predicate, navigationProperties);
        }

        public IResponseResult<IEnumerable<SstProcessSteps>> LoadProcessStepsWithParentShapesByProcessID(long? Id)
        {
            var result = _repositoryUnitOfWork.Processes.Value.LoadProcessStepsWithParentShapesByProcessID(Id);
            return new ResponseResult<IEnumerable<SstProcessSteps>>() { Status = ResultStatus.Success, Data = result };
        }


        public IResponseResult<IEnumerable<SstProcessSteps>> UpdateProcessWithProcessStepsAndParentObject(long? procID, IEnumerable<SstProcessSteps> procsteps)
        {

            var parentObjectsResult = _repositoryUnitOfWork.ProcessParentSteps.Value.Find(x => x.ProcessId == procID).ToList();
            _repositoryUnitOfWork.ProcessParentSteps.Value.RemoveRange(parentObjectsResult);

            var processStepsResult = _repositoryUnitOfWork.ProcessesSteps.Value.Find(x => x.ProcessId == procID).ToList();
            if (processStepsResult.Count() > 0)
            {

                foreach (var obj in processStepsResult)
                {
                    var exist = procsteps.Where(i => i.StepId == obj.StepId).FirstOrDefault();
                    if (exist == null)
                    {
                        _repositoryUnitOfWork.ProcessesSteps.Value.Remove(obj);
                    }
                }
                foreach (var item in procsteps)
                {
                    var exist = processStepsResult.Where(i => i.StepId == item.StepId).FirstOrDefault();
                    if (exist != null)
                    {
                        exist.ModificationDate = DateTime.Now;
                        exist.ModificationUser = "Admin";
                        exist.Name = item.Name;
                        exist.XPosition = item.XPosition;
                        exist.YPosition = item.YPosition;
                        exist.Width = item.Width;
                        exist.Height = item.Height;
                        exist.ProcessStepId = item.ProcessStepId;
                        exist.FontColor = item.FontColor;
                        exist.BackColor = item.BackColor;
                        exist.FontSize = item.FontSize;
                        foreach (var x in item.SstProcessParentSteps)
                        {
                            exist.SstProcessParentSteps.Add(x);
                        }
                        _repositoryUnitOfWork.ProcessesSteps.Value.Update(exist);
                    }
                    else if (exist == null)
                    {
                        _repositoryUnitOfWork.ProcessesSteps.Value.Add(item);
                    }

                }
            }
            else
            {
                foreach (var item in procsteps)
                {
                    _repositoryUnitOfWork.ProcessesSteps.Value.Add(item);
                }
            }
            return new ResponseResult<IEnumerable<SstProcessSteps>>() { Status = ResultStatus.Success, Data = procsteps };
        }

        public IResponseResult<SstProcesses> DeleteProcesStepsAndParents(long? procID)
        {
            var process = _repositoryUnitOfWork.Processes.Value.Get(Convert.ToInt64(procID));

            var processSystemsResult = _repositoryUnitOfWork.ProcessesSystems.Value.Find(x => x.ProcessId == procID);
            _repositoryUnitOfWork.ProcessesSystems.Value.RemoveRange(processSystemsResult);

            var processParentStepsResult = _repositoryUnitOfWork.ProcessParentSteps.Value.Find(x => x.ProcessId == procID);
            _repositoryUnitOfWork.ProcessParentSteps.Value.RemoveRange(processParentStepsResult);

            var processStepsResult = _repositoryUnitOfWork.ProcessesSteps.Value.Find(x => x.ProcessId == procID);
            _repositoryUnitOfWork.ProcessesSteps.Value.RemoveRange(processStepsResult);

            _repositoryUnitOfWork.Processes.Value.Remove(process);

            return new ResponseResult<SstProcesses>() { Status = ResultStatus.Success, Data = process };
        }

        public IResponseResult<SstProcesses> copyProcesses(Int64? procID)
        {
            var process = _repositoryUnitOfWork.Processes.Value.Get(Convert.ToInt64(procID));
            process = (SstProcesses)process.DeepClone();
            process = _repositoryUnitOfWork.Processes.Value.Add(process);

            process.SstProcessSystems = _repositoryUnitOfWork.ProcessesSystems.Value.LoadProcessSystemsByProcessID(procID);
            ICollection<SstProcessSystems> procSys = new List<SstProcessSystems>();
            foreach (var sys in process.SstProcessSystems)
            {
                sys.ProcessId = process.Id;
                procSys.Add(sys);
            }
            process.SstProcessSystems = (ICollection<SstProcessSystems>)procSys.DeepClone();
            _repositoryUnitOfWork.ProcessesSystems.Value.AddRange(process.SstProcessSystems);

            process.SstProcessSteps = _repositoryUnitOfWork.Processes.Value.LoadProcessStepsWithParentShapesByProcessID(Convert.ToInt64(procID)) as ICollection<SstProcessSteps>;
            ICollection<SstProcessSteps> procSteps = new List<SstProcessSteps>();
            foreach (var step in process.SstProcessSteps)
            {
                step.ProcessId = process.Id;
                foreach (var parent in step.SstProcessParentSteps)
                {
                    parent.ProcessId = process.Id;
                }
                procSteps.Add(step);
            }
            process.SstProcessSteps = (ICollection<SstProcessSteps>)procSteps.DeepClone();
            _repositoryUnitOfWork.ProcessesSteps.Value.AddRange(process.SstProcessSteps);
            return new ResponseResult<SstProcesses>() { Status = ResultStatus.Success, Data = process };
        }



        public IResponseResult<IEnumerable<SstProcesses>> Search(SearchProcess search)
        {

            var process = _repositoryUnitOfWork.Processes.Value.Search(search).ToList();
            return new ResponseResult<IEnumerable<SstProcesses>>() { Status = ResultStatus.Success, Data = process };
        }




    }



    public static class FastDeepCloner
    {

        #region Privat Properties
        public const BindingFlags Binding = BindingFlags.Instance |
        BindingFlags.NonPublic | BindingFlags.Public;// | BindingFlags.FlattenHierarchy;
        #endregion

        public static object DeepClone<T>(this T desireObjectToBeCloned)
        {
            //we have 2 cases : 1- Array 2-List or ICollection or IEnumerable return always IEnumerable
            if (desireObjectToBeCloned == null)
                return null;

            Type _primaryType = desireObjectToBeCloned.GetType();

            if (typeof(IEnumerable).IsAssignableFrom(desireObjectToBeCloned.GetType()))
            {
                //case 01 Deal with the Array
                var s = desireObjectToBeCloned.GetType().GetMethod("Clone");
                if (s != null)
                {
                    var s1 = desireObjectToBeCloned.GetType().GetMethod("Clone").Invoke(desireObjectToBeCloned, new object[] { });
                    Array w1 = (Array)s1;
                    Array arr = Array.CreateInstance(s1.GetType().GetElementType(), w1.Length);
                    int i = -1;
                    foreach (var item in w1)
                    {
                        i++;
                        var tObject234 = Activator.CreateInstance(item.GetType());
                        var props = item.GetType().GetProperties(Binding);
                        foreach (var prop in props)
                        {
                            if (prop.DeclaringType != item.GetType() && prop.PropertyType == typeof(Int64))
                                continue;

                            if ((prop.PropertyType.IsClass || prop.PropertyType.IsInterface) && prop.PropertyType != typeof(string))
                            {
                                prop.SetValue(tObject234, prop.GetValue(item).DeepClone());
                            }
                            else
                            {
                                prop.SetValue(tObject234, prop.GetValue(item));
                            }
                        }
                        arr.SetValue(tObject234, i);
                    }
                    return arr;
                }
                //case 02 Deal with the IEnumerable s
                else
                {

                    Type objetsType = _primaryType.GetGenericArguments()[0];
                    IEnumerable multiple = (IList)Activator.CreateInstance((typeof(List<>).MakeGenericType(objetsType)));
                    IList lst = (IList)Activator.CreateInstance((typeof(List<>).MakeGenericType(objetsType)));
                    foreach (var item in (IEnumerable)desireObjectToBeCloned)
                    {
                        var tObject234 = Activator.CreateInstance(item.GetType());
                        var props = item.GetType().GetProperties(Binding);
                        foreach (var prop in props)
                        {
                            if (prop.DeclaringType != item.GetType() && prop.PropertyType == typeof(Int64))
                                continue;

                            if ((prop.PropertyType.IsClass || prop.PropertyType.IsInterface) && prop.PropertyType != typeof(string))
                            {
                                prop.SetValue(tObject234, prop.GetValue(item).DeepClone());
                            }
                            else
                            {
                                prop.SetValue(tObject234, prop.GetValue(item));
                            }
                        }

                        lst.Add(tObject234);
                    }
                    multiple = lst;
                    return multiple;
                }
            }
            else
            {
                //This below case is for single object
                var obj = Activator.CreateInstance(desireObjectToBeCloned.GetType());
                var props = desireObjectToBeCloned.GetType().GetProperties();
                foreach (var prop in props)
                {
                    if (prop.DeclaringType != obj.GetType() && prop.PropertyType == typeof(Int64))
                        continue;

                    if ((prop.PropertyType.IsClass || prop.PropertyType.IsInterface) && prop.PropertyType != typeof(string))
                    {
                        prop.SetValue(obj, prop.GetValue(desireObjectToBeCloned).DeepClone());
                    }
                    else
                    {
                        prop.SetValue(obj, prop.GetValue(desireObjectToBeCloned));
                    }
                }
                return obj;
            }
        }
    }
}
