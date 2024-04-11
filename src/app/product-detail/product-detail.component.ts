import { Component, OnInit, inject } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Product } from '../interfaces/product'
import { ProductsService } from '../services/products.service'
import { CurrencyPipe } from '@angular/common'

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe],
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
