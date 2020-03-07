using AOS.Domain.Entityler;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Text;
using Microsoft.Extensions.Configuration;
using System.IO;
using System.Linq;

namespace AOS.Domain
{
    public class AOSContext : DbContext
    {
        public DbSet<Araba> Arabalar { get; set; }
        public DbSet<Musteri> Musteriler { get; set; }

        public AOSContext()
        {
        }

        public string AppSettingsdenDegerAl(IConfigurationRoot root,string key)
        {
            IConfigurationSection section = root.GetSection(key);
            string deger = section.Value;

            if (section != null || string.IsNullOrWhiteSpace(key))
            {
                var altSectionlar = section.GetChildren();

               
            }

            return deger;
        }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //ConfigurationExtensions.GetConnectionString(this.con)

            IConfigurationBuilder builder = new ConfigurationBuilder();
            builder.AddJsonFile(Path.Combine(Directory.GetCurrentDirectory(), "appsettings.json"));

            IConfigurationRoot root = builder.Build();
            string veriTabaniBaglantiBilgileri = root.GetConnectionString("AOSContext");
            //CustomConfig customConfig = root.GetValue<CustomConfig>("CustomConfig");


            //optionsBuilder.UseSqlServer("Data Source=localhost\\SQLEXPRESS;Initial Catalog=AOS;Persist Security Info=True;User ID=sa;Password=123;MultipleActiveResultSets=true"
            //    //,
            //    //x => x.MigrationsAssembly("AOS.Domain"

            //    );

            optionsBuilder.UseSqlServer(veriTabaniBaglantiBilgileri);
        }

        public AOSContext(DbContextOptions<AOSContext> options) : base(options)
        {
        }


    }
}
