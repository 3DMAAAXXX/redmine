import { Page, Locator, expect } from '@playwright/test';

export class LostPasswordPage {
  readonly page: Page;
  readonly emailField: Locator;
  readonly sendButton: Locator;
  readonly messageError: Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.emailField = page.locator('#mail');
    this.sendButton = page.locator('[type="submit"]');
    this.messageError = page.locator('#flash_error');
  }

  async restorePassword( email: string) {
    await this.emailField.fill(email);
    await this.sendButton.click();
    await this.messageError.waitFor({ timeout: 5000 });
    await expect(this.messageError).toBeVisible();
    await  expect(this.messageError).toContainText("Unknown user.");
  }
}
