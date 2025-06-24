import { Component, inject } from '@angular/core';
import { CartService } from '../cart-service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  cartCounter = inject(CartService).counter;
}
