import { Page } from '@playwright/test';

export class WatchlistPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/wiki/Special:Watchlist');
  }

  async openEditWatchlist() {
    // Click "Watchlist" in top menu
    await this.page.getByRole('link', { name: 'Watchlist', exact: true }).click();
  
    // Ensure watchlist page loaded
    await this.page.waitForURL(/Special:Watchlist/);
  
    // Click "Edit your list of watched pages"
    await this.page.getByRole('link', { name: "View and edit watchlist", exact: true }).click();
  
    // Wait for the "EditWatchlist" page to load
    await this.page.waitForURL(/Special:EditWatchlist/);
  }

  async removeArticle(articleTitle: string) {
    await this.openEditWatchlist();
  
    await this.page.getByRole('checkbox', { name: articleTitle.replace(/_/g, ' ') }).check();
    await this.page.getByRole('button', { name: 'Remove titles' }).click();
  
    // Corrected selector: Wait for the actual visible confirmation text
    await this.page.waitForSelector('text=A single title was removed from your watchlist:', { state: 'visible' });
    await this.page.getByRole('link', { name: "View and edit watchlist", exact: true }).click();
  }
  
  async articleIsVisible(articleTitle: string) {
    return await this.page.getByRole('link', { name: articleTitle, exact: true }).isVisible();
  }
}
