import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable, from } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private _authService: AuthService, private _router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return from(
      this._authService.getAccessToken().then((token) => {
        const headers = new HttpHeaders().set(
          'Authorization',
          `Bearer ${token}`
        );
        const authReq = req.clone({ headers });
        return next
          .handle(authReq)
          .pipe(
            tap(
              (_) => {},
              (error) => {
                var respError = error as HttpErrorResponse;
                if (
                  respError &&
                  (respError.status === 401 || respError.status === 403)
                ) {
                  this._router.navigate(['/unauthorized']);
                }
              }
            )
          )
          .toPromise();
      })
    );
  }
}
