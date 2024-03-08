import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // -------------------------Registered User-------------------------
  isUser: boolean;

  constructor(private fireAuth: AngularFireAuth, private router: Router) {}

  // --------------------------------------------------LOGIN--------------------------------------------------
  login(email: string, password: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.fireAuth
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
          // console.log('Login Success  ---> ', res);
          localStorage.setItem('token', 'true');
          this.isUser = true;
          // console.log('isUser  ---> ', this.isUser);
          resolve(this.isUser);
        })
        .catch((err: any) => {
          localStorage.setItem('token', 'false');
          // console.log('Error  ---> ', err);
          this.isUser = false;
          // console.log('isUser  ---> ', this.isUser);
          resolve(this.isUser);
        });
    });
  }
  // --------------------------------------------------End of LOGIN--------------------------------------------------

  // --------------------------------------------------LOGOUT--------------------------------------------------
  logout() {
    this.fireAuth.signOut().then(() => {
      localStorage.removeItem('token');
      localStorage.clear();
      // console.log('Logout Success');
    }),
      (err: any) => {
        // console.log('Local Stroage  ---> ', localStorage);
        // console.log('Session Storage  ---> ', localStorage);
        // console.log('Error  ---> ', err);
      };
  }
  // --------------------------------------------------End of LOGOUT--------------------------------------------------

  // --------------------------------------------------Forgot Password--------------------------------------------------
  forgotPassword(email: string) {
    this.fireAuth.sendPasswordResetEmail(email).then(() => {
      // console.log('Reset Mail Sent');
    }),
      (err: any) => {
        // console.log('Error  ---> ', err);
      };
  }
  // --------------------------------------------------End of Forgot Password--------------------------------------------------
}
