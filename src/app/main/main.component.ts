import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/services/data/authentication/authentication.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  isLoggedIn: boolean = false;
  currentUser: any;
  constructor(
    private authData: AuthenticationService
  ) { }

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    console.log('here')
    this.currentUser = JSON.parse(localStorage.getItem('user_details') || sessionStorage.getItem('user_details'));
    console.log('user', this.currentUser)
    if(this.currentUser) {
      this.isLoggedIn = true
    } else {
      this.isLoggedIn = false;
    }
  }

  loginUpdate() {
    this.getCurrentUser();
    this.isLoggedIn = true;
  }

  logout() {
    this.authData.logOut();
    this.isLoggedIn = false;
  }



}
