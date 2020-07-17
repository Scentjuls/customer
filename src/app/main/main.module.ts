import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { LandingComponent } from './landing/landing.component';
import { AuthenticationModule } from '../authentication/authentication.module';
import { SharedModule } from '../shared/shared.module';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductCheckoutComponent } from './product-checkout/product-checkout.component';
import { CheckoutPageComponent } from './product-checkout/checkout-page/checkout-page.component';
import { PaymentComponent } from './product-checkout/payment/payment.component';
import { OrdersComponent } from './orders/orders.component';
import { CongratulationsComponent } from './congratulations/congratulations.component';


@NgModule({
  declarations: [MainComponent, LandingComponent, ProductViewComponent, ProductCheckoutComponent, CheckoutPageComponent, PaymentComponent, OrdersComponent, CongratulationsComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    AuthenticationModule
  ]
})
export class MainModule { }
