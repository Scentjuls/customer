import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/services/data/products/products.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  productDetail: any = {};
  mainImage: string; 
  relatedProducts: Array<any> = [];
  related: boolean = true;
  itemQuantity: number = 1;

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
        this.productDetail.color = JSON.parse(this.productDetail.color);
        this.productDetail.image = this.productDetail.image.split('|');
        this.mainImage = this.productDetail.image[0];
        this.relatedProducts = res.data.relatedproduct;
        this.relatedProducts.forEach(element => {
          element.image = element.image.split('|');
        })
      }
    )
  }

  setMain(image){
    this.mainImage = image;
  }

  relatedProductView() {
    this.ngOnInit();
    window.scrollTo(0, 0);
  }

  fixQuantity() {
    if(this.itemQuantity <= 0) {
      this.itemQuantity = 1;
    }
  }

}
