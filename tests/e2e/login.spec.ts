import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login works with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page); // create instance of the page object

  await loginPage.goto(); // navigate to login page
  await loginPage.login(process.env.TEST_USERNAME!, process.env.TEST_PASSWORD!); // fill credentials
  await expect(page.locator('.inventory_list')).toBeVisible();
});
