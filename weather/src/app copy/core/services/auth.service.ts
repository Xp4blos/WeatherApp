import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  isLoggedIn: boolean = true;
  currency$ = new BehaviorSubject<string>('euro');
  getLoginStatus(): boolean {
    return this.isLoggedIn;
  }
}
