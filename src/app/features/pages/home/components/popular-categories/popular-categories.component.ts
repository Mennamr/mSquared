import { Component, inject, OnInit } from '@angular/core';
import { CategoriesService } from '../../../../../shared/services/categories/categories.service';
import { Category } from '../../../../../shared/interfaces/category';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-popular-categories',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './popular-categories.component.html',
  styleUrl: './popular-categories.component.scss'
})
export class PopularCategoriesComponent implements OnInit {
  _CategoriesService = inject(CategoriesService);
  categories!: Category[] ;
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
    this.getCategories();
  }

  getCategories() {
    this._CategoriesService.getAllCategories().subscribe({
      next: (response) => {
        console.log(response.data);
        this.categories = response.data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

}
