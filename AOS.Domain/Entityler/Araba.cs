using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AOS.Domain.Entityler
{
    public class Araba
    {
        ////[Key]
        //[DatabaseGenerated(DatabaseGeneratedOption.None)]
        //public int ID { get; set; }
        public string Marka { get; set; }
        public string Renk { get; set; }
        public string Model { get; set; }
        public int YapimYili { get; set; }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }
    }
}
