import { CurrencyPipe } from '@angular/common'
import { Component, Input } from '@angular/core'
import { RouterLink } from '@angular/router'
import { Product } from '../interfaces/product'

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './product-item.component.html',
})
export class ProductItemComponent {
  @Input() product!: Product
}
