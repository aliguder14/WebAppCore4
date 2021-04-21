using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Reflection;
using AOS.Domain;
using AOS.Domain.Entityler;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Localization;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using WebAppCore4.CustomConfigler;
using WebAppCore4.Intercafes;
using WebAppCore4.Models;
using AOS.InterfaceBilesen;

using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using WebAppCore4.SessionClasses;
using Microsoft.Extensions.Configuration;
using System.Net.Http;
using System.Net.Http.Headers;
using Microsoft.AspNetCore.Localization;
using ServiceReference1;
using WebAppCore4.FilterAttributes;
using Microsoft.EntityFrameworkCore;
using AOS.Repository;

namespace WebAppCore4.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IMapper _mapper;
        private readonly IArabaManager _arabaManager;
        private readonly IArabaManager _arabaManager2;
        private readonly SessionManger _sessionManager;
        private readonly IConfiguration _configuration;

        private readonly IOptions<CustomConfig> _customAppSettings;
        private readonly IStringLocalizer<HomeController> _localizer;
        private readonly AOSContext _aOSContext;
        private readonly ArabaRepository _arabaRepository;
        public HomeController(ILogger<HomeController> logger,
            IMapper mapper,
            IArabaManager arabaManager,
            IArabaManager arabaManager2,
            SessionManger sessionManger,
            IOptions<CustomConfig> customAppSettings,
            IStringLocalizer<HomeController> localizer,
            AOSContext aOSContext,
            IConfiguration configuration,
            ArabaRepository arabaRepository)
        {
            _logger = logger;
            _mapper = mapper;
            _arabaManager = arabaManager;
            _arabaManager2 = arabaManager2;
            _customAppSettings = customAppSettings;
            _localizer = localizer;
            _aOSContext = aOSContext;
            _sessionManager = sessionManger;
            _configuration = configuration;
            _arabaRepository = arabaRepository;
        }

       
        public IActionResult Index()
        {
            ViewData["Mesaj"] = _localizer["Mesaj"];
            _logger.LogInformation("Ana sayfaya giriş yapıldı.");
            //_session.SetString(_sessionAdi, "1. Session Verisi");
            //_session.SetInt32(_sessionKisiNo, 566);

            Kullanici kullanici = new Kullanici()
            {
                Adi = "1. Session Verisi",
                KisiNo = 566
            };
            var rqf = Request.HttpContext.Features.Get<IRequestCultureFeature>();
            // Culture contains the information of the requested culture
            var culture = rqf.RequestCulture.UICulture;

            if (!_sessionManager.Exist<Kullanici>())
            {
                _sessionManager.Set<Kullanici>(kullanici);
            }

            CustomConfig customConfig = _customAppSettings.Value;
            _configuration.GetSection("CustomConfig").Bind(customConfig);

            //customConfig.UygulamaAdi = "a56";

            Assembly assembly = Assembly.LoadFrom(@"Bilesenler\AOS.Bilesen.dll");

            if (assembly != null)
            {
                string dllAdi = assembly.GetName().Name;

                if (assembly.GetTypes().Any(x => x.Name == customConfig.SinifAdi))
                {
                    //Assembly assembly2 = AppDomain.CurrentDomain.Load(System.IO.File.ReadAllBytes(@"C:\Users\ali\Documents\VisualStudio2019Projeleri\WebAppCore4\WebAppCore4\Bilesenler\AOS.Bilesen.dll"));

                    Type type = assembly.GetTypes().Where(x => x.Name == customConfig.SinifAdi).FirstOrDefault();
                    IBilesen bilesen = Activator.CreateInstance(type) as IBilesen;

                    string donusDegeri = bilesen.Calistir();
                    ViewData["DonusDegeri"] = donusDegeri;
                }

                else
                {
                    ViewData["DonusDegeri"] = "Metot bulunamadı";
                }
            }


            //ViewBag.SessionAdi = _session.GetString(_sessionAdi);
            //ViewBag.SessionKisiNo = _session.GetInt32(_sessionKisiNo);


            ViewBag.SessionAdi = _sessionManager.Kullanici.Adi;
            ViewBag.SessionKisiNo = _sessionManager.Kullanici.KisiNo;

            return View();
        }

        
        public IActionResult Privacy()
        {
            //Repository repository = new Repository();
            //_ = repository.RepositoryDondur();
            _logger.LogError("Beklenmeyen {hata}. hata oluştu {hata2} oluşacağını düşünmüyorum",1,2);
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        public IActionResult VeritabaniHata()
        {
            VeritabaniHataModel model = new VeritabaniHataModel()
            {
                HataTuru = 3,
                Mesaj = "Veritabani Bağlantı Hatası Var"
            };

            return View(model);
        }


        [ServiceFilter(typeof(VeritabaniAtrribute))]
        public IActionResult BootStrapOrnekleriView()
        {
            
            _logger.LogInformation("Örnek sayfasına giriş yapıldı.");

            List<Araba> arabalar;
            ArabaModel arabaModel;
            int gazMiktari = 12;


            CustomConfig customConfig = _customAppSettings.Value;

            //using (AOSContext aOSContext = new AOSContext())
            //{
            arabalar = _aOSContext.Arabalar.ToList();
            _aOSContext.Arabalar.TagWith("Arabalar geldi.");

            Araba araba1 = arabalar.FirstOrDefault();
            araba1.YapimYili = 2006;

            var araba3 = new Araba()
            {
                ID = 3,
                Marka = "BMW2",
                YapimYili = 2020,
                Model = "X5",
                Renk = "Siyah"

            };

            //_aOSContext.Update(araba3);
            //_aOSContext.Update(araba1);
            ////_aOSContext.Attach(araba3);
            ////_aOSContext.Entry(araba3).Property("YapimYili").IsModified = true;
            ////_aOSContext.SaveChanges();

            List<Araba> arabalar2 = _arabaRepository.ArabaKayitlariniGetir();
            int kayitSonucu = _arabaRepository.ArabaKaydet(araba3);
            //}

            customConfig.UygulamaAdi = "Uygulama Adı 5";

            _arabaManager.GazaBas(gazMiktari);

            if (arabalar != null && arabalar.Any())
            {
                Araba araba = arabalar.FirstOrDefault();
                arabaModel = _mapper.Map<ArabaModel>(araba);

                //arabaModel = new ArabaModel()
                //{
                //    ID = araba.ID,
                //    Marka = araba.Marka,
                //    Model = araba.Model,
                //    YapimYili = araba.YapimYili,
                //    Renk = araba.Renk
                //};

            }

            else
            {
                arabaModel = new ArabaModel()
                {
                    ID = 67,
                    Marka = "BMW<script>alert('Attacted');</script>",
                    Model = "X5",
                    YapimYili = 2005,
                    Renk = "Siyah"

                };
            }

            return View(arabaModel);
        }

        public IActionResult Ornek1View()
        {
            return View();
        }

        public IActionResult ServisCagir()
        {
            //Service1Client wcfServiceClient = new Service1Client();



            Service1Client wcfServiceClient = new Service1Client();
            int toplamSayi = wcfServiceClient.ToplamaHesabiYap(56, 78);

            ViewBag.ToplamSayi = toplamSayi;
            CustomConfig customConfig = _customAppSettings.Value;
            _configuration.GetSection("CustomConfig").Bind(customConfig);
            DoktorModel doktor = new DoktorModel();
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(customConfig.ServisBaseURL);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                //GET Method  
                HttpResponseMessage response = client.GetAsync(customConfig.ServisURL).Result;

                if (response.IsSuccessStatusCode)
                {

                    string jsonResult = response.Content.ReadAsStringAsync().Result;
                    DoktorModel[] doktorlar = JsonConvert.DeserializeObject<DoktorModel[]>(jsonResult);
                    doktor = doktorlar.FirstOrDefault();

                    //Console.WriteLine("Id:{0}\tName:{1}", department.DepartmentId, department.DepartmentName);
                    //Console.WriteLine("No of Employee in Department: {0}", department.Employees.Count);
                }
                else
                {
                    Console.WriteLine("Internal server Error");
                }
            }

            return View(doktor);
        }
    }
}
