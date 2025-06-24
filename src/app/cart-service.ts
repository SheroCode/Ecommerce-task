import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  counter = signal(0);
  increment() {
    this.counter.update(count => count + 1);
  }

}