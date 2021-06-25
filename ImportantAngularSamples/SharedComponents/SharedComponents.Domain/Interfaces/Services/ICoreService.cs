using Microsoft.AspNetCore.Http;
using SharedComponents.Domain.DTO;
using SharedComponents.Domain.Dtos;
using SharedComponents.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace SharedComponents.Domain.Interfaces.Services
{
    public interface ICoreService
    {
        Task<Companies> GetCompany(int companyId);
        Task<User> GetUserInfo(string username);
        Task<List<User>> GetUserBySearch(int companyId, long groupId);
        Task<Report> GetReports(string reportCode, int companyId);
        Task<List<RepParams>> GetReportsParams(string reportCode, int companyId);
        Task<ReportsMenus> GetReportsMenus(int reportMenuId);
        Task SaveReport(ReportData oReportData, Companies Company, HttpResponse Response, string FileName);
    }
}