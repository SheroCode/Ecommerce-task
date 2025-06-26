import { Component, inject } from '@angular/core';
import { CartService } from '../cart-service';
import { RouterModule } from '@angular/router';
import { wishlistStore } from '../strores/wishlist.store';

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
