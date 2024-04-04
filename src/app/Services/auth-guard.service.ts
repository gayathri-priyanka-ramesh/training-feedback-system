import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivateChild {
  constructor(private router: Router) {}

  // -------------------------User Type-------------------------
  userType: string;

  // --------------------------------------------------Routing Guard--------------------------------------------------
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // -------------------------User Type Retrieval-------------------------
    if (typeof localStorage !== 'undefined') {
      this.userType = localStorage.getItem('userType') as string;
      console.log('Authorized User  ---> ', this.userType);
    } else {
      console.log('Local Storage is not available');
    }
    // -------------------------End of User Type Retrieval-------------------------

    // -------------------------Accessed Route Info-------------------------
    console.log('Route  ---> ', route);
    console.log('State  ---> ', state);
    const url: string = state.url;
    console.log('URL  ---> ', url);
    // -------------------------End of Accessed Route Info-------------------------

    // -------------------------Activating Routes based on UserType-------------------------
    if (url.startsWith('/participant') && this.userType === 'participant') {
      console.log('Participant URL');
      return true;
    } else if (
      url.startsWith('/instructor') &&
      this.userType === 'instructor'
    ) {
      console.log('Instructor URL');
      return true;
    } else if (url.startsWith('/admin') && this.userType === 'admin') {
      console.log('Admin URL');
      return true;
    } else {
      console.log('userType  ---> ', this.userType);
      console.log('Unauthorized User Access');
      this.router.navigate(['']);
      return false;
    }
    // -------------------------End of Activating Routes based on UserType-------------------------
  }
  // --------------------------------------------------End of Routing Guard--------------------------------------------------
}
