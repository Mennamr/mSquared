import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {
  _httpClient=inject(HttpClient)
  env=environment.baseURL
    constructor() { }
    getAllBrands() : Observable<any> {
      return this._httpClient.get(`${this.env}/brands`);
    }
  
    getProductsByBrand(chosenBrand:string): Observable<any>{
      return this._httpClient.get(`${this.env}/categories/`+chosenBrand)
  
    }
  
}
