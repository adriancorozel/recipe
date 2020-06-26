import { Injectable } from '@angular/core';
import { UserManager, UserManagerSettings, User, Profile } from 'oidc-client';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _manager = new UserManager(getClientSettings());
  private _user: User = null;
  private _loginChangedSubject = new Subject<boolean>();

  loginChanged = this._loginChangedSubject.asObservable();

  constructor() {}

  isLoggedIn(): Promise<boolean> {
    return this._manager.getUser().then((user) => {
      const userCurrent = !!user && !user.expired;
      if (this._user !== user) {
        this._loginChangedSubject.next(userCurrent);
      }
      this._user = user;
      return userCurrent;
    });
  }

  login() {
    this._manager.signinRedirect();
  }

  logout(): void {
    this._manager.signoutRedirect();
  }

  getClaims(): Profile {
    if (!this._user || !this._user.profile) return;
    return this._user.profile;
  }

  getAuthorizationHeaderValue(): string {
    return `${this._user.token_type} ${this._user.access_token}`;
  }

  startAuthentication(): Promise<void> {
    return this._manager.signinRedirect();
  }

  completeLogin() {
    return this._manager.signinRedirectCallback().then((user) => {
      this._user = user;
      this._loginChangedSubject.next(!!user && !user.expired);
      return user;
    });
  }

  completeLogout() {
    this._user = null;
    return this._manager.signoutRedirectCallback();
  }

  signinSilent() {
    return this._manager.signinSilentCallback();
  }
  getAccessToken(): Promise<string> {
    return this._manager.getUser().then((user) => {
      if (!!user && !user.expired) {
        return user.access_token;
      } else {
        return null;
      }
    });
  }
}

export function getClientSettings(): UserManagerSettings {
  return {
    authority: OAuthConstants.authority,
    client_id: OAuthConstants.client_id,
    redirect_uri: `${OAuthConstants.clientRoot}/signin-callback`,
    post_logout_redirect_uri: `${OAuthConstants.clientRoot}/signout-callback`,
    response_type: 'id_token token',
    scope: 'openid profile email api.read',
    filterProtocolClaims: true,
    loadUserInfo: true,
    automaticSilentRenew: true,
    silent_redirect_uri: 'http://localhost:4200/silent-signin-callback',
  };
}
export class OAuthConstants {
  public static clientRoot = 'http://localhost:4200';
  public static authority = 'http://localhost:5000';
  public static client_id = 'angular_spa';
}
