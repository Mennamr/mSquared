import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../../../../shared/services/product/product.service';
import { Product } from '../../../../../shared/interfaces/product';
import { ProductItemComponent } from '../../../../../shared/components/ui/product-item/product-item.component';
import { CartService } from '../../../../../shared/services/cart/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-recent-products',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './recent-products.component.html',
  styleUrl: './recent-products.component.scss'
})
export class RecentProductsComponent implements OnInit {
  products!: Product[];
  ngOnInit() {
    this.getProducts$();
  }
private readonly _productService = inject(ProductService);
private readonly _cartService = inject(CartService);
private readonly _toastService = inject(ToastrService);
getProducts$() {
  this._productService.getRecentProducts().subscribe({
    next: (res) => {
      console.log(res.data);
      this.products = res.data;
    },
    error: (err) => {
      console.log(err);
    },
    complete: () => {
      console.log('done');
    },
  });
}
addToCart(productId: string) {
  this._cartService.addToCart(productId).subscribe({
    next: (res) => {
      console.log(res);
      this._toastService.success(res.message, 'Success');
    },
    error: (err) => {
      console.log(err);
    },
    complete: () => {
      console.log('done');
    },
  });
}
}
