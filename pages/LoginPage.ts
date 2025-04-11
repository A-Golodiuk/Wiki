import { Page } from '@playwright/test';
import { link } from 'fs';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://en.wikipedia.org/wiki/Main_Page');
    await this.page.getByRole('link', {name: 'Log in', exact: true}).click();
  }

  async login(username: string, password: string) {
    await this.page.getByLabel('Username').fill(username);
    await this.page.getByLabel('Password').fill(password);
    await this.page.getByRole('button', { name: 'Log in' }).click();
  }
}