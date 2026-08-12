# WebdriverIO E2E Test Automation

![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-22.x-339933?logo=node.js&logoColor=white)
![WebdriverIO](https://img.shields.io/badge/WebdriverIO-9-EA5906?logo=webdriverio&logoColor=white)
![Mocha](https://img.shields.io/badge/Test-Mocha-8D6748?logo=mocha&logoColor=white)
![Chai](https://img.shields.io/badge/Assertions-Chai-A30701?logo=chai&logoColor=white)
![Chrome](https://img.shields.io/badge/Browser-Chrome-4285F4?logo=googlechrome&logoColor=white)
![Firefox](https://img.shields.io/badge/Browser-Firefox-FF7139?logo=firefoxbrowser&logoColor=white)
![Allure Report](https://img.shields.io/badge/Report-Allure-FF6A00)

# 🧪 WebdriverIO eBay E2E Test Automation

Cross-browser end-to-end test automation project for **eBay**, built with
**WebdriverIO, JavaScript, Mocha, Chai, Page Object Model, and Allure Report**.

The project demonstrates practical UI automation against a real production
website, including reusable Page Objects, cross-browser execution, failure
diagnostics, and interactive test reporting.

---

## 📊 Live Test Report

### ✅ 24 automated test cases — 100% passed

👉 **[View Live Allure Report](https://pilyaria.github.io/webdriverio-ebay-e2e-tests/allure-report/)**

The published Allure report contains test suites, execution details,
timings, test steps, and results.

---

## 🎯 What This Project Demonstrates

- End-to-end UI test automation
- Cross-browser testing in **Chrome and Firefox**
- Page Object Model (POM)
- Reusable test utilities
- WebdriverIO and Chai assertions
- Automatic handling of dynamic UI elements
- Automatic screenshots after failed tests
- Allure test reporting
- Test execution against a real production website

---

## 🧪 Test Coverage

### eBay Product Search

Tests cover:

- eBay home page validation
- Product search
- Search results
- Navigation through search results
- Product category validation

### Jewelry Page

Tests cover:

- Fine Jewelry category navigation
- Promotional banner validation
- Banner content
- Banner links
- Navigation to the Luxury Jewelry page

### Assertion Practice

The project also demonstrates different assertion approaches using:

- WebdriverIO Expect
- Chai `expect`
- Chai `assert`
- Chai `should`

---

## 🛠 Tech Stack

| Technology         | Purpose                 |
| ------------------ | ----------------------- |
| JavaScript         | Test implementation     |
| Node.js            | Runtime                 |
| WebdriverIO 9      | Browser automation      |
| Mocha              | Test framework          |
| Chai               | Assertions              |
| WebdriverIO Expect | UI assertions           |
| Page Object Model  | Test architecture       |
| Allure Report      | Test reporting          |
| Chrome             | Cross-browser execution |
| Firefox            | Cross-browser execution |

---

## 🏗 Project Structure

```text
webdriverio-hands-on/
|-- tests/
|   |-- pages/          # Page Objects and element
|   |-- resources/      # Expected test data
|   |-- specs/          # Active test specifications
|   `-- utilities/      # Reusable helper functions
|-- allure-report/      # Generated Allure HTML report
|-- screenshots/        # Screenshots captured after
|-- package.json        # Dependencies and npm scripts
`-- wdio.conf.js        # WebdriverIO configuration
```

---

## ▶️ Running the Tests

Install dependencies:

```powershell
npm install
```

Run all tests:

```powershell
npm run wdio
```

Run individual test suites:

```powershell
npm run test:chai
npm run test:jewelry
npm run test:search
```

Run a test suite in Chrome:

```powershell
npm run test:search:chrome
```

Run a test suite in Firefox:

```powershell
npm run test:search:firefox
```

Running one spec in one browser at a time is the most stable option because
the tests interact with the public eBay production website.

---

## 📸 Failure Diagnostics

When a test fails, the WebdriverIO afterTest hook automatically captures
the current browser state.

Example:
screenshots/
└── firefox_should_click_on_the_button_2026-08-12T20-51-23-531Z.png

Each screenshot filename contains:

- browser name
- test name
- timestamp

This makes failures easier to investigate, especially when caused by
dynamic content, dialogs, or temporary eBay error pages.

---

## 📊 Allure Reporting

WebdriverIO writes raw test results to:
allure-results/

Generate the HTML report:

```powershell
npx allure generate allure-results --clean -o allure-report
```

Open it locally:

```powershell
npx allure open allure-report
```

A successful report is also published through GitHub Pages:
https://pilyaria.github.io/webdriverio-ebay-e2e-tests/allure-report/

---

## 💡 Implementation Highlights

- Cross-browser execution in Chrome and Firefox
- Page Object Model for maintainable UI interactions
- Browser selection through WDIO_BROWSER
- Reusable utilities and centralized test data
- Automatic handling of the delayed eBay Shipping dialog
- Explicit waits for dynamic elements
- Multiple assertion styles
- Automatic failure screenshots
- Interactive Allure HTML reporting
- Dedicated npm scripts for isolated test execution

---

## ⚠️ Testing a Live Production Website

This project intentionally tests the public eBay website rather than a
controlled demo application.

Because the application is outside the project's control:

- UI changes may require locator updates
- eBay may occasionally return temporary error or anti-bot pages
- content can differ between sessions or browsers
- parallel sessions may behave differently from isolated executions

These conditions provide useful practice in handling real-world UI automation challenges.

---

## 👩‍💻 About the Project

This project was created as part of my QA Automation portfolio to demonstrate
practical experience with JavaScript UI automation, WebdriverIO,
cross-browser testing, Page Object Model, failure diagnostics, and test
reporting.

📊 View Live Test Results
https://pilyaria.github.io/webdriverio-ebay-e2e-tests/allure-report/