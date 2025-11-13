import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';  
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly _httpClient = inject(HttpClient)
  env=environment.baseURL
  constructor() { }
  getRecentProducts(): Observable<any> {
    return this._httpClient.get(`${this.env}/products`);
  }
  getProductById(id: string): Observable<any> {
    return this._httpClient.get(`${this.env}/products/${id}`);
  }

  getProductsByCategoryId(categoryId:string):Observable<any>{
    return this._httpClient.get(`${this.env}/products?category=${categoryId}`);
  }

  getProductsByBrandId(brandId:string):Observable<any>{
    return this._httpClient.get(`${this.env}/products?brand=${brandId}`);
  }

  getAllCategories(){
    return this._httpClient.get(`${this.env}/categories`);
  }
}
