// @ts-check
import { expect } from '@playwright/test';

export class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
    this.dashboardHeading = page.getByRole('heading', { name: 'Dashboard' });
    this.errorMessage = page.getByText('Invalid credentials');
  }

  async goto() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async expectSuccessfulLogin() {
    await expect(this.dashboardHeading).toBeVisible({ timeout: 15000 });
  }

  async expectInvalidLogin() {
    await expect(this.errorMessage).toBeVisible({ timeout: 10000 });
  }
}
//logintask
