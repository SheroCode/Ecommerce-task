import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart-service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart {
  private cartService = inject(CartService);
  cartItems = this.cartService.cartItems;
  counter = this.cartService.counter;

  remove(productId: number) {
    this.cartService.removeItem(productId);
  }

  clear() {
    this.cartService.clearCart();
  }
}
