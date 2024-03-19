import { Component } from '@angular/core';
import { NavigationService } from '../../../Services/navigation.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
})
export class AdminLoginComponent {
  constructor(private navigation: NavigationService) {}

  ngAfterViewInit(): void {
    // -------------------------Fragment Routing-------------------------
    this.navigation.fragmentRouting();
  }
}
