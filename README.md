# 🧪 WebdriverIO eBay E2E Test Automation

![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-22%2B-339933?logo=node.js&logoColor=white)
![WebdriverIO](https://img.shields.io/badge/WebdriverIO-9-EA5906?logo=webdriverio&logoColor=white)
![Mocha](https://img.shields.io/badge/Test-Mocha-8D6748?logo=mocha&logoColor=white)
![Chai](https://img.shields.io/badge/Assertions-Chai-A30701?logo=chai&logoColor=white)
![Chrome](https://img.shields.io/badge/Browser-Chrome-4285F4?logo=googlechrome&logoColor=white)
![Firefox](https://img.shields.io/badge/Browser-Firefox-FF7139?logo=firefoxbrowser&logoColor=white)
![Allure Report](https://img.shields.io/badge/Report-Allure-FF6A00)

A cross-browser end-to-end test automation project for **eBay**, built with JavaScript, WebdriverIO, Mocha, Chai, the Page Object Model, and Allure Report.

The project demonstrates maintainable UI automation against a real production website, including reusable Page Objects, optional isolated browser execution, dynamic UI handling, failure diagnostics, and interactive reporting.

## 📊 Live Test Report

The latest automated test run is published automatically to GitHub Pages.

👉 **[View Interactive Allure Report](https://pilyaria.github.io/webdriverio-ebay-e2e-tests/)**

The report is regenerated and deployed after every GitHub Actions E2E run, including runs containing failed tests. This makes it possible to inspect test results, execution details, failures, screenshots, and WebDriver steps directly from the published report.

![Allure Report Overview](images/allure-overview.png)

---

## 🏆 Successfull Test Run Summary

| Metric          | Result           |
| --------------- | ---------------- |
| Test executions | 24               |
| Passed          | 24               |
| Success rate    | 100%             |
| Test suites     | 2                |
| Browsers        | Chrome & Firefox |
| Test type       | E2E UI           |
| Reporting       | Allure           |

## 🎯 Key Features

- End-to-end UI automation with WebdriverIO
- Cross-browser execution in Chrome and Firefox
- Page Object Model for reusable page interactions
- Browser selection through the `WDIO_BROWSER` environment variable
- Explicit waits and handling of dynamic UI elements
- Automatic handling of the delayed eBay Shipping dialog
- WebdriverIO Expect and Chai assertion examples
- Automatic screenshots for failed tests
- Dedicated npm scripts for isolated test execution
- Automated E2E execution with GitHub Actions
- Automatic Allure report generation after CI test runs
- Automatic Allure deployment to GitHub Pages
- Allure report publication even when E2E tests fail

## 🧪 Test Coverage

### eBay Product Search

- eBay home page and title validation
- Product search submission
- Search input value verification
- Search results page title verification
- Automatic category selection for laptop and jewelry searches

### Jewelry Page

- Fine Jewelry category list validation
- Promotional banner visibility and content
- Banner link and clickability checks
- Navigation to the Luxury Jewelry page

### Assertion Practice

The project demonstrates several assertion styles:

- WebdriverIO Expect
- Chai `expect`
- Chai `assert`
- Chai `should`

### Test Suites

![Allure Test Suites](images/allure-suites.png)

## 🛠 Tech Stack

| Technology         | Purpose                        |
| ------------------ | ------------------------------ |
| JavaScript         | Test implementation            |
| Node.js            | Runtime environment            |
| WebdriverIO 9      | Browser automation             |
| Mocha              | Test framework                 |
| Chai               | General-purpose assertions     |
| WebdriverIO Expect | Browser and element assertions |
| Page Object Model  | Test architecture              |
| Allure Report      | Test reporting                 |
| Chrome and Firefox | Cross-browser execution        |

## 📋 Prerequisites

- Node.js 22 or a compatible current version
- npm
- Google Chrome
- Mozilla Firefox
- Java for Allure Report generation

Verify the required tools:

```powershell
node --version
npm --version
java -version
```

## 🏗️ Project Architecture

The project follows the **Page Object Model (POM)** pattern to separate
test scenarios from page-specific selectors and actions.

Main project components:

- `tests/pages/` — Page Object classes and reusable page actions
- `tests/specs/` — automated test scenarios
- `tests/resources/` — test data and reusable values
- `tests/utilities/` — helper functions
- `wdio.conf.js` — WebdriverIO configuration
- `allure-report/` — generated interactive test report
- `reporters/` — custom reporter implementation

![Project Structure](images/project-structure.png)

## ▶️ Running the Tests

Install the dependencies:

```powershell
npm install
```

Run all configured tests:

```powershell
npm test
```

```powershell
npm run wdio
```

Run one suite in both browsers:

```powershell
npm run test:chai
npm run test:jewelry
npm run test:search
```

Run a specific suite in Chrome:

```powershell
npm run test:chai:chrome
npm run test:jewelry:chrome
npm run test:search:chrome
```

Run a specific suite in Firefox:

```powershell
npm run test:chai:firefox
npm run test:jewelry:firefox
npm run test:search:firefox
```

Running one spec in one browser at a time is the most stable option because the tests interact with the public eBay production website.

## 📸 Failure Diagnostics

When a test fails, the WebdriverIO `afterTest` hook captures the current browser state. The screenshot is saved locally and included in the Allure results.

Example:

```text
screenshots/
`-- firefox_should_click_on_the_button_2026-08-12T20-51-23-531Z.png
```

Each filename contains the browser name, a filesystem-safe test name, and a timestamp. This helps diagnose dynamic content, unexpected dialogs, and temporary eBay Error Pages.

### Example of a Failed Test

![Failure Diagnostics](images/failure-diagnostics.png)

## 📊 Allure Reporting

The project uses Allure Report for test execution reporting.

During every GitHub Actions run:

1. Previous Allure results are cleared.
2. Chrome and Firefox test suites are executed.
3. WebdriverIO writes test data to `allure-results/`.
4. An HTML Allure report is generated automatically.
5. The generated report is uploaded as a GitHub Actions artifact.
6. The report is automatically deployed to GitHub Pages.

The report is published even when one or more test suites fail, allowing failed CI runs to be investigated directly in Allure.

👉 **[View the latest Allure Report](https://pilyaria.github.io/webdriverio-ebay-e2e-tests/)**

### Generate the report locally

Generate the HTML report:

```powershell
npm run allure:generate
```

Open the generated report:

```powershell
npm run allure:open
```

Or generate and immediately serve a temporary report:

```powershell
npm run allure:serve
```

For a clean local reporting cycle:

```powershell
Remove-Item -Recurse -Force allure-results, allure-report -ErrorAction SilentlyContinue
npm run wdio
npm run allure:generate
npm run allure:open
```

> The `--clean` option replaces the generated `allure-report/` directory but does not remove old raw data from `allure-results/`. Clear `allure-results/` before a new reporting cycle to avoid mixing multiple executions.

## ⚠️ Testing a Live Production Website

This project intentionally tests the public eBay website rather than a controlled demo application. Because the application is outside the project's control:

- UI changes may require locator updates
- eBay may occasionally return temporary server or anti-bot pages
- content may differ between sessions or browsers
- parallel sessions may behave differently from isolated executions
- browser drivers may print warnings even when the final spec status is `PASSED`

These conditions provide practical experience with real-world UI automation challenges and failure analysis.

## 👩‍💻 About the Project

This project is part of my QA Automation portfolio and demonstrates hands-on experience with JavaScript UI automation, WebdriverIO, cross-browser testing, the Page Object Model, failure diagnostics, and test reporting.
