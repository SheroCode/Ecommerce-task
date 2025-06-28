import { Injectable, signal } from '@angular/core';
import { ProductFace } from '../interfaces/product.intrefaces';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  // cart items//
  private items = signal<ProductFace[]>([]);
  counter = signal(0);

  get cartItems() {
    return this.items.asReadonly();
  }

  addItem(product: ProductFace) {
    const exists = this.items().find((p) => p.id === product.id);
    if (!exists) {
      const productWithQuantity = { ...product, quantity: 1 };
      this.items.update((current) => [...current, productWithQuantity]);
      this.counter.update((count) => count + 1);
    }
  }

  increaseQuantity(productId: number) {
    this.items.update((currentItems) =>
      currentItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  decreaseQuantity(productId: number) {
    this.items.update((currentItems) =>
      currentItems.map((item) => {
        if (item.id === productId && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
    );
  }

  removeItem(productId: number) {
    this.items.update((items) => items.filter((p) => p.id !== productId));
    this.counter.update((count) => (count > 0 ? count - 1 : 0));
  }

  clearCart() {
    this.items.set([]);
    this.counter.set(0);
  }
}
