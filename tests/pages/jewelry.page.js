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

  open() {
    return super.open("/b/Fine-Jewelry/4196/bn_2408477");
  }
}

export default new JewelryPage();
