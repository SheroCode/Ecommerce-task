import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private http = inject(HttpClient);

  getProducts() {
    return this.http.get('https://dummyjson.com/products');
  }

  getProductById(id: string | number) {
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }
}
export interface ProductFace {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  category:string;
  rating:number;
  availabilityStatus:string;
}