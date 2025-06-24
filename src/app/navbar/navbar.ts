import { Component, inject } from '@angular/core';
import { CartService } from '../cart-service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  cartCounter = inject(CartService).counter;
}
