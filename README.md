# WebdriverIO E2E Test Automation

![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-22.x-339933?logo=node.js&logoColor=white)
![WebdriverIO](https://img.shields.io/badge/WebdriverIO-9-EA5906?logo=webdriverio&logoColor=white)
![Mocha](https://img.shields.io/badge/Test-Mocha-8D6748?logo=mocha&logoColor=white)
![Chai](https://img.shields.io/badge/Assertions-Chai-A30701?logo=chai&logoColor=white)
![Chrome](https://img.shields.io/badge/Browser-Chrome-4285F4?logo=googlechrome&logoColor=white)
![Firefox](https://img.shields.io/badge/Browser-Firefox-FF7139?logo=firefoxbrowser&logoColor=white)
![Allure Report](https://img.shields.io/badge/Report-Allure-FF6A00)

An end-to-end test automation project for eBay built with WebdriverIO, Mocha, and Chai. The project demonstrates cross-browser testing, the Page Object Model, reusable test utilities, multiple assertion styles, and Allure reporting.

## Test Coverage

- `chai.test.js` validates the promotional banner, its link, and navigation to the luxury jewelry page using different Chai assertion styles.
- `jewelry.test.js` validates the Fine Jewelry category list, promotional banner content, and navigation through the banner link.
- `search.test.js` validates the eBay home page, product search, search-result navigation, and selected product categories.

The base Page Object also detects and closes the Shipping dialog before a test continues.

## Tech Stack

- JavaScript (ES modules)
- Node.js
- WebdriverIO 9
- Mocha
- Chai
- WebdriverIO Expect
- Google Chrome
- Mozilla Firefox
- Allure Report
- Page Object Model

## Prerequisites

Install the following tools before running the project:

- Node.js and npm
- Google Chrome
- Mozilla Firefox
- Java, required by Allure Commandline

Verify the installed versions:

```powershell
node --version
npm --version
java -version
```

## Installation

Clone the repository, open its directory, and install the dependencies:

```powershell
npm install
```

WebdriverIO manages the required browser drivers automatically. The project also contains a local `geckodriver.exe` file.

## Running the Tests

### Run all spec files

```powershell
npm run wdio
```

This command runs every file matching `tests/specs/**/*.js` in Chrome and Firefox.

### Run one spec in both browsers

```powershell
npm run test:chai
npm run test:jewelry
npm run test:search
```

### Run one spec in one browser

Chrome:

```powershell
npm run test:chai:chrome
npm run test:jewelry:chrome
npm run test:search:chrome
```

Firefox:

```powershell
npm run test:chai:firefox
npm run test:jewelry:firefox
npm run test:search:firefox
```

Running one spec in one browser at a time is the most stable option for this project. Because eBay is an external production website, several concurrent sessions from the same environment may occasionally receive a temporary eBay Error Page.

## Failure Screenshots

The WebdriverIO `afterTest` hook automatically captures the browser state after a failed test. Screenshots are not created for successful tests.

Failure screenshots are saved in the project-level `screenshots` directory. The directory is created automatically when the first failure occurs:

```text
screenshots/
`-- firefox_should_click_on_the_button_2026-08-12T20-51-23-531Z.png
```

Each filename contains:

- the browser name;
- a filesystem-safe version of the test title;
- an ISO timestamp to prevent files from being overwritten.

The screenshot hook is configured in `wdio.conf.js` and must remain asynchronous because it creates a directory and saves an image with `await`:

```js
afterTest: async function (test, context, { passed }) {
  if (passed) {
    return;
  }

  // Create the screenshots directory and save the current browser state.
}
```

Screenshots are especially useful for diagnosing temporary eBay Error Pages, missing page content, and dialogs that intercept element clicks.

## Allure Report

WebdriverIO automatically writes raw Allure data from every test run to `allure-results`.

To create a report for a clean test cycle, remove the previous raw results first:

```powershell
Remove-Item -Recurse -Force allure-results -ErrorAction SilentlyContinue
```

Run the required tests. For example, execute every current spec sequentially in both browsers:

```powershell
npm run test:chai:chrome
npm run test:chai:firefox
npm run test:jewelry:chrome
npm run test:jewelry:firefox
npm run test:search:chrome
npm run test:search:firefox
```

Generate the HTML report:

```powershell
npx allure generate allure-results --clean -o allure-report
```

Open the generated report:

```powershell
npx allure open allure-report
```

> The `--clean` option clears the generated `allure-report` directory, but it does not clear the raw `allure-results` directory. If `allure-results` is not removed before a new test cycle, the report will include previous executions and their failures.

## Project Structure

```text
webdriverio-hands-on/
|-- tests/
|   |-- pages/          # Page Objects and element selectors
|   |-- resources/      # Expected test data
|   |-- specs/          # Active test specifications
|   `-- utilities/      # Reusable helper functions
|-- allure-results/     # Raw Allure test results
|-- allure-report/      # Generated Allure HTML report
|-- screenshots/        # Screenshots captured after failed tests
|-- package.json        # Dependencies and npm scripts
`-- wdio.conf.js        # WebdriverIO configuration
```

The `allure-results`, `allure-report`, and `old` directories are excluded from version control through `.gitignore`.

## Implementation Highlights

- Cross-browser execution in Chrome and Firefox
- Browser selection through the `WDIO_BROWSER` environment variable
- Page Object Model for reusable page interactions
- Automatic handling of the delayed eBay Shipping dialog
- HTTPS base URL configuration
- WebdriverIO and Chai assertion examples
- Automatic screenshots after failed tests
- Allure result collection and HTML report generation
- Dedicated npm scripts for isolated, stable test execution

## Known Limitations

- The project tests a public production website that is outside the project's control.
- eBay may occasionally return a temporary server or anti-bot Error Page.
- Changes to the live eBay interface can require selector or expected-data updates.
- GeckoDriver and WebDriver BiDi may print browser warnings even when the final spec status is `PASSED`.
