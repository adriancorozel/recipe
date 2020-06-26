import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLoggedIn = false;
  picture: string;
  name: string;

  constructor(private authService: AuthService) {
    this.authService.loginChanged.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
      this.getPicture();
      this.getName();
    });
  }

  ngOnInit(): void {
    this.authService
      .isLoggedIn()
      .then((loggedIn) => (this.isLoggedIn = loggedIn))
      .then(() => this.getPicture())
      .then(() => this.getName());
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  private getPicture(): void {
    let claims = this.authService.getClaims();
    if (!claims) return;

    this.picture = claims.picture;
  }

  private getName(): void {
    let claims = this.authService.getClaims();
    if (!claims) return;

    this.name = claims.given_name;
  }
}
