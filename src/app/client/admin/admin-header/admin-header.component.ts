import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
})
export class AdminHeaderComponent implements OnInit {
  // -------------------------Login Session Variable-------------------------
  email: string;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    // --------------------------------------------------Login Session--------------------------------------------------
    if (typeof localStorage !== 'undefined') {
      this.email = localStorage.getItem('email') as string;
      // console.log('Email  ---> ', this.email);
    }
    // --------------------------------------------------End of Login Session--------------------------------------------------
  }

  // --------------------------------------------------Logout--------------------------------------------------
  logout() {
    // console.log('-----Logout-----');
    this.auth.logout();
    this.router.navigate(['/admin']);
  }
  // --------------------------------------------------End of Logout--------------------------------------------------
}
