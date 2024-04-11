import { Routes } from '@angular/router'
import { ProductDetailComponent } from './product-detail/product-detail.component'
import { AppComponent } from './app.component'
import { ProductsListComponent } from './products-list/products-list.component'

export const routes: Routes = [
  { path: '', component: ProductsListComponent },
  {
    path: ':id',
    loadComponent: () =>
      import('./product-detail/product-detail.component').then(
        c => c.ProductDetailComponent
      ),
  },
  {
    path: '**',
    component: AppComponent,
  },
]
