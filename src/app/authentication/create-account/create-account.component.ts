import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/services/data/authentication/authentication.service';
import { NotificationsService } from 'src/services/classes/notifications/notifications.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor(
    private authData: AuthenticationService,
    private notify: NotificationsService
  ) { }

  ngOnInit() {
  }

  createAccount(form: NgForm) {
    if(form.value.password !== form.value.confirmPassword) {
      this.notify.publishMessages('Passowrds do not match', 'danger', 1)
    } else {
      this.authData.createAccountForm(form.value).subscribe(
        res => {
            form.reset()
            this.notify.publishMessages(res.message, 'success', 1)
            document.getElementById('closeCreateAccount').click();
        }
      )
    }
  }

}
