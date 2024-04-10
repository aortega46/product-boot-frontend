import { CurrencyPipe } from '@angular/common'
import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-item.component.html',
})
export class ProductItemComponent {
  @Input() product?: any
}
