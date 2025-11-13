import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  _httpClient = inject(HttpClient);
  env=environment.baseURL
  constructor() { }
  getAllCategories() : Observable<any> {
    return this._httpClient.get(`${this.env}/categories`);
  }

  getProductsByCategory(chosenCategory:string): Observable<any>{
    return this._httpClient.get(`${this.env}/categories/`+chosenCategory)

  }




}
