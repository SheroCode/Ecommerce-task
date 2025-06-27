import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProductFace } from './interfaces/product.intrefaces';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private http = inject(HttpClient);

  getProducts() {
    return this.http.get<ProductFace[]>('https://dummyjson.com/products');
  }

  getProductById(id: string | number) {
    return this.http.get<ProductFace>(`https://dummyjson.com/products/${id}`);
  }
}