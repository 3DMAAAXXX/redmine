import { test as base } from '@playwright/test';
import { MainPage } from '../pages/MainPage';
import { IssuesPage } from '../pages/IssuesPage';
import { LoginPage } from '../pages/LogInPage';
import { LostPasswordPage } from '../pages/LostPasswordPage';

// Описуємо тип для TypeScript
type MyFixtures = {
  mainPage: MainPage;
  issuesPage: IssuesPage;
  loginPage: LoginPage;
  lostPasswordPage: LostPasswordPage;
};

// Розширюємо базовий test
export const test = base.extend<MyFixtures>({
  mainPage: async ({ page }, use) => {
    const mainPage = new MainPage(page);
    await use(mainPage);
  },
  issuesPage: async ({ page }, use) => {
    const issuesPage = new IssuesPage(page);
    await use(issuesPage);
  },
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  lostPasswordPage: async ({ page }, use) => {
    const lostPasswordPage = new LostPasswordPage(page);
    await use(lostPasswordPage);
  }
});

// Експортуємо expect
export { expect } from '@playwright/test';
