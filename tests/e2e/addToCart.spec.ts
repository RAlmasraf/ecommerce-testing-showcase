import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';


test('User can login and add product to cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);

  // Login
  await loginPage.goto();
  await loginPage.login(process.env.TEST_USERNAME!, process.env.TEST_PASSWORD!);

  // Add to cart
  await productPage.addToCart('sauce-labs-backpack');
  await productPage.viewCart();

  // Assertion
  await expect(page.locator('.cart_item')).toHaveCount(1);

  // Logout
  await page.click('#react-burger-menu-btn');
  await page.click('#logout_sidebar_link');
});
