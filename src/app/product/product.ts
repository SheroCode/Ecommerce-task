import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart-service';
import { ProductFace } from '../interfaces/product.intrefaces';
import { wishlistStore } from '../strores/wishlist.store';
import { NgbdRatingDecimal } from '../rating-decimal/rating-decimal';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,NgbdRatingDecimal],
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class Product {
  myproduct = input<ProductFace>();
  private cartService = inject(CartService);
  private router = inject(Router);
  private wishlist = inject(wishlistStore);

  goToDetails(id: number) {
    this.router.navigate(['/product', id]);
  }

  toggleWishlist(event: Event, product: any) {
    event.stopPropagation();
    this.wishlist.toggleItem(product);
  }

  isInWishlist(product: any) {
    return this.wishlist.wishlist().some((item) => item.id === product.id);
  }

  toggleCart(event: Event, product: any) {
    event.stopPropagation();
    if (this.isInCart(product)) {
      product.addedToCart = false;
      this.cartService.removeItem(product.id);
    } else {
      product.addedToCart = true;
      this.cartService.addItem(product);
    }
  }

  isInCart(product: any) {
    return this.cartService.cartItems().some((item) => item.id === product.id);
  }
}
