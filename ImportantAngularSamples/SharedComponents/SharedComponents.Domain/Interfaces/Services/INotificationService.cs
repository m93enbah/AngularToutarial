using SharedComponents.Domain.Enums;
using SharedComponents.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace SharedComponents.Domain.Interfaces.Services
{
    public interface INotificationService : IService<SstNotifications>
    {
        void SendNotification(long notificationId, byte templateType);
        void SendSMS(long notificationId, string mobile, Languages language, string from, string subject, string subject2, string body, string body2);
        Task SendEmail(long notificationId, string toEmailAddresses, string ccEmailAddresses, string bccEmailAddresses, Languages language, string from, string subject, string subject2,
           string body, string body2, List<SstNotificationsAttachments> attachments, string username, int systemId, int companyId);
    }
}