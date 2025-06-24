import { Routes } from '@angular/router';
import { ProductsPage } from './products-page/products-page';
import { Login } from './login/login';
import { Register } from './register/register';
export const routes: Routes = [
  { path: '', component: ProductsPage }, // default path
  { path: 'home', component: ProductsPage },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
];
