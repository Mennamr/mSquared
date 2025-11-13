import { Component, inject } from '@angular/core';
import { ProductService } from '../../../shared/services/product/product.service';
import { Product } from '../../../shared/interfaces/product';
import { ProductItemComponent } from "../../../shared/components/ui/product-item/product-item.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-per-category',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './products-per-category.component.html',
  styleUrl: './products-per-category.component.scss'
})
export class ProductsPerCategoryComponent {
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
      const categoryId = params.get('id');
      if (categoryId) {
        console.log('Category ID:', categoryId);
        this.getDetails(categoryId);
      }
    },
  });
}

  getDetails(id: string){   
    this._productService.getProductsByCategoryId(id).subscribe({
      next: (res) => {
        console.log("prods by cat" , res);
        this.products = res.data;
        this.loading=false

      }
    });
  }  

}
