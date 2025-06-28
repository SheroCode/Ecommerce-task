import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbdCarouselBasic } from '../carousel-basic/carousel-basic';
import { HttpService } from '../../services/http-service';
import { CartService } from '../../services/cart-service';
import { ProductFace } from '../../interfaces/product.intrefaces';
@Component({
  selector: 'app-product-details',
  imports: [CommonModule,NgbdCarouselBasic],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails implements OnInit {
  private route = inject(ActivatedRoute);
  private httpService = inject(HttpService);
  private cartService = inject(CartService);
  product = signal<ProductFace | null>(null);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.httpService.getProductById(id).subscribe({
        next: (data: ProductFace) => this.product.set(data),
        error: (err) => console.error('Error loading product details', err),
      });
    }
  }

  get stockStatusColor() {
    return this.product()?.availabilityStatus == 'In Stock'
      ? 'bg-success'
      : this.product()?.availabilityStatus == 'Low Stock'
      ? 'bg-warning'
      : 'bg-danger';
  }

  get stockStatusText() {
    return this.product()?.availabilityStatus == 'In Stock'
      ? 'In Stock'
      : this.product()?.availabilityStatus == 'Low Stock'
      ? 'Low Stock'
      : 'Out of Stock';
  }
  addToCart(product: any) {
    product.addedToCart = true;
    this.cartService.addItem(product);
  }
}
