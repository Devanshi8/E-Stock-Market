import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { CompanydService } from './services/companyd.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
  
  
}
