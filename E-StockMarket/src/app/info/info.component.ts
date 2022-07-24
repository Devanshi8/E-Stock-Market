import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyDetails } from '../models/CompanyDetails';
import { Stock } from '../models/Stock';
import { BuyService } from '../services/buy.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  // searchKey:string="";
  // public searchTerm : string='';
  
  // stocks: Array<Stock> = new Array<Stock>();
  // company:Array<CompanyDetails>=new Array<CompanyDetails>();
  constructor(private buyservice: BuyService,private _router:Router) { }

  ngOnInit(): void {
    // this.buyservice.search.subscribe((val:any)=>
    // {
    //   this.searchKey=val;
    // });
    // this.buyservice.search.subscribe((val:any)=>{
    //   this.searchKey = val;
    // })
  }
  // search(event:any){
  //   this.searchTerm = (event.target as HTMLInputElement).value;
  //   console.log(this.searchTerm);
  //   this.buyservice.search.next(this.searchTerm);
  // }
  // goto()
  // {
  //   this._router.navigate(['']);
  // }
}
