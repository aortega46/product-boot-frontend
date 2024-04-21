import { Component, OnDestroy, OnInit, inject } from '@angular/core'
import { Subject, Subscription, debounceTime, timeout } from 'rxjs'
import { ProductsService } from '../services/products/products.service'
import { Product } from '../interfaces/product'
import { Router } from '@angular/router'

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
})
export class SearchBarComponent implements OnInit, OnDestroy {
  private debouncer: Subject<string> = new Subject()
  private debouncerSubscription?: Subscription

  loading: boolean = false
  showDropdown: boolean = false

  searchedProducts?: Product[]
  private searchedProductsSubscription?: Subscription

  private productService = inject(ProductsService)
  private router = inject(Router)

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
      .pipe(debounceTime(500))
      .subscribe(val => {
        this.loading = false

        this.searchedProductsSubscription = this.productService
          .getProductByName(val)
          .subscribe(products => {
            this.searchedProducts = products
            this.showDropdown = true
          })
      })
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe()
    this.searchedProductsSubscription?.unsubscribe()
  }

  onKeyPress(search: string) {
    this.loading = true
    this.debouncer.next(search)
  }

  goToProduct(id: number) {
    this.router.navigate(['/', id])
    this.showDropdown = false
  }

  onInputBlur() {
    setTimeout(() => {
      this.showDropdown = false
    }, 100)
  }
}
