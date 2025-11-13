import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../interfaces/product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() fireAddToCart = new EventEmitter<string>();

  handleAddToCart(productId: string) {
    console.log(`Adding product with ID: ${productId} to cart`);
    this.fireAddToCart.emit(productId);
  }
}
