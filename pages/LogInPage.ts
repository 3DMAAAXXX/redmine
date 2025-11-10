import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly logInButton: Locator;
    readonly errorMessage: Locator;
    readonly lostPasswordLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameField = page.locator('#username');
    this.passwordField = page.locator('#password');
    this.logInButton = page.locator('#login-submit');
    this.errorMessage = page.locator('#flash_error');
    this.lostPasswordLink = page.locator('.lost_password');
  }

  async invalidPassword() {
    await this.usernameField.fill("istartggt@gmail.com");
    await this.passwordField.fill("1234");
    await this.logInButton.click();
    await this.errorMessage.waitFor({ timeout: 5000 });
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toContainText("Invalid user or password");
  }

  async lostPassword() {
    await this.lostPasswordLink.click();
}
//   async notRegisteredEmail() {
//     await this.usernameField.fill("kakoleh956@fantastu.com");
//     await this.passwordField.fill("1234");
//     await this.logInButton.click();
//   }
  
}
