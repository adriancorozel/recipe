import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-silent-refresh',
  templateUrl: './silent-refresh.component.html',
  styleUrls: ['./silent-refresh.component.css'],
})
export class SilentRefreshComponent implements OnInit {
  constructor(private _authService: AuthService) {
    this._authService.signinSilent();
  }

  ngOnInit(): void {}
}
