// @ts-check
import { test } from '@playwright/test';
import { LoginPage } from './pages/loginPage';
import { loginData } from './data/loginData';

test.describe('Login validation', () => {
  test('positive: valid credentials should log in successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(loginData.valid.username, loginData.valid.password);
    await loginPage.expectSuccessfulLogin();
  });

  test('negative: invalid credentials should display an error', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(loginData.invalid.username, loginData.invalid.password);
    await loginPage.expectInvalidLogin();
  });
});
