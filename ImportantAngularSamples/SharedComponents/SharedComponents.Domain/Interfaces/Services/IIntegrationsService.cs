using System;
using System.Collections.Generic;
using System.Text;
using System.Xml;
using Microsoft.AspNetCore.Http;
using SharedComponents.Domain.Dtos;
using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Models;
using SharedComponents.Domain.Models.SearchCriteria;

namespace SharedComponents.Domain.Interfaces.Services
{
    public interface IIntegrationsService : IService<SstIntegrations>
    {
        IResponseResult<object> ExecuteStepLoadTransactions(long userPropertiesId, long stepId);
        IResponseResult<object> ExecuteStepSubmitTransactions(long userPropertiesId, int currentStepId, List<StepFormValue> controls);
        IResponseResult<List<DataSourceItem>> LoadDataSource(long userPropertiesId, long integrationSetttingId);
        IResponseResult<IEnumerable<SstIntegrations>> GetByCriteria(SearchIntegration search);
        IResponseResult<IEnumerable<object>> ExecuteDataTableTransaction(DataTableTransactionLoad data);
        IResponseResult<string> ExecuteUploadTransaction(int sequenceId, ICollection<IFormFile> files, int userPropertiesId, object stepFormValue);
        IResponseResult<object> ExecutesequenceTransaction(long userPropertiesId, long sequenceId, List<StepFormValue> controls, Dictionary<string, object> variables);
    }
}