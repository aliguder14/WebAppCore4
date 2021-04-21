using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace WebAppCore4
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseKestrel()
                    .UseUrls("https://localhost:5004")
                    .UseContentRoot(Directory.GetCurrentDirectory())
                    .UseIISIntegration()
                    .UseIIS()
                    .UseStartup<Startup>();

                    //.UseContentRoot(Directory.GetCurrentDirectory())
                    //.UseIISIntegration()
                    //.UseIIS();
                }).ConfigureAppConfiguration((hostingContext, config) =>
                 {
                     config.SetBasePath(Directory.GetCurrentDirectory());
                     config.AddJsonFile("appsettings.json", optional: false, reloadOnChange: true);
                     //config.AddJsonFile("appsettings.Development.json", optional: false, reloadOnChange: true);
                     config.AddEnvironmentVariables();
                 }).ConfigureLogging(logBuilder =>
                 {
                     logBuilder.ClearProviders(); // removes all providers from LoggerFactory
                     logBuilder.AddConsole();
                     //logBuilder.AddTraceSource("Information, ActivityTracing"); // Add Trace listener provider
                 });
    }
}
