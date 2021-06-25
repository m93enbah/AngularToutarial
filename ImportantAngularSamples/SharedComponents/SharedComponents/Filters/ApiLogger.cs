using Microsoft.AspNetCore.Mvc.Filters;
using DOMAIN.Context;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Internal;
using SharedComponents.Domain.Enums;
using SharedComponents.Domain.Models;
using SharedComponents.Repository.UnitOfWork;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace SharedComponents.Api.Filters
{
    public class ApiLogger : ActionFilterAttribute
    {
        private long logId;
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            var Dbcontext = new SharedComponentsDBContext();
            var repositoryUnitOfWork = new RepositoryUnitOfWork(Dbcontext);
            logId = InsertLog(context.HttpContext, repositoryUnitOfWork).Id;
            var content = JsonConvert.SerializeObject(context.ActionArguments);
            LogRequest(content, repositoryUnitOfWork);
            base.OnActionExecuting(context);
        }
        private SstLogs InsertLog(HttpContext context, RepositoryUnitOfWork repositoryUnitOfWork)
        {
            return repositoryUnitOfWork.Log.Value.Add(new SstLogs()
            {
                CreationUser = "System",
                Date = DateTime.Now,
                IoType = (int)ApiIOType.In,
                Status = Byte.Parse((context.Response.StatusCode == 200 ? 1 : 0).ToString()),
                Url = context.Request.Path,
                StatusCode = context.Response.StatusCode.ToString(),
            });
        }
        private void LogRequest(string content, RepositoryUnitOfWork repositoryUnitOfWork)
        {
            repositoryUnitOfWork.LogDetails.Value.Add(new SstLogsDetails()
            {
                CreationUser = "System",
                Content = content,
                LogId = logId,
                ProcessDate = DateTime.Now,
                Type = (int)ApiTransactionType.Request
            });
        }
        private void LogRsponse(string content, int statusCode, RepositoryUnitOfWork repositoryUnitOfWork)
        {

            repositoryUnitOfWork.LogDetails.Value.Add(new SstLogsDetails()
            {
                CreationUser = "System",
                Content = content,
                LogId = logId,
                ProcessDate = DateTime.Now,
                Type = (int)ApiTransactionType.Response
            });

            var parentLog = repositoryUnitOfWork.Log.Value.Find(log => log.Id == logId).First();
            parentLog.Status = Byte.Parse((statusCode == 200 ? 1 : 0).ToString());
            parentLog.StatusCode = statusCode.ToString();
            repositoryUnitOfWork.Log.Value.Update(parentLog);

        }
        private void LogException(Exception exception, RepositoryUnitOfWork repositoryUnitOfWork)
        {
            var context = new StringBuilder();
            context.Append("Execption message " + exception.Message);
            context.Append("  ");
            context.Append("Execption StackTrace " + exception.StackTrace);
            context.Append("  ");
            context.Append("InnerException " + exception.InnerException);
            context.Append("  ");
            context.Append("InnerException StackTrace " + exception.InnerException?.StackTrace);

            repositoryUnitOfWork.LogDetails.Value.Add(new SstLogsDetails()
            {
                CreationUser = "System",
                Content = context.ToString(),
                LogId = logId,
                ProcessDate = DateTime.Now,
                Type = (int)ApiTransactionType.Response
            });

            var parentLog = repositoryUnitOfWork.Log.Value.Find(log => log.Id == logId).First();
            parentLog.Status = 0;
            parentLog.StatusCode = "500";
            repositoryUnitOfWork.Log.Value.Update(parentLog);
        }
        public override void OnActionExecuted(ActionExecutedContext context)
        {
            var Dbcontext = new SharedComponentsDBContext();
            var repositoryUnitOfWork = new RepositoryUnitOfWork(Dbcontext);
            if (context.Exception == null)
            {
                var content = JsonConvert.SerializeObject(context.Result, Formatting.Indented, new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
                });

                LogRsponse(content, context.HttpContext.Response.StatusCode, repositoryUnitOfWork);
            }
            else
                LogException(context.Exception, repositoryUnitOfWork);

            base.OnActionExecuted(context);

        }
    }
}