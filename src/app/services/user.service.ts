import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, UserWithDetails } from '../User';
import { BaseService } from './base.service';

import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  endpoint = `${this.uriApiBase}/users`;

  constructor(http: HttpClient) {
    super(http);
  }

  getUsers(): Observable<User[]> {
    return this.Http.get<any[]>(this.endpoint).pipe(
      map((res) => {
        const data: User[] = res.map((user) => ({
          id: user.id,
          username: user.userName,
          roleId: user.roleId,
        }));
        return data;
      })
    );
  }

  getUser(id: string): Observable<User> {
    const url = `${this.endpoint}/${id}`;
    return this.Http.get<User>(url);
  }
  getUserWithDetails(id: string): Observable<UserWithDetails> {
    const url = `${this.endpoint}/${id}`;
    return this.Http.get<any>(url).pipe(
      map((res) => {
        const user: UserWithDetails = {
          id: res.id,
          username: res.userName,
          roleId: res.roleId,
          email: res.email,
          isLocked: res.isLocked,
          name: res.name,
        };
        return user;
      })
    );
  }

  updateUser(user: User): Observable<any> {
    return this.Http.put(this.endpoint, user, this.httpOptions);
  }

  addUser(user: User): Observable<any> {
    return this.Http.post(this.endpoint, user, this.httpOptions);
  }

  register(userRegistration: any) {
    return this.Http.post(this.endpoint, userRegistration);
  }
}
