import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl = 'http://localhost:8080'
  private http = inject(HttpClient)

  public getAllProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/products`)
  }
}
