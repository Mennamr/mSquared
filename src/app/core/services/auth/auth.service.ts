import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { AuthUser, LoginUser } from '../../interfaces/auth-user';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {jwtDecode} from 'jwt-decode'
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData:BehaviorSubject<any>= new BehaviorSubject(null)
  _httpClient=inject(HttpClient);
  _router=inject(Router)
  _PLATFORM_ID=inject(PLATFORM_ID)
  env=environment.baseURL

  constructor() { }

  registerUser(userInfo:AuthUser):Observable<any> {
    return this._httpClient.post(`${this.env}/auth/signup`, userInfo)
  }

  loginUser(userInfo:LoginUser):Observable<any> {
    return this._httpClient.post(`${this.env}/auth/signin`, userInfo)
  }

  saveUser(){
     if(localStorage.getItem("userToken")){
      this.userData.next(jwtDecode(localStorage.getItem("userToken")!))
      console.log(this.userData);
      
     }
  }

 isloggedInUser(): boolean {
    if (isPlatformBrowser(this._PLATFORM_ID)) {
      const token = localStorage.getItem("userToken");
      if (token) {
        this.userData.next(jwtDecode(token));
        return true;
      }
    }
    return false;
  }

  logOut(){
    localStorage.removeItem("userToken")
    this.userData.next(null)
    this._router.navigate(['/auth/login'])
  }
}
