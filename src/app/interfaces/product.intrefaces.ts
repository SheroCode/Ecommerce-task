export interface ProductFace {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  category: string;
  rating: number;
  availabilityStatus: string;
  stock: number;
  discountPercentage: number;
  brand: string;
  images: string[];
}

export interface CartProduct extends ProductFace {
  quantity: number;
  addedToCart:boolean;
}
