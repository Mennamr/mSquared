import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthUser, LoginUser } from '../../interfaces/auth-user';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  _httpClient=inject(HttpClient);
  env=environment.baseURL

  constructor() { }

  registerUser(userInfo:AuthUser):Observable<any> {
    return this._httpClient.post(`${this.env}/auth/signup`, userInfo)
  }

  loginUser(userInfo:LoginUser):Observable<any> {
    return this._httpClient.post(`${this.env}/auth/signin`, userInfo)
  }
}
