import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // -------------------------Registered User-------------------------
  isUser: boolean;

  constructor(private fireAuth: AngularFireAuth) {}

  // --------------------------------------------------LOGIN--------------------------------------------------
  login(email: string, password: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.fireAuth
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
          if (typeof localStorage !== 'undefined') {
            // console.log('Login Success  ---> ', res);
            localStorage.setItem('isUser', 'true');
            this.isUser = true;
            // console.log('isUser  ---> ', this.isUser);
            resolve(this.isUser);
          } else {
            // console.log('Local Storage is not available');
          }
        })
        .catch((err: any) => {
          localStorage.setItem('isUser', 'false');
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
      if (typeof localStorage !== 'undefined') {
        // localStorage.removeItem('isUser');
        localStorage.clear();
        // console.log('Logout Success');
      } else {
        // console.log('Local Storage is not available');
      }
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
