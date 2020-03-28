using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
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
using System.IO;

namespace WebAppCore4.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        IMapper _mapper;
        IArabaManager _arabaManager;
        IArabaManager _arabaManager2;
        private readonly IOptions<CustomConfig> _customAppSettings; 
        private readonly IStringLocalizer<HomeController> _localizer;
        AOSContext _aOSContext;
        public HomeController(ILogger<HomeController> logger, 
            IMapper mapper, 
            IArabaManager arabaManager, 
            IArabaManager arabaManager2,
            IOptions<CustomConfig> customAppSettings,
            IStringLocalizer<HomeController> localizer,
            AOSContext aOSContext)
        {
            _logger = logger;
            _mapper = mapper;
            _arabaManager = arabaManager;
            _arabaManager2 = arabaManager2;
            _customAppSettings = customAppSettings;
            _localizer = localizer;
            _aOSContext = aOSContext;
        
        }

        public IActionResult Index()
        {
            ViewData["Mesaj"] = _localizer["Mesaj"];

            CustomConfig customConfig = _customAppSettings.Value;

            Assembly assembly = Assembly.LoadFrom(@"Bilesenler\AOS.Bilesen.dll");

            if (assembly != null)
            {
               string dllAdi = assembly.GetName().Name;

                if (assembly.GetTypes().Any(x=>x.Name == customConfig.SinifAdi))
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

            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        public IActionResult BootStrapOrnekleriView()
        {
            List<Araba> arabalar;
            ArabaModel arabaModel;
            int gazMiktari = 12;

            CustomConfig customConfig = _customAppSettings.Value;

            //using (AOSContext aOSContext = new AOSContext())
            //{
                arabalar = _aOSContext.Arabalar.ToList();
            //}

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
                    Marka = "BMW",
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
    }
}
