import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { CartComponent } from '../cart/cart.component'
import { SearchBarComponent } from '../search-bar/search-bar.component'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CartComponent, SearchBarComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
