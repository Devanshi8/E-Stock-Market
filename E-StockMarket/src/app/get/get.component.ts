import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Stock } from '../models/Stock';
import { BuyService } from '../services/buy.service';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  constructor(private _stockservice:StockService,public httpc:HttpClient,private buyservice:BuyService) { }
  StockDetail: Stock = new Stock();
  StockDetails: Array<Stock> = new Array<Stock>();
  ngOnInit(): void {
    this._stockservice.getStocks().subscribe(res => this.StockDetails = res, err => console.log(err))
   
  }
  AddShare(shares: any) {
    console.log(this.StockDetail);
    this.buyservice.AddShare(shares);

  }
}
