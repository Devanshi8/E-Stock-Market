using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StockMarket.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockMarket.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        EStockMarketDBContext db;
        public CustomerController(EStockMarketDBContext _db)
        {
            db = _db;
        }
        [HttpGet]
        //user details
        public IEnumerable<TblCustomer> GetCustomers()
        {
            return db.TblCustomers;
        }
        [HttpPost]
        //register user detials
        public string Post([FromBody] TblCustomer tblCustomer)
        {
            db.TblCustomers.Add(tblCustomer);
            db.SaveChanges();
            return "success";
        }
        
    }
}
