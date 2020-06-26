import { Component } from '@angular/core';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'user-manager-app';
  isLoggedIn: boolean;

  constructor(_authService: AuthService) {
    _authService.loginChanged.subscribe(
      (loggedIn) => (this.isLoggedIn = loggedIn)
    );
  }
}
