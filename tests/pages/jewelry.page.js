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

    for (const link of links) {
      if (await link.isDisplayed()) {
        const text = (await link.getText()).trim();

        if (text) {
          categories.push(text);
        }
      }
    }

    console.log("Found jewelry categories:", categories);

    return categories;
  }

  open() {
    return super.open("/b/Fine-Jewelry/4196/bn_2408477");
  }
}

export default new JewelryPage();
