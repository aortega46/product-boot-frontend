import { AsyncPipe } from '@angular/common'
import { Component, OnInit, inject } from '@angular/core'
import { ProductsService } from '../services/products.service'
import { Observable } from 'rxjs'
import { ProductItemComponent } from '../product-item/product-item.component'

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [AsyncPipe, ProductItemComponent],
  templateUrl: './products-list.component.html',
})
export class ProductsListComponent implements OnInit {
  productsService = inject(ProductsService)

  productsList$?: Observable<any>

  ngOnInit(): void {
    this.productsList$ = this.productsService.getAllProducts()
  }
}
