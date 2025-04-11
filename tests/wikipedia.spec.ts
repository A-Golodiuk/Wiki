import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ArticlePage } from '../pages/ArticlePage';
import { WatchlistPage } from '../pages/WatchlistPage';
const fs = require('fs');
const path = require('path');
const credentials = JSON.parse(fs.readFileSync(path.join(__dirname, '../credentials.json')));

test('Wikipedia watchlist management', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const articlePage = new ArticlePage(page);
  const watchlistPage = new WatchlistPage(page);

  const firstArticle = 'Playwright_(software)';
  const secondArticle = 'TypeScript';

  // Login
  await loginPage.goto();
  await loginPage.login(credentials.username, credentials.password);

  // Add first article
  await articlePage.goto(firstArticle);
  await articlePage.addToWatchlist();

  // Add second article
  await articlePage.goto(secondArticle);
  await articlePage.addToWatchlist();

  // Remove first article
  await watchlistPage.removeArticle(firstArticle);
  
  await expect(page.getByRole('link', { name: secondArticle, exact: true })).toBeVisible();
})
