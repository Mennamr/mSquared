import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../shared/services/product/product.service';
import { Product } from '../../../shared/interfaces/product';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../../../shared/services/cart/cart.service';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CarouselModule, ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  isLoading: boolean = false;
  private readonly _activatedRoute = inject(ActivatedRoute)
  private readonly _productService = inject(ProductService)
  private readonly _cartService = inject(CartService)
  private readonly _toastService = inject(ToastrService)

  productDetails: Product = {} as Product;
    customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  ngOnInit(): void {
    this.getId()
    
  }

  getId(){
    this._activatedRoute.paramMap.subscribe({
      next: (res: any) => {
        console.log(res?.params.id);
        this.getDetails(res?.params.id);
      }
    });
  }
  getDetails(id: string){   
    this._productService.getProductById(id).subscribe({
      next: (res) => {
        console.log(res);
        this.productDetails = res.data;
      }
    });
  }  

  addToCart(id: string){
    this.isLoading = true;
    this._cartService.addToCart(id).subscribe({
      next: (res) => {
        console.log(res);
        this.isLoading = false;
        this._toastService.success(res.message, 'Success');
      }
    });
   
  }
  
}
