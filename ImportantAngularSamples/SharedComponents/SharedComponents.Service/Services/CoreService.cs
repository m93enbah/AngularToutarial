
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using SharedComponents.Domain.Common;
using SharedComponents.Domain.DTO;
using SharedComponents.Domain.Dtos;
using SharedComponents.Domain.Interfaces.Helper;
using SharedComponents.Domain.Interfaces.Services;
using SharedComponents.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SharedComponents.Service.Services
{
    public class CoreService : ICoreService
    {
        private IHelper helper;
        private readonly IOptions<SharedSettings> sharedSettings;
        public CoreService(IHelper helper, IOptions<SharedSettings> sharedSettings)
        {
            this.helper = helper;
            this.sharedSettings = sharedSettings;
        }

        public async Task<Companies> GetCompany(int companyId)
        {
            var result = await helper.GetFrom<CoreResponse<List<Companies>>>(sharedSettings.Value.CoreApiUrl, "GetCompanies");
            return result.data.Where(c => c.iD == companyId).FirstOrDefault();
        }

        public async Task<User> GetUserInfo(string username)
        {
            var result = await helper.GetFrom<CoreResponse<User>>(sharedSettings.Value.CoreApiUrl, "GetUserInfo" + "?username=" + username);
            return result.data;
        }

        public async Task<List<User>> GetUserBySearch(int companyId, long groupId)
        {
            var result = await helper.GetFrom<CoreResponse<List<User>>>(sharedSettings.Value.CoreApiUrl, "" + "?companyId=" + companyId + "&groupId=" + groupId);
            return result.data;
        }

        public async Task<Report> GetReports(string reportCode, int companyId)
        {
            var result = await helper.GetFrom<CoreResponse<Report>>(sharedSettings.Value.ReportManagerApiUrl, "" + "?CAM_RPT_CODE=" + reportCode + "&COM_ID=" + companyId);
            return result.data;
        }

        public async Task<List<RepParams>> GetReportsParams(string reportCode, int companyId)
        {
            var result = await helper.GetFrom<CoreResponse<List<RepParams>>>(sharedSettings.Value.ReportManagerApiUrl, "ReportParam" + "?CAM_RPT_CODE=" + reportCode + "&COM_ID=" + companyId);
            return result.data;
        }

        public async Task<ReportsMenus> GetReportsMenus(int reportMenuId)
        {
            var result = await helper.GetFrom<CoreResponse<ReportsMenus>>(sharedSettings.Value.ReportManagerApiUrl, "" + "?CAM_RMU_ID=" + reportMenuId);
            return result.data;
        }

        public async Task SaveReport(ReportData oReportData, Companies Company, HttpResponse Response, string FileName)
        {
            var body = JsonConvert.SerializeObject(new
            {
                reportData = oReportData,
                company = Company,
                response = Response,
                filename = FileName
            });

            var result = await helper.PostFrom<CoreResponse<ReportsMenus>>(sharedSettings.Value.ReportManagerApiUrl, "", body);
        }
    }
}