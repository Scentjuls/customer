import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/services/data/home/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  featuredProducts: Array<any> = [];
  bestSellerProducts: Array<any> = [];
  constructor(
    private homeData: HomeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getLandingData();
  }

  getLandingData() {
    this.homeData.getLandingPage().subscribe(
      res => {
        this.featuredProducts = res.data.featuredproducts;
        this.bestSellerProducts = res.data.bestsellerproducts;
        this.featuredProducts.forEach(element => {
          element.image = element.image.split('|');
        });
      }
    )
  }

  viewProduct(product) {
    sessionStorage.setItem('product_details', JSON.stringify(product));
    this.router.navigate(['/product/' + product.id])
  }


}
