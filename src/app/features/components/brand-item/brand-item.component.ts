import { Component, Input } from '@angular/core';
import { Brand } from '../../../shared/interfaces/product';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-brand-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './brand-item.component.html',
  styleUrl: './brand-item.component.scss'
})
export class BrandItemComponent {
 @Input() brand!:Brand
}
