using System;
using System.Collections.Generic;

#nullable disable

namespace StockMarket.Models
{
    public partial class TblUserDatum
    {
        public int Id { get; set; }
        public string CompanyName { get; set; }
        public double? StockPrice { get; set; }
        public int? StockQuantity { get; set; }
        public double? GrandTotal { get; set; }
    }
}
