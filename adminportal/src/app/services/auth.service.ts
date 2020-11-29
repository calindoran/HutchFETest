import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = new BehaviorSubject<boolean>(false);

  constructor() {
  }

  restoreAuthState() {
    const auth = localStorage.getItem('jwt');

    if (auth) {
      this.auth.next(true);
    }
  }

  get authChanges() {
    return this.auth.asObservable();
  }

  get snapshot() {
    return {
      authed: this.auth.getValue()
    }
  }

  getToken() {
    return localStorage.getItem('jwt');
  }

  /**
   * Simulate storing a granted JWT
   */
  login() {
    localStorage.setItem('jwt', 'fake-token-value');
    this.auth.next(true);
  }

  /**
   * Remove fake JWT, simulating clearing user's authentication
   */
  logout() {
    localStorage.removeItem('jwt');
    this.auth.next(false);
  }
}
