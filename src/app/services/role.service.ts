import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Role } from '../Role';
import { Observable, from } from 'rxjs';
import { BaseService } from './base.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class RoleService extends BaseService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  endpoint = `${this.uriApiBase}/roles`;

  constructor(http: HttpClient, private _authService: AuthService) {
    super(http);
  }

  getRoles(): Observable<Role[]> {
    return from(
      this._authService.getAccessToken().then((token) => {
        const headers = new HttpHeaders().set(
          'Authorization',
          `Bearer ${token}`
        );

        return this.Http.get<Role[]>(this.endpoint, {
          headers: headers,
        }).toPromise();
      })
    );
  }

  getRole(id: string): Observable<Role> {
    const url = `${this.endpoint}/${id}`;
    return this.Http.get<Role>(url);
  }

  addRole(role: Role): Observable<Role> {
    let x = JSON.stringify(role);
    return this.Http.post<Role>(this.endpoint, x, this.httpOptions);
  }

  deleteRole(hero: Role | number): Observable<Role> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.endpoint}/${id}`;

    return this.Http.delete<Role>(url, this.httpOptions);
  }
}
