using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace AOS.Domain.Entityler
{
    public class Musteri
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }
        public string Adi { get; set; }
        public string Soyadi { get; set; }
        public long TCKN { get; set; }
    }
}
