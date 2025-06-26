import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./products-page/products-page').then((m) => m.ProductsPage),
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login').then((m) => m.Login),
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register').then((m) => m.Register),
  },
  {
    path: 'cart',
    loadComponent: () => import('./cart/cart').then((m) => m.Cart),
  },
  {
    path: 'wishlist',
    loadComponent: () => import('./wishlist/wishlist').then((m) => m.Wishlist),
  },
  {
    path: 'product/:id',
    loadComponent: () =>
      import('./product-details/product-details').then((m) => m.ProductDetails),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./not-found/not-found').then((m) => m.NotFound),
  },
];
