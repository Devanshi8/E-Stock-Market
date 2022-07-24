import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { CompanydService } from './services/companyd.service';
import { BuyService } from './services/buy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // searchKey:string="";
  // public searchTerm : string='';
  title = 'E-StockMarket';
  constructor(private _auth: AuthService,private _companyservice:CompanydService){}
  LoggedIn(input: boolean) {
    if (input) {
      return this._auth.loggedIn();
    }
    else {
      return !this._auth.loggedIn();
    }
  }
  LogOut() {
    this._auth.logoutUser();
  }
  
  // search(event:any){
  //   this.searchTerm = (event.target as HTMLInputElement).value;
  //   console.log(this.searchTerm);
  //   this.buyservice.search.next(this.searchTerm);
  // }
}
