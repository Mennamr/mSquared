import { Component, inject } from '@angular/core';
import { ProductService } from '../../../shared/services/product/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../shared/interfaces/product';
import { ProductItemComponent } from "../../../shared/components/ui/product-item/product-item.component";

@Component({
  selector: 'app-products-per-brand',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './products-per-brand.component.html',
  styleUrl: './products-per-brand.component.scss'
})
export class ProductsPerBrandComponent {
    _productService=inject(ProductService)
    private readonly _activatedRoute = inject(ActivatedRoute)
    products: Product[] = [];
    loading=true;
  
    ngOnInit(): void {
      this.getId()
      
    }
  
     getId() {
    this._activatedRoute.paramMap.subscribe({
      next: (params) => {
        const brandId = params.get('id');
        if (brandId) {
          console.log('brand ID:', brandId);
          this.getDetails(brandId);
        }
        
      },
    });
  }
  
    getDetails(id: string){   
      this._productService.getProductsByBrandId(id).subscribe({
        next: (res) => {
          console.log("prods by cat" , res);
          this.products = res.data;
          this.loading=false;
  
        }
      });
    }  
  

}
