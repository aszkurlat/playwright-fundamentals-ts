# Playwright Fundamentals (TypeScript)

This repository contains a set of foundational E2E tests implemented with **Playwright + TypeScript**.  
The purpose of this project is to demonstrate the core concepts of UI test automation:
- working with locators (`getByRole`, `getByPlaceholder`, `getByText`),
- structuring tests in Playwright,
- using fixtures and helpers,
- writing readable, maintainable E2E scenarios.

The tests are written against the official **TodoMVC demo app** provided by the Playwright team.

---

## 🧪 What’s Included

- **TodoMVC test suite**:
  - adding new todo items  
  - editing an item (double-click → edit mode)  
  - marking an item as completed + filtering  
  - deleting an item  
- **Reusable fixtures** (initial navigation)
- **Helpers** for generating test data
- **Project structure** aligned with industry standards

---

## 📁 Project Structure

playwright-fundamentals-ts/
│
├── tests/
│ ├── todomvc-add.spec.ts
│ ├── todomvc-edit.spec.ts
│ ├── todomvc-complete.spec.ts
│ └── todomvc-delete.spec.ts
│
├── fixtures/
│ └── baseFixture.ts
│
├── helpers/
│ ├── randomString.ts
│ └── todoData.ts
│
├── playwright.config.ts
└── README.md


---

## 🛠️ Technologies

- Playwright  
- TypeScript  
- Node.js  

---

## 📦 Installation

Install dependencies and browsers:

```bash
npm install
npx playwright install

▶️ Running Tests

Run all tests:

npx playwright test


Run tests in a specific browser:

npx playwright test --project=chromium


Open HTML report:

npx playwright show-report

📚 Notes

This repository demonstrates fundamental concepts of Playwright automation:

clean code structure,

fixtures,

assertions,

locator strategies,

readable and maintainable tests.

It serves as a foundation for the next automation repos (framework, API + UI, CI, etc.).

🤝 Author

Created as part of my QA Automation learning path.
Feel free to explore or suggest improvements :)
