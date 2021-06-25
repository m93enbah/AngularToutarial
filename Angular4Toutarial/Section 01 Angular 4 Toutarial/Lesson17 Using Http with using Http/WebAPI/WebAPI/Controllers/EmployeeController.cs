using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WebAPI.Models;
using System.Web.Http.Cors;

namespace WebAPI.Controllers
{
    //[EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class EmployeeController : ApiController
    {
        private CompanyDBEntities db = new CompanyDBEntities();

        // Get All Employees
        public HttpResponseMessage GetEmployees() 
        {
            try
            {
                using (CompanyDBEntities db = new CompanyDBEntities())
                {
                    List<Employee> lst = db.Employees.ToList();
                    return Request.CreateResponse(HttpStatusCode.OK, lst);
                }
            }
            catch (Exception ex) 
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }

        public HttpResponseMessage GetEmployee(int id)
        {
            try
            {
                using (CompanyDBEntities db = new CompanyDBEntities())
                {
                    Employee emp = db.Employees.Where(a => a.EmployeeID == id).FirstOrDefault();
                    if (emp == null) 
                    {
                        return Request.CreateErrorResponse(HttpStatusCode.NotFound, "The Employee with id " + id.ToString() + " not found");
                    }
                    else
                    {
                        return Request.CreateResponse(HttpStatusCode.OK, emp);
                    }
                }
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }

        public HttpResponseMessage PutEmployee(int id, Employee employee)
        {
            try
            {
                using (CompanyDBEntities db = new CompanyDBEntities())
                {
                    Employee emp = db.Employees.Where(e => e.EmployeeID == id).FirstOrDefault();
                    if (emp == null)
                    {
                        return Request.CreateResponse(HttpStatusCode.NotFound, "Employee With Id " + id.ToString() + " not found");
                    }
                    else
                    {
                        emp.FirstName = employee.FirstName;
                        emp.LastName = employee.LastName;
                        emp.EmpCode = employee.EmpCode;
                        emp.Position = employee.Position;
                        emp.Office = employee.Office;
                        db.SaveChanges();
                        return Request.CreateResponse(HttpStatusCode.OK, "The Employee with New Value " + emp.FirstName + " " + emp.LastName + " " + emp.Position + " " + emp.Office + " is updated");
                    }
                }
            }
            catch (Exception ex) 
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex.Message);
            }

        }

        // POST api/Employee
        [ResponseType(typeof(Employee))]
        public HttpResponseMessage PostEmployee(Employee employee)
        {
            try
            {
                using (CompanyDBEntities db = new CompanyDBEntities())
                {
                    db.Employees.Add(employee);
                    db.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.OK, "The Employee with Full Name "
                        +employee.FirstName+" "+employee.LastName+"is Created");
                }
            }

            catch (Exception ex) 
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }

        // DELETE api/Employee/5
        [ResponseType(typeof(Employee))]
        public HttpResponseMessage DeleteEmployee(int id)
        {
            try
            {
                using (CompanyDBEntities db = new CompanyDBEntities())
                {
                    Employee employee = db.Employees.Find(id);
                    if (employee == null)
                    {
                        return Request.CreateErrorResponse(HttpStatusCode.NotFound, "The Employee with id " + id.ToString() + " not found");
                    }
                    else
                    {
                        db.Employees.Remove(employee);
                        db.SaveChanges();
                        return Request.CreateResponse(HttpStatusCode.OK, "The Employee with id " + id.ToString() + " is Deleted");
                    }

                }
            }
            catch (Exception ex) 
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}