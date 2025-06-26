import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService, ProductFace } from '../http-service';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart-service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
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
        next: (data:any) => this.product.set(data),
        error: (err) => console.error('Error loading product details', err),
      });
    }
  }

  get stockStatusColor() {
    return this.product()?.availabilityStatus ? 'bg-success' : 'text-danger';
  }

  get stockStatusText() {
    return this.product()?.availabilityStatus ? 'In Stock' : 'Out of Stock';
  }
   addToCart(event: Event, product: any) {
    event.stopPropagation(); 
    product.addedToCart = true;
    this.cartService.addItem(product);
  }
}
