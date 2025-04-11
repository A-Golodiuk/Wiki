# 📘 Wikipedia Watchlist Automation (Playwright + TypeScript)

This project automates the process of managing a Wikipedia watchlist using [Playwright](https://playwright.dev/) with TypeScript and Page Object Model (POM).

## 🌟 What This Test Does

- Logs into a Wikipedia user account
- Adds two specific articles to the watchlist
- Removes one of the articles via the "Edit your list of watched pages" feature
- Verifies that the other article still exists in the watchlist
- Validates that the article's title matches when visiting it

## 💻 Tech Stack

- [Playwright](https://playwright.dev/)
- TypeScript
- Page Object Model (POM)
- Cross-browser testing (Chromium, Firefox, WebKit)
- Accessible locators (e.g., `getByRole`, `getByLabel`)

## 📁 Project Structure

```
.
├── pages/
│   ├── ArticlePage.ts
│   ├── LoginPage.ts
│   └── WatchlistPage.ts
├── tests/
│   └── wikipedia.spec.ts
├── playwright.config.ts
├── README.md
└── package.json
```

## ▶️ How to Run This Project

### 1. Clone the repository

```bash
git clone https://github.com/A-Golodiuk/Wiki
cd Wiki
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the test

```bash
npx playwright test
```

> 💡 The test is configured to run in **headed mode** across Chromium, Firefox, and WebKit with `baseURL` set to `https://en.wikipedia.org`.

### 4. Optional: View the report

```bash
npx playwright show-report
```

## ⚠️ Credentials Note

Create credetials.json with your Username and password
