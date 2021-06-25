using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.Cors;
using CompanyAPI.Models;
using System.Web.Http;
using System.Net.Http;
using System.Net;
using System.Data.Entity;



namespace CompanyAPI.Controllers
{
    [EnableCorsAttribute("*", "*", "*")]
    public class EmployeeController : ApiController
    {
        // GET: Employee
        [HttpGet]
        public HttpResponseMessage LoadEmployees()
        {
            using (CompanyDataBaseEntities db = new CompanyDataBaseEntities())
            {
                var entity = from emp in db.Employees
                             //join skill in db.Skills on emp.id equals skill.empId
                             select new
                             {
                                 emp.Id,
                                 emp.fullName,
                                 emp.email,
                                 emp.confirmEmail,
                                 emp.contractPreference,
                                 emp.phone,
                                 emp.Skills
                             };
                if (entity != null)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, entity.ToList());
                }
                else
                {
                    return Request.CreateErrorResponse(HttpStatusCode.NotFound,
                    "Employees not found");
                }
            }
        }

        [HttpGet]
        // GET: Employee
        public HttpResponseMessage LoadEmployeeById([FromUri] int EmpID)
        {
            using (CompanyDataBaseEntities db = new CompanyDataBaseEntities())
            {
                var entity = from emp in db.Employees
                             join skill in db.Skills on emp.Id equals skill.empId into ps
                             from p in ps.DefaultIfEmpty()
                             where emp.Id == EmpID
                             select new
                             {
                                 emp.Id,
                                 emp.fullName,
                                 emp.email,
                                 emp.confirmEmail,
                                 emp.contractPreference,
                                 emp.phone,
                                 emp.Skills
                             };
                if (entity != null)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, entity.FirstOrDefault());
                }
                else
                {
                    return Request.CreateErrorResponse(HttpStatusCode.NotFound,
                    "Employee with Id " + EmpID.ToString() + " not found");
                }
            }
        }
        //In the below web method at first we make load the old and new skills and passing to //new skills values to be in replace of the old skills and then update them
        [HttpPut]
        public HttpResponseMessage PutEmployee(int id, Employee employee)
        {
            try
            {
                using (CompanyDataBaseEntities db = new CompanyDataBaseEntities())
                {
                    var emp = db.Employees.Include("Skills").FirstOrDefault();
                    var oldlst = from Skills in db.Skills where Skills.empId == emp.Id select Skills;
                    var newlst = employee.Skills;
                    List<Skill> oldSkills = oldlst.ToList();
                    List<Skill> newSkills = newlst.ToList();

                    if (emp == null)
                    {
                        return Request.CreateResponse(HttpStatusCode.NotFound, "Employee With Id " + id.ToString() + " not found");
                    }
                    else
                    {
                        int i = 0;
                        int count = newSkills.Count - 1;
                        foreach (var NewSkill in newSkills)
                        {
                            if (oldSkills.Count > i)
                            {
                                oldSkills[i].skillName = NewSkill.skillName;
                                oldSkills[i].experienceOfYear = NewSkill.experienceOfYear;
                                oldSkills[i].proffeicency = NewSkill.proffeicency;
                                db.Entry(oldSkills[i]).State = EntityState.Modified;
                                db.SaveChanges();
                            }
                            else
                            {
                                Skill sk = new Skill();
                                sk.skillName = NewSkill.skillName;
                                sk.experienceOfYear = NewSkill.experienceOfYear;
                                sk.proffeicency = NewSkill.proffeicency;
                                sk.empId = id;
                                db.Skills.Add(sk);
                                db.SaveChanges();
                            }

                            i++;
                        }

                        emp.Id = employee.Id;
                        emp.fullName = employee.fullName;
                        emp.email = employee.email;
                        emp.confirmEmail = employee.confirmEmail;
                        emp.contractPreference = employee.contractPreference;
                        emp.phone = employee.phone;
                        // emp.Skills = employee.Skills;
                        db.Entry(emp).State = EntityState.Modified;
                        db.SaveChanges();
                        return Request.CreateResponse(HttpStatusCode.OK, "The Employee with Old Name " + employee.fullName + " Is Updated to New Name " + emp.fullName);
                    }
                }
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }

        [HttpPost]
        public HttpResponseMessage PostEmployee([FromBody]Employee employee)
        {
            try
            {
                using (CompanyDataBaseEntities db = new CompanyDataBaseEntities())
                {
                    db.Employees.Add(employee);
                    db.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.OK, "The Employee with Full Name " + employee.fullName + "is Created");
                }
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }

        //In the below method service at first we make looping of skills and delete each one of //them and then delete the employee object
        [HttpDelete]
        public HttpResponseMessage DeleteEmployee(int empID)
        {
            try
            {
                using (CompanyDataBaseEntities db = new CompanyDataBaseEntities())
                {
                    Employee employee = db.Employees.Include("Skills").Where(x => x.Id == empID).FirstOrDefault();
                    var oldLst = employee.Skills;
                    List<Skill> odlSkills = oldLst.ToList();
                    int i = 0;
                    foreach (var skill in odlSkills)
                    {
                        db.Skills.Remove(skill);
                        db.SaveChanges();
                        i++;
                    }

                    if (employee == null)
                    {
                        return Request.CreateErrorResponse(HttpStatusCode.NotFound, "The Employee with id " + employee.Id.ToString() + " not found");
                    }
                    else
                    {
                        db.Employees.Remove(employee);
                        db.SaveChanges();
                        return Request.CreateResponse(HttpStatusCode.OK, "The Employee with id " + employee.Id.ToString() + " is Deleted");
                    }
                }
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }


        [HttpDelete]
        public HttpResponseMessage DeleteSkill(int skillID)
        {
            try
            {
                using (CompanyDataBaseEntities db = new CompanyDataBaseEntities())
                {
                    Skill skill = db.Skills.Where(x => x.Id == skillID).FirstOrDefault();

                    if (skill == null)
                    {
                        return Request.CreateErrorResponse(HttpStatusCode.NotFound, "The Skill with id " + skillID.ToString() + " not found");
                    }
                    else
                    {
                        db.Skills.Remove(skill);
                        db.SaveChanges();
                        return Request.CreateResponse(HttpStatusCode.OK, "The Skill with id " + skillID.ToString() + " is Deleted");
                    }
                }
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }
    }
}

    




