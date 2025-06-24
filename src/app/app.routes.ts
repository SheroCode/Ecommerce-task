import { Routes } from '@angular/router';
import { ProductsPage } from './products-page/products-page';
import { Login } from './login/login';
import { Register } from './register/register';
import { Cart } from './cart/cart';
import { NotFound } from './not-found/not-found';
import { ProductDetails } from './product-details/product-details';

export const routes: Routes = [
  { path: '', component: ProductsPage }, // default path
  { path: 'home', component: ProductsPage },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'cart', component: Cart },
  { path: 'product/:id', component: ProductDetails },
  { path: '**', component: NotFound }, //must be the last
];
