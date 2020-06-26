import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styles: [],
})
export class AuthCallbackComponent implements OnInit {
  constructor(private _authService: AuthService, private _router: Router) {}

  ngOnInit() {
    this._authService.completeLogin().then(() => {
      this._router.navigate(['/'], { replaceUrl: true });
    });
  }
}
