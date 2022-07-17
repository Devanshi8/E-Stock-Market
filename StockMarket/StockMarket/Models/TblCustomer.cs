﻿using System;
using System.Collections.Generic;

#nullable disable

namespace StockMarket.Models
{
    public partial class TblCustomer
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Password { get; set; }
        public string UserMailid { get; set; }
        public int? PhoneNo { get; set; }
        public string AccountDemat { get; set; }
    }
}
