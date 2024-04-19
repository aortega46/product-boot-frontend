import { Component, OnInit, inject } from '@angular/core'
import { CartService } from '../services/cart/cart.service'
import { AsyncPipe, CurrencyPipe, NgTemplateOutlet } from '@angular/common'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [AsyncPipe, NgTemplateOutlet, CurrencyPipe],
  templateUrl: './cart.component.html',
})
export class CartComponent {
  cartService = inject(CartService)

  isCartOpened: boolean = false

  toggleCart() {
    this.isCartOpened = !this.isCartOpened
  }

  clearCart() {
    this.cartService.clearCart()
  }
}
