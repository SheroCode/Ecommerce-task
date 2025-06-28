import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart-service';
import { wishlistStore } from '../../strores/wishlist.store';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  cartCounter = inject(CartService).counter;
  total=inject(wishlistStore).totalCount

}
