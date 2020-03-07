using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
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

namespace WebAppCore4.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        IMapper _mapper;
        IArabaManager _arabaManager;
        private readonly IOptions<CustomConfig> _customAppSettings; 
        private readonly IStringLocalizer<HomeController> _localizer;
        public HomeController(ILogger<HomeController> logger, 
            IMapper mapper, 
            IArabaManager arabaManager, 
            IOptions<CustomConfig> customAppSettings,
            IStringLocalizer<HomeController> localizer)
        {
            _logger = logger;
            _mapper = mapper;
            _arabaManager = arabaManager;
            _customAppSettings = customAppSettings;
            _localizer = localizer;
        
        }

        public IActionResult Index()
        {
            ViewData["Mesaj"] = _localizer["Mesaj"];
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

            using (AOSContext aOSContext = new AOSContext())
            {
                arabalar = aOSContext.Arabalar.ToList();
            }

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
