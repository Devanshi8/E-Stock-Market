using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockMarket.View_Models
{
    public class Tokens
    {
        public string Token { get; set; }
        public string RefreshToken { get; set; }
        public bool IsAdmin { get; set; }
    }
}
