import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  // -------------------------Modal Variables-------------------------
  modalMessage: string = `
            <div class="d-flex justify-content-between">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Login Credentials
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <br />
            <div class="login-credentials">
              <dl>
                <dt>Participant</dt>
                <dd><b>Username:</b> samuel_roberts@edureview360.org</dd>
                <dd><b>Password:</b> samuelRoberts_360</dd>
                <dd><b>Username:</b> emily_carter@edureview360.org</dd>
                <dd><b>Password:</b> emilyCarter_360</dd>
                <br />
                <dt>Instructor</dt>
                <dd><b>Username:</b> maria_campbell@edureview360.org</dd>
                <dd><b>Password:</b> mariaCampbell_360</dd>
                <dd><b>Username:</b> jonathan_baker@edureview360.org</dd>
                <dd><b>Password:</b> jonathanBaker_360</dd>
              </dl>
            </div>
          `;
  // -------------------------End of Modal Variables-------------------------

  // -------------------------Component Info-------------------------
  noButton: boolean = true;
  userLogin: boolean = true;
  // -------------------------End of Component Info-------------------------

  constructor() {}
}
