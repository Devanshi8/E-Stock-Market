import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuyService } from '../services/buy.service';
import { Stock } from '../models/Stock';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  public StockDetails : any = [];
  public grandTotal !: number;
  constructor(private buyService : BuyService,private _router:Router) { }
  StockDetail: Stock = new Stock();
  ngOnInit(): void {
    this.buyService.getShares()
    .subscribe(res=>{
      this.StockDetails = res;
      this.grandTotal = this.buyService.getTotalPrice();
    })
  }

}
