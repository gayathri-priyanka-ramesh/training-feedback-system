import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
})
export class InstructorComponent implements OnInit {
  // -------------------------Login Session Variable-------------------------
  email: string;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    // --------------------------------------------------Login Session--------------------------------------------------
    if (typeof localStorage !== 'undefined') {
      this.email = localStorage.getItem('instructor-email') as string;
      // console.log('Email  ---> ', this.email);
    } else {
      // console.log('Local Storage is not available');
    }
    // --------------------------------------------------End of Login Session--------------------------------------------------
  }

  // --------------------------------------------------Logout--------------------------------------------------
  logout() {
    // console.log('-----Logout-----');
    this.auth.logout();
    this.router.navigate(['/']);
  }
  // --------------------------------------------------End of Logout--------------------------------------------------
}
