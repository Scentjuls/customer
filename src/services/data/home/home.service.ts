import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  baseUrl: string = environment.apiBaseURL;
  constructor(
    private http: HttpClient
  ) { }

  getLandingPage() {
    return this.http.get<any>(this.baseUrl + 'home');
  }
}
