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
    public class BuyController : ControllerBase
    {
        EStockMarketDBContext db;
        public BuyController(EStockMarketDBContext _db)
        {
            db = _db;
        }
        [HttpGet]
       
        public IEnumerable<TblUser> GetUsers()
        {
            return db.TblUsers;
        }
        [HttpPost]
        
        public string Post([FromBody] TblUser tblUser)
        {
            db.TblUsers.Add(tblUser);
            db.SaveChanges();
            return "success";
        }
    }
}
