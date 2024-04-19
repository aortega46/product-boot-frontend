import { Component, OnInit, inject } from '@angular/core'
import { ActivatedRoute, RouterLink } from '@angular/router'
import { Product } from '../interfaces/product'
import { ProductsService } from '../services/products/products.service'
import { AsyncPipe, CurrencyPipe } from '@angular/common'
import { CartService } from '../services/cart/cart.service'

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
export class ProductDetailComponent implements OnInit {
  private route = inject(ActivatedRoute)
  private productsService = inject(ProductsService)
  cartService = inject(CartService)

  product?: Product

  selectedImage: string | null = null

  ngOnInit(): void {
    let prodId = this.route.snapshot.paramMap.get('id')

    if (prodId)
      this.productsService
        .getProductById(prodId)
        .subscribe(product => (this.product = product))
  }

  openImage(image: string) {
    this.selectedImage = image
  }

  closeImage() {
    this.selectedImage = null
  }
}
