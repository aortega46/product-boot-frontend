import { Component } from '@angular/core'

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
})
export class CartComponent {
  isCartOpened: boolean = false

  toggleCart() {
    this.isCartOpened = !this.isCartOpened
  }

  // TODO: clearCart
  clearCart() {}
}
