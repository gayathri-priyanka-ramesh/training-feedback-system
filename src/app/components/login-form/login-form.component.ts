import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  // -------------------------Input Required Variable-------------------------
  @Input() userLogin: boolean;
  // -------------------------End of Input Required Variable-------------------------

  // -------------------------Login Session-------------------------
  userName: string = '';

  // -------------------------Form Variable-------------------------
  public loginForm: FormGroup;

  // -------------------------Component Info-------------------------
  submitWarningVisible: boolean = false;
  navigatePermit: boolean = false;
  // -------------------------End of Component Info-------------------------

  // --------------------------------------------------Login Form--------------------------------------------------
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) {
    // -------------------------Form Initialization-------------------------
    this.loginForm = this.formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^[a-z0-9][a-z0-9._]{3,}@[a-z0-9]{3,}.[a-z]{2,}(?:.[a-z]{2,})?$'
          ),
        ],
      ],
      password: ['', Validators.required],
    });

    // -------------------------Onchange Validation-------------------------
    this.loginForm.valueChanges.subscribe(() => {
      this.submitWarningVisible = false;
    });
  }

  // -------------------------Getting Form Fields-------------------------
  get formFields() {
    return this.loginForm.controls;
  }

  // --------------------------------------------------Form Submission--------------------------------------------------
  async login() {
    // -------------------------Form Values-------------------------
    console.log('Login Form  ---> ', this.loginForm);
    console.log('Login Values  ---> ', this.loginForm.value);
    let usernameValue = this.loginForm.value.username;
    let passwordValue = this.loginForm.value.password;
    console.log('Username  ---> ', usernameValue);
    console.log('Password  ---> ', passwordValue);

    // -------------------------Firebase Authentication-------------------------
    const isRegisteredUser: boolean = await this.auth.login(
      usernameValue,
      passwordValue
    );
    console.log('isRegisteredUser  ---> ', isRegisteredUser);

    // -------------------------Submit User Type-------------------------
    const submitButton: HTMLButtonElement = document.querySelector(
      'button.btn.nav-item:focus'
    ) as HTMLButtonElement;
    const submitUser = submitButton?.getAttribute('data-type');
    console.log("'data-type' of 'submitButton'  ---> ", submitUser);

    if (isRegisteredUser) {
      // -------------------------Admin Navigation-------------------------
      if (
        submitUser === 'admin' &&
        usernameValue === 'admin@edureview360.org'
      ) {
        console.log('Admin Login Success');
        this.router.navigate(['admin/home'], { fragment: 'pageTitle' });
        this.navigatePermit = true;
      }
      // -------------------------Instructor Navigation-------------------------
      else if (
        submitUser === 'instructor' &&
        (usernameValue === 'maria_campbell@edureview360.org' ||
          usernameValue === 'jonathan_baker@edureview360.org' ||
          usernameValue === 'gayu.p84@gmail.com')
      ) {
        console.log('Instructor Login Success');
        this.router.navigate(['instructor'], { fragment: 'pageTitle' });
        this.navigatePermit = true;
      }
      // -------------------------Participant Navigation-------------------------
      else if (
        submitUser === 'participant' &&
        (usernameValue === 'samuel_roberts@edureview360.org' ||
          usernameValue === 'emily_carter@edureview360.org' ||
          usernameValue === 'gayu.p84@gmail.com')
      ) {
        console.log('Participant Login Success');
        this.router.navigate(['participant'], { fragment: 'pageTitle' });
        this.navigatePermit = true;
      }

      // -------------------------Invalid User Type-------------------------
      else {
        console.log('Usertype Not Matched');
        this.loginForm.markAllAsTouched();
        if (usernameValue !== '' && passwordValue !== '') {
          this.submitWarningVisible = true;
        } else {
          this.submitWarningVisible = false;
        }
      }
      console.log('NavigatePermit  ---> ', this.navigatePermit);

      // -------------------------Login Session-------------------------
      if (this.navigatePermit) {
        sessionStorage.setItem('email', usernameValue);
        let nameString = usernameValue.split('@')[0];
        let firstname = nameString.split('_')[0];
        let lastname = nameString.split('_')[1];
        this.userName =
          firstname.charAt(0).toUpperCase() +
          firstname.substring(1) +
          ' ' +
          lastname.charAt(0).toUpperCase() +
          lastname.substring(1);
        sessionStorage.setItem('userName', this.userName);
        console.log('Local Stroage  ---> ', localStorage);
        console.log('Session Storage  ---> ', sessionStorage);
        this.loginForm.reset();
      }
    }
    // -------------------------Invalid Credential-------------------------
    else {
      console.log('User Not Found');
      this.loginForm.markAllAsTouched();
      if (usernameValue !== '' && passwordValue !== '') {
        this.submitWarningVisible = true;
      } else {
        this.submitWarningVisible = false;
      }
    }
  }
  // --------------------------------------------------End of Form Submission--------------------------------------------------
  // --------------------------------------------------End of Login Form--------------------------------------------------
}
