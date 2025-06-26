import { Component, inject } from '@angular/core';
import { wishlistStore } from '../strores/wishlist.store';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './wishlist.html',
  styleUrl: './wishlist.scss',
})
export class Wishlist {
  store = inject(wishlistStore);
  wishlist = this.store.wishlist;

  removeItem(id: number) {
    this.store.removeItem(id);
  }
}
