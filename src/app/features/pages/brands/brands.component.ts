import { Component, inject, OnInit } from '@angular/core';
import { BrandsService } from '../../services/brands/brands.service';
import { Brand } from '../../../shared/interfaces/product';
import { BrandItemComponent } from "../../components/brand-item/brand-item.component";

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [BrandItemComponent],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent implements OnInit {
  _brandsService=inject(BrandsService)
  brands!:Brand[]


  ngOnInit(): void {
      this.getBrands()
  }

  getBrands(){
    this._brandsService.getAllBrands().subscribe({
      next:(res)=>{
        console.log(res);
        this.brands=res.data
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })

  }

 

}
