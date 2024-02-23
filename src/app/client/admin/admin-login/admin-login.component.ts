import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
})
export class AdminLoginComponent {
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
                <dt>Admin</dt>
                <dd><b>Username:</b> admin@edureview360.org</dd>
                <dd><b>Password:</b> edureview360</dd>
              </dl>
            </div>
            `;
  // -------------------------End of Modal Variables-------------------------

  // -------------------------Component Info-------------------------
  noButton: boolean = true;
  // -------------------------End of Component Info-------------------------

  constructor() {}
}
