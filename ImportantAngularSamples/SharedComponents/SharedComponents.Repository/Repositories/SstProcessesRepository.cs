using DOMAIN.Context;
using Microsoft.EntityFrameworkCore;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Models;
using SharedComponents.Repository.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;

namespace SharedComponents.Repository.Repositories
{
    public class SstProcessesRepository : Repository<SstProcesses>, ISstProcessesRepository
    {
        private SharedComponentsDBContext _context;
        public SstProcessesRepository(SharedComponentsDBContext context) : base(context)
        {
            _context = context;
        }
        public IEnumerable<SstProcessSteps> LoadProcessStepsWithParentShapesByProcessID(long? Id)
        {

            var model = Context.Set<SstProcessSteps>()
                                  .Where(x => x.ProcessId == Id)
                                  .OrderBy(x => x.ProcessStepId).OrderBy(x => x.StepId)
                                  .GroupBy(x => x.ProcessStepId)
                                  .Select(g => new {
                                      Process = g
                                  }).ToList();


            var length = model.Count;
            var procSteps = new List<SstProcessSteps>();

            if (length > 0)
            {
                var procStep = new SstProcessSteps();

                foreach (var shape in model[0].Process)
                {
                    procStep = shape;
                    if (procStep.SstProcessParentSteps == null)
                    {
                        procStep.SstProcessParentSteps = new List<SstProcessParentSteps>();
                    }
                    procSteps.Add(procStep);

                    for (int k = 0; k < length; k++)
                    {
                        var count = model[k].Process.Where(x => x.ProcessStepId == shape.StepId).ToList().Count();
                        if (count > 0)
                        {
                            foreach (var shape02 in model[k].Process)
                            {
                                procStep = shape02;
                                procStep.SstProcessParentSteps = this.GetParentShapesByStepID(procStep.Id);
                                if (procStep.SstProcessParentSteps == null)
                                {
                                    procStep.SstProcessParentSteps = new List<SstProcessParentSteps>();
                                }
                                procSteps.Add(procStep);
                            }
                        }

                    }


                }
            }
            return procSteps.ToList();

        }

        public IEnumerable<SstProcessSteps> LoadProcessStepsByProcessID(long? Id)
        {


            var model = (from m in _context.SstProcessSteps
                         where m.ProcessId == Id
                         orderby m.ProcessStepId ascending, m.StepId ascending
                         group m by new { m.ProcessStepId } into g

                         select new
                         {
                             keys1 = g.ToList()
                         }).AsNoTracking().ToList();
            var length = model.Count;
            var procSteps = new List<SstProcessSteps>();

            if (length > 0)
            {
                var procStep = new SstProcessSteps();

                foreach (var shape in model[0].keys1)
                {
                    procStep = shape;
                    if (procStep.SstProcessParentSteps == null)
                    {
                        procStep.SstProcessParentSteps = new List<SstProcessParentSteps>();
                    }
                    procSteps.Add(procStep);

                    for (int k = 0; k < length; k++)
                    {
                        var count = model[k].keys1.Where(x => x.ProcessStepId == shape.StepId).ToList().Count();
                        if (count > 0)
                        {
                            foreach (var shape02 in model[k].keys1)
                            {
                                procStep = shape02;
                                procSteps.Add(procStep);
                            }
                        }

                    }
                }
            }
            return procSteps.ToList();
        }

        public ICollection<SstProcessParentSteps> GetParentShapesByStepID(long? Id)
        {
            var parentShapes = _context.SstProcessParentSteps.AsNoTracking().Where(i => i.ProcessStepId == Id);
            return parentShapes.ToList();
        }

        public IEnumerable<SstProcesses> Search(SearchProcess search)
        {
            PropertyInfo[] props = typeof(SstProcesses).GetProperties();

            IEnumerable<SstProcesses> res = Context.Set<SstProcesses>().AsEnumerable();
            List<SstProcesses> filteredByName = new List<SstProcesses>();
            List<SstProcesses> filteredBySystems = new List<SstProcesses>();
            List<SstProcesses> filteredByNotes = new List<SstProcesses>();

            if ((search.filterdCols.Count() == 0 && search.Names.Count() == 0) || (search.filterdCols.Count() != 0 && search.Names.Count() == 0))
            {
                return res;
            }
            if (search.filterdCols.Count() == 0 && search.Names.Count() != 0)
            {
                foreach (PropertyInfo item in props)
                {
                    switch (item.Name)
                    {
                        case "Name":
                            IEnumerable<SstProcesses> l1 = Context.Set<SstProcesses>().AsEnumerable();
                            foreach (var name in search.Names)
                            {
                                l1 = l1.Where(x => x.Name.StartsWith(name));
                                foreach (var x in l1)
                                {
                                    filteredByName.Add(x);
                                }
                                l1 = Context.Set<SstProcesses>().AsEnumerable();
                            }
                            break;

                        case "Notes":
                            IEnumerable<SstProcesses> l2 = Context.Set<SstProcesses>().AsEnumerable();
                            foreach (var name in search.Names)
                            {
                                l2 = l2.Where(x => x.Notes.StartsWith(name));
                                foreach (var x in l2)
                                {
                                    filteredByNotes.Add(x);
                                }
                                l2 = Context.Set<SstProcesses>().AsEnumerable();
                            }
                            break;

                        case "SstProcessSystems":

                            var l3 = from a in Context.Set<SstProcessSystems>()
                                     join b in Context.Set<SstProcesses>()
                                     on a.ProcessId equals b.Id
                                     join c in Context.Set<SstSystems>()
                                     on a.SystemId equals c.Id
                                     select new
                                     {
                                         ProcSystems = a,
                                         Process = b,
                                         Systems = c
                                     };
                            foreach (var name in search.Names)
                            {
                                var l4 = l3;
                                var obj = l4.Where(x => x.Systems.Name.StartsWith(name)).Select(x => x.Process) as IEnumerable<SstProcesses>;
                                foreach (var x in obj)
                                {
                                    filteredBySystems.Add(x);
                                }

                                l4 = l3;
                            }
                            break;

                        default:
                            break;
                    }
                }

            }
            else
            {

                foreach (PropertyInfo item in props)
                {
                    if (search.filterdCols.Contains(item.Name))
                    {
                        switch (item.Name)
                        {
                            case "Name":
                                IEnumerable<SstProcesses> l1 = Context.Set<SstProcesses>().AsEnumerable();
                                foreach (var name in search.Names)
                                {
                                    l1 = l1.Where(x => x.Name.StartsWith(name));
                                    foreach (var x in l1)
                                    {
                                        filteredByName.Add(x);
                                    }
                                    l1 = Context.Set<SstProcesses>().AsEnumerable();
                                }
                                break;

                            case "Notes":
                                IEnumerable<SstProcesses> l2 = Context.Set<SstProcesses>().AsEnumerable();
                                foreach (var name in search.Names)
                                {
                                    l2 = l2.Where(x => x.Notes.StartsWith(name));
                                    foreach (var x in l2)
                                    {
                                        filteredByNotes.Add(x);
                                    }
                                    l2 = Context.Set<SstProcesses>().AsEnumerable();
                                }
                                break;

                            case "SstProcessSystems":

                                var l3 = from a in Context.Set<SstProcessSystems>()
                                         join b in Context.Set<SstProcesses>()
                                         on a.ProcessId equals b.Id
                                         join c in Context.Set<SstSystems>()
                                         on a.SystemId equals c.Id
                                         select new
                                         {
                                             ProcSystems = a,
                                             Process = b,
                                             Systems = c
                                         };
                                foreach (var name in search.Names)
                                {
                                    var l4 = l3;
                                    var obj = l4.Where(x => x.Systems.Name.StartsWith(name)).Select(x => x.Process) as IEnumerable<SstProcesses>;
                                    foreach (var x in obj)
                                    {
                                        filteredBySystems.Add(x);
                                    }

                                    l4 = l3;
                                }
                                break;

                            default:
                                break;
                        }
                    }
                }
            }


            if (filteredByName.Count() != 0 && filteredByNotes.Count() != 0 && filteredBySystems.Count() != 0)
            {
                res = filteredByName.Intersect(filteredBySystems).Intersect(filteredByNotes);
            }
            else if (filteredByName.Count() != 0 && filteredByNotes.Count() != 0 && filteredBySystems.Count() == 0)
            {
                res = filteredByName.Intersect(filteredByNotes);
            }

            else if (filteredByName.Count() != 0 && filteredByNotes.Count() == 0 && filteredBySystems.Count() != 0)
            {
                res = filteredByName.Intersect(filteredBySystems);
            }
            else if (filteredByName.Count() != 0 && filteredByNotes.Count() != 0 && filteredBySystems.Count() == 0)
            {
                res = filteredByName.Intersect(filteredByNotes);
            }
            else if (filteredByName.Count() == 0 && filteredByNotes.Count() != 0 && filteredBySystems.Count() != 0)
            {
                res = filteredByNotes.Intersect(filteredBySystems);
            }
            else if (filteredByName.Count() != 0 && filteredByNotes.Count() == 0 && filteredBySystems.Count() == 0)
            {
                res = filteredByName;
            }
            else if (filteredByName.Count() == 0 && filteredByNotes.Count() != 0 && filteredBySystems.Count() == 0)
            {
                res = filteredByNotes;
            }
            else if (filteredByName.Count() == 0 && filteredByNotes.Count() == 0 && filteredBySystems.Count() != 0)
            {
                res = filteredBySystems;
            }
            else
            {
                res = new List<SstProcesses>();
            }
            return res;
        }





    }
}