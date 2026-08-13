import Page from "./page.js";

class JewelryPage extends Page {
  get pageTitle() {
    return $("h1");
  }

  get shopByCategoryTitle() {
    return $("h2=Shop by category");
  }

  get categoryLinks() {
    return $$(".brw-category-nav__link");
  }

  get tiffanyLink() {
    return $("a=Tiffany & Co.");
  }

  get cartIcon() {
    return $('a[href*="/cart"]');
  }

  async getVisibleCategoryTexts() {
    const links = await this.categoryLinks;
    const categories = [];

    const expectedCategories = [
      "Jewelry & Watches",
      "Fine Jewelry",
      "Anklets",
      "Bracelets & Charms",
      "Brooches & Pins",
      "Earrings",
      "Hair & Head Jewelry",
      "Jewelry Sets",
      "Necklaces & Pendants",
      "Rings",
      "Toe Rings",
    ];

    for (const link of links) {
      const text = (await link.getText()).trim();

      if (expectedCategories.includes(text) && !categories.includes(text)) {
        categories.push(text);
      }
    }

    return categories;
  }

  async open() {
    await super.open("/b/Fine-Jewelry/4196/bn_2408477");

    for (let attempt = 1; attempt <= 3; attempt++) {
      const titleIsDisplayed = await this.pageTitle
        .isDisplayed()
        .catch(() => false);

      const titleText = titleIsDisplayed ? await this.pageTitle.getText() : "";

      if (titleText === "Fine Jewelry") {
        console.log("Fine Jewelry page loaded");

        await this.dismissShippingDialog();

        return;
      }

      console.log(`Fine Jewelry page not loaded. Reload attempt ${attempt}`);

      await browser.refresh();
      await browser.pause(2000);
    }

    throw new Error("Fine Jewelry page failed to load after 3 attempts");
  }
}

export default new JewelryPage();
