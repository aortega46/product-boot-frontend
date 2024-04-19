import { AsyncPipe, CurrencyPipe } from '@angular/common'
import { Component, Input, inject } from '@angular/core'
import { RouterLink } from '@angular/router'
import { Product } from '../interfaces/product'
import { CartService } from '../services/cart/cart.service'

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CurrencyPipe, RouterLink, AsyncPipe],
  templateUrl: './product-item.component.html',
})
export class ProductItemComponent {
  cartService = inject(CartService)

  @Input() product!: Product
}
