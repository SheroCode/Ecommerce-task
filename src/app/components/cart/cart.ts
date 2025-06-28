import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  private cartService = inject(CartService);
  cartItems = this.cartService.cartItems;
  counter = this.cartService.counter;
  roundToTwo(num: number): number {
    return Math.round(num * 100) / 100;
  }
  increase(productId: number) {
    this.cartService.increaseQuantity(productId);
  }

  decrease(productId: number) {
    this.cartService.decreaseQuantity(productId);
  }

  remove(productId: number) {
    this.cartService.removeItem(productId);
  }

  clear() {
    this.cartService.clearCart();
  }

  totalPrice = computed(() =>
    this.roundToTwo(
      this.cartItems().reduce(
        (sum, product) => sum + product.price * product.quantity,
        0
      )
    )
  );
}
