import { Component, inject, OnInit } from '@angular/core';
import { CategoriesService } from '../../../shared/services/categories/categories.service';
import { Category } from '../../../shared/interfaces/category';
import { error } from 'console';
import { Product } from '../../../shared/interfaces/product';
import { ProductService } from '../../../shared/services/product/product.service';
import { CategoryItemComponent } from "../../components/category-item/category-item/category-item.component";

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CategoryItemComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit{

_categoriesService=inject(CategoriesService)
_productsService=inject(ProductService)
categories!:Category[] 
selected!:string

products!:Product[]


constructor() {}
ngOnInit(): void {
    this.getCategories()
}
getCategories(){

  this._categoriesService.getAllCategories().subscribe({
    next:(res)=>{
      console.log(res);
      this.categories=res.data
    },
    error:(err)=>{console.log(err)}

  })
}
getSpecificCategory(event:any){
  this.selected=event.target.value
  console.log("selected=" , this.selected);

  if(this.selected=="all"){
    this.products

  }
  
  this.getCategoryProducts(this.selected)
}

getCategoryProducts(key:any){
  console.log("key is", key);
  
  this._categoriesService.getProductsByCategory(key).subscribe({
    next:(res)=>{
      console.log(res);
      this.products=res.data
      console.log("products=" , this.products);
      
    }
  })
}


}
