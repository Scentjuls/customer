import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { AlertComponent } from './alert/alert.component';
import { ServicesModule } from 'src/services/services.module';
import { RelatedProductsComponent } from './related-products/related-products.component';



@NgModule({
  declarations: [AlertComponent, LoaderComponent, RelatedProductsComponent],
  imports: [
    CommonModule,
    ServicesModule
  ],
  exports: [AlertComponent, LoaderComponent, RelatedProductsComponent]
})
export class SharedModule { }
