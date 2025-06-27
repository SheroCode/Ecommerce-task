import { Component, input } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngbd-carousel-basic',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule],
  templateUrl: './carousel-basic.html',
})
export class NgbdCarouselBasic {
  productimages = input<string[]>([])
}
