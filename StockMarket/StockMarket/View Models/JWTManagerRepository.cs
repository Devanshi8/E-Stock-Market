﻿using StockMarket.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;

using StockMarket.Interfaces;


namespace StockMarket.View_Models
{
    public class JWTManagerRepository : IJWTManagerRepository
    {
        Dictionary<string, string> UserRecords;

        private readonly IConfiguration configuration;
        private readonly EStockMarketDBContext db;

        public JWTManagerRepository(IConfiguration _configuration, EStockMarketDBContext _db)
        {
            db = _db;
            configuration = _configuration;
        }
        
        public Tokens Authenicate(LoginViewModel registerViewModel, bool IsRegister)
        {
            var _isAdmin = false;
            if (IsRegister)
            {
                TblLogin tblLogin = new TblLogin();
                tblLogin.UserName = registerViewModel.UserName;
                tblLogin.Password = registerViewModel.Password;
                db.TblLogins.Add(tblLogin);
                db.SaveChanges();
            }
            else
            {
                _isAdmin = db.TblLogins.Any(x => x.UserName == registerViewModel.UserName && x.Password == registerViewModel.Password);
            }
            UserRecords = db.TblLogins.ToList().ToDictionary(x => x.UserName, x => x.Password);
            if (!UserRecords.Any(x => x.Key == registerViewModel.UserName && x.Value == registerViewModel.Password))
            {
                return null;
            }
            var tokenHandler = new JwtSecurityTokenHandler();
            var tokenkey = Encoding.UTF8.GetBytes(configuration["JWT:Key"]);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[] {
                new Claim(ClaimTypes.Name,registerViewModel.UserName)
                }),
                Expires = DateTime.UtcNow.AddMinutes(10),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(tokenkey), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return new Tokens { Token = tokenHandler.WriteToken(token), isAdmin = _isAdmin };
        }

       
    }
}

