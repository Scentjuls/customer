import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/services/data/authentication/authentication.service';
import { NotificationsService } from 'src/services/classes/notifications/notifications.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  isLoggedIn: boolean = false;

  @Output() actionLoginStatus = new EventEmitter<any>();
  constructor(
    private authData: AuthenticationService,
    private notify: NotificationsService
  ) { }

  ngOnInit() {
  }

  actionLogin() {
    this.actionLoginStatus.emit();
  }

  signIn(form: NgForm) {
    this.authData.signInForm(form.value).subscribe(
      res => {
        if (res.data === null) {
          this.notify.publishMessages(res.message, 'warning', 1)
        } else {
          if (form.value.remember == true) {
            localStorage.setItem('user_details', JSON.stringify(res.data.user))
          } else {
            sessionStorage.setItem('user_details', JSON.stringify(res.data.user))
          }
          form.reset();
          this.notify.publishMessages('Successfully Logged In', 'success', 1);
          this.actionLogin()
          document.getElementById('closeSignIn').click();
        }

      }
    )
  }
}
