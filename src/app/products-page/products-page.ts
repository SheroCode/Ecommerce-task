import { Component, inject, OnInit, signal } from '@angular/core';
import { HttpService } from '../http-service';
import { CommonModule } from '@angular/common';
import { Product } from "../product/product";
import { ProductFace } from '../interfaces/product.intrefaces';
@Component({
  selector: 'app-products-page',
  imports: [CommonModule, Product],
  templateUrl: './products-page.html',
  styleUrl: './products-page.scss',
})
export class ProductsPage implements OnInit {
  myProducts = signal<ProductFace[]>([]);
  httpService = inject(HttpService);

  ngOnInit() {
    this.httpService.getProducts().subscribe({
      next: (response: any) => {
        this.myProducts.set(
          response.products.map((product: any) => ({
            ...product,
            addedToCart: false,
          }))
        );
      },
      error: (err: any) => {
        console.error('Failed to load products', err);
      },
    });
  }
}


