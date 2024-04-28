import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private token = '';
  get isLoggedIn() {
    return this.token !== '';
  }

  login(): Observable<string> {
    return this.http
      .post<string>('http://localhost:3000/auth/login', {
        username: 'root',
        password: 'mySQL17@@03',
      })
      .pipe(tap((token) => (this.token = token)));
  }

  logout() {
    this.token = '';
  }
}
