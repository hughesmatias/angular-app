import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@app/_models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUser: Observable<User>;

  constructor() { }

  login(username: string, password: string) {
    localStorage.setItem('currentUser', JSON.stringify({username, password}));
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
