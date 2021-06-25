using DOMAIN.Context;
using Microsoft.AspNetCore.Mvc;
using SharedComponents.Domain.Interfaces.Services;
using SharedComponents.Domain.Models;
using System.Collections.Generic;
using System.Linq;
using System.Xml;

namespace SharedComponents.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
//        private readonly IServiceUnitOfWork _serviceUnitOfWork;
//        private SharedComponentsDBContext _context;
//        public TestController(IServiceUnitOfWork serviceUnitOfWork, SharedComponentsDBContext context)
//        {
//            _context = context;
//            _serviceUnitOfWork = serviceUnitOfWork;
//        }

//        [HttpGet("TestLoadXml")]
//        public void TestLoadXml()
//        {
//            XmlDocument x = new XmlDocument();
//            x.LoadXml(@"<soap:Envelope xmlns:soap='http://www.w3.org/2003/05/soap-envelope' xmlns:tem='http://tempuri.org/' xmlns:gen='http://schemas.datacontract.org/2004/07/GeneralInterface.Contracts'>
//   <soap:Header xmlns:wsa='http://www.w3.org/2005/08/addressing'><wsa:Action>http://tempuri.org/IQuotation/QuickPrice</wsa:Action></soap:Header>
//   <soap:Body>
//      <tem:QuickPrice>   
//         <tem:oQuickPriceInput>
//            <gen:QuickPriceInput>
//               <gen:QuicPriceFields>
//                  <gen:BranchID>??</gen:BranchID>
//                  <gen:ClassID>??</gen:ClassID>
//                  <gen:InterestName>??</gen:InterestName>
//                  <gen:InterestType>??</gen:InterestType>
//                  <gen:PolicyType>??</gen:PolicyType>
//                  <gen:SUMINSURED>??</gen:SUMINSURED>                 
//               </gen:QuicPriceFields>
//            </gen:QuickPriceInput>
//         </tem:oQuickPriceInput>
//      </tem:QuickPrice>
//   </soap:Body>
//</soap:Envelope>");

//        }

//        [HttpGet("UpdateServiceXml")]
//        public void updateXml()
//        {
//            List<SstIntegrationsSettings> tests = _context.SstIntegrationsSettings.ToList();
//            foreach (SstIntegrationsSettings item in tests)
//            {
//                item.XmlStructureValue = @"<soap:Envelope xmlns:soap='http://www.w3.org/2003/05/soap-envelope' xmlns:tem='http://tempuri.org/' xmlns:gen='http://schemas.datacontract.org/2004/07/GeneralInterface.Contracts'>
//   <soap:Header xmlns:wsa='http://www.w3.org/2005/08/addressing'><wsa:Action>http://tempuri.org/IQuotation/QuickPrice</wsa:Action></soap:Header>
//   <soap:Body>
//      <tem:QuickPrice>   
//         <tem:oQuickPriceInput>
//            <gen:QuickPriceInput>
//               <gen:QuicPriceFields>
//                  <gen:BranchID>??</gen:BranchID>
//                  <gen:ClassID>??</gen:ClassID>
//                  <gen:InterestName>??</gen:InterestName>
//                  <gen:InterestType>??</gen:InterestType>
//                  <gen:PolicyType>??</gen:PolicyType>
//                  <gen:SUMINSURED>??</gen:SUMINSURED>                 
//               </gen:QuicPriceFields>
//            </gen:QuickPriceInput>
//         </tem:oQuickPriceInput>
//      </tem:QuickPrice>
//   </soap:Body>
//</soap:Envelope>";
//                _context.SstIntegrationsSettings.Update(item);
//                _context.SaveChanges();

//            }
//        }

//        [HttpGet("TestCallService")]

//        public void TEstCallService()
//        {
//            // _serviceUnitOfWork.Integrations.Value.CallWebService2("http://10.10.102.52/RAKUC/GI%20ServiceSUC/GeneralInterface.ServiceMethod.Quotation.svc", "Quotation", "QuickPrice", new object());
//        }

//        //[HttpGet("Exception")]
//        //public string TestException()
//        //{
//        //    throw new Exception("");
//        //}

//        //[HttpGet("Api2")]
//        //public string Api2(SstComponents component)
//        //{
//        //    return "";
//        //}



//        //[HttpPost("TestLog")]
//        //public string TestLogApiPost(SstComponents s)
//        //{
//        //    return "jsdhfkj sdjkh sdjkhfsdjkfh";
//        //}



//        //[HttpGet]
//        //public void TestNoRoute(SstComponents component)
//        //{
//        //}

//        [HttpPost]
//        //public Object GetAll()
//        //{
//        //var setting = new SstControlSettings()
//        //{
//        //    Name = "TEst jebrtlil",
//        //    Name2 = "TEst jebrtlil",
//        //    CreationDate = DateTime.Now,
//        //    Code = "Jebrlil",
//        //    CreationUser = "Jebrlil"
//        //};
//        //_serviceUnitOfWork.ControlSetting.Value.Add(setting);
//        //var value = new SstSettingValues()
//        //{
//        //    ControlId =1,
//        //    CreationUser ="Admin",
//        //    CreationDate = DateTime.Now,
//        //    Name2="ASD",
//        //    Name ="TEst",
//        //    SettingId = 1,
//        //    Value="Test"
//        //};
//        //  _serviceUnitOfWork.SettingValue.Value.Add(value);
//        // var container = _context.SstContainers.Find(2);
//        //    var formControl = new SstFormControls()
//        //    {
//        //        Name = "asd",
//        //        Name2 = "asd",
//        //        Notes = "TestJNotes",
//        //        Value = 5,
//        //        ContainerId = 29,
//        //        Type = 1,
//        //        Width = 1,
//        //        Order = 1,
//        //        Icon = "TESt",
//        //        Key = "TEst",
//        //        CreationUser = "ADMIN"
//        //    };
//        //    _serviceUnitOfWork.FormControl.Value.Add(formControl);
//        //    return null;
//        //}


//        [HttpGet("add")]
//        public void add()
//        {
//            //var aSpdProducts = new SpdProducts()
//            //{
//            //    Id = 1,
//            //    Name = "test",
//            //    Name2 = "test",
//            //    CreationDate = DateTime.Now,
//            //    CreationUser = "Seri",
//            //};
//            //_serviceUnitOfWork.Products.Value.Add(aSpdProducts);

//            //var aSpdProductsDetails = new SpdProductsDetails()
//            //{
//            //    Id = 1,
//            //    ProductId = 1,
//            //    CreationDate = DateTime.Now,
//            //    CreationUser = "Seri",
//            //    PolicyType = 1,
//            //};
//            //_serviceUnitOfWork.ProductsDetails.Value.Add(aSpdProductsDetails);
//        }

//        //[HttpGet("{id}")]
//        //public IResponseResult<SstComponents> Get(int id)
//        //{
//        //    //var result = from cc in _context.SstContainers
//        //    //             join Fcontrol in _context.SstFormControls on cc.Id equals Fcontrol.ContainerId
//        //    //             join FValue in _context.SstSettingValues on Fcontrol.Id equals FValue.ControlId
//        //    //             where cc.Id == id
//        //    //             select cc;






//        //    //var container23 = _context.SstContainers
//        //    //    .Where(containerItem => containerItem.Id == id)
//        //    //    .Include(entity => entity.SstFormControls.Select(p=>p.SstSettingValues)).First();

//        //    //var container23 = _context.SstContainers
//        //    //  .Where(containerItem => containerItem.Id == id)
//        //    //  .Include(entity => entity.SstFormControls)
//        //    //  .Include("SstFormControls.SstSettingValues")
//        //    //  .First();

//        //    //var container23 = _context.SstContainers
//        //    //  .Where(containerItem => containerItem.Id == id)
//        //    //  .Include(entity => entity.SstFormControls)
//        //    //  .Select((t) => { t.Id = 5; return t; });


//        //    //  var test = container23.Select(t => t.SstFormControls.AsQueryable().Include(oo => oo.SstSettingValues));

//        //    //foreach (var formControl in container23)
//        //    //{
//        //    //    formControl.SstFormControls.AsQueryable().Include(oo => oo.SstSettingValues);
//        //    //}

//        //    //  var container232 = container23.ToList();
//        //    //     var container22132 = test.ToList();
//        //    var container = _context.SstContainers
//        //        .Where(containerItem => containerItem.Id == id)
//        //        .Include(entity => entity.SstFormControls)
//        //        .First();
//        //    container.SstFormControls
//        //   .ToList()
//        //   .ForEach(e => e.SstSettingValues = _context.SstSettingValues.Where(s => s.ControlId == e.Id).ToList());
//        //    var control = _context.SstFormControls.Where(con => con.Id == 8).Include(item => item.SstSettingValues).FirstOrDefault();

//        //    container.SstFormControls.Add(new SstFormControls() { Name = "ds", Name2 = "asd", Icon = "asd", Key = "asd", CreationUser = "Jebril" });
//        //    _context.SaveChanges();
//        //    throw new Exception();
//        //}

//        //[HttpPut]
//        //public IResponseResult<SstComponents> Add(SstComponents component)
//        //{
//        //    using (_serviceUnitOfWork)
//        //        return _serviceUnitOfWork.Component.Value.Update(component);
//        //}

//        //[HttpPost]
//        //public IResponseResult<SstComponents> Update(SstComponents component)
//        //{
//        //    using (_serviceUnitOfWork)
//        //        return _serviceUnitOfWork.Component.Value.Add(component);
//        //}

//        //[HttpDelete("{id}")]
//        //public IResponseResult<SstComponents> Delete(int id)
//        //{
//        //    using (_serviceUnitOfWork)
//        //        return _serviceUnitOfWork.Component.Value.Remove(new SstComponents() { Id = id });
//        //}
    }
}