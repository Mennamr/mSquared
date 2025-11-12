import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthUser, LoginUser } from '../../interfaces/auth-user';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {jwtDecode} from 'jwt-decode'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData:BehaviorSubject<any>= new BehaviorSubject(null)
  _httpClient=inject(HttpClient);
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
}
