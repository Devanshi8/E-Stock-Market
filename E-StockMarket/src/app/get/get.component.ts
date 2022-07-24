import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Stock } from '../models/Stock';
import { BuyService } from '../services/buy.service';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
 
  // template: 
  // `<div>
  //   <!--output '26%'-->
  //   <p>A: {{a | percent}}</p>

  //   <!--output '0,134.950%'-->
  //   <p>B: {{b | percent:'4.3-5'}}</p>

  //   <!--output '0 134,950 %'-->
  //   <p>B: {{b | percent:'4.3-5':'fr'}}</p>
  // </div>`
})
export class GetComponent implements OnInit {
  a: number = 0.259;
  b: number = 1.3495;

  constructor(private _stockservice:StockService,public httpc:HttpClient,private buyservice:BuyService) { }
  StockDetail: Stock = new Stock();
  StockDetails: Array<Stock> = new Array<Stock>();
  // numlist: Array<Stock> = new Array<Stock>();
  numlist: Array<number> = [1, 2, 3, 4, 5];
  total: number = 0;
  arrayLength: number = this.numlist.length;
  average: number = 0;

  max: number = 0;
  min: number = 0;

  sum() {
    this.total = this.numlist.reduce((a, b) => a + b);
  }
    ngOnInit(): void {
    this._stockservice.getStocks().subscribe(res => this.StockDetails = res, err => console.log(err))
  //   this.sum();
  //  this.max = this.StockDetail.reduce((a, b) => Math.max(a, b));
  //   this.min = this.StockDetails.reduce((a, b) => Math.min(a, b));
  //   this.average = (this.total / this.arrayLength);

  // function maxMinAvg(StockDetails) {
  //   var max = StockDetails[0];
  //   var min = StockDetails[0];
  //   var sum = StockDetails[0]; //changed from original post
  //   for (var i = 1; i < StockDetails.stockPrice.length; i++) {
  //       if (arr[i] > max) {
  //           max = arr[i];
  //       }
  //       if (arr[i] < min) {
  //           min = arr[i];
  //       }
  //       sum = sum + arr[i];
  //   }
  //   return [max, min, sum/arr.length]; //changed from original post
  // }
    // function topSalary(salaries:any) 
    // {
    //    let maxSalary = 0; let maxName = null; 
    //    for(const [name, salary] of Object.entries(salaries))
    //   { 
    //     if (maxSalary < salary) 
    //     { 
    //       maxSalary = salary; maxName = name; 
    //     } 
    //   } 
    //   return maxName; 
    // }

  
  
  }
  AddShare(shares: any) {
    console.log(this.StockDetail);
    this.buyservice.AddShare(shares);

  }
}
