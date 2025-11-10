import { Page, Locator, expect } from '@playwright/test';

export class IssuesPage {
  readonly page: Page;
  readonly statusFilter: Locator;
  readonly acceptButton: Locator;
  readonly statusResult: Locator;
  readonly threDots: Locator;
  readonly Summary: Locator;

  constructor(page: Page) {
    this.page = page;
    this.statusFilter = page.locator('#operators_status_id');
    this.acceptButton = page.locator('.buttons > .icon.icon-checked'), { hasText: 'Apply' };
    this.statusResult = page.locator('tbody > tr > .status').first();
    this.threDots = page.locator('.drdn-trigger > .icon-only.icon-actions');
    this.Summary = page.locator('.drdn-items > a.icon.icon-stats');
  }

  async filtration() {
    await this.statusFilter.click();
    await this.statusFilter.selectOption('c' );
    await this.acceptButton.click();
    await this.statusResult.waitFor({ timeout: 5000 });
    await expect(this.statusResult).toContainText('Closed');
  }

  async summaryPage() {
    await this.threDots.click();
    await this.Summary.click();
    await expect(this.page).toHaveURL("https://www.redmine.org/projects/redmine/issues/report");
  }
}
