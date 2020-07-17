import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { LandingComponent } from './landing/landing.component';
import { AuthenticationModule } from '../authentication/authentication.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [MainComponent, LandingComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    AuthenticationModule
  ]
})
export class MainModule { }
