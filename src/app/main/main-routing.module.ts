import { ProductCheckoutComponent } from './product-checkout/product-checkout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { LandingComponent } from './landing/landing.component';
import { ProductViewComponent } from './product-view/product-view.component';


const routes: Routes = [
  { path: '', component: MainComponent, 
  children: [
    { path: '', component: LandingComponent },
    { path: 'product-view', component: ProductViewComponent },
    { path: 'product-checkout', component: ProductCheckoutComponent }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
