import { test, expect } from '../fixtures/pages.fixtures';
import { MainPage } from '../pages/MainPage';
import { IssuesPage } from '../pages/IssuesPage';
import { LoginPage } from '../pages/LogInPage';
import { LostPasswordPage } from '../pages/LostPasswordPage';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('Validation search field', async ({ page }) => {
  const mainPage = new MainPage(page);

  await mainPage.search();
});

test('Verefication result of filter on page "Issues"', async ({ page }) => {
  const questionPage = new IssuesPage(page);
  const mainPage = new MainPage(page);

  await mainPage.toIssuesPage();
  await questionPage.filtration();
});

test('Verefication "Summary"', async ({ page }) => {
  const questionPage = new IssuesPage(page);
  const mainPage = new MainPage(page);

  await mainPage.toIssuesPage();
  await questionPage.summaryPage();
});

test('Log in with invalid passwords for existed user', async ({ page }) => {
  const mainPage = new MainPage(page);
  const loginPage = new LoginPage(page);

  await mainPage.goToLoginPage();
  await loginPage.invalidPassword();
});

test('Restore password for not existed user', async ({ page }) => {
  const mainPage = new MainPage(page);
  const loginPage = new LoginPage(page);
  const lostPasswordPage = new LostPasswordPage(page);

  await mainPage.goToLoginPage();
  await loginPage.lostPassword();
  await lostPasswordPage.restorePassword("kakoleh956@fantastu.com");
});