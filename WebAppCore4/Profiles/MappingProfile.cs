using AOS.Domain.Entityler;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Providers.Entities;
using WebAppCore4.Models;

namespace WebAppCore4.Profiles
{
    public class MappingProfile: Profile 
    {
        public MappingProfile()
        {
            // Add as many of these lines as you need to map your objects
            CreateMap<Araba, ArabaModel>();
            //CreateMap<UserDto, User>();
        }
    }
}
