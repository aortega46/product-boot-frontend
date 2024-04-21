import { Component, OnDestroy, OnInit, inject } from '@angular/core'
import { ActivatedRoute, RouterLink } from '@angular/router'
import { Product } from '../interfaces/product'
import { ProductsService } from '../services/products/products.service'
import { AsyncPipe, CurrencyPipe } from '@angular/common'
import { CartService } from '../services/cart/cart.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe, RouterLink, AsyncPipe],
  templateUrl: './product-detail.component.html',
  styles: `
    :host {
      flex: 1;
    }
  `,
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute)
  private productsService = inject(ProductsService)
  cartService = inject(CartService)

  product?: Product

  selectedImage: string | null = null

  paramsSubscription?: Subscription

  ngOnInit(): void {
    this.paramsSubscription = this.route.paramMap.subscribe(params => {
      let id = params.get('id')
      if (id) {
        this.productsService
          .getProductById(id)
          .subscribe(product => (this.product = product))
      }
    })
  }

  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe()
  }

  openImage(image: string) {
    this.selectedImage = image
  }

  closeImage() {
    this.selectedImage = null
  }
}
