import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanydService {
  private _shareUrl = "https://localhost:44386/api/Company/getall";
  constructor(private http: HttpClient, private _router: Router) { }
  public search = new BehaviorSubject<string>("");


  getCompanuys() {
    return this.http.get<any>(this._shareUrl);
  }
}
