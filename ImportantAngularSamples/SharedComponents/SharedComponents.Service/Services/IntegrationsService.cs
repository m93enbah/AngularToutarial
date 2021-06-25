using DocumentFormat.OpenXml;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using SharedComponents.Domain.Common;
using SharedComponents.Domain.Dtos;
using SharedComponents.Domain.Enums;
using SharedComponents.Domain.Extension;
using SharedComponents.Domain.Interfaces.Repositories;
using SharedComponents.Domain.Interfaces.Services;
using SharedComponents.Domain.Interfaces.Shared;
using SharedComponents.Domain.Models;
using SharedComponents.Domain.Models.SearchCriteria;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Web;
using System.Xml;
using System.Xml.Linq;

namespace SharedIntegrations.Service.Services
{
    //public class IntegrationsService : IIntegrationsService
    //{
    //    private IRepositoryUnitOfWork _repositoryUnitOfWork;
    //    public IntegrationsService(IRepositoryUnitOfWork repositoryUnitOfWork)
    //    {
    //        _repositoryUnitOfWork = repositoryUnitOfWork;
    //    }
    //    public IResponseResult<SstIntegrations> Add(SstIntegrations entity)
    //    {
    //        _repositoryUnitOfWork.Integration.Value.Add(entity);
    //        return new ResponseResult<SstIntegrations>()
    //        {
    //            Status = ResultStatus.Success,
    //            Data = entity
    //        };
    //    }
    //    public IResponseResult<IEnumerable<SstIntegrations>> AddRange(IEnumerable<SstIntegrations> entities)
    //    {
    //        _repositoryUnitOfWork.Integration.Value.AddRange(entities);
    //        return new ResponseResult<IEnumerable<SstIntegrations>>()
    //        {
    //            Status = ResultStatus.Success,
    //            Data = entities
    //        };
    //    }
    //    public IResponseResult<SstIntegrations> Get(long id, int companyId)
    //    {
    //        SstIntegrations result = _repositoryUnitOfWork.Integration.Value.Get(id, companyId);
    //        return new ResponseResult<SstIntegrations>()
    //        {
    //            Status = ResultStatus.Success,
    //            Data = result
    //        };
    //    }
    //    public IResponseResult<SstIntegrations> Get(long id)
    //    {
    //        SstIntegrations result = _repositoryUnitOfWork.Integration.Value.Get(id);
    //        return new ResponseResult<SstIntegrations>()
    //        {
    //            Status = ResultStatus.Success,
    //            Data = result
    //        };
    //    }
    //    public IResponseResult<IEnumerable<SstIntegrations>> GetAll()
    //    {
    //        List<SstIntegrations> result = _repositoryUnitOfWork.Integration.Value.GetAll().GetList();
    //        return new ResponseResult<IEnumerable<SstIntegrations>>()
    //        {
    //            Status = ResultStatus.Success,
    //            Data = result
    //        };
    //    }
    //    public IResponseResult<SstIntegrations> Remove(SstIntegrations entity)
    //    {
    //        SstIntegrations result = _repositoryUnitOfWork.Integration.Value.Remove(entity);
    //        return new ResponseResult<SstIntegrations>()
    //        {
    //            Status = ResultStatus.Success,
    //            Data = entity
    //        };
    //    }
    //    public IResponseResult<SstIntegrations> Update(SstIntegrations entity)
    //    {
    //        _repositoryUnitOfWork.Integration.Value.Update(entity);
    //        return new ResponseResult<SstIntegrations>()
    //        {
    //            Status = ResultStatus.Success,
    //            Data = entity
    //        };
    //    }
    //    public IResponseResult<IEnumerable<SstIntegrations>> RemoveRange(IEnumerable<SstIntegrations> models)
    //    {
    //        _repositoryUnitOfWork.Integration.Value.RemoveRange(models);
    //        return new ResponseResult<IEnumerable<SstIntegrations>>()
    //        {
    //            Status = ResultStatus.Success,
    //            Data = models
    //        };
    //    }
    //    public IResponseResult<IEnumerable<SstIntegrations>> GetByCriteria(SearchIntegration search)
    //    {
    //        List<SstIntegrations> result = _repositoryUnitOfWork.Integration.Value.GetByCriteria(search).GetList();
    //        return new ResponseResult<IEnumerable<SstIntegrations>>()
    //        {
    //            Status = ResultStatus.Success,
    //            Data = result
    //        };
    //    }
    //    public IResponseResult<object> ExecuteOtherTransactions(long userPropertiesId, long sequenceId, List<StepFormValue> controls, Dictionary<string, object> variables)
    //    {
    //        Dictionary<long, object> responses = new Dictionary<long, object>();
    //        SpdSequences sequence = _repositoryUnitOfWork.SequenceRepository.Value.Find(sequenceI => sequenceI.Id == sequenceId, sequences => sequences.SpdSequencesDetails).First();
    //        List<CpUserProperties> curretntUserProperties = _repositoryUnitOfWork.UserProperties.Value.Find(x => x.UserId == userPropertiesId).ToList();
    //        foreach (SpdSequencesDetails item in sequence.SpdSequencesDetails)
    //        {
    //            SstIntegrations integration = _repositoryUnitOfWork.Integration.Value.Find(integrationItem => integrationItem.Id == item.IntegrationId, inculdeItem => inculdeItem.SstIntegrationsSettings).First();
    //            SstIntegrationsSettings integrationSetting = _repositoryUnitOfWork.IntegrationsSetting.Value.Find(settting => settting.Id == integration.SstIntegrationsSettings.First().Id, o => o.SstIntegrationsApiMapping).First();
    //            object result = Execute(integrationSetting, controls, responses, userPropertiesId, variables);
    //            responses.Add(integration.SstIntegrationsSettings.First().Id, result);
    //        }
    //        return new ResponseResult<object>()
    //        {
    //            Status = ResultStatus.Success,
    //            Data = responses.Last().Value
    //        };
    //    }
    //    public IResponseResult<object> ExecuteStepLoadTransactions(long userPropertiesId, long stepId)
    //    {
    //        Dictionary<long, object> responses = new Dictionary<long, object>();
    //        List<CpUserProperties> curretntUserProperties = _repositoryUnitOfWork.UserProperties.Value.Find(user => user.UserId == userPropertiesId).ToList();
    //        SpdProductsSteps currentStep = _repositoryUnitOfWork.ProductsStep.Value.Find(step => step.Id == stepId, step => step.SpdStepsTransactions).FirstOrDefault();
    //        IEnumerable<SpdStepsTransactions> stepTransactions = currentStep.SpdStepsTransactions.Where(step => step.TransactionType == 2); // submit 1 , load 2

    //        int productId = (int)currentStep.ProductId;

    //        if (curretntUserProperties.Where(x => x.Property == UserProptiesKeys.ProductId).FirstOrDefault() == null)
    //        {
    //            _repositoryUnitOfWork.UserProperties.Value.Add(new CpUserProperties()
    //            {
    //                UserId = userPropertiesId,
    //                Property = UserProptiesKeys.ProductId,
    //                Value = productId,
    //                CreationUser = "SYSTEM"
    //            });
    //        }

    //        List<SstIntegrationsSettings> integrationsSettings = new List<SstIntegrationsSettings>();

    //        foreach (SpdStepsTransactions item in stepTransactions)
    //        {
    //            SstIntegrations integration = _repositoryUnitOfWork.Integration.Value.Get(item.IntegrationId.Value);
    //            integrationsSettings.AddRange(integration.SstIntegrationsSettings);
    //            object result = Execute(integration.SstIntegrationsSettings.First(), new List<StepFormValue>(), responses, userPropertiesId, new Dictionary<string, object>());
    //            responses.Add(integration.SstIntegrationsSettings.First().Id, result);
    //        }

    //        List<StepFormValue> mappingResul = MapResponseToFormValue(responses, integrationsSettings, userPropertiesId, productId);

    //        return new ResponseResult<object>()
    //        {
    //            Status = ResultStatus.Success,
    //            Data = mappingResul
    //        };
    //    }
    //    public IResponseResult<object> ExecuteStepSubmitTransactions(long userPropertiesId, int currentStepId, List<StepFormValue> controls)
    //    {
    //        Dictionary<long, object> responses = new Dictionary<long, object>();
    //        SpdProductsSteps currentStep = _repositoryUnitOfWork.ProductsStep.Value.Find(step => step.Id == currentStepId, step => step.SpdStepsTransactions).FirstOrDefault();
    //        IOrderedEnumerable<SpdStepsTransactions> sepsTransactions = currentStep.SpdStepsTransactions.Where(transaction => transaction.TransactionType == (int)ApiTransactionType.Request).OrderBy(transaction => transaction.Order);
    //        List<CpUserProperties> curretntUserProperties = _repositoryUnitOfWork.UserProperties.Value.Find(user => user.UserId == userPropertiesId).GetList();
    //        int productId = (int)currentStep.ProductId;

    //        if (!curretntUserProperties.Any(user => user.Property == UserProptiesKeys.SetpId))
    //        {
    //            _repositoryUnitOfWork.UserProperties.Value.Add(new CpUserProperties()
    //            {
    //                Value = currentStep,
    //                UserId = userPropertiesId,
    //                Property = UserProptiesKeys.SetpId,
    //                CreationUser = "System",
    //            });
    //        }

    //        SaveControls(userPropertiesId, currentStepId, productId, controls);

    //        foreach (SpdStepsTransactions item in sepsTransactions)
    //        {
    //            SstIntegrationsSettings integrationSetting = _repositoryUnitOfWork.IntegrationsSetting.Value.Find(x => x.IntegrationId == item.IntegrationId, x => x.SstIntegrationsApiMapping).First();

    //            object result = Execute(integrationSetting, controls, responses, userPropertiesId, new Dictionary<string, object>());

    //            IEnumerable<SstIntegrationsApiMapping> responseRedirectionSetting = integrationSetting.SstIntegrationsApiMapping.Where(map => map.TransactionType == (int)TransactionElementType.Redirection);
    //            if (responseRedirectionSetting != null && responseRedirectionSetting.Count() > 0)
    //            {
    //                return new ResponseResult<object>()
    //                {
    //                    Status = ResultStatus.Redirect,
    //                    Data = responseRedirectionSetting.First().ParamName
    //                };
    //            }

    //            responses.Add(item.IntegrationId.Value, result);

    //            List<SstIntegrationsApiMapping> responseProprties = integrationSetting.SstIntegrationsApiMapping.Where(mappingItem => mappingItem.TransactionType == 2 && mappingItem.ElementType == 7)?.ToList(); //  add its response condition

    //            if (responseProprties != null && responseProprties.Count > 0)
    //            {
    //                foreach (SstIntegrationsApiMapping prop in responseProprties)
    //                {
    //                    object value = new object();
    //                    if (result is XmlDocument)
    //                    {
    //                        XDocument responseXml = XDocument.Parse(((XmlDocument)result).InnerXml);
    //                        string responseParamValue = responseXml.Descendants().Where(x => x.Name.LocalName == prop.ParamName).First().Value.ToString();
    //                        IQueryable<CpUserProperties> oldData = _repositoryUnitOfWork.UserProperties.Value.Find(xx =>
    //                      xx.Property == prop.ElementKey &&

    //                      xx.UserId == userPropertiesId

    //                        );

    //                        if (oldData.Count() > 0)

    //                        {
    //                            CpUserProperties newData = oldData.First();
    //                            newData.Value = responseParamValue;
    //                            _repositoryUnitOfWork.UserProperties.Value.Update(newData);

    //                        }
    //                        else
    //                        {
    //                            _repositoryUnitOfWork.UserProperties.Value.Add(new CpUserProperties()
    //                            {
    //                                Property = prop.ElementKey,
    //                                Value = responseParamValue,
    //                                CreationUser = "Admin",
    //                                UserId = userPropertiesId

    //                            });
    //                        }
    //                        continue;
    //                    }
    //                    if (prop.ParamName.Contains("."))

    //                    {

    //                        string[] seprator = prop.ParamName.Split(".");

    //                        object temp = new object();

    //                        for (int counter = 0; counter < seprator.Length - 1; counter++)

    //                        {

    //                            temp = ((JObject)result)[seprator[counter]];

    //                        }



    //                        value = (JObject.Parse(((JValue)temp).ToString()))[seprator[seprator.Length - 1]].ToString();



    //                    }
    //                    else

    //                    {

    //                        value = ((JObject)result)[prop.ParamName];

    //                    }

    //                    _repositoryUnitOfWork.UserProperties.Value.Add(new CpUserProperties()

    //                    {

    //                        Property = prop.ElementKey,

    //                        Value = value,

    //                        CreationUser = "Admin",

    //                        UserId = userPropertiesId

    //                    });

    //                }
    //            }

    //        }

    //        return new ResponseResult<object>()
    //        {
    //            Status = ResultStatus.Success
    //        };
    //    }
    //    private void SaveControls(long userPropertiesId, int currentStepId, int productId, List<StepFormValue> controls)
    //    {
    //        foreach (StepFormValue item in controls)
    //        {
    //            IEnumerable<object> controlValues = (IEnumerable<object>)item.FormValue;
    //            foreach (object control in controlValues)
    //            {
    //                long componentId = _repositoryUnitOfWork.ProductsComponents.Value.Find(x => x.RefComponentId == item.RefCompId && x.StepId == currentStepId && x.Step.ProductId == productId).First().Id;
    //                string controlKey = ((JProperty)control).Name;
    //                IQueryable<SpdControlValues> oldRecored = _repositoryUnitOfWork.ControlValues.Value.Find(x => x.UserPropertyId == userPropertiesId && x.ProductId == productId && x.StepId == currentStepId && x.ComponentId == componentId && x.ControlKey == controlKey);

    //                if (oldRecored != null && oldRecored.Count() > 0)
    //                {
    //                    _repositoryUnitOfWork.ControlValues.Value.RemoveRange(oldRecored);
    //                }
    //                object value = ((JProperty)control).Value.ToObject<object>();

    //                _repositoryUnitOfWork.ControlValues.Value.Add(new SpdControlValues()
    //                {
    //                    ComponentId = componentId,
    //                    UserPropertyId = userPropertiesId,
    //                    StepId = currentStepId,
    //                    ProductId = productId,
    //                    Value = (value is JObject) ? "Not Compatible To Save" : value,
    //                    CreationUser = "ADMIN",
    //                    ControlKey = controlKey
    //                });
    //            }
    //        }
    //    }
    //    public IResponseResult<List<DataSourceItem>> LoadDataSource(long userPropertiesId, long integrationSetttingId)
    //    {
    //        List<DataSourceItem> result = new List<DataSourceItem>();
    //        JArray resposeResult = new JArray();

    //        SstIntegrationsSettings integrationsSetting = _repositoryUnitOfWork.IntegrationsSetting.Value.Find(integration => integration.Integration.Id == integrationSetttingId, x => x.SstIntegrationsApiMapping).First();
    //        object response = Execute(integrationsSetting, new List<StepFormValue>(), new Dictionary<long, object>(), userPropertiesId, new Dictionary<string, object>());

    //        string labelKey = integrationsSetting.SstIntegrationsApiMapping.Where(x => x.ParamType == "Label").First().ParamName;
    //        string labelValue = integrationsSetting.SstIntegrationsApiMapping.Where(x => x.ParamType == "Value").First().ParamName;

    //        if (response is JObject)
    //        {
    //            object mainObject = default(object);
    //            if (labelKey.Contains("."))
    //            {
    //                string[] keys = labelKey.Split(".");
    //                string mainKey = string.Join(".", keys.Take(keys.Length - 1));
    //                mainObject = GetFromJsonObject((JObject)response, mainKey);
    //                if (mainObject is JArray)
    //                {
    //                    resposeResult = (JArray)response;
    //                }
    //            }

    //            JArray mainList = mainObject != default(object) ? (JArray)mainObject : (JArray)response;
    //            foreach (JToken item in mainList)
    //            {
    //                result.Add(new DataSourceItem()
    //                {
    //                    Label = item[labelKey].ToString(),
    //                    Value = item[labelValue].ToString()
    //                });
    //            }
    //        }
    //        else
    //        {
    //            // to do 
    //        }

    //        return new ResponseResult<List<DataSourceItem>>()
    //        {
    //            Status = ResultStatus.Success,
    //            Data = result
    //        };
    //    }
    //    public IResponseResult<IEnumerable<object>> ExecuteDataTableTransaction(DataTableTransactionLoad data)
    //    {
    //        List<CpUserProperties> curretntUserProperties = _repositoryUnitOfWork.UserProperties.Value.Find(x => x.UserId == data.UserPropertiesId).ToList();
    //        List<SstIntegrations> integrattions = new List<SstIntegrations>();

    //        SstIntegrationsSettings integrationsSetting = _repositoryUnitOfWork.IntegrationsSetting.Value.Find(integration => integration.Integration.Id == data.IntegrationSetttingId, x => x.SstIntegrationsApiMapping).First();

    //        object response = Execute(integrationsSetting, data.StepFormValues, new Dictionary<long, object>(), data.UserPropertiesId, new Dictionary<string, object>());
    //        if (integrationsSetting.ApiType == 2)

    //        {

    //            XmlNodeList result = ((XmlDocument)response).GetElementsByTagName("b:QuickPriceOutput");

    //            List<JObject> tags = new List<JObject>();

    //            for (int i = 0; i < result.Count; i++)

    //            {

    //                JObject obj = new JObject();

    //                foreach (XmlNode item in result[i].ChildNodes)

    //                {

    //                    obj[item.Name] = item.InnerText;

    //                }

    //                tags.Add(obj);

    //            }

    //            return new ResponseResult<IEnumerable<object>>()
    //            {
    //                Status = ResultStatus.Success,
    //                Data = tags
    //            };

    //        }

    //        if (!(typeof(IEnumerable<>).IsAssignableFrom(response.GetType())))
    //        {
    //            return new ResponseResult<IEnumerable<object>>()
    //            {
    //                Status = ResultStatus.Success,
    //                Data = new List<object>() {
    //  response
    // }
    //            };
    //        }
    //        return new ResponseResult<IEnumerable<object>>()
    //        {
    //            Status = ResultStatus.Success,
    //            Data = (List<object>)response
    //        };

    //    }
    //    public IResponseResult<object> ExecutesequenceTransaction(long userPropertiesId, long sequenceId, List<StepFormValue> controls, Dictionary<string, object> variables)
    //    {

    //        Dictionary<long, object> responses = new Dictionary<long, object>();
    //        SpdSequences sequence = _repositoryUnitOfWork.SequenceRepository.Value.Find(sequenceI => sequenceI.Id == sequenceId, sequences => sequences.SpdSequencesDetails).First();
    //        List<CpUserProperties> curretntUserProperties = _repositoryUnitOfWork.UserProperties.Value.Find(x => x.UserId == userPropertiesId).ToList();

    //        foreach (SpdSequencesDetails item in sequence.SpdSequencesDetails)
    //        {
    //            SstIntegrations integration = _repositoryUnitOfWork.Integration.Value.Find(x => x.Id == item.IntegrationId, o => o.SstIntegrationsSettings).First();
    //            SstIntegrationsSettings integrationSetting = _repositoryUnitOfWork.IntegrationsSetting.Value.Find(setting => setting.Id == integration.SstIntegrationsSettings.First().Id, inludeItem => inludeItem.SstIntegrationsApiMapping).First();
    //            object result = Execute(integrationSetting, controls, responses, userPropertiesId, variables);
    //            responses.Add(integration.SstIntegrationsSettings.First().Id, result);
    //        }

    //        return new ResponseResult<object>()
    //        {
    //            Status = ResultStatus.Success,
    //            Data = responses.Last().Value
    //        };
    //    }
    //    public IResponseResult<string> ExecuteUploadTransaction(int sequenceId, ICollection<IFormFile> files, int userPropertiesId, object stepFormValue)
    //    {
    //        Dictionary<string, object> runTimeVariable = new Dictionary<string, object>();
    //        foreach (IFormFile file in files)
    //        {
    //            using (StreamReader reader = new StreamReader(file.OpenReadStream()))
    //            {
    //                byte[] bytes = default(byte[]);
    //                using (MemoryStream memstream = new MemoryStream())
    //                {
    //                    reader.BaseStream.CopyTo(memstream);
    //                    bytes = memstream.ToArray();
    //                    runTimeVariable.Add("Files", bytes);
    //                    ExecuteOtherTransactions(userPropertiesId, sequenceId, new List<StepFormValue>(), runTimeVariable);
    //                }
    //            }
    //        }
    //        return null; // should return data for the delete
    //    }
    //    protected object Execute(SstIntegrationsSettings integrationStting, List<StepFormValue> controls, Dictionary<long, object> priviousApiResponse, long userPropertiesId, Dictionary<string, object> variables)
    //    {
    //        object result = default(object);
    //        object requestedData = MapSettingToRequeset(integrationStting, controls, priviousApiResponse, userPropertiesId, variables);
    //        long logId = InsertLog(integrationStting.ApiUrl);
    //        string requsetContent = JsonConvert.SerializeObject(requestedData, Newtonsoft.Json.Formatting.Indented, new JsonSerializerSettings()
    //        {
    //            ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
    //        });

    //        LogRequest(requsetContent, logId);

    //        if (integrationStting.ApiType == (int)ApiType.None)
    //        {
    //            return requestedData;
    //        }

    //        if (integrationStting.ApiType == (int)ApiType.RestfultApi)
    //        {

    //            if (integrationStting.HttpType == (int)HttpType.Get)
    //            {
    //                result = ExecuteGetRequest(requestedData, integrationStting.ApiUrl + integrationStting.ServiceMethod, integrationStting.UrlType.Value == (int)UrlType.QueryString);
    //            }
    //            else if (integrationStting.HttpType == (int)HttpType.Post)
    //            {
    //                result = ExecutePostRequest(requestedData, integrationStting.ApiUrl + integrationStting.ServiceMethod);
    //            }

    //            return null;

    //        }
    //        else
    //        {
    //            result = CallWebService(integrationStting.ApiUrl, requestedData);
    //        }

    //        string responseContent = JsonConvert.SerializeObject(result, Newtonsoft.Json.Formatting.Indented, new JsonSerializerSettings()
    //        {
    //            ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
    //        });

    //        LogResponse(responseContent, 200, logId);
    //        return result;

    //    }
    //    protected object MapSettingToRequeset(SstIntegrationsSettings integrationStting, List<StepFormValue> controls, Dictionary<long, object> priviousApiResponse, long userPropertiesId, Dictionary<string, object> variables)
    //    {
    //        dynamic requestedData = new object();
    //        List<CpUserProperties> curretntUserProperties = _repositoryUnitOfWork.UserProperties.Value.Find(x => x.UserId == userPropertiesId).ToList();
    //        List<IntegrationMappingBase> mapppingSetting = integrationStting.SstIntegrationsApiMapping.Where(x => x.TransactionType == (int)ApiTransactionType.Request).Select(item => (IntegrationMappingBase)item).OrderBy(x => x.Order).ToList();

    //        if (integrationStting.ApiType == (int)ApiType.RestfultApi)
    //        {
    //            return MapSettingRequestToJson(mapppingSetting, controls, curretntUserProperties, priviousApiResponse, userPropertiesId, variables);
    //        }

    //        else if (integrationStting.ApiType == (int)ApiType.WebService)
    //        {
    //            return MapSettingRequestToXml(integrationStting.XmlStructureValue, mapppingSetting, controls, curretntUserProperties, priviousApiResponse, userPropertiesId, variables);
    //        }

    //        return null;
    //    }
    //    protected object ExecuteGetRequest(object data, string requestedUrl, bool isQueryString = false)
    //    {
    //        HttpResponseMessage response = new HttpResponseMessage();
    //        using (HttpClient httpClient = new HttpClient())

    //        {
    //            Dictionary<string, dynamic> requeastedData = JsonConvert.DeserializeObject<Dictionary<string, dynamic>>(JsonConvert.SerializeObject(data));
    //            httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
    //            Uri requestedUri = new Uri(requestedUrl);
    //            NameValueCollection query = HttpUtility.ParseQueryString(requestedUri.Query);

    //            string queryParams = "";
    //            if (data != null)
    //            {
    //                if (!isQueryString)

    //                {
    //                    foreach (KeyValuePair<string, dynamic> entry in requeastedData)
    //                    {
    //                        queryParams += entry.Value + "/";
    //                    }
    //                }
    //                else
    //                {
    //                    foreach (KeyValuePair<string, dynamic> entry in requeastedData)

    //                    {
    //                        query[entry.Key] = entry.Value != null ? entry.Value.ToString() : null;
    //                    }
    //                }
    //            }
    //            response = httpClient.GetAsync(requestedUrl + (isQueryString ? "?" : "/") + (isQueryString ? query.ToString() : queryParams)).Result;
    //        }

    //        return response.Content.ReadAsAsync(typeof(object)).Result;
    //    }
    //    protected object ExecutePostRequest(object data, string requestedUrl)
    //    {
    //        HttpResponseMessage response = new HttpResponseMessage();

    //        using (HttpClient httpClient = new HttpClient())
    //        {
    //            httpClient.DefaultRequestHeaders
    //             .Accept
    //             .Add(new MediaTypeWithQualityHeaderValue("application/json"));

    //            StringContent request = new StringContent(JsonConvert.SerializeObject(data))
    //            {
    //                Headers = { ContentType = new MediaTypeHeaderValue("application/json") }
    //            };

    //            response = httpClient.PostAsync(requestedUrl, request).Result;
    //        }

    //        return response.Content.ReadAsAsync(typeof(object)).Result;
    //    }
    //    public XmlDocument CallWebService(string svcUrl, object paramsData)
    //    {
    //        string result = "";
    //        XDocument data = (XDocument)paramsData;
    //        HttpWebRequest request = WebRequest.Create(new Uri(svcUrl)) as HttpWebRequest;

    //        request.Method = "POST";
    //        request.ContentType = "application/soap+xml;";
    //        string childOuterXml = JsonConvert.DeserializeXmlNode(JsonConvert.SerializeObject(paramsData), "Root").OuterXml;

    //        byte[] byteData = Encoding.UTF8.GetBytes(data.ToString());

    //        request.ContentLength = byteData.Length;
    //        using (Stream postStream = request.GetRequestStream())
    //        {
    //            postStream.Write(byteData, 0, byteData.Length);
    //        }

    //        XmlDocument xmlResult = new XmlDocument();
    //        using (HttpWebResponse response = request.GetResponse() as HttpWebResponse)
    //        {
    //            StreamReader reader = new StreamReader(response.GetResponseStream());
    //            result = reader.ReadToEnd();
    //            reader.Close();
    //        }
    //        xmlResult.LoadXml(result);

    //        return xmlResult;
    //    }
    //    protected List<StepFormValue> MapResponseToFormValue(Dictionary<long, object> responses, List<SstIntegrationsSettings> integrationSttings, long userPropertiesId, long productId)
    //    {
    //        List<StepFormValue> responseItems = new List<StepFormValue>();
    //        foreach (SstIntegrationsSettings setting in integrationSttings)
    //        {
    //            KeyValuePair<long, object> settingResponse = responses.Where(resp => resp.Key == setting.Id).First();

    //            HashSet<long> componentIds = setting.SstIntegrationsApiMapping
    //                .Where(x => x.TransactionType == (int)ApiTransactionType.Response && x.ElementParent.HasValue)
    //                .Select(x => x.ElementParent.Value)
    //                .ToHashSet();

    //            StepFormValue item = new StepFormValue();
    //            foreach (long componentId in componentIds)
    //            {
    //                item.RefCompId = componentId;

    //                List<SstIntegrationsApiMapping> componentControls = setting.SstIntegrationsApiMapping.Where(control => control.ElementParent == componentId).ToList();

    //                item.FormValue = MapComponentResponseObject(componentControls, settingResponse.Value, userPropertiesId, productId);
    //            }
    //            responseItems.Add(item);
    //        };
    //        return responseItems;
    //    }
    //    protected object MapComponentResponseObject(List<SstIntegrationsApiMapping> componentControls, object response, long userPropertiesId, long productId)
    //    {
    //        dynamic requestedData = new JObject();
    //        bool isOfline = response is JObject;
    //        foreach (SstIntegrationsApiMapping item in componentControls)
    //        {
    //            if (isOfline)
    //            {
    //                requestedData[item.ElementKey] = ((JObject)response)[item.ParamName].Value<object>().ToString();
    //            }
    //            else
    //            {
    //                requestedData[item.ElementKey] = null;//response.GetPropertyValue(item.ParamName);
    //            }
    //        }
    //        return requestedData;
    //    }
    //    protected object MapSettingRequestToJson(List<IntegrationMappingBase> mappingSetting, List<StepFormValue> controls, List<CpUserProperties> curretntUserProperties, Dictionary<long, object> priviousApiResponse, long userPropertiesId, Dictionary<string, object> variables, object parent = null)
    //    {
    //        dynamic requestedData = new JObject();
    //        bool isParentMultiple = false;

    //        if (!variables.Any(x => x.Key == "SysDate"))
    //        {
    //            variables.Add("SysDate", DateTime.Now);
    //        }

    //        if (!variables.Any(x => x.Key == "Token"))
    //        {
    //            variables.Add("Token", Convert.ToBase64String(Guid.NewGuid().ToByteArray()));
    //        }

    //        if (parent != null)
    //        {
    //            if (parent is JObject)
    //            {
    //                requestedData = parent;
    //            }
    //            else
    //            {
    //                isParentMultiple = true;
    //                parent = new List<JObject>();
    //            }
    //        }


    //        int productId = (int)curretntUserProperties.Where(x => x.Property == UserProptiesKeys.ProductId).First().Value;

    //        foreach (IntegrationMappingBase item in mappingSetting)
    //        {
    //            if (item.ElementType == (int)TransactionElementType.CPUserPropertiesId)
    //            {
    //                requestedData[item.ParamName] = userPropertiesId;
    //            }

    //            if (item.ElementType == (int)TransactionElementType.RunTimeVariable)
    //            {
    //                object result = variables[item.ElementKey]; ;
    //                if (result is object)
    //                {
    //                    requestedData[item.ParamName] = JToken.FromObject(result);
    //                }
    //            }

    //            else if (item.ElementType == (int)TransactionElementType.PreviousStep)
    //            {
    //                object value = _repositoryUnitOfWork.ControlValues.Value.GetByCriteria(new SearchControlValues()
    //                {
    //                    UserpropertiesId = userPropertiesId,
    //                    ProductId = productId,
    //                    ComponentId = item.ElementParent.Value,
    //                    StepId = item.StepId.Value,
    //                    ControlKey = item.ElementKey
    //                })
    //                 .First()
    //                 .Value;
    //                requestedData[item.ParamName] = value is string ? value.ToString() : JToken.FromObject(value);
    //            }

    //            else if (item.ElementType == (int)TransactionElementType.DynamicComponent)
    //            {
    //                requestedData[item.ParamName] = ((JObject)controls
    //                 .Where(control => item.ElementParent.Value == control.RefCompId)
    //                 .First()
    //                 .FormValue)[item.ElementKey];
    //            }

    //            else if (item.ElementType == (int)TransactionElementType.Constant)
    //            {
    //                requestedData[item.ParamName] = item.DefaultValue;
    //            }

    //            else if (item.ElementType == (int)TransactionElementType.Api) // to do
    //            {
    //                requestedData[item.ParamName] = priviousApiResponse

    //                 .Where(api => api.Key == item.ElementId)

    //                 .First()
    //                 .ToString();
    //                //.GetPropertyValue(item.ElementKey);

    //            }

    //            else if (item.ElementType == (int)TransactionElementType.Session)
    //            {
    //                object value = _repositoryUnitOfWork.UserProperties.Value

    //                 .Find(prop => prop.Property == item.ElementKey && prop.UserId == userPropertiesId)
    //                 .First()
    //                 .Value;
    //                requestedData[item.ParamName] = value is string ? value.ToString() : JToken.FromObject(value);
    //            }

    //            else if (item.ElementType == (int)TransactionElementType.ApiObject)
    //            {
    //                object value;

    //                if (item.ParamType == "") // check sigle or multiple 
    //                {
    //                    value = new JObject();
    //                }
    //                else
    //                {
    //                    value = new List<JObject>();
    //                }

    //                new List<JObject>();
    //                List<IntegrationMappingBase> objectproperties = new List<IntegrationMappingBase>();

    //                List<IntegrationMappingBase> objectValueTypeChild = _repositoryUnitOfWork.IntegrationsObjectControl.Value.Find(entity => entity.MappingId == item.Id)
    //                    .Select(control => (IntegrationMappingBase)control)
    //                    .OrderBy(x => x.Order).ToList();

    //                List<IntegrationMappingBase> objectRefernceypeChild = _repositoryUnitOfWork.IntegrationsApiMapping.Value.Find(entity => entity.MappingId == item.Id)
    //                    .Select(control => (IntegrationMappingBase)control)
    //                    .OrderBy(x => x.Order).ToList();

    //                objectproperties.AddRange(objectValueTypeChild);
    //                objectproperties.AddRange(objectRefernceypeChild);

    //                MapSettingRequestToJson(objectproperties, controls, curretntUserProperties, priviousApiResponse, userPropertiesId, variables, value);

    //                requestedData[item.ParamName] = JToken.FromObject(value);
    //            }

    //            if (isParentMultiple)
    //            {
    //                ((List<JObject>)parent).Add(requestedData);
    //            }
    //        }

    //        return (object)requestedData;

    //    }
    //    protected object MapSettingRequestToXml(string basicXml, List<IntegrationMappingBase> mappingSetting, List<StepFormValue> controls, List<CpUserProperties> curretntUserProperties, Dictionary<long, object> priviousApiResponse, long userPropertiesId, Dictionary<string, object> variables, XElement parent = null)
    //    {
    //        XDocument basicStructureDocument = XDocument.Parse(basicXml);

    //        dynamic requestedData = new JObject();

    //        if (!variables.Any(x => x.Key == "SysDate"))
    //        {
    //            variables.Add("SysDate", DateTime.Now);
    //        }

    //        if (!variables.Any(x => x.Key == "Token"))
    //        {
    //            variables.Add("Token", Convert.ToBase64String(Guid.NewGuid().ToByteArray()));
    //        }

    //        int productId = (int)curretntUserProperties.Where(x => x.Property == UserProptiesKeys.ProductId).First().Value;

    //        foreach (IntegrationMappingBase item in mappingSetting)
    //        {
    //            XElement currentElement = basicStructureDocument.Descendants().Where(element => element.Name.LocalName == item.ParamName
    //            && (parent == null || parent.Name.LocalName == element.Parent.Name.LocalName))
    //            .First();

    //            XElement newElement = new XElement(currentElement);

    //            if (item.ElementType == (int)TransactionElementType.CPUserPropertiesId)
    //            {
    //                newElement.Value = userPropertiesId.ToString();
    //            }

    //            if (item.ElementType == (int)TransactionElementType.RunTimeVariable)
    //            {
    //                newElement.Value = variables[item.ElementKey].ToString();
    //            }

    //            else if (item.ElementType == (int)TransactionElementType.PreviousStep)
    //            {
    //                object value = _repositoryUnitOfWork.ControlValues.Value.GetByCriteria(new SearchControlValues()
    //                {
    //                    UserpropertiesId = userPropertiesId,
    //                    ProductId = productId,
    //                    ComponentId = item.ElementParent.Value,
    //                    StepId = item.StepId.Value,
    //                    ControlKey = item.ElementKey
    //                })
    //                 .First()
    //                 .Value;
    //                newElement.Value = value.ToString();
    //            }

    //            else if (item.ElementType == (int)TransactionElementType.DynamicComponent)
    //            {
    //                newElement.Value = ((JObject)controls
    //                 .Where(control => item.ElementParent.Value == control.RefCompId)
    //                 .First()
    //                 .FormValue)
    //                 [item.ElementKey]
    //                 .ToString();
    //            }

    //            else if (item.ElementType == (int)TransactionElementType.Constant)
    //            {
    //                newElement.Value = item.DefaultValue;
    //            }

    //            else if (item.ElementType == (int)TransactionElementType.Api) // to do
    //            {
    //                newElement.Value = priviousApiResponse
    //                 .Where(api => api.Key == item.ElementId)
    //                 .First().ToString();
    //                //.GetPropertyValue(item.ElementKey).ToString();
    //            }

    //            else if (item.ElementType == (int)TransactionElementType.Session)
    //            {
    //                object value = _repositoryUnitOfWork.UserProperties.Value
    //                 .Find(prop => prop.Property == item.ElementKey && prop.UserId == userPropertiesId)
    //                 .First()
    //                 .Value;
    //                newElement.Value = value.ToString();
    //            }

    //            else if (item.ElementType == (int)TransactionElementType.ApiObject)
    //            {
    //                List<IntegrationMappingBase> objectproperties = new List<IntegrationMappingBase>();

    //                List<IntegrationMappingBase> objectValueTypeChild = _repositoryUnitOfWork.IntegrationsObjectControl.Value.Find(entity => entity.MappingId == item.Id)
    //                    .Select(control => (IntegrationMappingBase)control)
    //                    .OrderBy(x => x.Order).ToList();

    //                List<IntegrationMappingBase> objectRefernceypeChild = _repositoryUnitOfWork.IntegrationsApiMapping.Value.Find(entity => entity.MappingId == item.Id)
    //                    .Select(control => (IntegrationMappingBase)control)
    //                    .OrderBy(x => x.Order).ToList();

    //                objectproperties.AddRange(objectValueTypeChild);
    //                objectproperties.AddRange(objectRefernceypeChild);

    //                MapSettingRequestToXml(basicXml, objectproperties, controls, curretntUserProperties, priviousApiResponse, userPropertiesId, variables, newElement);

    //            }

    //            if (parent != null)
    //            {
    //                parent.Add(newElement);
    //            }
    //            else
    //            {
    //                currentElement.Parent.Add(newElement);
    //            }
    //        }
    //        return (object)requestedData;
    //    }
    //    protected object GetFromJsonObject(JObject param, string key)
    //    {
    //        string[] objectKeys = key.Split(".");
    //        JToken temp = default(JToken);
    //        foreach (string item in objectKeys)
    //        {
    //            if (temp == default(JToken))
    //            {
    //                temp = param[item];
    //            }
    //            else
    //            {
    //                temp = temp[item];
    //            }
    //        }
    //        return temp;
    //    }
    //    protected object GetFromResponse(object response, string variableKey)
    //    {
    //        if (response is JObject)
    //        {
    //            GetFromJsonObject((JObject)response, variableKey);
    //        }
    //        // to do the xml
    //        return null;
    //    }
    //    protected long InsertLog(string url)
    //    {
    //        return _repositoryUnitOfWork.Log.Value.Add(new SstLogs()
    //        {
    //            CreationUser = "System",
    //            Date = DateTime.Now,
    //            IoType = (int)ApiIOType.Out,
    //            Url = url
    //        }).Id;
    //    }
    //    protected void LogRequest(string content, long logId)
    //    {
    //        _repositoryUnitOfWork.LogDetails.Value.Add(new SstLogsDetails()
    //        {
    //            CreationUser = "System",
    //            Content = content,
    //            LogId = logId,
    //            ProcessDate = DateTime.Now,
    //            Type = (int)ApiTransactionType.Request
    //        });
    //    }
    //    protected void LogResponse(string content, int statusCode, long logId)
    //    {

    //        _repositoryUnitOfWork.LogDetails.Value.Add(new SstLogsDetails()
    //        {
    //            CreationUser = "System",
    //            Content = content,
    //            LogId = logId,
    //            ProcessDate = DateTime.Now,
    //            Type = (int)ApiTransactionType.Response
    //        });

    //        SstLogs parentLog = _repositoryUnitOfWork.Log.Value.Get(logId);
    //        parentLog.Status = byte.Parse((statusCode == 200 ? 1 : 0).ToString());
    //        parentLog.StatusCode = statusCode.ToString();
    //        _repositoryUnitOfWork.Log.Value.Update(parentLog);
    //    }
    //}
}
