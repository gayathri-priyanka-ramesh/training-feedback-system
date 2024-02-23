import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
})
export class ForgotPasswordComponent {
  // -------------------------View Required Variable-------------------------
  @ViewChild('forgotPasswordForm') forgotPasswordForm: NgForm | undefined;
  // -------------------------End of View Required Variable-------------------------

  // -------------------------Component Info-------------------------
  mailSent: boolean = false;

  constructor(private auth: AuthService) {}

  // --------------------------------------------------Send Password Reset Link--------------------------------------------------
  sendLink(form: NgForm) {
    console.log('Form Object  ---> ', form);
    console.log('Values of Form  ---> ', form.value);
    const email: string = form.value.email;
    console.log('Email  ----> ', email);
    this.auth.forgotPassword(email);
    form.reset();
    this.mailSent = true;
  }
  // --------------------------------------------------End of Send Password Reset Link--------------------------------------------------
}
