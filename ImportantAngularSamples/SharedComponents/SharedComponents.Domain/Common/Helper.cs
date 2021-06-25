using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using SharedComponents.Domain.Interfaces.Helper;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace SharedComponents.Domain.Common
{
    public class Helper : IHelper
    {
        private readonly HttpClient client;
        private readonly IHttpContextAccessor httpContextAccessor;
        private readonly IOptions<SharedSettings> sharedSettings;

        public Helper(HttpClient client, IHttpContextAccessor httpContextAccessor, IOptions<SharedSettings> sharedSettings)
        {
            this.httpContextAccessor = httpContextAccessor;
            this.sharedSettings = sharedSettings;
            this.client = client;
            this.client.DefaultRequestHeaders.Accept.Clear();
            this.client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
        }

        #region GetListFrom
        public async Task<IEnumerable<T>> GetListFrom<T>(string baseAddress, string url)
        {
            string request = baseAddress + url;

            WriteLog(request + " : " + "start");

            List<T> list = new List<T>();
            try
            {
                var urirequest = new Uri(request);

                WriteLog(request + " : " + "start using ");
                try
                {

                    WriteLog("start url" + request);
                    HttpResponseMessage response = await client.GetAsync(urirequest);
                    WriteLog("END url" + request);

                    if (response.IsSuccessStatusCode)
                    {
                        WriteLog(request + " : " + "Begin Result");
                        string result = await response.Content.ReadAsStringAsync().ConfigureAwait(false);
                        list = JsonConvert.DeserializeObject<List<T>>(result);
                        WriteLog(request + " : " + "result");

                    }
                }
                catch (Exception ex)
                {
                    WriteLog(request + "  " + ex.Message);
                }
            }
            catch (Exception ex)
            {
                WriteLog(request + "  " + ex.Message);
            }
            WriteLog(request + " : " + "END");

            return list;
        }
        #endregion

        #region GetFrom
        public async Task<T> GetFrom<T>(string baseAddress, string url)
        {
            string request = baseAddress + url;
            var obj = Activator.CreateInstance(typeof(T));
            try
            {

                WriteLog(request + " : " + "start");
                var urirequest = new Uri(request);
                //HttpClientInstance oHttpClient = new HttpClientInstance();
                //client = oHttpClient.GetInstance;
                //client.BaseAddress = new Uri(baseAddress);
                try
                {
                    WriteLog("start url" + request);
                    HttpResponseMessage response = await client.GetAsync(urirequest).ConfigureAwait(false);
                    WriteLog("END url" + request);

                    if (response.IsSuccessStatusCode)
                    {
                        WriteLog(request + " : " + "Begin Result");
                        string result = await response.Content.ReadAsStringAsync();
                        obj = JsonConvert.DeserializeObject<T>(result);

                        WriteLog(request + " : " + "End Result");
                    }
                }
                catch (Exception ex)
                {
                    WriteLog(request + "  " + ex.Message);
                }

            }
            catch (Exception ex)
            {
                WriteLog(request + "  " + ex.Message);
            }

            WriteLog(request + " : " + "END");
            return (T)obj;
        }
        #endregion

        #region PostListFrom
        public async Task<IEnumerable<T>> PostListFrom<T>(string baseAddress, string url, HttpContent content)
        {
            List<T> list = null;
            string request = baseAddress + url;
            WriteLog(request + " : " + "start");

            //HttpClientInstance oHttpClient = new HttpClientInstance();
            //client = oHttpClient.GetInstance;
            //client.BaseAddress = new Uri(baseAddress);

            try
            {
                var urirequest = new Uri(request);
                WriteLog("start url" + request);
                HttpResponseMessage response = await client.PostAsync(urirequest, content).ConfigureAwait(false);
                WriteLog("END url" + request);

                if (response.IsSuccessStatusCode)
                {
                    WriteLog(request + " : " + "Begin Result");
                    string result = await response.Content.ReadAsStringAsync();
                    list = JsonConvert.DeserializeObject<List<T>>(result);
                    WriteLog(request + " : " + "End Result");
                }
            }
            catch (Exception ex)
            {
                WriteLog(request + "  " + ex.Message);
            }

            return list;
        }
        #endregion

        #region PostFrom
        public async Task<T> PostFrom<T>(string baseAddress, string url, string requestbody)
        {
            var obj = Activator.CreateInstance(typeof(T));
            string request = baseAddress + url;
            WriteLog(request + " : " + "start");

            try
            {
                //Create the Uri
                var urirequest = new Uri(request);
                StringContent stringContent = new StringContent(requestbody, Encoding.UTF8, "application/json");
                WriteLog("start url" + request);

                using (HttpResponseMessage response = await client.PostAsync(urirequest, stringContent).ConfigureAwait(false))
                {
                    using (HttpContent content = response.Content)
                    {
                        var json = content.ReadAsStringAsync().Result;

                        WriteLog(json + " : " + "Begin Result");
                        if (response.IsSuccessStatusCode)
                        {
                            string result = await response.Content.ReadAsStringAsync();
                            obj = JsonConvert.DeserializeObject<T>(result);
                            WriteLog(request + " : " + "End Result");
                        }
                    }
                }

                WriteLog("END url" + request);
            }
            catch (Exception ex)
            {
                WriteLog(request + "  " + ex.Message);
            }

            return (T)obj;
        }
        #endregion

        #region WriteLog
        [System.Runtime.CompilerServices.MethodImpl(MethodImplOptions.Synchronized)]
        public void WriteLog(params string[] strLogs)
        {
            try
            {
                string strPath = sharedSettings.Value.NotificationLogPath;
                if (strLogs[0].Contains("[SUBFOLDER]"))
                    strPath += strLogs[0].Replace("[SUBFOLDER]", "");


                string[] arrPaths = new string[] { strPath };
                int[][] FileCount = null;

                FileCount = new int[1][];
                for (int i = 0; i < 1; i++)
                {
                    FileCount[i] = new int[1];
                }

                int Index = 0;
                int RegionIndex = 0;
                string strLog;

                StringBuilder Bldr = new StringBuilder();
                int _index = 0;
                if (strLogs[0].Contains("[SUBFOLDER]"))
                    _index = 1;
                for (int i = _index; i < strLogs.Length; i++)
                    Bldr.Append(strLogs[i]);
                strLog = Bldr.ToString();

                string RegionPath = arrPaths[Index];
                string fname = DateTime.Now.ToString("yyyy-MM-dd");

                if (!Directory.Exists(arrPaths[Index]))
                    Directory.CreateDirectory(arrPaths[Index]);

                if (!Directory.Exists(RegionPath))
                    Directory.CreateDirectory(RegionPath);

                if (!System.IO.File.Exists(RegionPath + fname + "_000.log"))
                    FileCount[RegionIndex][Index] = 0;

                string fileName = RegionPath + fname + "_" + FileCount[RegionIndex][Index].ToString("000") + ".log";
                System.IO.FileInfo info = new System.IO.FileInfo(fileName);

                while (info.Exists && info.Length > 1024 * 1024 * 2)
                {
                    FileCount[RegionIndex][Index]++;
                    fileName = RegionPath + fname + "_" + FileCount[RegionIndex][Index].ToString("000") + ".log";
                    info = new FileInfo(fileName);
                }

                using (StreamWriter sw = new StreamWriter(fileName, true))
                {
                    sw.WriteLine(">>" + DateTime.Now.ToLongTimeString() + "\t:" + strLog);
                    sw.Flush();
                    sw.Close();
                }
            }

            catch (Exception ex)
            {

            }
        }
        #endregion
    }
}