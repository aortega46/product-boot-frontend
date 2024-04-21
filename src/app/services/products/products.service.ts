import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { Observable, of } from 'rxjs'
import { Product } from '../../interfaces/product'

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private baseUrl = 'http://localhost:8080'
  private http = inject(HttpClient)

  public getAllProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/products`)
  }

  public getProductById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/products/${id}`)
  }

  public getProductByName(name: string): Observable<Product[]> {
    if (!name || name.length < 3) return of([])

    return this.http.get<Product[]>(
      `${this.baseUrl}/api/products/search?name=${name}`
    )
  }
}
