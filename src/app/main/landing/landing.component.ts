import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/services/data/home/home.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(
    private homeData: HomeService
  ) { }

  ngOnInit() {
    this.getLandingData();
  }

  getLandingData() {
    this.homeData.getLandingPage().subscribe(
      res => {
        console.log(';here')
      }
    )
  }


}
