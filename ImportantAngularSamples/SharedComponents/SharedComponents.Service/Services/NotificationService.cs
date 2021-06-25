using SharedComponents.Domain.Common;
using SharedComponents.Domain.Enums;
using SharedComponents.Domain.Interfaces.Services;
using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Linq;
using System.Net.Mail;
using System.Net;
using System.IO;
using System.Web;
using SharedComponents.Domain.Dtos;
using Microsoft.Extensions.Options;
using System.Threading.Tasks;
using System.Configuration;

namespace SharedComponents.Service.Services
{
    public class NotificationService : INotificationService
    {
        private IRepositoryUnitOfWork _repositoryUnitOfWork;
        private ICoreService coreService;
        private readonly IOptions<SharedSettings> sharedSettings;

        public NotificationService(IRepositoryUnitOfWork repositoryUnitOfWork, ICoreService coreService, IOptions<SharedSettings> sharedSettings)
        {
            _repositoryUnitOfWork = repositoryUnitOfWork;
            this.coreService = coreService;
            this.sharedSettings = sharedSettings;
        }

        public IResponseResult<SstNotifications> Add(SstNotifications entity)
        {
            _repositoryUnitOfWork.Notification.Value.Add(entity);
            return new ResponseResult<SstNotifications>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<IEnumerable<SstNotifications>> AddRange(IEnumerable<SstNotifications> entities)
        {
            _repositoryUnitOfWork.Notification.Value.AddRange(entities);
            return new ResponseResult<IEnumerable<SstNotifications>>() { Status = ResultStatus.Success, Data = entities };
        }

        public IResponseResult<SstNotifications> Get(long id, int companyId)
        {
            var result = _repositoryUnitOfWork.Notification.Value.Get(id, companyId);
            return new ResponseResult<SstNotifications>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SstNotifications> Get(long id)
        {
            var result = _repositoryUnitOfWork.Notification.Value.Get(id);
            return new ResponseResult<SstNotifications>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<IEnumerable<SstNotifications>> GetAll()
        {
            var result = _repositoryUnitOfWork.Notification.Value.GetAll().ToList();
            return new ResponseResult<IEnumerable<SstNotifications>>() { Status = ResultStatus.Success, Data = result };
        }

        public IResponseResult<SstNotifications> Remove(SstNotifications entity)
        {
            var result = _repositoryUnitOfWork.Notification.Value.Remove(entity);
            return new ResponseResult<SstNotifications>() { Status = ResultStatus.Success, Data = entity };
        }

        public IResponseResult<IEnumerable<SstNotifications>> RemoveRange(IEnumerable<SstNotifications> entities)
        {
            _repositoryUnitOfWork.Notification.Value.RemoveRange(entities);
            return new ResponseResult<IEnumerable<SstNotifications>>() { Status = ResultStatus.Success, Data = entities };
        }

        public IResponseResult<SstNotifications> Update(SstNotifications entity)
        {
            _repositoryUnitOfWork.Notification.Value.Update(entity);
            return new ResponseResult<SstNotifications>() { Status = ResultStatus.Success, Data = entity };
        }

        #region SendNotification
        public async void SendNotification(long notificationId, byte templateType)
        {
            var notification = _repositoryUnitOfWork.Notification.Value.Get(notificationId);

            var attachments = _repositoryUnitOfWork.NotificationAttachments.Value.Find(t => t.NotificationId == notificationId).ToList();

            Expression<Func<SstNotificationsTemplates, object>> expression = i => i.SstNotificationsContacts;
            var template = _repositoryUnitOfWork.NotificationTemplates.Value.Find(t => t.NotificationId == notificationId && t.Type == templateType, expression).FirstOrDefault();

            if (template != null)
            {
                string body = Encoding.UTF8.GetString(template.Body);
                string body2 = Encoding.UTF8.GetString(template.Body2);

                if (template.Type == (int)TemplateType.Email)
                {
                    string ToEmailAddresses = string.Empty;
                    string CcEmailAddresses = string.Empty;
                    string BccEmailAddresses = string.Empty;

                    foreach (var contact in template.SstNotificationsContacts)
                    {
                        if (contact.Type == (int)ContactType.To)
                        {
                            if (contact.GroupId != null)
                            {
                                var colUsers = await coreService.GetUserBySearch((int)notification.CompanyId, (long)contact.GroupId);
                                List<string> lstToEmailAddresses = colUsers.SelectMany(x => new List<string> { x.eMAIL.ToString() }).ToList();
                                if (!string.IsNullOrEmpty(ToEmailAddresses))
                                {
                                    ToEmailAddresses += ",";
                                }
                                ToEmailAddresses += string.Join(',', lstToEmailAddresses);
                            }
                            else if (!string.IsNullOrEmpty(contact.Username))
                            {
                                var user = await coreService.GetUserInfo(contact.Username);
                                if (!string.IsNullOrEmpty(ToEmailAddresses))
                                {
                                    ToEmailAddresses += ",";
                                }
                                ToEmailAddresses += user.eMAIL;
                            }
                        }
                        else if (contact.Type == (int)ContactType.CC)
                        {
                            if (contact.GroupId != null)
                            {
                                var colUsers = await coreService.GetUserBySearch((int)notification.CompanyId, (long)contact.GroupId);
                                List<string> lstCcEmailAddresses = colUsers.SelectMany(x => new List<string> { x.eMAIL.ToString() }).ToList();
                                if (!string.IsNullOrEmpty(CcEmailAddresses))
                                {
                                    CcEmailAddresses += ",";
                                }
                                CcEmailAddresses += string.Join(',', lstCcEmailAddresses);
                            }
                            else if (!string.IsNullOrEmpty(contact.Username))
                            {
                                var user = await coreService.GetUserInfo(contact.Username);
                                if (!string.IsNullOrEmpty(CcEmailAddresses))
                                {
                                    CcEmailAddresses += ",";
                                }
                                CcEmailAddresses += user.eMAIL;
                            }
                        }
                        else if (contact.Type == (int)ContactType.BCC)
                        {
                            if (contact.GroupId != null)
                            {
                                var colUsers = await coreService.GetUserBySearch((int)notification.CompanyId, (long)contact.GroupId);
                                List<string> lstBccEmailAddresses = colUsers.SelectMany(x => new List<string> { x.eMAIL.ToString() }).ToList();
                                if (!string.IsNullOrEmpty(BccEmailAddresses))
                                {
                                    BccEmailAddresses += ",";
                                }
                                BccEmailAddresses += string.Join(',', lstBccEmailAddresses);
                            }
                            else if (!string.IsNullOrEmpty(contact.Username))
                            {
                                var user = await coreService.GetUserInfo(contact.Username);
                                if (!string.IsNullOrEmpty(BccEmailAddresses))
                                {
                                    BccEmailAddresses += ",";
                                }
                                BccEmailAddresses += user.eMAIL;
                            }
                        }
                    }

                    await SendEmail(template.NotificationId, ToEmailAddresses, CcEmailAddresses, BccEmailAddresses, Languages.English, template.From, template.Subject, template.Subject2,
                        body, body2, attachments, string.Empty, (int)notification.SystemId, (int)notification.CompanyId);

                }
                else if (template.Type == (int)TemplateType.SMS)
                {
                    foreach (var contact in template.SstNotificationsContacts)
                    {
                        if (contact.GroupId != null)
                        {
                            var colUsers = await coreService.GetUserBySearch((int)notification.CompanyId, (long)contact.GroupId);
                            foreach (var oUser in colUsers)
                            {
                                var user = await coreService.GetUserInfo(oUser.uSERNAME);
                                SendSMS(template.NotificationId, user.mOBILE.ToString(), Languages.English, template.From, template.Subject, template.Subject2, body, body2);
                            }
                        }
                        else if (!string.IsNullOrEmpty(contact.Username))
                        {
                            var user = await coreService.GetUserInfo(contact.Username);
                            SendSMS(template.NotificationId, user.mOBILE.ToString(), Languages.English, template.From, template.Subject, template.Subject2, body, body2);
                        }
                    }
                }
            }
        }
        #endregion

        #region SendSMS
        public void SendSMS(long notificationId, string mobile, Languages language, string from, string subject, string subject2, string body, string body2)
        {
            Int64 id = notificationId;
            string smsSubject = string.Empty;
            string smsMessage = string.Empty;
            string messageToSend = string.Empty;

            bool isUniCode = false;
            string providerURL = string.Empty;
            string request = "Send Notification SMS";
            string requestDate = DateTime.Now.ToString("dd-MM-yyyy hh:mm tt");
            string response = string.Empty;
            string responseDate = string.Empty;
            byte isSuccess = 0;
            string ProviderCode = string.Empty;

            SstNotificationsLogs sstNotificationsLog = new SstNotificationsLogs();
            sstNotificationsLog.Request = request;
            sstNotificationsLog.RequestDate = Convert.ToDateTime(requestDate);
            sstNotificationsLog.NotificationId = notificationId;

            try
            {
                smsMessage = body;
                smsSubject = subject;
                if (language != Languages.English)
                {
                    if (!string.IsNullOrEmpty(body2))
                        smsMessage = body2;
                    if (!string.IsNullOrEmpty(subject2))
                        smsSubject = subject2;
                }
                messageToSend = smsMessage;

                var smsProvider = _repositoryUnitOfWork.SmsProvider.Value.GetAll().FirstOrDefault();

                if (smsProvider != null)
                {
                    providerURL = smsProvider.Api;
                    isUniCode = smsProvider.Unicode.HasValue ? Convert.ToBoolean(smsProvider.Unicode) : false;
                    ICredentials credentials = new NetworkCredential(smsProvider.Username, smsProvider.Password);

                    providerURL = providerURL.Replace("||SMS_MOBILE||", HttpUtility.UrlEncode(mobile));
                    providerURL = providerURL.Replace("||SMS_MESSAGE||", messageToSend);

                    if (isUniCode)
                    {
                        messageToSend = ConvertStringToUnicode(smsMessage);
                    }
                    else
                    {
                        messageToSend = HttpUtility.UrlEncode(smsMessage);
                    }

                    HttpWebRequest webRequest = (HttpWebRequest)WebRequest.Create(providerURL);
                    webRequest.Credentials = credentials;

                    using (HttpWebResponse webResponse = (HttpWebResponse)webRequest.GetResponse())
                    {
                        using (StreamReader srResponse = new StreamReader(webResponse.GetResponseStream()))
                        {
                            response = srResponse.ReadToEnd();
                            responseDate = DateTime.Now.ToString("dd-MM-yyyy hh:mm tt");
                        }
                    }

                    if (string.IsNullOrEmpty(response)) //No Response from the provider
                    {
                        ProviderCode = "SENDING FAILED";
                        isSuccess = 0;
                    }
                    else
                    {
                        ProviderCode = response.Split(' ')[0];
                        // try to see if the provider retun message indicates a success delivery
                        if (response.ToUpper().IndexOf("SUCCESS") > -1)
                        {
                            isSuccess = 1;
                        }
                    }


                    sstNotificationsLog.Status = isSuccess;
                    sstNotificationsLog.Response = response;
                    sstNotificationsLog.ResponseDate = Convert.ToDateTime(responseDate);
                    //sstNotificationsLog.KeyType = 0;
                    //sstNotificationsLog.KeyValue = "";

                    _repositoryUnitOfWork.NotificationsLogs.Value.Add(sstNotificationsLog);
                }
            }
            catch (Exception ex)
            {
                sstNotificationsLog.Status = 0;
                sstNotificationsLog.Response = ex.Message;
                sstNotificationsLog.ResponseDate = Convert.ToDateTime(responseDate);
                //sstNotificationsLog.KeyType = 0;
                //sstNotificationsLog.KeyValue = "";

                _repositoryUnitOfWork.NotificationsLogs.Value.Add(sstNotificationsLog);
                LogError(ex, providerURL);
            }
        }
        #endregion

        #region SendEmail
        public async Task SendEmail(long notificationId, string toEmailAddresses, string ccEmailAddresses, string bccEmailAddresses, Languages language, string from, string subject, string subject2,
            string body, string body2, List<SstNotificationsAttachments> attachments, string username, int systemId, int companyId)
        {
            string strFullFilePath = string.Empty;
            byte isSuccess = 0;
            string request = string.Empty;
            string requestDate = DateTime.Now.ToString("dd-MM-yyyy hh:mm tt");
            string response = string.Empty;
            string responseDate = string.Empty;

            using (MailMessage oMailMessage = new MailMessage())
            {
                #region  Email Body & Subject
                oMailMessage.Subject = subject;
                oMailMessage.Body = body;
                if (language != Languages.English)
                {
                    if (!string.IsNullOrEmpty(subject2))
                    {
                        oMailMessage.Subject = subject2;
                    }

                    if (!string.IsNullOrEmpty(body2))
                    {
                        oMailMessage.Body = body2;
                    }
                }
                #endregion

                #region Email Addresses
                oMailMessage.From = new MailAddress(from);
                if (!string.IsNullOrEmpty(toEmailAddresses) || !string.IsNullOrEmpty(ccEmailAddresses) || !string.IsNullOrEmpty(bccEmailAddresses))
                {
                    if (!string.IsNullOrEmpty(toEmailAddresses))
                    {
                        oMailMessage.To.Add(toEmailAddresses);
                    }

                    if (!string.IsNullOrEmpty(ccEmailAddresses))
                    {
                        oMailMessage.CC.Add(ccEmailAddresses);
                    }

                    if (!string.IsNullOrEmpty(bccEmailAddresses))
                    {
                        oMailMessage.Bcc.Add(bccEmailAddresses);
                    }
                }
                #endregion

                #region  Email Attachments
                foreach (var attachment in attachments)
                {
                    if (attachment.Type == (int)AttachmentType.File)
                    {
                        strFullFilePath = string.Concat(sharedSettings.Value.NotificationAttachmentPath, "\\", attachment.NotificationId.ToString(), "\\", attachment.Id.ToString());
                        if (File.Exists(strFullFilePath))
                            oMailMessage.Attachments.Add(new Attachment(strFullFilePath));
                    }
                    else if (attachment.Type == (int)AttachmentType.Report)
                    {
                        strFullFilePath = await ExportReportPDF(attachment.NotificationId, attachment.ReportCode, ReportExportTypes.PDF, (int)language, username, systemId, companyId);
                        if (!string.IsNullOrEmpty(strFullFilePath))
                        {
                            if (File.Exists(strFullFilePath))
                                oMailMessage.Attachments.Add(new Attachment(strFullFilePath));
                        }
                    }
                }
                #endregion

                if (!string.IsNullOrEmpty(oMailMessage.Body))
                {
                    oMailMessage.IsBodyHtml = true;
                    oMailMessage.BodyEncoding = Encoding.UTF8;

                    using (SmtpClient oClient = new SmtpClient())
                    {
                        SstNotificationsLogs sstNotificationsLog = new SstNotificationsLogs();
                        request = "Send Notification Email";
                        sstNotificationsLog.Request = request;
                        sstNotificationsLog.RequestDate = Convert.ToDateTime(requestDate);
                        sstNotificationsLog.NotificationId = notificationId;

                        try
                        {
                            #region Smtp Client Configuration
                            var mailer = _repositoryUnitOfWork.Mailer.Value.GetAll().FirstOrDefault();
                            if (mailer != null)
                            {
                                bool enableSsl = (Security)mailer.Security == Security.SSL ? true : false;
                                ICredentialsByHost credentials = new NetworkCredential(mailer.Username, mailer.Password);

                                oClient.Host = mailer.Host;
                                oClient.Port = (int)mailer.Port;
                                oClient.EnableSsl = enableSsl;
                                oClient.Credentials = credentials;

                                oClient.Send(oMailMessage);

                                isSuccess = 1;
                                response = "Email is sent successfully";
                                responseDate = DateTime.Now.ToString("dd-MM-yyyy hh:mm tt");

                                sstNotificationsLog.Status = isSuccess;
                                sstNotificationsLog.Response = response;
                                sstNotificationsLog.ResponseDate = Convert.ToDateTime(responseDate);
                                //sstNotificationsLog.KeyType = 0;
                                //sstNotificationsLog.KeyValue = "";
                                _repositoryUnitOfWork.NotificationsLogs.Value.Add(sstNotificationsLog);
                            }
                            #endregion                            
                        }

                        catch (Exception ex)
                        {
                            isSuccess = 0;
                            response = ex.Message;
                            responseDate = DateTime.Now.ToString("dd-MM-yyyy hh:mm tt");

                            sstNotificationsLog.Status = isSuccess;
                            sstNotificationsLog.Response = response;
                            sstNotificationsLog.ResponseDate = Convert.ToDateTime(responseDate);
                            //sstNotificationsLog.KeyType = 0;
                            //sstNotificationsLog.KeyValue = "";
                            _repositoryUnitOfWork.NotificationsLogs.Value.Add(sstNotificationsLog);

                            LogError(ex, companyId, systemId, username, notificationId, request);
                        }
                    }
                }
            }
        }
        #endregion

        #region ExportReportPDF
        public async Task<string> ExportReportPDF(long notificationId, string strReportCode, ReportExportTypes ReportExportType, int intLang, string strUserName, int intApplicationID, int companyId)
        {

            ReportData oRepData = new ReportData();
            oRepData.ReportCode = strReportCode;
            oRepData.ReportExportType = ReportExportType;
            oRepData.ReportLanguage = Languages.English;
            List<RepParams> RepParam = await coreService.GetReportsParams(strReportCode, companyId);
            RepParam[0].dEFAULT_FROM = notificationId.ToString();
            oRepData.ReportParams = RepParam;
            oRepData.UserID = strUserName;

            var report = await coreService.GetReports(strReportCode, companyId);
            var reportMenu = await coreService.GetReportsMenus(1);  
          //  oRepData.Application = reportMenu.CAM_APP_ID > 0 ? (Applications)reportMenu.CAM_APP_ID : 

            var user = await coreService.GetUserInfo(strUserName);
            var company = await coreService.GetCompany(companyId);

            string FullFilePath = string.Empty;
            FullFilePath = string.Concat(sharedSettings.Value.NotificationAttachmentPath, "\\", notificationId.ToString(), "\\", string.Concat(Guid.NewGuid(), '.', ReportExportType));

            await coreService.SaveReport(oRepData, company, null, FullFilePath);

            if (File.Exists(FullFilePath))
            {
                return FullFilePath;
            }
            else
            {
                return string.Empty;
            }
        }
        #endregion

        #region ConvertStringToUnicode
        private static string ConvertStringToUnicode(string Text)
        {
            StringBuilder sb = new StringBuilder();
            foreach (char c in Text.ToCharArray())
            {
                sb.Append(Convert.ToString(Convert.ToInt32(c), 16).PadLeft(4, '0'));
            }
            return sb.ToString();
        }
        #endregion

        #region LogError
        private void LogError(Exception notificationException, int companyId, int systemId, string username, long notificationID, string request)
        {
            string ErrorsLogPath = "C:\\";
            if (!string.IsNullOrEmpty(sharedSettings.Value.NotificationLogPath))
            {
                ErrorsLogPath = sharedSettings.Value.NotificationLogPath;
            }
            ErrorsLogPath += "ErrorsLog";
            string LogPath = ErrorsLogPath + "\\" + DateTime.Now.ToString("dd-MM-yyyy") + ".txt";

            string sError = "--------------------------------------------------------------------------------------------------------------------------------------------------------\r\n"
                          + "Error Date: \r\n"
                          + DateTime.Now.ToString("dd-MM-yyyy hh:mm:ss tt") + "\r\n\r\n"
                          + "User: \r\n"
                          + username + "\r\n\r\n"
                          + "Company: \r\n"
                          + companyId + "\r\n\r\n"
                          + "ApplicationID: \r\n"
                          + systemId + "\r\n\r\n"
                          + "Error NotificationID: \r\n"
                          + notificationID + "\r\n\r\n"
                          + "Error Request: \r\n"
                          + request + "\r\n\r\n"
                          + "Error Message: \r\n"
                          + notificationException.Message + "\r\n\r\n"
                          + "Error Details: \r\n"
                          + notificationException.ToString() + "\r\n"
                          + "--------------------------------------------------------------------------------------------------------------------------------------------------------\r\n\r\n\r\n\r\n";
            try
            {
                File.AppendAllText(LogPath, sError);

                if (!string.IsNullOrEmpty(sharedSettings.Value.ErrorLogRecepients))
                {
                    SendErrorLogEmail(sError);
                }
            }
            catch
            {

            }

        }
        #endregion

        #region LogError
        private void LogError(Exception NotificationException, string url)
        {
            string ErrorsLogPath = "C:\\";
            if (!string.IsNullOrEmpty(sharedSettings.Value.NotificationLogPath))
            {
                ErrorsLogPath = sharedSettings.Value.NotificationLogPath;
            }
            ErrorsLogPath += "ErrorsLog";
            string LogPath = ErrorsLogPath + "\\" + DateTime.Now.ToString("dd-MM-yyyy") + ".txt";

            string sError = "--------------------------------------------------------------------------------------------------------------------------------------------------------\r\n"
                          + "Error Date: \r\n"
                          + DateTime.Now.ToString("dd-MM-yyyy hh:mm:ss tt") + "\r\n\r\n"
                          + "URL: \r\n"
                          + url + "\r\n\r\n"
                          + "Error Message: \r\n"
                          + NotificationException.Message + "\r\n\r\n"
                          + "Error Details: \r\n"
                          + NotificationException.ToString() + "\r\n"
                          + "--------------------------------------------------------------------------------------------------------------------------------------------------------\r\n\r\n\r\n\r\n";
            try
            {
                File.AppendAllText(LogPath, sError);

                if (!string.IsNullOrEmpty(sharedSettings.Value.ErrorLogRecepients))
                {
                    SendErrorLogEmail(sError);
                }
            }
            catch
            {

            }

        }
        #endregion

        #region SendErrorLogEmail
        private static void SendErrorLogEmail(string ErrorMessage)
        {
            try
            {
                SmtpClient oClient = new SmtpClient();
                oClient.EnableSsl = oClient.Port == 587 || oClient.Port == 465;

                MailMessage myMail = new MailMessage();
                myMail.To.Add(ConfigurationManager.AppSettings["ErrorLogRecepients"]);
                myMail.BodyEncoding = System.Text.Encoding.UTF8;
                myMail.IsBodyHtml = false;
                myMail.Subject = "Notification System Bug";
                myMail.Body = ErrorMessage;

                oClient.Send(myMail);
            }
            catch
            {

            }
        }
        #endregion
    }
} 
 