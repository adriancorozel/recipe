import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-callback-signout',
  templateUrl: './auth-callback-signout.component.html',
  styleUrls: ['./auth-callback-signout.component.css'],
})
export class AuthCallbackSignoutComponent implements OnInit {
  constructor(private _authService: AuthService, private _router: Router) {}

  ngOnInit(): void {
    this._authService.completeLogout().then(() => {
      this._router.navigate(['/landing'], { replaceUrl: true });
    });
  }
}
