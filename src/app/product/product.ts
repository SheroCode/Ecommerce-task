import { CommonModule } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { CartService } from '../cart-service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class Product {
  myproduct = input<any>();
  private cartService = inject(CartService);
  addToCart(product: any) {
    product.addedToCart = true;
    this.cartService.increment();
    // console.log(this.cartService.counter());
  }
}
