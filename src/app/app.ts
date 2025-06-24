import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsPage } from "./products-page/products-page";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductsPage],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
}
