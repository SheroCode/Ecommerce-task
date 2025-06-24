import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http-service';
import { CommonModule } from '@angular/common';

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

  product = signal<any>(null);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.httpService.getProductById(id).subscribe({
        next: (data) => this.product.set(data),
        error: (err) => console.error('Error loading product details', err),
      });
    }
  }

  get stockStatusColor() {
    return this.product()?.stock > 0 ? 'text-success' : 'text-danger';
  }

  get stockStatusText() {
    return this.product()?.stock > 0 ? 'In Stock' : 'Out of Stock';
  }
}
