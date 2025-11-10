import { Page, Locator, expect } from '@playwright/test';

export class MainPage {
  readonly page: Page;
  readonly searchField: Locator;
  readonly issuesMenu: Locator;
  readonly logInButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchField = page.locator('#q');
    this.issuesMenu = page.locator('.issues');
    this.logInButton = page.locator('.login');
  }

  async search() {
    await this.searchField.click();
    await this.searchField.fill("first");
    await this.searchField.press('Enter');
    const firstResult = this.page.locator('.highlight.token-0', { hasText: "first" }).first();
    await firstResult.waitFor({ timeout: 5000 });
    await expect(firstResult).toBeVisible();
  }
  
  async toIssuesPage() {
    await this.issuesMenu.click();
  }

  async goToLoginPage() {
    await this.logInButton.click();
  }
}
