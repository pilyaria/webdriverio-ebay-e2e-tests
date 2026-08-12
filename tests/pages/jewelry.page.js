import Page from "./page.js";

class JewelryPage extends Page {
  get promoBanner() {
    return $(".brw-uep--promo-banner__container");
  }

  get bannerTitle() {
    return $(".brw-uep--promo-banner__content");
  }

  get shopButton() {
    return this.promoBanner.$(".brw-banner-cta__button");
  }

  get jewelryCategoryContainer() {
    return $('section[class="brw-category-nav__nested-items"]');
  }

  get jewelryCategory() {
    return $$('section[class="brw-category-nav__nested-items"] ul li');
  }

  get fashionLink() {
    return $$('.vl-flyout-nav__js-tab a[href*="Fashion"]')[0];
  }

  get jewelryLink() {
    return $('.vl-flyout-nav__sub-cat-col a[href*="Fine-Jewelry"]');
  }

  /*
  async getJewelryCategoryElements() {
    const selectors = [
      ".brw-category-nav__nested-items li",
      'section[class*="brw-category-nav"] li',
      '[class*="category-nav"] li',
    ];

    for (const selector of selectors) {
      const elements = await $$(selector);

      if (elements.length > 0) {
        console.log(`Category selector used: ${selector}`);
        return elements;
      }
    }

    return [];
  }
  */

  async showAllJewelryCategory() {
    await this.jewelryCategoryContainer.waitForDisplayed({
      timeout: 15000,
    });

    const categories = await this.jewelryCategory;

    console.log("Found categories:", categories.length);
    /*
    if (categories.length === 0) {
      throw new Error(
        "No jewelry categories were found. The page locator may have changed.",
      );
    }
*/
    const categoryTexts = [];

    for (const element of categories) {
      const text = (await element.getText()).trim();

      if (text) {
        categoryTexts.push(text);
      }
    }

    console.log("\n========== JEWELRY CATEGORIES ==========");

    categoryTexts.forEach((category, index) => {
      console.log(`${index + 1}. ${category}`);
    });

    console.log("========================================\n");

    return categoryTexts;
  }

  open() {
    return super.open("/b/Fine-Jewelry/4196/bn_2408477");
  }
}

export default new JewelryPage();
