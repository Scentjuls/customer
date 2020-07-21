import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  baseUrl: string = environment.apiBaseURL;
  constructor(
    private http: HttpClient
  ) { }

  createAccountForm(userDetails) {
    let data = {
      firstname: userDetails.firstName,
      lastname: userDetails.lastName,
      phone: userDetails.phoneNumber,
      email: userDetails.email,
      password: userDetails.password,
    }
    return this.http.post<any>(this.baseUrl + 'auth/signup', data)
  }

  signInForm(userDetails) {
    let data = {
      email: userDetails.email,
      password: userDetails.password
    }
    return this.http.post<any>(this.baseUrl + 'auth/login', data)
  }
}
