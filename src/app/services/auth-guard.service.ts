import { Injectable } from '@angular/core';
import { CanActivate,  Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService, private router  : Router) {}

  async canActivate(): Promise<boolean> {

    
    if (await this.authService.isLoggedIn()) {
      return true;
    }
    
    localStorage.setItem('previousUrl', window.location.pathname + window.location.search);

    this.authService.startAuthentication();
    return false;
  }
}
