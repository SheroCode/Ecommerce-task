import { Component, inject, OnInit, signal } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Product } from '../product/product';
import { HttpService } from '../http-service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-products-page',
  imports: [Product, Navbar, CommonModule],
  templateUrl: './products-page.html',
  styleUrl: './products-page.scss',
})
export class ProductsPage implements OnInit {
  myProducts = signal<any[]>([]);
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
