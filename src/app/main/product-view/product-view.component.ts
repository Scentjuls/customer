import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/services/data/products/products.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  productDetail: any;
  constructor(
    private productDetailsData: ProductsService
  ) { }

  ngOnInit() {
    const productDetails = JSON.parse(sessionStorage.getItem('product_details'));
    this.getProductDetails(productDetails.id);
  }

  getProductDetails(id: any) {
    this.productDetailsData.getProductDetailsHome(id).subscribe(
      res => {
        this.productDetail = res.data.product;
        console.log('pr', this.productDetail)
      }
    )
  }

  chooseColor() {
    console.log('clicked')
  }

}
