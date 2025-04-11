import { Page } from '@playwright/test';

export class ArticlePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(articleTitle: string) {
    await this.page.goto(`/wiki/${articleTitle}`);
  }

  async addToWatchlist() {
    const watchBtn = this.page.getByRole('link', { name: 'Watch', exact: true });
    if (await watchBtn.isVisible()) {
      await watchBtn.click();
    }
  }

  async removeFromWatchlist() {
    const unwatchBtn = this.page.getByRole('link', { name: 'Unwatch', exact: true });
    if (await unwatchBtn.isVisible()) {
      await unwatchBtn.click();
    }
  }

  async getArticleTitle() {
    return await this.page.getByRole('heading', { level: 1 }).innerText();
  }
}