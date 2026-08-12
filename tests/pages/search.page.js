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
  }

  async searchFor(product) {
    await this.searchInput.waitForDisplayed();
    await this.searchInput.setValue(product);
    await this.searchButton.click();
  }
}

export default new SearchPage();
