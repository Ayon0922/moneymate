# MoneyMate

A clean, mobile-friendly personal finance app for tracking expenses, budgeting, saving, and estimating paychecks — built as a **single self-contained HTML file**. No build step, no server, no database.

**Live app:** https://ayon0922.github.io/moneymate/

## Features

- **Expenses & income** with categories (food, groceries, going out, transport, bills, shopping, health, other) and current balance at a glance
- **Monthly budgets** with color-coded progress bars
- **Smart Suggestions** — projects your daily burn rate and warns before you overspend, then tells you a safe daily spend
- **Analytics** — 6-month spending trend, category breakdown, and income-vs-expense, all dependency-free
- **Savings goals + Budget Estimator** — set a target, and the app builds a category budget from your *real* spending mix to hit your savings rate
- **Splits** — track who owes you and who you owe
- **Paycheck calculator** — hours → net pay using Maryland (Baltimore County) 2026 withholding, including **F-1 nonresident (FICA-exempt)** handling and tax-treaty support
- **Pay-stub reconciliation** — compare estimated vs. actual withholding and flag discrepancies
- **Merchant memory** — remembers names you've entered for one-tap re-entry
- **Import / Export** JSON backups

## Tech

- Vanilla HTML / CSS / JavaScript — a single ~50 KB file, zero dependencies
- Client-side persistence via browser `localStorage`
- Works offline; installable to the home screen as a PWA-style app

## Privacy

This repository contains **only the app code — no personal financial data**. Everything you enter is stored locally in your own browser and is never uploaded anywhere.

## Run locally

Open `index.html` in any modern browser. That's it.

## Roadmap

- Dedicated cash / transfers category
- Recurring-subscription tracker
- Optional backend (FastAPI + SQLite/Postgres) for cross-device sync

---

Built by Ayon Rahman.
