import { Page } from '@playwright/test';

export class ProductPage {
  constructor(private page: Page) {}

  // Add product to cart
  async addToCart(productId: string) {
    await this.page.click(`[data-test="add-to-cart-${productId}"]`);
  }

  async viewCart() {
    await this.page.click('.shopping_cart_link');
  }
}
