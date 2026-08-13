import Page from "./page.js";

class SearchPage extends Page {
  get searchInput() {
    return $("#gh-ac");
  }

  get searchButton() {
    return $("#gh-search-btn");
  }

  get categorySelect() {
    return $("#gh-cat");
  }

  get selectedCategory() {
    return this.categorySelect.$("option:checked");
  }

  async open() {
    await super.open("/");

    for (let attempt = 1; attempt <= 3; attempt++) {
      const title = await browser.getTitle();

      const searchIsDisplayed = await this.searchInput
        .isDisplayed()
        .catch(() => false);

      if (title !== "Error Page | eBay" && searchIsDisplayed) {
        console.log("eBay home page loaded");

        await this.dismissShippingDialog();

        return;
      }

      console.log(`eBay home page not loaded. Reload attempt ${attempt}`);

      await browser.refresh();
      await browser.pause(2000);
    }

    throw new Error("eBay home page failed to load after 3 attempts");
  }

  async searchFor(product) {
    await this.searchInput.waitForDisplayed({
      timeout: 10000,
    });

    await this.searchInput.setValue(product);

    await this.searchButton.waitForClickable({
      timeout: 10000,
    });

    await this.searchButton.click();
  }
}

export default new SearchPage();
