using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace SharedComponents.Domain.Interfaces.Helper
{
    public interface IHelper
    {
        Task<IEnumerable<T>> GetListFrom<T>(string baseAddress, string url);
        Task<T> GetFrom<T>(string baseAddress, string url);
        Task<T> PostFrom<T>(string baseAddress, string url, string requestbody);
        Task<IEnumerable<T>> PostListFrom<T>(string baseAddress, string url, HttpContent content);
        void WriteLog(params string[] strLogs);
    }
} 