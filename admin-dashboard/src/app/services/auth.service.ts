import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  isLoggedIn = new BehaviorSubject(false)

  constructor() { }

  login(username:string, password:string){
    if(username && password){
      const fakeToken = 'faken.TOKEN'
      sessionStorage.setItem('token', fakeToken)
      this.isLoggedIn.next(true)
      return of(true)
    } else {
      return throwError(()=> new Error('Invalid Credentials'))
    }
  }

  isAuthenticated():boolean{
    return this.isLoggedIn.value
  }
}
