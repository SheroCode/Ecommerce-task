import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart-service';
import { CommonModule } from '@angular/common';

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
  private router = inject(Router);

  // Prevents event bubbling to card click
  addToCart(event: Event, product: any) {
    event.stopPropagation(); // ✅ Prevent card click
    product.addedToCart = true;
    this.cartService.addItem(product);
  }

  goToDetails(id: number) {
    this.router.navigate(['/product', id]);
  }
}
