import { Component, inject, OnInit, Injectable } from '@angular/core';
import { CartService } from '../../../shared/services/cart/cart.service';
import { Cart } from '../../../shared/interfaces/cart';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {

  cartDetails !: Cart 
  private readonly _cartService = inject(CartService);

  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    this._cartService.getCart().subscribe({
      next: (res) => {
        console.log(res);
        this.cartDetails = res;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('done');
      },
    });
  }
  removeItem(productId: string) {
    this._cartService.removeSpecificItem(productId).subscribe({
      next: (res) => {
        console.log(res);
        this.cartDetails = res;
      }
    });
  }
  updateItemCount(productId: string, count: number) {
    let quantity = count.toString();

    this._cartService.updateQuantity(productId, quantity).subscribe({
      next: (res) => {
        console.log(res);
        this.cartDetails = res;
      }
    });
}}