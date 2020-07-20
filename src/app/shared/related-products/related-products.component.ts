import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-related-products',
  templateUrl: './related-products.component.html',
  styleUrls: ['./related-products.component.css']
})
export class RelatedProductsComponent implements OnInit {
 @Input() products: any = [];
 @Output() refreshPage = new EventEmitter
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  viewProduct(product) {
    sessionStorage.setItem('product_details', JSON.stringify(product));
    this.router.navigate(['/product/' + product.id]);
    this.refreshPage.emit();
  }
}
