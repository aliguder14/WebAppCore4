using System;
using System.Collections.Generic;
using System.Text;

namespace WebAppCore4.CustomConfigler
{
    public class CustomConfig
    {
        public string UygulamaAdi { get; set; }
        public string UygulamaninAmaci { get; set; }
        public string SinifAdi { get; set; }
        public string ServisBaseURL { get; set; }
        public string ServisURL { get; set; }
        public VersionConfig VersionConfig { get; set; }
    }
}
