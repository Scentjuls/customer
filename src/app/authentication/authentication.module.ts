import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { CreateAccountComponent } from './create-account/create-account.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


@NgModule({
  declarations: [CreateAccountComponent, SignInComponent, ForgotPasswordComponent],
  imports: [
    CommonModule,
    FormsModule,
    AuthenticationRoutingModule
  ],
  exports: [CreateAccountComponent, SignInComponent, ForgotPasswordComponent]
})
export class AuthenticationModule { }
