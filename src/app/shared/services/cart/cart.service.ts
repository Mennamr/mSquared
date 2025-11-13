import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  _httpClient = inject(HttpClient);
  token:string = JSON.stringify(localStorage.getItem('userToken'));

  constructor() { 
  }
  addToCart(productId: string): Observable<any> {
    return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/cart`, { productId }, {
      headers: {
       token: JSON.parse(this.token)
      }
    });
  }

  updateQuantity(productId: string, quantity: string): Observable<any> {

  return this._httpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, quantity, {
    headers: {
      token: JSON.parse(this.token)
    }
  });
}

  getCart() : Observable<any> {
    return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`, {
      headers: {
      token: JSON.parse(this.token)
      }
    });
  }
  removeSpecificItem(productId: string): Observable<any> {
    return this._httpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
      headers: {
       token: JSON.parse(this.token)
      }
    });
  }
  clearCart(): Observable<any> {
    return this._httpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart`, {
      headers: {
       token: JSON.parse(this.token)
      }
    });
  }
}
