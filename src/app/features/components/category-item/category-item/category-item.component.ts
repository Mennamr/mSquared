import { Component, Input, input } from '@angular/core';
import { Category } from '../../../../shared/interfaces/category';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-category-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './category-item.component.html',
  styleUrl: './category-item.component.scss'
})
export class CategoryItemComponent {
  @Input() category!:Category

}
