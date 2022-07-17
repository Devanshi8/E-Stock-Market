using StockMarket.View_Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockMarket.Interfaces
{
    public interface IJWTManagerRepository
    {
        Tokens Authenicate(LoginViewModel users, bool IsRegister);
    }
}
