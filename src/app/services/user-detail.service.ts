import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserDetailService {
  setUserData() {
    localStorage.setItem('user', 'indraraj');
  }

  get isUserLoggedIn() {
    const data = localStorage.getItem('user');
    return data ? true : false;
  }

  clearUserData() {
    localStorage.clear();
  }
}
