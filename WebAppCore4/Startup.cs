using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AOS.Domain;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Diagnostics;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.EntityFrameworkCore;
using AutoMapper;
using WebAppCore4.Profiles;
using WebAppCore4.Intercafes;
using WebAppCore4.Managers;
using WebAppCore4.CustomConfigler;
using System.Globalization;
using Microsoft.AspNetCore.Localization;

namespace WebAppCore4
{
    public class Startup
    {

        RequestCulture _defaultLanguage = new RequestCulture("en-GB");
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddLocalization(options =>
            {
                // Resource (kaynak) dosyalarımızı ana dizin altında "Resources" klasorü içerisinde tutacağımızı belirtiyoruz.
                options.ResourcesPath = "Resources";
            });


            services.AddControllersWithViews().AddRazorRuntimeCompilation();

            var mappingConfig = new MapperConfiguration(mc =>
            {
                mc.AddProfile(new MappingProfile());
            });

            IMapper mapper = mappingConfig.CreateMapper();
            services.AddSingleton(mapper);
            services.AddScoped<IArabaManager, ArabaManager>();

            services.Configure<CustomConfig>(Configuration.GetSection("CustomConfig"));


            //services.AddDbContext<AOSContext>(options =>options.UseSqlServer(Configuration.GetConnectionString("AOSContext")));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            var supportedCultures = new List<CultureInfo>
             {
                     new CultureInfo("tr-TR"),
                     new CultureInfo("en-GB")
             };

            app.UseRequestLocalization(new RequestLocalizationOptions
            {
                DefaultRequestCulture = new RequestCulture("tr-TR"),
                SupportedCultures = supportedCultures,
                SupportedUICultures = supportedCultures,
                RequestCultureProviders = new List<IRequestCultureProvider>
                {
                    new QueryStringRequestCultureProvider(),
                    new CookieRequestCultureProvider(),
                    new AcceptLanguageHeaderRequestCultureProvider()
                }
            });

            app.UseRequestLocalization();
            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
