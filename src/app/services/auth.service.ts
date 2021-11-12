import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthentic: boolean = false;
  count: number = 0;
  // authAttemptsSubject = new Subject();
  authAttemptsSubject = new BehaviorSubject<number>(8);
  constructor(private http: HttpClient) {}

  isAuthenticated() {
    return this.http.post<any>('https://bookcart.azurewebsites.net/api/login', {
      username: 'balajimohan',
      password: 'Balajivelu147',
    });
    // return this.isAuthentic;
  }

  incrementAttempts() {
    this.authAttemptsSubject.next(this.count++);
  }

  getAttempts() {
    return this.authAttemptsSubject.asObservable();
  }
}
