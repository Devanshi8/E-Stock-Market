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
    public class StockController : ControllerBase
    {
        EStockMarketDBContext db;
        public StockController(EStockMarketDBContext _db)
        {
            db = _db;
        }
        [HttpGet]
        [Route("get")]
        //user can get the details of stock start end date
        public IEnumerable<TblStock> GetStocks()
        {
            return db.TblStocks;
        }
        [HttpPost]
        //company can add the stock
        public string Post([FromBody] TblStock tblStock)
        {
            db.TblStocks.Add(tblStock);
            db.SaveChanges();
            return "success";
        }
    }
}
