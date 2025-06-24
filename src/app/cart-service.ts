import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items = signal<any[]>([]);
  counter = signal(0);

  get cartItems() {
    return this.items.asReadonly();
  }

  addItem(product: any) {
    // prevent duplicate adds
    const exists = this.items().find((p) => p.id === product.id);
    if (!exists) {
      this.items.update((current) => [...current, product]);
      this.counter.update((count) => count + 1);
    }
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
