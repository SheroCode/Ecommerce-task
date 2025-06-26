import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState
} from '@ngrx/signals';

// Define a shared Product interface
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  // Add more fields if needed
}

// Create the wishlist store
export const wishlistStore = signalStore(
  { providedIn: 'root' },

  // Initial state
  withState<{ wishlist: Product[] }>({
    wishlist: [],
  }),

  // Computed total count of items
  withComputed((state) => ({
    totalCount: computed(() => state.wishlist().length),
  })),

  // Wishlist toggle & remove logic
  withMethods((state) => ({
    toggleItem: (product: Product) => {
      const exists = state.wishlist().some((item) => item.id === product.id);
      const newWishlist = exists
        ? state.wishlist().filter((item) => item.id !== product.id)
        : [...state.wishlist(), product];

      patchState(state, { wishlist: newWishlist });
    },

    removeItem: (id: number) => {
      const updated = state.wishlist().filter((item) => item.id !== id);
      patchState(state, { wishlist: updated });
    },
  }))
);
